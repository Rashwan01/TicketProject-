<template>
  <div>
    <!-- Page header -->
    <bread-crumb></bread-crumb>
    <div class="container">
      <div class="row">
      <charts></charts>
      <todo></todo>
     <todos></todos>
      </div>
    </div>
  </div>
</template>


<script>
import BreadCrumb from "../layouts/Breadcrumb";


import todo from "../components/todo"
import charts from "../components/charts"
import todos from "../components/todos"

export default {


  components: {
    BreadCrumb,todo,charts,todos
  },
};
</script>
