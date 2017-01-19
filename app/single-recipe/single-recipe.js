(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("singleRecipe", {
		templateUrl: "/app/single-recipe/single-recipe.html",
		controllerAs: "recipe",
		controller: function() {
			var recipe = this;

			recipe.title = "Lemon Bars";
			recipe.ingredients = [
				"1 1/2 cups + 3 tbsp flour",
				"1/2 cup + 1 tbsp confectioners' sugar",
				"3/4 cup butter (1 1/2 sticks)",
				"2 lemons",
				"3 eggs",
				"1 cup sugar",
				"1/2 tsp baking powder",
				"1/2 tsp salt"
			];
			recipe.directions = [
				"Preheat oven to 350 degrees",
				"Line 13x9 inch baking pan with parchment paper",
				"Lightly grease parchment paper",
				"In medium bowl, combine flour and confectioners' sugar",
				"Cut in butter",
				"Sprinkle dough in pan and pat down",
				"Bake 15-17 minutes",
				"Grate 1 tsp lemon rind and squeeze 1/3 cup juice",
				"In large bowl with mixer on high, beat eggs until thick and lemon colored, about 3 minutes",
				"Reduce speed to low and add lemon peel, lemon juice, sugar, baking powder, salt, and 3 tablespoons flour",
				"Beat until blended",
				"Pour over warm crust",
				"Bake about 15 minutes",
				"Sift 1 tbsp confectioners' sugar over top",
				"Cool completely in pan"
			];
		}
	});
}());