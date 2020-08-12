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
						<h5 class="card-title">{{$t("tabels.users")}}</h5>
					<div class="header-elements">
							<router-link :to="{ name: 'users.create'}" class="btn btn-sm btn-primary ">{{$t("buttons.add")}}</router-link>
	                	</div>
					</div>

					<div class="card-body">
					</div>

					<div class="table-responsive">
						<table class="table">
							<thead>
								<tr>
									<th>{{$t("tabels.id")}}</th>
									<th>{{$t("tabels.name")}}</th>
									<th>{{$t("tabels.username")}}</th>
									<th>{{$t("tabels.email")}}</th>
									<th>{{$t("tabels.role")}}</th>
									<th class="text-center" style="width: 30px;"><i class="icon-menu-open2"></i></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(user, index) in users" :key="index">
									<td>{{user.id}}</td>
                                    	<td>{{user.name}}</td>
									<td><a href="#">{{user.username}}</a></td>
									<td>{{ user.email }}</td>
								
									<td><span class="badge badge-success">{{ user.role }}</span></td>
									<td class="text-center">
										<div class="list-icons">
											<div class="dropdown">
												<a href="#" class="list-icons-item" data-toggle="dropdown">
													<i class="icon-menu9"></i>
												</a>
												<div class="dropdown-menu dropdown-menu-right">
													<a href="#" class="dropdown-item"><i class="icon-file-pdf"></i> Export to .pdf</a>
													<a href="#" class="dropdown-item"><i class="icon-file-excel"></i> Export to .csv</a>
													<a href="#" class="dropdown-item"><i class="icon-file-word"></i> Export to .doc</a>
												</div>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<!-- /basic responsive table -->

<router-view></router-view>

		
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
export default {
  data() {
    return {
        users:''
    };
  },
  created(){
 axios.get("/api/users")
      .then(res=>this.users = res.data.data );
  },

  components: {
    BreadCrumb,
  },
};
</script>
