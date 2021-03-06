(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("recipeCategory", {
		templateUrl: "/app/js/recipe-category/recipe-category.html",
		$routeConfig: [
			{ path: ":id", component:"singleRecipe", name: "Single" },
			{ path: "/", component:"recipeCategoryList", name: "CategoryList" }
		],
		controllerAs: "category",
		controller: function() {
			var category = this;

			category.$routerOnActivate = function(next, previous) {
				category.title = next.params.id;
			};
		}
	});

	module.component("recipeCategoryList", {
		templateUrl: "/app/js/recipe-category/recipe-category-list.html",
		controllerAs: "category",
		controller: function() {
			var category = this;

			category.$routerOnActivate = function(next, previous) {

				category.recipes = [
					"LemonBars",
					"AlsoLemonBars"
				];
			};
		}
	});
}());