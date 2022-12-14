/* Rules

// this username is between 4 and 25 characters.
// it must start with a letter
// it can only contain letters,numbers and underscore character
// it cant end with a underscore character

// u__hello_world123
 
*/

export const userValidation = (str) => {
  if (
    str.length >= 4 &&
    str.length <= 25 &&
    /[a-zA-z]/.test(str.charAt(0)) &&
    /^\w+$/.test(str) &&
    /[a-zA-Z0-9]/.test(str.slice(-1))
  ) {
    return true;
  } else {
    return false;
  }
};
