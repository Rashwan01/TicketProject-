import Vue from "vue";

class Notification {
  push(msg, title = "Important message", type = "success") {
    return Vue.notify({
      group: "foo",
      title: `${title}`,
      text: `${msg}`,
      type: `${type}`,
    });
  }
}
export default Notification = new Notification();
