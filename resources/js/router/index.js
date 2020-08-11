	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import About from "../views/About";
	import Home from "../views/Home";
	Vue.use(VueRouter)

	const routes = [{
	        path: "/home",
	        component: Home
	    },
	    {
	        path: "/about",
	        component: About
	    }
	];

	// 3. Create the router instance and pass the `routes` option
	// You can pass in additional options here, but let's
	// keep it simple for now.
	const router = new VueRouter({
	    routes, // short for `routes: routes`,
	    mode: 'history',
	});

	export default router
