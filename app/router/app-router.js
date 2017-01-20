(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("appRouter", {
		templateUrl: "/app/router/app-router.html",
		$routeConfig: [
			{ path: "/", component: "home", name: "Home" },
			{ path: "/:id/...", component: "recipeCategory", name: "Category" },
			{ path: "/add-new", component: "addForm", name: "AddForm" },
			{ path: "/**", redirectTo: ["Home"] }
		],
		controllerAs: "nav",
		controller: function() {
			var nav = this;

			nav.categories = [
				"Bread",
				"Soup",
				"Vegetables"
			];
		}
	});
}());