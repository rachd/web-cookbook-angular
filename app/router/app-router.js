(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("appRouter", {
		templateUrl: "/app/router/app-router.html",
		$routeConfig: [
			{ path: "/", component: "home", name: "Home" },
			// { path: "/:id", component: "recipeCategory", name: "Category" },
			{ path: "/:id/...", component: "recipeCategory", name: "Category"},
		// 	{ path: "/bread", component: "bread", name: "Bread" },
		// 	{ path: "/meat", component: "meat", name: "Meat" },
		// 	{ path: "/soup", component: "soup", name: "Soup" },
		// 	{ path: "/vegetables", component: "vegetables", name: "Vegetables" },
		// 	{ path: "/pasta-rice", component: "pastaRice", name: "PastaRice" },
		// 	{ path: "/dessert", component: "dessert", name: "Dessert" },
		// 	// { path: "/detail/:id/...", component: "movieDetails", name: "Details" }, ///... means child will provide more routing
			{ path: "/**", redirectTo: ["Home"] }
		]
	});
}());