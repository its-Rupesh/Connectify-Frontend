import { isValidUsername } from "6pp";

export const usernameValidator = (username) => {
  if (!isValidUsername(username))
    return { isvalid: false, errorMessage: "username is Invalid" };
};
