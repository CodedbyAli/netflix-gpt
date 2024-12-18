
export const checkFormValidation = (email,password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid || !isPasswordValid) return "Either email or password is not valid";
    // if(!isPasswordValid) return "Password is not valid";

    return null;
}

