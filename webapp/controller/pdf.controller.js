sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(jQuery, Controller, JSONModel) {
	"use strict";

	var PageController = Controller.extend("progetto4.progetto4.controller.Pdf", {

		onInit : function () {
			this._sValidPath = sap.ui.require.toUrl("progetto4/webapp/pdfstampa/ModelloFattura") + "/ModelloFattura.pdf";
			this._sInvalidPath = sap.ui.require.toUrl("progetto4/pdfstampa/ModelloFattura non trovato") + "/sample_nonexisting.pdf";
			this._oModel = new JSONModel({
				Source: this._sValidPath,
				Title: "Fattura N° 123456",
				Height: "600px"
			});
			this.getView().setModel(this._oModel);
			this._oModel.setProperty("/Source", this._sValidPath);
		},
	});

	return PageController;

});