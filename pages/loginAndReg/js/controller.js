//Username regex check.

export const uNameCheck = (text) => {
  let condition1 = /(?=.*[a-zA-Z0-9])/; //atleast 8 characters
  let condition2 = /(?=.*[\s])/; //for the space
  let condition3 = /.{8,}/;
  let error = [];

  // uNameError.style.color = "red";

  if (text == "" || text == null) {
    // uNameError.style.display = "block";
    error.push(false, "Username should not be empty");
  } else if (!text.match(condition1)) {
    // uNameError.style.display = "block";
    error.push(false, "Username should not contain special characters");
  } else if (text.match(condition2)) {
    // uNameError.style.display = "block";
    error.push(false, "Username should not have space");
  } else if (!text.match(condition3)) {
    error.push(false, "Username should be 8 characters long");
  } else {
    error.push(true, "Correct!");
  }
  return error;
  // if(isNaN(text)){
  //     uNameError.style.display = "block";
  //     uNameError.innerText = "Username should not only contain numbers";
  //
};

//Dynamic Password check with regex
export const pswdCheck = (text) => {
  let condition1 = /(?=.*\d)/; //should contain atleast 1 digit
  let condition2 = /(?=.*[a-z])/; //should contain atleast 1 lowercase
  let condition3 = /(?=.*[A-Z])/; //should contain atleast 1 uppercase
  let condition4 = /(?=.*[a-zA-Z0-9])/; //should contain atleast 8 characters
  let condition5 = /.{8,}/;
  let message = [];

  //passwordError.style.color = "red";

  if (!text.match(condition1)) {
    message.push(false, "Should contain atleast 1 digit");
  } else if (!text.match(condition2)) {
    message.push(false, "Password should contain atleast 1 lowercase");
  } else if (!text.match(condition3)) {
    message.push(false, "Password should contain atleast 1 uppercase");
  } else if (!text.match(condition4)) {
    message.push(false, "Password should not contain special chars");
  } else if (!text.match(condition5)) {
    message.push(false, "Password should contain atleast 8 characters");
  } else {
    message.push(true, "Correct!");
  }
  return message;
};

//REGEX email checker
export const emailCheck = (text) => {
  let condition =
    /(?=.*(^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10}).([a-z]{2,8})?$))/;
  let message = [];

  if (!text.match(condition)) {
    message.push(false, "Invalid Email. Plese provide a valid email");
  } else {
    message.push(true, "Correct!");
  }

  //emailError.style.display = "none";
  return message;
};

//confirm password checker
export const confirmPasswordCheck = (text, initPasswrd) => {
  //confPasswordError.style.color = "red";
  let message = [];
  if (text !== initPasswrd) {
    message.push(false, "Retype password");
  } else {
    message.push(true, "Correct!");
  }

  return message;
};
