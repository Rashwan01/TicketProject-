<template>
  <div v-if="!isOnLoginPage()">
   <notifications group="foo" position="bottom right" />
    <navbar></navbar>
    <!-- Page content -->
    <div class="page-content">
      <sidebar></sidebar>
      <!-- Main content -->
      <div class="content-wrapper" style="margin-right: 272px;">
        <router-view></router-view>
      </div>
      <!-- /main content -->
    </div>
    <!-- /page content -->
  </div>

    <div class="page-content" v-else>
        <notifications group="foo" position="bottom right" />
      <!-- Main content -->
      <div class="content-wrapper">
        <div class="content d-flex justify-content-center align-items-center">
          
          <router-view></router-view>
        </div>
      </div>
      <!-- /main content -->
    </div>
    <!-- /page content -->

</template>
<script>
import navbar from "./Navbar";
import sidebar from "./Sidebar";
export default {
  methods: {
    isOnLoginPage: function () {
      return this.$route.path === "/login";
    },
  },
  components: {
    navbar,
    sidebar,
  },
};
</script>
