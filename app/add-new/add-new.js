(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("addForm", {
		templateUrl: "/app/add-new/add-new.html",
		controllerAs: "addForm",
		controller: function() {
			var addForm = this;
		}
	});
}());