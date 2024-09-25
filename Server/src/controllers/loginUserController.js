const loginUserController = (email, password) => {
    const emailAdmin = "messi@word.com";
    const passwordAdmin = "admin123";
    const roleAdmin = "admin";

    const emailUser = "mbappe@2do.com";
    const passwordUser = "123456";
    const roleUser = "user";
    
    if ( email == emailAdmin && password == passwordAdmin ) {
        return {
            email,
            access: true,
            role: roleAdmin
        }
    }
    if ( email == emailUser && password == passwordUser ) {
        return {
            email,
            access: true,
            role: roleUser
        }
    }
    throw new Error("Fail! the information is incorrect");
}

module.exports = {
    loginUserController
}