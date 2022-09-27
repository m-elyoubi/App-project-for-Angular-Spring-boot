
export enum AccountActionTypes{

  NEW_ACCOUNT="[Account] Create a New account",
  ACTIVE_ACCOUNT="[Account] Active account",
  EDIT_ACCOUNT="[Account] Edit account",
  UPDATE_EDIT_ACCOUNT="[Account] Update Edit account",
  DELETE_ACCOUNT="[Account] Delete account",
  SEARCH_ACCOUNT="[Account] Search account",
  ADD_DEVICE_ACCOUNT="[Account] Add Device account",
  SORT_ACCOUNT="[Account] Sort account",
}
export interface accountActionEvent{
  type:AccountActionTypes;
  payload?:any;
}
