(function() {
	"use strict";

	// var module = angular.module("adventure", ["ngComponentRouter"]);

	// // top level component provides routing rules
	// module.value("$routerRootComponent", "appRouter"); //tells which component has top-level routing rules


	// module.component("appAbout", {
	// 	template: "This is the about page"
	// });
	var module = angular.module("cookbook", [])
		.component("cookbookApp", {
			templateUrl: "app/router/app-router.html",
			controllerAs: "model",
			controller: function() {
				var model = this;
			}
		});
}());