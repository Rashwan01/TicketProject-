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
                <h5 class="card-title">{{ $t("custom.tickets") }}</h5>
                <div class="header-elements">
                 <router-link :to="{ name: 'tickets.create' }" class="btn btn-sm btn-primary">
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
                      <th>{{ $t("tabels.title") }}</th>
                      <th>{{ $t("tabels.description") }}</th>
                      <th>{{ $t("tabels.user") }}</th>
                      <th>{{ $t("tabels.status") }}</th>
                  
                      <th class="text-center" style="width: 30px;">{{$t("tabels.actions")}}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(ticket, index) in tickets" :key="index">
                      <td>{{ ticket.id }}</td>
                      <td>{{ ticket.title }}</td>
                      <td>{{ ticket.description }}</td>
                      <td>{{ ticket.user }}</td>
                      <td><span class="badge badge-success">{{ ticket.status }}</span></td>
                      <td class="text-center">
                        <div class="list-icons">
                          <router-link
                            type="button"
                            class="btn btn-primary btn-sm legitRipple"
                            :to="{ name: 'tickets.edit', params: { slug:ticket.slug }}"
                          >
                            <i class="icon-pencil7 mr-2"></i>
                            {{ $t("buttons.edit") }}
                          </router-link>

                          <button
                            type="button"
                            class="btn btn-danger btn-sm legitRipple"
                            @click="destroy(index,ticket.slug)"
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
      tickets: "",
    };
  },
  created() {
    this.fetchData();
    EventBus.$on("reload", () => this.fetchData());
  },
  methods: {
    fetchData() {
      axios.get("/api/tickets").then((res) => (this.tickets = res.data.data));
    },
    destroy(index,slug) {
      axios.delete(`/api/tickets/${slug}`).then((res) => {
        this.tickets.splice(index, 1);
        Notification.push("ticket Deleted", "Success", "success");
      });
    },
  },

  components: {
    BreadCrumb,
  },
};
</script>
