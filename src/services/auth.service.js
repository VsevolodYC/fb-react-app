export default class Auth {
    static isAuth = false;
    static token = '';

    static setAuth(state) {
        this.isAuth = state;
    }
}