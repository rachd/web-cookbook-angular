(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("recipeCategory", {
		templateUrl: "/app/recipe-category/recipe-category.html",
		controllerAs: "category",
		controller: function() {
			var category = this;

			category.title = "Desserts";

			category.recipes = [
				"Lemon Bars",
				"Also Lemon Bars"
			];
		}
	});
}());