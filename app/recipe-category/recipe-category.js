(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("recipeCategory", {
		templateUrl: "/app/recipe-category/recipe-category.html",
		$routeConfig: [
			{ path: ":id", component:"singleRecipe", name: "Single" }, //paths are relative to parent
		],
		controllerAs: "category",
		controller: function() {
			var category = this;

			category.$routerOnActivate = function(next, previous) {
				category.title = next.params.id;

				category.recipes = [
					"LemonBars",
					"AlsoLemonBars"
				];
			};
		}
	});
}());