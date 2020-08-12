import Token from "./Token.js";
import AppStorage from "./AppStorage";
import router from "../router/index.js";
import Notification from "./Notifications";
class User {
  login(data) {
    axios
      .post("/api/auth/login", data)
      .then((res) => this.responseAfterLogin(res))
        .catch((errors) => {
           
        Notification.push(errors.response.data.error, "warning", "error");
      });
  }

  responseAfterLogin(res) {
    const access_token = res.data.access_token;
    const username = res.data.user;
    if (Token.isValid(access_token)) {
      console.log("stored");
      AppStorage.store("token", access_token);
      AppStorage.store("user", username);
      router.push({ path: "/home" });
    }
  }
  /*
        if there is token stored in local storage
        then check if it is valid
        @valid =>login()
        @notVAlid =>logout()
*/

  hasToken() {
    const storedToken = AppStorage.get("token");
    if (storedToken) {
      return Token.isValid(storedToken) ? true : this.logout();
    }
    return false;
  }
  isLogin() {
    return this.hasToken();
  }

  name() {
    if (this.isLogin()) {
      return AppStorage.get("user");
    }
  }
  id() {
    if (this.isLogin()) {
      const payload = Token.payload(AppStorage.get("token"));

      return payload.sub;
    }
  }

  logout() {
    AppStorage.clear("token");
    AppStorage.clear("user");
    router.push({ path: "/login" });
  }
  own(id) {
    return this.id() == id;
  }
  isAdmin() {
    return this.id() == 1;
  }
}
export default User = new User();
