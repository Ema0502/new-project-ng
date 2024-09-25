const loginUserController = (email, password) => {
    const emailTest = "messi@word.com";
    const passwordTest = "admin123";
    const roleTest = "admin";
    if ( email == emailTest && password == passwordTest ) {
        return {
            email,
            access: true,
            role: roleTest
        }
    }
    throw new Error("Fail! the information is incorrect");
}

module.exports = {
    loginUserController
}