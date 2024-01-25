const validate_email = (email) => {
  expression =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (expression.test(email) == true) {
    return true;
  } else {
    return false;
  }
};

const validate_password = (password) => {
  if (password < 6) {
    return false;
  } else {
    return true;
  }
};

const validate_field = (field) => {
  if (field == null) {
    return false;
  }
  if (field.length <= 0) {
    return false;
  } else {
    return true;
  }
};

export { validate_email, validate_password, validate_field };
