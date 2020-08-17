<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header bg-dark text-white header-elements-inline">
        <h5 class="card-title">{{$t("custom.add_to_do")}}</h5>
        <div class="header-elements">
          <div class="list-icons">
            <a class="list-icons-item" data-action="collapse"></a>
          </div>
        </div>
      </div>

      <div class="card-body">
        <form
          action="#"
          @submit.prevent="onSubmit"
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
              <label class="col-form-label col-lg-2">{{$t("inputs.priority")}}</label>
              <div class="col-lg-10">
                <select class="form-control" name="priority" v-model="form.priority">
                  <option disabled>{{$t("inputs.choose")}}</option>
                  <option
                    :value="priority"
                    v-for="(priority,index) in priorities"
                    :key="index"
                  >{{priority}}</option>
                </select>
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('priority')"
                  v-text="form.errors.get('priority')"
                ></span>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-md-2">{{$t("inputs.date")}}</label>
              <div class="col-md-10">
                <input class="form-control" type="date" name="date" v-model="form.date" />
                <span
                  class="form-text text-danger"
                  v-if="form.errors.has('date')"
                  v-text="form.errors.get('date')"
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
  </div>
</template>
<script>
import Form from "../helpers/Form";

export default {
  data() {
    return {
      form: new Form({
        title: "",
        description: "",
        date: "",
        priority: "",
      }),
      priorities: ["low", "high"],
    };
  },

  methods: {
    onSubmit() {
      this.form.post("/api/todos");
    },
  },
};
</script>
