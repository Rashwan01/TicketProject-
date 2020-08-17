<template>
  <div>
    <!-- Page header -->
    <bread-crumb></bread-crumb>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header bg-dark text-white header-elements-inline">
              <h6 class="card-title">Charts</h6>
              <div class="header-elements">
                <div class="list-icons">
                  <a class="list-icons-item" data-action="collapse"></a>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="row text-center">
                <div class="col-4">
                  <p>
                    <i class="icon-users2 icon-2x d-inline-block text-info"></i>
                  </p>
                  <h5 class="font-weight-semibold mb-0">{{charts.users}}</h5>
                  <span class="text-muted font-size-sm">client</span>
                </div>

                <div class="col-4">
                  <p>
                    <i class="icon-point-up icon-2x d-inline-block text-warning"></i>
                  </p>
                  <h5 class="font-weight-semibold mb-0">{{charts.tickets}}</h5>
                  <span class="text-muted font-size-sm">tickets</span>
                </div>
              </div>
            </div>
          </div>
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
      charts:{ }
    };
  },
  created() {
    this.fetchChart();
  },

  methods: {
    fetchChart() {
      axios.get("/api").then((res) =>this.charts=res.data);
    },
  },

  components: {
    BreadCrumb,
  },
};
</script>
