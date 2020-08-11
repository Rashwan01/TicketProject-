<template>
  <!-- Main sidebar -->
  <div class="sidebar sidebar-dark sidebar-main sidebar-expand-md">
    <!-- Sidebar mobile toggler -->
    <div class="sidebar-mobile-toggler text-center">
      <a href="#" class="sidebar-mobile-main-toggle">
        <i class="icon-arrow-right8"></i>
      </a>
      Navigation
      <a href="#" class="sidebar-mobile-expand">
        <i class="icon-screen-full"></i>
        <i class="icon-screen-normal"></i>
      </a>
    </div>
    <!-- /sidebar mobile toggler -->

    <!-- Sidebar content -->
    <div class="sidebar-content">
      <!-- User menu -->
      <div class="sidebar-user">
        <div class="card-body">
          <div class="media">
            <div class="mr-3">
              <a href="#">
                <img
                  src="/assets/dashboard/images/placeholders/placeholder.jpg"
                  width="38"
                  height="38"
                  class="rounded-circle"
                  alt
                />
              </a>
            </div>

            <div class="media-body">
              <div class="media-title font-weight-semibold">Victoria Baker</div>
              <div class="font-size-xs opacity-50">
                <i class="icon-pin font-size-sm"></i> &nbsp;Santa Ana, CA
              </div>
            </div>

            <div class="ml-3 align-self-center">
              <a href="#" class="text-white">
                <i class="icon-cog3"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- /user menu -->

      <!-- Main navigation -->
      <div class="card card-sidebar-mobile">
        <ul class="nav nav-sidebar" data-nav-type="accordion">
          <!-- Main -->
          <li class="nav-item-header">
            <div class="text-uppercase font-size-xs line-height-xs">Main</div>
            <i class="icon-menu" title="Main"></i>
          </li>

          <li
            :class="[hasSubItems(item) ? 'nav-item-submenu' : '',  'nav-item']"
            v-for="(item,index) in NavbarItems"
            :key="index"
          >
            <router-link :to="hasSubItems(item)?'':item.url" class="nav-link">
              <i :class="item.icon"></i>
              <span>{{$t(`custom.${item.text}`)}}</span>
            </router-link>
            <ul class="nav nav-group-sub" data-submenu-title="Themes" v-if="hasSubItems(item)">
              <li class="nav-item" v-for="(item,index) in item.subItems" :key="index">
                <router-link :to="item.url" class="nav-link active">{{ item.text }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /main navigation -->
    </div>
    <!-- /sidebar content -->
  </div>
  <!-- /main sidebar -->
</template>
<script>
import NavbarItems from "../data/Navbar.json";
export default {
  data() {
    return {
      NavbarItems: NavbarItems,
    };
  },
  methods: {
    hasSubItems(item) {
      return item.subItems.length > 0;
    },
  },
};
</script>
