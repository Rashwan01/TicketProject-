import User from "../helpers/user";
const Auth = (to, from, next) => {
  if (!User.isLogin()) {
    return next({
      name: "login",
    });
  }
  return next();
};
export default Auth;
