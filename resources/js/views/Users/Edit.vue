<template>
  <div>
    <!-- Form inputs -->
    <div class="card">
      <div class="card-header header-elements-inline">
        <h5 class="card-title">{{$t("custom.edit_user")}}</h5>
      </div>

      <div class="card-body">
        <form
          action="#"
          @submit.prevent="update"
          @keydown="form.errors.clear($event.target.name)"
          @change="form.errors.clear($event.target.name)"
        >
          <fieldset class="mb-3">
            <div class="form-group row">
              <label class="col-form-label col-lg-2">{{$t("inputs.name")}}</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" name="name" v-model="form.name" />
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('name')"
                  v-text="form.errors.get('name')"
                ></span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-2">{{$t("inputs.email")}}</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" name="email" v-model="form.email" />
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('email')"
                  v-text="form.errors.get('email')"
                ></span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-2">{{$t("inputs.username")}}</label>
              <div class="col-lg-10">
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  v-model="form.username"
                  autocomplete="username"
                />
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('username')"
                  v-text="form.errors.get('username')"
                ></span>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-lg-2">{{$t("inputs.password")}}</label>
              <div class="col-lg-10">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  autocomplete="new-password"
                  v-model="form.password"
                />
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('password')"
                  v-text="form.errors.get('password')"
                ></span>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-lg-2">{{$t("inputs.user_role")}}</label>
              <div class="col-lg-10">
                <select class="form-control" name="role" v-model="form.role">
                  <option >{{$t("inputs.choose")}}</option>
                  <option
                    :value="role.display_name"
                    v-for="(role,index) in roles"
                    :key="index"
                  >{{role.name}}</option>
                </select>
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('role')"
                  v-text="form.errors.get('role')"
                ></span>
              </div>
            </div>
          </fieldset>
          <div class="text-right">
            <button type="submit" class="btn btn-primary" :disabled="form.errors.any()">
              {{$t("buttons.save")}}
              <i class="icon-paperplane ml-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- /form inputs -->
  </div>
</template>


<script>
import BreadCrumb from "../../layouts/Breadcrumb";
import Form from "../..//helpers/Form";
export default {
  data() {
    return {
      roles: "",
     
      form: new Form({

      },false),
    };
  },
  created() {

    this.getUser();
    this.fetchRoles();
    EventBus.$on("reload", () => this.onSubmit());
  },
  methods: {
    update() {
      this.form.put(`/api/users/${this.$route.params.username}`);
    },
    fetchRoles() {
      axios.get("/api/users/create").then((res) => {
        this.roles = res.data.roles;
      });
    },
    getUser(){
         axios.get(`/api/users/${this.$route.params.username}`)
              .then(res=>{this.form = new Form(res.data.data,false);
            });
         
    }
  },
  components: {
    BreadCrumb,
  },
};
</script>
