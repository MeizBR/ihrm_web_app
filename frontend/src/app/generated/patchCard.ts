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

export interface PatchCard { 
    status?: PatchCard.StatusEnum;
    projectId?: number;
    project?: string;
    cardType?: PatchCard.CardTypeEnum;
    title?: string;
    assignee?: string;
    priority?: PatchCard.PriorityEnum;
    storyPoints?: number;
    tags?: string;
    summary?: string;
}
export namespace PatchCard {
    export type StatusEnum = 'Open' | 'InProgress' | 'Review' | 'Close';
    export const StatusEnum = {
        Open: 'Open' as StatusEnum,
        InProgress: 'InProgress' as StatusEnum,
        Review: 'Review' as StatusEnum,
        Close: 'Close' as StatusEnum
    };
    export type CardTypeEnum = 'Story' | 'Epic' | 'Bug' | 'Improvement' | 'Others';
    export const CardTypeEnum = {
        Story: 'Story' as CardTypeEnum,
        Epic: 'Epic' as CardTypeEnum,
        Bug: 'Bug' as CardTypeEnum,
        Improvement: 'Improvement' as CardTypeEnum,
        Others: 'Others' as CardTypeEnum
    };
    export type PriorityEnum = 'Low' | 'Medium' | 'High' | 'Critical';
    export const PriorityEnum = {
        Low: 'Low' as PriorityEnum,
        Medium: 'Medium' as PriorityEnum,
        High: 'High' as PriorityEnum,
        Critical: 'Critical' as PriorityEnum
    };
}