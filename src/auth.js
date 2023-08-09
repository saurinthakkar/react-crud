export const fakeAuthProvider = {
    isAuthenticated: false,
    signin: function(callback) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback,100)
    },
    signout:function(callback) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback,100)
    },
};

