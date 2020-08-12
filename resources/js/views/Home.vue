<template>
  <div>
    <!-- Page header -->
    <bread-crumb></bread-crumb>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p>hello from home </p>
         

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BreadCrumb from "../layouts/Breadcrumb";
import Form from "../helpers/Form";
import Notification from "../helpers/Notifications";

export default {
  data() {
    return {
      form: new Form({
        name: "",
        description: "",
      }),
    };
  },

  methods: {
    pushNotification() {
      return this.$notify({
        group: "foo",
        type: "success",
        title: "Important message",
        text: "Hello user! This is a notification!",
        closeOnClick: true,
      });
    },
    onSubmit() {
      this.form.post("/projects");
    },
  },

  components: {
    BreadCrumb,
  },
};
</script>
