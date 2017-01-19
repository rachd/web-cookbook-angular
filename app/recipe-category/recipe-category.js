(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("recipeCategory", {
		templateUrl: "/app/recipe-category/recipe-category.html",
		controllerAs: "category",
		controller: function() {
			var category = this;

			category.$routerOnActivate = function(next, previous) {
				category.title = next.params.id;

				category.recipes = [
					"Lemon Bars",
					"Also Lemon Bars"
				];
			  // return heroService.getHero(id).then(function(hero) {
			  //   $ctrl.hero = hero;
			  // });
			};
		}
	});
}());