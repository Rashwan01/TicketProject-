<template>
  <div>
    <navbar></navbar>
    <!-- Page content -->
    <div class="page-content">
     <sidebar></sidebar>
      <!-- Main content -->
      <div class="content-wrapper">
        <router-view></router-view>


      </div>
      <!-- /main content -->
    </div>
    <!-- /page content -->
  </div>
</template>
<script>
import navbar from "./Navbar";
import sidebar from "./Sidebar";
export default {
  components: {
    navbar,
    sidebar,
  },
};
</script>
