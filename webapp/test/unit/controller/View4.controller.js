/*global QUnit*/

sap.ui.define([
	"progetto4/progetto4/controller/View4.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View4 Controller");

	QUnit.test("I should test the View4 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
