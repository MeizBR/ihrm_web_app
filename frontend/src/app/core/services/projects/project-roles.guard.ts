import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { combineLatest, Observable, of } from 'rxjs';
import { concatMap, mergeMap, skipWhile } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { selectUsersList } from '../../reducers/user';
import { selectProjectsList } from '../../reducers/project';
import { usersActions } from '../../reducers/user/user.actions';
import { selectOwnProjectsList } from '../../reducers/project/index';
import { projectActions } from '../../reducers/project/project.actions';
import { customersActions } from '../../reducers/customer/customer.actions';
import { selectIsRestoreCompleted, selectUserSession } from '../../reducers/auth';

import { NotificationService } from '../notification.service';

import { RoleModel } from '../../../shared/enum/role-model.enum';

@Injectable({
  providedIn: 'root',
})
// NOTE: This guard is not used, to be verified an deleted
export class ProjectRolesGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router, private notificationService: NotificationService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const projectIdFromPath: number = +route.url[route.url.length - 1].path;

    return combineLatest([this.store.pipe(select(selectUserSession)), this.store.pipe(select(selectIsRestoreCompleted))]).pipe(
      skipWhile(([userSession, completed]) => !(userSession && completed)),
      concatMap(([userSession, completed]) => {
        if (completed && userSession) {
          this.store.dispatch(usersActions.loadUsersAction());
          this.store.dispatch(projectActions.loadProjectAction());
          this.store.dispatch(projectActions.loadOwnProjectsAction());
          this.store.dispatch(customersActions.loadCustomersAction());

          return this.store.pipe(select(selectProjectsList)).pipe(
            skipWhile(projectsList => !projectsList || projectsList.length === 0),
            mergeMap(projectsList => {
              const projectExists = projectsList.find(p => p.id === projectIdFromPath);

              return this.store.pipe(select(selectUsersList)).pipe(
                skipWhile(users => !users),
                mergeMap(_ => {
                  if (userSession.globalRoles.includes(RoleModel.Administrator)) {
                    if (projectExists) {
                      this.store.dispatch(projectActions.loadProjectRolesAction({ projectId: projectIdFromPath }));

                      return of(true);
                    } else {
                      this.notificationService.warn('Project Not Found!');
                      this.router.navigate(['home', 'projects']);

                      return of(false);
                    }
                  } else {
                    return this.store.pipe(select(selectOwnProjectsList)).pipe(
                      skipWhile(ownProjects => !ownProjects || ownProjects.length === 0),
                      mergeMap(ownProjects => {
                        const ownProjectExists = ownProjects.find(p => p.id === projectIdFromPath);
                        if (ownProjectExists) {
                          this.store.dispatch(projectActions.loadProjectRolesAction({ projectId: projectIdFromPath }));

                          return of(true);
                        } else {
                          this.notificationService.warn('Project Not Found Or Missing roles !');
                          this.router.navigate(['home', 'projects']);

                          return of(false);
                        }
                      }),
                    );
                  }
                }),
              );
            }),
          );
        } else {
          return of(false);
        }
      }),
    );
  }
}