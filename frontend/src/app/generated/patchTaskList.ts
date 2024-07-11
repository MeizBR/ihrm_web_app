/**
 * RESTful API of iHRM
 * The RESTful API of the main core of the iHRM application. Add-ons will have their own API documentation.
 *
 * OpenAPI spec version: 2020.06.14
 * Contact: ihrm@imbus.tn
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface PatchTaskList { 
    name?: string;
    key?: PatchTaskList.KeyEnum;
    index?: number;
}
export namespace PatchTaskList {
    export type KeyEnum = 'Open' | 'InProgress' | 'Review' | 'Close' | 'Others';
    export const KeyEnum = {
        Open: 'Open' as KeyEnum,
        InProgress: 'InProgress' as KeyEnum,
        Review: 'Review' as KeyEnum,
        Close: 'Close' as KeyEnum,
        Others: 'Others' as KeyEnum
    };
}