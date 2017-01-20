(function() {
	"use strict";

	var module = angular.module("cookbook");

	module.component("addForm", {
		templateUrl: "/app/js/add-new/add-new.html",
		controllerAs: "addForm",
		controller: function() {
			var addForm = this;
		}
	});
}());