<template>
  <div>
    <!-- Page header -->
<bread-crumb></bread-crumb>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1> {{$t("custom.Text")}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BreadCrumb from "../layouts/Breadcrumb";
export default {
  components: {
    BreadCrumb,
  },
};
</script>
