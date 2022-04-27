// Custom error messages for the appropriate firebase error code

// Error messages for 'signInWithEmailAndPassword' method
// https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#error-codes_12
const signInErrorMessage = (authErrorCode) => {
    switch (authErrorCode) {
      case "auth/invalid-email":
        return "Invalid email address.";

      case "auth/user-disabled":
        return "The account associated with this email address is disabled.";

      case "auth/user-not-found":
        return "Couldn't find an account associated with this email address.";

      case "auth/wrong-password":
        return "Wrong password. Try again or click 'Forgot password' to reset it.";

      default:
        return "An error occured while processing your request.";
    }
};

// Error messages for 'createUserWithEmailAndPassword' method
// https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#error-codes_3
const createUserErrorMessage = (authErrorCode) => {
    switch (authErrorCode) {
        case "auth/email-already-in-use":
            return "There's already an account using this email address.";
        case "auth/invalid-email":
            return "Invalid email address.";

        // User should never encounter this error; 
        // email/password accounts are enabled for this site.
        case "auth/operation-not-allowed":
            return "Email/Password accounts are not allowed for this service.";

        case "auth/weak-password":
            return "Password does not meet requirements.";
    }
}

export { signInErrorMessage, createUserErrorMessage };