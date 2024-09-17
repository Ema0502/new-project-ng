const loginUserController = (email, password) => {
    const emailTest = "admin@admin.com";
    const passwordTest = "admin123";
    if ( email === emailTest && password === passwordTest ) {
        return {
            email,
            access: true
        }
    }
    return {
        error: "Fail! the information is incorrect"
    };
}

module.exports = {
    loginUserController
}