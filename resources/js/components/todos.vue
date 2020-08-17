<template>
  <div class="col-md-6">
    <div class="card">
      <div class="card-header bg-dark text-white header-elements-inline">
        <h5 class="card-title">{{$t("custom.all_todos")}}</h5>
        <div class="header-elements">
          <div class="list-icons">
            <a class="list-icons-item" data-action="collapse"></a>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>{{ $t("tabels.id") }}</th>
                <th>{{ $t("tabels.title") }}</th>
                <th>{{ $t("tabels.description") }}</th>
                <th>{{ $t("tabels.date") }}</th>
                <th class="text-center" style="width: 30px;">{{$t("tabels.actions")}}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(todo, index) in todos" :key="index">
                <td>{{ todo.id }}</td>
                <td>{{ todo.title }}</td>
                <td>{{ todo.description }}</td>
                <td>{{ todo.date }}</td>

                <td class="text-center">
                  <div class="list-icons">
                    <button
                      type="button"
                      class="btn btn-danger btn-sm legitRipple"
                      @click="destroy(index,todo.slug)"
                    >
                      <i class="icon-trash "></i>
                    
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "../helpers/Form";
import Notification from "../helpers/Notifications";
export default {
  data() {
    return {
      todos: "",
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    fetchTodos() {
      axios.get("/api/todos").then((res) => (this.todos = res.data.data));
    },
 destroy(index, slug) {
      axios.delete(`/api/todos/${slug}`).then((res) => {
        this.todos.splice(index, 1);
        Notification.push("todos Deleted", "Success", "success");
      });
    },
  },
};
</script>
