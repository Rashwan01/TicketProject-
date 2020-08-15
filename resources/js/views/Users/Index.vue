<template>
  <div>
    <!-- Page header -->
    <bread-crumb></bread-crumb>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <!-- Content area -->
          <div class="content">
            <!-- Form inputs -->

            <!-- Basic responsive table -->
            <div class="card">
              <div class="card-header header-elements-inline">
                <h5 class="card-title">{{ $t("tabels.users") }}</h5>
                <div class="header-elements">
                  <router-link :to="{ name: 'users.create' }" class="btn btn-sm btn-primary">
                    <i class="icon-add mr-2"></i>
                    {{ $t("buttons.add") }}
                  </router-link>
                </div>
              </div>

              <div class="card-body"></div>

              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>{{ $t("tabels.id") }}</th>
                      <th>{{ $t("tabels.name") }}</th>
                      <th>{{ $t("tabels.username") }}</th>
                      <th>{{ $t("tabels.email") }}</th>
                      <th>{{ $t("tabels.role") }}</th>
                      <th class="text-center" style="width: 30px;">{{$t("tabels.actions")}}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                      <td>{{ user.id }}</td>
                      <td>{{ user.name }}</td>
                      <td>{{ user.username }}</td>
                      <td>{{ user.email }}</td>
                      <td><span class="badge badge-success">{{ user.role }}</span></td>
                      <td class="text-center">
                        <div class="list-icons">
                          <router-link
                            type="button"
                            class="btn btn-primary btn-sm legitRipple"
                            :to="{ name: 'users.edit', params: { username:user.username }}"
                          >
                            <i class="icon-pencil7 mr-2"></i>
                            {{ $t("buttons.edit") }}
                          </router-link>

                          <button
                            type="button"
                            class="btn btn-danger btn-sm legitRipple"
                            @click="destroy(index,user.username)"
                          >
                            <i class="icon-trash mr-2"></i>
                            {{ $t("buttons.delete") }}
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- /basic responsive table -->

            <!-- /form inputs -->
          </div>
          <!-- /content area -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "../../layouts/Breadcrumb";
import Notification from "../../helpers/Notifications";
export default {
  data() {
    return {
      users: "",
    };
  },
  created() {
    this.fetchData();
    EventBus.$on("reload", () => this.fetchData());
  },
  methods: {
    fetchData() {
      axios.get("/api/users").then((res) => (this.users = res.data.data));
    },
    destroy(index, username) {
      axios.delete(`/api/users/${username}`).then((res) => {
        this.users.splice(index, 1);
        Notification.push("User Deleted", "Success", "success");
      });
    },
  },

  components: {
    BreadCrumb,
  },
};
</script>
