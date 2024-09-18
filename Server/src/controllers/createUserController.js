const createUserController = (newUser) => {
    if ( newUser.email && newUser.password ) {
        return {
            email: newUser.email,
            access: true
        }
    }
    throw new Error("Fail! the information is incorrect");
}

module.exports = {
    createUserController
}