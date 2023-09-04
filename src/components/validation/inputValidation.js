export const isEmptyField = (...fields) => {
    const empty = fields.some(field => field.trim() === "");
    return {
        isValid: !empty,
        errorMessage: empty ? "Please fill in all the required fields." : ""
    };
};

export const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const valid = pattern.test(email);
    return {
        isValid: valid,
        errorMessage: valid ? "" : "Please enter a valid email address."
    };
};

export const isValidPassword = (password) => {
    const pattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{5,15}$/;
    const valid = pattern.test(password);
    return {
        isValid: valid,
        errorMessage: valid ? "" : "Password must be between 5 and 15 characters, contain at least one letter, one number, and one symbol."
    };
};

export const doPasswordsMatch = (password, repeatPassword) => {
    const match = password === repeatPassword;
    return {
        isValid: match,
        errorMessage: match ? "" : "Passwords do not match!"
    };
};
  