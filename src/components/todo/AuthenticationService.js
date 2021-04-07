class AuthenticationService {


    registerUser = (username, password) => {
        sessionStorage.setItem('user', username);
        console.log('Logged in user is :- ' + sessionStorage.getItem('user'));
    }

    logout = () => {
        sessionStorage.removeItem('user');
    }

    isAuthenticated = () => {
        console.log('isAuthentciated :- ' + sessionStorage.getItem('user'));
        if(sessionStorage.getItem('user') != null){
            return true
        }else{
            return false
        }
    }


}

export default new AuthenticationService();