/**********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

// Import React packages
import React from 'react';
import { IconType } from 'react-icons/lib/cjs';

/**
 * Page route interface
 * @interface IRoute
 */
export interface IRoute {
  path: string;
  name: string;
  component: typeof React.Component;
  icon?: IconType;
  visible: boolean;
}

/**
 * General GraphQL query data interface
 * @interface IGeneralQueryData
 */
export interface IGeneralQueryData {
  parentId?: string;
  id?: string;
  name: string;
  description: string;
  version?: number;
  visible?: boolean;
  __typename?: string;
}

/**
 * Event interface
 * @interface IEvent
 */
export interface IEvent extends IGeneralQueryData {
  eventProcessId?: string;
  type?: string;
  priority: string;
  sms?: string;
  email?: string;
  topicArn?: string;
  rootCauses?: string[];
  isActive?: boolean;
  isClosedRejected?: boolean;
  isOpen?: boolean;
  isAcknowledged?: boolean;
  activeIssueId?: string;
  updateIssueVersion?: number;
  createIssueTime?: string;
}

/**
 * Event update interface
 * @interface IEventUpdate
 */
export interface IEventUpdate {
  id: string;
  sms?: string;
  email?: string;
  topicArn?: string;
  rootCauses: string[];
}

/**
 * Issue interface
 * @interface IIssue
 */
export interface IIssue {
  id: string;
  eventId: string;
  eventDescription: string;
  type: string;
  priority: string;
  siteName: string;
  processName: string;
  areaName: string;
  stationName: string;
  deviceName: string;
  created: string;
  acknowledged: string;
  closed: string;
  resolutionTime: number;
  acknowledgedTime: number;
  status: string;
  version: number;
  visible?: boolean;
  expectedVersion?: number;
  rootCause?: string;
}

/**
 * Top issue interface
 * @interface ITopIssue
 */
export interface ITopIssue {
  processName: string;
  eventDescription: string;
  count: number;
  totalResolutionSeconds: number;
  averageResolutionTime?: number;
}

/**
 * Selected data interface
 * @interface ISelectedData
 */
export interface ISelectedData {
  id?: string;
  name: string;
  parentId?: string;
}

/**
 * User interface
 * @interface IUser
 */
export interface IUser {
  username: string;
  groups: string[];
  status: string;
  userId?: string;
  visible?: boolean;
}

/**
 * CSV User interface
 * @interface ICSVUser
 */
export interface ICSVUser {
  username: string;
  groups: string;
}

/**
 * File upload result interface
 * @interface IUploadResult
 */
export interface IUploadResult {
  name: string;
  result: string;
}

/**
 * Permission interface
 * @interface IPermission
 */
export interface IPermission {
  userId: string;
  username: string;
  sites: ISelectedData[];
  areas: ISelectedData[];
  processes: ISelectedData[];
  stations: ISelectedData[];
  devices: ISelectedData[];
  version: number;
  visible?: boolean;
}

/**
 * Root cause interface
 * @interface IRootCause
 */
export interface IRootCause {
  id: string;
  rootCause: string;
  visible?: boolean;
  deleted?: boolean;
}