(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("appRouter", {
		templateUrl: "/router/app-router.html",
		$routeConfig: [
			{ path: "/list", component: "movieList", name: "List" },
			{ path: "/about", component: "appAbout", name: "About" },
			{ path: "/detail/:id/...", component: "movieDetails", name: "Details" }, ///... means child will provide more routing
			{ path: "/**", redirectTo: ["List"] }
		]
	});
}());