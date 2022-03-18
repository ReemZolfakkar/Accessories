const Payment_Validate = (paymentData) => {
  const error = {};
  const card_number_Regex = new RegExp("^4[0-9]{12,15}$");
  const card_holder_Regex = new RegExp("^[a-zA-Z]{4,10}$");
  const card_expire_Regex = new RegExp(
    "^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$"
  );
  const card_cvc_Regex = new RegExp("^([0-9]{3,4})$");

  if (!paymentData.CardNumber) {
    error.CardNumber = "Card number is required.";
  } else if (!paymentData.CardNumber.match(card_number_Regex)) {
    error.CardNumber =
      "Should start with 4 , and contain between 13 , 16 digits.";
  }
  if (!paymentData.CardHolder) {
    error.CardHolder = "Card number is required.";
  } else if (!paymentData.CardHolder.match(card_holder_Regex)) {
    error.CardHolder = "Accept only alphabets";
  }
  if (!paymentData.Expires) {
    error.Expires = "Expire date is required.";
  } else if (!paymentData.Expires.match(card_expire_Regex)) {
    error.Expires = "Expires date should be in form month/year";
  }
  if (!paymentData.CVC) {
    error.CVC = "CVC is required.";
  } else if (!paymentData.CVC.match(card_cvc_Regex)) {
    error.Expires = "CVC should be 3 or 4 digit numbers";
  }
  return error;
};
export default Payment_Validate;
