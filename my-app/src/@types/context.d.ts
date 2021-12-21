declare namespace Context {
  interface UserState {
    fName: string;
    lName: string;
    age: number;
  }
  interface UserAction {
    type: string;
    payload: UserState;
  }
}
