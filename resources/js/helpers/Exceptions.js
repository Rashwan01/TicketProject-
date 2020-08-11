import User from "./user"
class Exceptions {
    handle(error) {
       this.isExpired(error)
    }
    isExpired(error) {
        error == "Token Is Expired" ? User.logout() : "";
    }
}
export default Exceptions = new Exceptions()
