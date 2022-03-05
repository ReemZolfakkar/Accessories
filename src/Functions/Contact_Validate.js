const contact_validate = (NewUser) => {
  const error = {};
  const name_validate = new RegExp("^([a-zA-Z]{3,10})$");
  const email_validate =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const subject_validate = new RegExp(
    "^([a-zA-Z]{1})+([a-zA-Z0-9]{3,10})+([a-zA-Z0-9]{0,89})$"
  );
  const message_validate = new RegExp("^([a-zA-Z]{1})+([a-zA-Z0-9]{3,299})$");

  if (!NewUser.firstname) {
    error.firstname = "First name  is required.";
  } else if (!NewUser.firstname.match(name_validate)) {
    error.firstname = "First name should contain 3-10 alphabet characters.";
  }
  if (!NewUser.lastname) {
    error.lastname = "Second name  is required.";
  } else if (!NewUser.firstname.match(name_validate)) {
    error.lastname = "Second name should contain 3-10 alphabet characters.";
  }
  if (!NewUser.email) {
    error.email = "Email  is required.";
  } else if (!NewUser.email.match(email_validate)) {
    error.email = "Enter valid email.";
  }
  if (!NewUser.subject) {
    error.subject = "Subject  is required.";
  } else if (!NewUser.subject.match(subject_validate)) {
    error.subject =
      "Subject should start with alphabet character and contain 4-100 characters.";
  }
  if (!NewUser.message) {
    error.message = "Message  is required.";
  } else if (!NewUser.message.match(message_validate)) {
    error.message =
      "Message should start with alphabet character and contain 4-300 characters.";
  }
  return error;
};
export default contact_validate;
