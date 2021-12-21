/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateProjectInput = {
  id?: string | null;
  name: string;
};

export type ModelProjectConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Project = {
  __typename: "Project";
  id: string;
  name: string;
  series?: ModelProjectSeriesConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelProjectSeriesConnection = {
  __typename: "ModelProjectSeriesConnection";
  items?: Array<ProjectSeries | null> | null;
  nextToken?: string | null;
};

export type ProjectSeries = {
  __typename: "ProjectSeries";
  id: string;
  title: string;
  projectID: string;
  project?: Project | null;
  events?: ModelProjectSeriesEventConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelProjectSeriesEventConnection = {
  __typename: "ModelProjectSeriesEventConnection";
  items?: Array<ProjectSeriesEvent | null> | null;
  nextToken?: string | null;
};

export type ProjectSeriesEvent = {
  __typename: "ProjectSeriesEvent";
  id: string;
  projectSeriesID: string;
  projectSeries?: ProjectSeries | null;
  type: ProjectSeriesEventType;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export enum ProjectSeriesEventType {
  MINT = "MINT",
  AMA = "AMA",
  UPDATE = "UPDATE"
}

export type UpdateProjectInput = {
  id: string;
  name?: string | null;
};

export type DeleteProjectInput = {
  id: string;
};

export type CreateProjectSeriesInput = {
  id?: string | null;
  title: string;
  projectID: string;
};

export type ModelProjectSeriesConditionInput = {
  title?: ModelStringInput | null;
  projectID?: ModelIDInput | null;
  and?: Array<ModelProjectSeriesConditionInput | null> | null;
  or?: Array<ModelProjectSeriesConditionInput | null> | null;
  not?: ModelProjectSeriesConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateProjectSeriesInput = {
  id: string;
  title?: string | null;
  projectID?: string | null;
};

export type DeleteProjectSeriesInput = {
  id: string;
};

export type CreateProjectSeriesEventInput = {
  id?: string | null;
  projectSeriesID: string;
  type: ProjectSeriesEventType;
  description: string;
  date: string;
};

export type ModelProjectSeriesEventConditionInput = {
  projectSeriesID?: ModelIDInput | null;
  type?: ModelProjectSeriesEventTypeInput | null;
  description?: ModelStringInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelProjectSeriesEventConditionInput | null> | null;
  or?: Array<ModelProjectSeriesEventConditionInput | null> | null;
  not?: ModelProjectSeriesEventConditionInput | null;
};

export type ModelProjectSeriesEventTypeInput = {
  eq?: ProjectSeriesEventType | null;
  ne?: ProjectSeriesEventType | null;
};

export type UpdateProjectSeriesEventInput = {
  id: string;
  projectSeriesID?: string | null;
  type?: ProjectSeriesEventType | null;
  description?: string | null;
  date?: string | null;
};

export type DeleteProjectSeriesEventInput = {
  id: string;
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection";
  items?: Array<Project | null> | null;
  nextToken?: string | null;
};

export type ModelProjectSeriesFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  projectID?: ModelIDInput | null;
  and?: Array<ModelProjectSeriesFilterInput | null> | null;
  or?: Array<ModelProjectSeriesFilterInput | null> | null;
  not?: ModelProjectSeriesFilterInput | null;
};

export type ModelProjectSeriesEventFilterInput = {
  id?: ModelIDInput | null;
  projectSeriesID?: ModelIDInput | null;
  type?: ModelProjectSeriesEventTypeInput | null;
  description?: ModelStringInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelProjectSeriesEventFilterInput | null> | null;
  or?: Array<ModelProjectSeriesEventFilterInput | null> | null;
  not?: ModelProjectSeriesEventFilterInput | null;
};

export type CreateProjectMutation = {
  __typename: "Project";
  id: string;
  name: string;
  series?: {
    __typename: "ModelProjectSeriesConnection";
    items?: Array<{
      __typename: "ProjectSeries";
      id: string;
      title: string;
      projectID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectMutation = {
  __typename: "Project";
  id: string;
  name: string;
  series?: {
    __typename: "ModelProjectSeriesConnection";
    items?: Array<{
      __typename: "ProjectSeries";
      id: string;
      title: string;
      projectID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectMutation = {
  __typename: "Project";
  id: string;
  name: string;
  series?: {
    __typename: "ModelProjectSeriesConnection";
    items?: Array<{
      __typename: "ProjectSeries";
      id: string;
      title: string;
      projectID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectSeriesMutation = {
  __typename: "ProjectSeries";
  id: string;
  title: string;
  projectID: string;
  project?: {
    __typename: "Project";
    id: string;
    name: string;
    series?: {
      __typename: "ModelProjectSeriesConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  events?: {
    __typename: "ModelProjectSeriesEventConnection";
    items?: Array<{
      __typename: "ProjectSeriesEvent";
      id: string;
      projectSeriesID: string;
      type: ProjectSeriesEventType;
      description: string;
      date: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectSeriesMutation = {
  __typename: "ProjectSeries";
  id: string;
  title: string;
  projectID: string;
  project?: {
    __typename: "Project";
    id: string;
    name: string;
    series?: {
      __typename: "ModelProjectSeriesConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  events?: {
    __typename: "ModelProjectSeriesEventConnection";
    items?: Array<{
      __typename: "ProjectSeriesEvent";
      id: string;
      projectSeriesID: string;
      type: ProjectSeriesEventType;
      description: string;
      date: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectSeriesMutation = {
  __typename: "ProjectSeries";
  id: string;
  title: string;
  projectID: string;
  project?: {
    __typename: "Project";
    id: string;
    name: string;
    series?: {
      __typename: "ModelProjectSeriesConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  events?: {
    __typename: "ModelProjectSeriesEventConnection";
    items?: Array<{
      __typename: "ProjectSeriesEvent";
      id: string;
      projectSeriesID: string;
      type: ProjectSeriesEventType;
      description: string;
      date: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProjectSeriesEventMutation = {
  __typename: "ProjectSeriesEvent";
  id: string;
  projectSeriesID: string;
  projectSeries?: {
    __typename: "ProjectSeries";
    id: string;
    title: string;
    projectID: string;
    project?: {
      __typename: "Project";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    events?: {
      __typename: "ModelProjectSeriesEventConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  type: ProjectSeriesEventType;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProjectSeriesEventMutation = {
  __typename: "ProjectSeriesEvent";
  id: string;
  projectSeriesID: string;
  projectSeries?: {
    __typename: "ProjectSeries";
    id: string;
    title: string;
    projectID: string;
    project?: {
      __typename: "Project";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    events?: {
      __typename: "ModelProjectSeriesEventConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  type: ProjectSeriesEventType;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProjectSeriesEventMutation = {
  __typename: "ProjectSeriesEvent";
  id: string;
  projectSeriesID: string;
  projectSeries?: {
    __typename: "ProjectSeries";
    id: string;
    title: string;
    projectID: string;
    project?: {
      __typename: "Project";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    events?: {
      __typename: "ModelProjectSeriesEventConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  type: ProjectSeriesEventType;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type GetProjectQuery = {
  __typename: "Project";
  id: string;
  name: string;
  series?: {
    __typename: "ModelProjectSeriesConnection";
    items?: Array<{
      __typename: "ProjectSeries";
      id: string;
      title: string;
      projectID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectsQuery = {
  __typename: "ModelProjectConnection";
  items?: Array<{
    __typename: "Project";
    id: string;
    name: string;
    series?: {
      __typename: "ModelProjectSeriesConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetProjectSeriesQuery = {
  __typename: "ProjectSeries";
  id: string;
  title: string;
  projectID: string;
  project?: {
    __typename: "Project";
    id: string;
    name: string;
    series?: {
      __typename: "ModelProjectSeriesConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  events?: {
    __typename: "ModelProjectSeriesEventConnection";
    items?: Array<{
      __typename: "ProjectSeriesEvent";
      id: string;
      projectSeriesID: string;
      type: ProjectSeriesEventType;
      description: string;
      date: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectSeriesQuery = {
  __typename: "ModelProjectSeriesConnection";
  items?: Array<{
    __typename: "ProjectSeries";
    id: string;
    title: string;
    projectID: string;
    project?: {
      __typename: "Project";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    events?: {
      __typename: "ModelProjectSeriesEventConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetProjectSeriesEventQuery = {
  __typename: "ProjectSeriesEvent";
  id: string;
  projectSeriesID: string;
  projectSeries?: {
    __typename: "ProjectSeries";
    id: string;
    title: string;
    projectID: string;
    project?: {
      __typename: "Project";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    events?: {
      __typename: "ModelProjectSeriesEventConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  type: ProjectSeriesEventType;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type ListProjectSeriesEventsQuery = {
  __typename: "ModelProjectSeriesEventConnection";
  items?: Array<{
    __typename: "ProjectSeriesEvent";
    id: string;
    projectSeriesID: string;
    projectSeries?: {
      __typename: "ProjectSeries";
      id: string;
      title: string;
      projectID: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    type: ProjectSeriesEventType;
    description: string;
    date: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateProjectSubscription = {
  __typename: "Project";
  id: string;
  name: string;
  series?: {
    __typename: "ModelProjectSeriesConnection";
    items?: Array<{
      __typename: "ProjectSeries";
      id: string;
      title: string;
      projectID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectSubscription = {
  __typename: "Project";
  id: string;
  name: string;
  series?: {
    __typename: "ModelProjectSeriesConnection";
    items?: Array<{
      __typename: "ProjectSeries";
      id: string;
      title: string;
      projectID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectSubscription = {
  __typename: "Project";
  id: string;
  name: string;
  series?: {
    __typename: "ModelProjectSeriesConnection";
    items?: Array<{
      __typename: "ProjectSeries";
      id: string;
      title: string;
      projectID: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectSeriesSubscription = {
  __typename: "ProjectSeries";
  id: string;
  title: string;
  projectID: string;
  project?: {
    __typename: "Project";
    id: string;
    name: string;
    series?: {
      __typename: "ModelProjectSeriesConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  events?: {
    __typename: "ModelProjectSeriesEventConnection";
    items?: Array<{
      __typename: "ProjectSeriesEvent";
      id: string;
      projectSeriesID: string;
      type: ProjectSeriesEventType;
      description: string;
      date: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectSeriesSubscription = {
  __typename: "ProjectSeries";
  id: string;
  title: string;
  projectID: string;
  project?: {
    __typename: "Project";
    id: string;
    name: string;
    series?: {
      __typename: "ModelProjectSeriesConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  events?: {
    __typename: "ModelProjectSeriesEventConnection";
    items?: Array<{
      __typename: "ProjectSeriesEvent";
      id: string;
      projectSeriesID: string;
      type: ProjectSeriesEventType;
      description: string;
      date: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectSeriesSubscription = {
  __typename: "ProjectSeries";
  id: string;
  title: string;
  projectID: string;
  project?: {
    __typename: "Project";
    id: string;
    name: string;
    series?: {
      __typename: "ModelProjectSeriesConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  events?: {
    __typename: "ModelProjectSeriesEventConnection";
    items?: Array<{
      __typename: "ProjectSeriesEvent";
      id: string;
      projectSeriesID: string;
      type: ProjectSeriesEventType;
      description: string;
      date: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProjectSeriesEventSubscription = {
  __typename: "ProjectSeriesEvent";
  id: string;
  projectSeriesID: string;
  projectSeries?: {
    __typename: "ProjectSeries";
    id: string;
    title: string;
    projectID: string;
    project?: {
      __typename: "Project";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    events?: {
      __typename: "ModelProjectSeriesEventConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  type: ProjectSeriesEventType;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProjectSeriesEventSubscription = {
  __typename: "ProjectSeriesEvent";
  id: string;
  projectSeriesID: string;
  projectSeries?: {
    __typename: "ProjectSeries";
    id: string;
    title: string;
    projectID: string;
    project?: {
      __typename: "Project";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    events?: {
      __typename: "ModelProjectSeriesEventConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  type: ProjectSeriesEventType;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProjectSeriesEventSubscription = {
  __typename: "ProjectSeriesEvent";
  id: string;
  projectSeriesID: string;
  projectSeries?: {
    __typename: "ProjectSeries";
    id: string;
    title: string;
    projectID: string;
    project?: {
      __typename: "Project";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    events?: {
      __typename: "ModelProjectSeriesEventConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  type: ProjectSeriesEventType;
  description: string;
  date: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateProject(
    input: CreateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<CreateProjectMutation> {
    const statement = `mutation CreateProject($input: CreateProjectInput!, $condition: ModelProjectConditionInput) {
        createProject(input: $input, condition: $condition) {
          __typename
          id
          name
          series {
            __typename
            items {
              __typename
              id
              title
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectMutation>response.data.createProject;
  }
  async UpdateProject(
    input: UpdateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<UpdateProjectMutation> {
    const statement = `mutation UpdateProject($input: UpdateProjectInput!, $condition: ModelProjectConditionInput) {
        updateProject(input: $input, condition: $condition) {
          __typename
          id
          name
          series {
            __typename
            items {
              __typename
              id
              title
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectMutation>response.data.updateProject;
  }
  async DeleteProject(
    input: DeleteProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<DeleteProjectMutation> {
    const statement = `mutation DeleteProject($input: DeleteProjectInput!, $condition: ModelProjectConditionInput) {
        deleteProject(input: $input, condition: $condition) {
          __typename
          id
          name
          series {
            __typename
            items {
              __typename
              id
              title
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectMutation>response.data.deleteProject;
  }
  async CreateProjectSeries(
    input: CreateProjectSeriesInput,
    condition?: ModelProjectSeriesConditionInput
  ): Promise<CreateProjectSeriesMutation> {
    const statement = `mutation CreateProjectSeries($input: CreateProjectSeriesInput!, $condition: ModelProjectSeriesConditionInput) {
        createProjectSeries(input: $input, condition: $condition) {
          __typename
          id
          title
          projectID
          project {
            __typename
            id
            name
            series {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          events {
            __typename
            items {
              __typename
              id
              projectSeriesID
              type
              description
              date
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectSeriesMutation>response.data.createProjectSeries;
  }
  async UpdateProjectSeries(
    input: UpdateProjectSeriesInput,
    condition?: ModelProjectSeriesConditionInput
  ): Promise<UpdateProjectSeriesMutation> {
    const statement = `mutation UpdateProjectSeries($input: UpdateProjectSeriesInput!, $condition: ModelProjectSeriesConditionInput) {
        updateProjectSeries(input: $input, condition: $condition) {
          __typename
          id
          title
          projectID
          project {
            __typename
            id
            name
            series {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          events {
            __typename
            items {
              __typename
              id
              projectSeriesID
              type
              description
              date
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectSeriesMutation>response.data.updateProjectSeries;
  }
  async DeleteProjectSeries(
    input: DeleteProjectSeriesInput,
    condition?: ModelProjectSeriesConditionInput
  ): Promise<DeleteProjectSeriesMutation> {
    const statement = `mutation DeleteProjectSeries($input: DeleteProjectSeriesInput!, $condition: ModelProjectSeriesConditionInput) {
        deleteProjectSeries(input: $input, condition: $condition) {
          __typename
          id
          title
          projectID
          project {
            __typename
            id
            name
            series {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          events {
            __typename
            items {
              __typename
              id
              projectSeriesID
              type
              description
              date
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectSeriesMutation>response.data.deleteProjectSeries;
  }
  async CreateProjectSeriesEvent(
    input: CreateProjectSeriesEventInput,
    condition?: ModelProjectSeriesEventConditionInput
  ): Promise<CreateProjectSeriesEventMutation> {
    const statement = `mutation CreateProjectSeriesEvent($input: CreateProjectSeriesEventInput!, $condition: ModelProjectSeriesEventConditionInput) {
        createProjectSeriesEvent(input: $input, condition: $condition) {
          __typename
          id
          projectSeriesID
          projectSeries {
            __typename
            id
            title
            projectID
            project {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          type
          description
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectSeriesEventMutation>(
      response.data.createProjectSeriesEvent
    );
  }
  async UpdateProjectSeriesEvent(
    input: UpdateProjectSeriesEventInput,
    condition?: ModelProjectSeriesEventConditionInput
  ): Promise<UpdateProjectSeriesEventMutation> {
    const statement = `mutation UpdateProjectSeriesEvent($input: UpdateProjectSeriesEventInput!, $condition: ModelProjectSeriesEventConditionInput) {
        updateProjectSeriesEvent(input: $input, condition: $condition) {
          __typename
          id
          projectSeriesID
          projectSeries {
            __typename
            id
            title
            projectID
            project {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          type
          description
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectSeriesEventMutation>(
      response.data.updateProjectSeriesEvent
    );
  }
  async DeleteProjectSeriesEvent(
    input: DeleteProjectSeriesEventInput,
    condition?: ModelProjectSeriesEventConditionInput
  ): Promise<DeleteProjectSeriesEventMutation> {
    const statement = `mutation DeleteProjectSeriesEvent($input: DeleteProjectSeriesEventInput!, $condition: ModelProjectSeriesEventConditionInput) {
        deleteProjectSeriesEvent(input: $input, condition: $condition) {
          __typename
          id
          projectSeriesID
          projectSeries {
            __typename
            id
            title
            projectID
            project {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          type
          description
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectSeriesEventMutation>(
      response.data.deleteProjectSeriesEvent
    );
  }
  async GetProject(id: string): Promise<GetProjectQuery> {
    const statement = `query GetProject($id: ID!) {
        getProject(id: $id) {
          __typename
          id
          name
          series {
            __typename
            items {
              __typename
              id
              title
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectQuery>response.data.getProject;
  }
  async ListProjects(
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectsQuery> {
    const statement = `query ListProjects($filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            series {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectsQuery>response.data.listProjects;
  }
  async GetProjectSeries(id: string): Promise<GetProjectSeriesQuery> {
    const statement = `query GetProjectSeries($id: ID!) {
        getProjectSeries(id: $id) {
          __typename
          id
          title
          projectID
          project {
            __typename
            id
            name
            series {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          events {
            __typename
            items {
              __typename
              id
              projectSeriesID
              type
              description
              date
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectSeriesQuery>response.data.getProjectSeries;
  }
  async ListProjectSeries(
    filter?: ModelProjectSeriesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectSeriesQuery> {
    const statement = `query ListProjectSeries($filter: ModelProjectSeriesFilterInput, $limit: Int, $nextToken: String) {
        listProjectSeries(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            projectID
            project {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectSeriesQuery>response.data.listProjectSeries;
  }
  async GetProjectSeriesEvent(id: string): Promise<GetProjectSeriesEventQuery> {
    const statement = `query GetProjectSeriesEvent($id: ID!) {
        getProjectSeriesEvent(id: $id) {
          __typename
          id
          projectSeriesID
          projectSeries {
            __typename
            id
            title
            projectID
            project {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          type
          description
          date
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectSeriesEventQuery>response.data.getProjectSeriesEvent;
  }
  async ListProjectSeriesEvents(
    filter?: ModelProjectSeriesEventFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectSeriesEventsQuery> {
    const statement = `query ListProjectSeriesEvents($filter: ModelProjectSeriesEventFilterInput, $limit: Int, $nextToken: String) {
        listProjectSeriesEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            projectSeriesID
            projectSeries {
              __typename
              id
              title
              projectID
              createdAt
              updatedAt
            }
            type
            description
            date
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectSeriesEventsQuery>response.data.listProjectSeriesEvents;
  }
  OnCreateProjectListener: Observable<
    SubscriptionResponse<OnCreateProjectSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProject {
        onCreateProject {
          __typename
          id
          name
          series {
            __typename
            items {
              __typename
              id
              title
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProjectSubscription>>;

  OnUpdateProjectListener: Observable<
    SubscriptionResponse<OnUpdateProjectSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProject {
        onUpdateProject {
          __typename
          id
          name
          series {
            __typename
            items {
              __typename
              id
              title
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProjectSubscription>>;

  OnDeleteProjectListener: Observable<
    SubscriptionResponse<OnDeleteProjectSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProject {
        onDeleteProject {
          __typename
          id
          name
          series {
            __typename
            items {
              __typename
              id
              title
              projectID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProjectSubscription>>;

  OnCreateProjectSeriesListener: Observable<
    SubscriptionResponse<OnCreateProjectSeriesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProjectSeries {
        onCreateProjectSeries {
          __typename
          id
          title
          projectID
          project {
            __typename
            id
            name
            series {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          events {
            __typename
            items {
              __typename
              id
              projectSeriesID
              type
              description
              date
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProjectSeriesSubscription>>;

  OnUpdateProjectSeriesListener: Observable<
    SubscriptionResponse<OnUpdateProjectSeriesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProjectSeries {
        onUpdateProjectSeries {
          __typename
          id
          title
          projectID
          project {
            __typename
            id
            name
            series {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          events {
            __typename
            items {
              __typename
              id
              projectSeriesID
              type
              description
              date
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProjectSeriesSubscription>>;

  OnDeleteProjectSeriesListener: Observable<
    SubscriptionResponse<OnDeleteProjectSeriesSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProjectSeries {
        onDeleteProjectSeries {
          __typename
          id
          title
          projectID
          project {
            __typename
            id
            name
            series {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          events {
            __typename
            items {
              __typename
              id
              projectSeriesID
              type
              description
              date
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProjectSeriesSubscription>>;

  OnCreateProjectSeriesEventListener: Observable<
    SubscriptionResponse<OnCreateProjectSeriesEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProjectSeriesEvent {
        onCreateProjectSeriesEvent {
          __typename
          id
          projectSeriesID
          projectSeries {
            __typename
            id
            title
            projectID
            project {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          type
          description
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateProjectSeriesEventSubscription>>;

  OnUpdateProjectSeriesEventListener: Observable<
    SubscriptionResponse<OnUpdateProjectSeriesEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProjectSeriesEvent {
        onUpdateProjectSeriesEvent {
          __typename
          id
          projectSeriesID
          projectSeries {
            __typename
            id
            title
            projectID
            project {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          type
          description
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateProjectSeriesEventSubscription>>;

  OnDeleteProjectSeriesEventListener: Observable<
    SubscriptionResponse<OnDeleteProjectSeriesEventSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProjectSeriesEvent {
        onDeleteProjectSeriesEvent {
          __typename
          id
          projectSeriesID
          projectSeries {
            __typename
            id
            title
            projectID
            project {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            events {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          type
          description
          date
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteProjectSeriesEventSubscription>>;
}
