(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("home", {
		templateUrl: "/app/js/home/home.html",
		controllerAs: "home",
		controller: function() {
			var home = this;

			home.categories = [
				"Bread",
				"Soup",
				"Vegetables"
			];
		}
	});
}());