export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR,
}

export interface AppDataState<T>{
  dataState?: DataStateEnum,
  data?: T,
  errorMessage?: String,
}

export enum UserActionTypes{
  GET_ALL_USERS="[User] Get All users",
  NEW_USER="[User] Create a New user",
  ADD_USER="[User] Add a user",
  GET_ALL_ID_ACCOUNT="[Account] Get All Id account",
  SEARCH_BY_EMAIL_USER="[User] Search user by email",
  SEARCH_BY_USERNAME="[User] Search user by name",
  SEARCH_BY_PHONE_USER="[User] Search user by phone",
  ACTIVE_USER="[User] Active user",
  EDIT_USER="[User] Edit user",
 UPDATE_USER="[User] Update edit  user ",
  DELETE_USER="[User] Delete user",

}

export interface userActionEvent{
  type:UserActionTypes;
  payload?:any;
}

