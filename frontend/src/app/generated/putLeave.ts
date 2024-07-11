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

export interface PutLeave { 
    state?: PutLeave.StateEnum;
    comment?: string;
}
export namespace PutLeave {
    export type StateEnum = 'Approved' | 'Refused' | 'Canceled' | 'Waiting' | 'InProgress';
    export const StateEnum = {
        Approved: 'Approved' as StateEnum,
        Refused: 'Refused' as StateEnum,
        Canceled: 'Canceled' as StateEnum,
        Waiting: 'Waiting' as StateEnum,
        InProgress: 'InProgress' as StateEnum
    };
}