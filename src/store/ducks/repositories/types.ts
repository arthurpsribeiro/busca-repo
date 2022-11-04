// Action types
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
}

// Data Types
export interface Owner {
  avatar_url: string;
  login: string;
}
export interface Repository {
  id: number;
  name: string;
  owner: Owner;
  stargazers_count: number;
}

// State type
export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
