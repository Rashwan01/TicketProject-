import User from "../helpers/user";
const guest = (to, from, next) => {
  if (User.isLogin()) {
    return next({
      name: "home",
    });
  }
    return next();
};
export default guest;
