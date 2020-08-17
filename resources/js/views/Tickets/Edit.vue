<template>
  <div>
    <!-- Form inputs -->
    <div class="card">
      <div class="card-header header-elements-inline">
        <h5 class="card-title">{{$t("custom.edit_tickets")}}</h5>
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
              <label class="col-form-label col-lg-2">{{$t("inputs.title")}}</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" name="title" v-model="form.title" />
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('title')"
                  v-text="form.errors.get('title')"
                ></span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-lg-2">{{$t("inputs.description")}}</label>
              <div class="col-lg-10">
                <input
                  type="text"
                  class="form-control"
                  name="description"
                  v-model="form.description"
                />
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('description')"
                  v-text="form.errors.get('description')"
                ></span>
              </div>
            </div>
            <div class="form-group row">
              <label class="col-form-label col-lg-2">{{$t("inputs.user")}}</label>
              <div class="col-lg-10">
                <select class="form-control" name="user" v-model="form.user_id">
                  <option >{{$t("inputs.choose")}}</option>
                  <option :value="user.id" v-for="(user,index) in users" :key="index">{{user.name}}</option>
                </select>
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('user_id')"
                  v-text="form.errors.get('user_id')"
                ></span>
              </div>
            </div>
             <div class="form-group row">
              <label class="col-form-label col-lg-2">{{ $t("inputs.image") }}</label>
              <div class="col-lg-10">
                <div class="uniform-uploader">
                  <input
                    type="file"
                    name="image"
                    class="form-control-uniform-custom"
                    @change="uploadAvatar"
                  />
                  <span class="filename" style="user-select: none;">{{ $t("inputs.choose_image") }}</span>
                  <span
                    class="action btn bg-blue legitRipple"
                    style="user-select: none;"
                  >{{ $t("inputs.choose_image") }}</span>
                </div>
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('image')"
                  v-text="form.errors.get('image')"
                ></span>
                <div class="avatar img-fluid img-circle" style="margin-top:10px">
                  <img :src="getAvatar()" />
                </div>
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
      users:"",
      form: new Form({}, false),
    };
  },
  created() {
    this.getTicket();
    this.fetchClient();
    EventBus.$on("reload", () => {
      
      this.update()
      });
  },
  methods: {
       uploadAvatar(e) {
      let file = e.target.files[0];
      let reader = new FileReader();

      if (file["size"] < 2111775) {
        reader.onloadend = (file) => {
          //console.log('RESULT', reader.result)
          this.form.image = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert("File size can not be bigger than 2 MB");
      }
    },
    getAvatar() {
      return this.form.image ? this.form.image : "";
     
    },
    update() {
      this.form.put(`/api/tickets/${this.$route.params.slug}`);
    },
   fetchClient() {
      axios.get("/api/users?role=client").then((res) => (this.users = res.data.data));
    },

    getTicket() {
      axios.get(`/api/tickets/${this.$route.params.slug}`).then((res) => {
        this.form = new Form(res.data.data, false);
      });
    },
  },
  components: {
    BreadCrumb,
  },
};
</script>
