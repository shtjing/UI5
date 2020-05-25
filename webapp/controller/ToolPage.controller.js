sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("PortalProduct.controller.ToolPage", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf PortalProduct.view.ToolPage
		 */
		//	onInit: function() {
		//
		//	},
		onERP: function( ) {
			window.open('https://app.ykjt.cc:8083/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=810#ZYK_SSF_BZD-wingui');
		},
		
		onOA: function( ) {
			window.open('http://192.168.21.78/');
		},
		
		onSAC: function( ) {
			window.open('https://yanzhoucoal.cn1.sapanalyticscloud.cn/');
		},

		onBPC: function( ) {
			window.open('https://bw.ykjt.cc:8083/sap/epm/bpc/web/index.html');
		},
		
	    onCON: function( ) {
			window.open('https://s1.sapariba.cn/Sourcing/Main/ad/loginPage/SSOActions?realm=yankuang&awsr=true');
		},
		
		onECM: function( ) {
			window.open('https://doc.ykjt.cc:8090/OTCS/cs.exe');
		},	
		
		onFICO: function( ) {
			window.open('https://app.ykjt.cc:8083/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=800&sap-ushell-config=headerless#ZYK_SSF_BZD-portal');
		},
		
		onFICO1: function( ) {
			window.open('https://app.ykjt.cc:8083/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=810&sap-ushell-config=headerless#ZYK_SSF_BZD-portal');
		},		
		
		onSAFE: function( ) {
			window.open('http://192.168.33.242/datashare/f/issue/tkIssue');
		},	
		
		onSRM: function( ) {
			window.open('http://web-portal.paas.ykjt.cc/api/cp/partner/saml2/sp/sso');
		},
		
		onMDM: function( ) {
			window.open('http://mdm.ykjt.cc/samlsso/login');
		},
		
		onGRC: function( ) {
			window.open('http://192.168.37.41');
		},
		
		onGRCPT: function( ) {
			window.open('https://grc.ykjt.cc:8081/nwbc');
		},
		
		onTrade800: function( ) {
			window.open('https://app.ykjt.cc:8083/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=800&sap-language=ZH#Shell-home');
		},	
		
		onTrade810: function( ) {
			window.open('https://app.ykjt.cc:8083/sap/bc/ui5_ui5/ui2/ushell/shells/abap/Fiorilaunchpad.html?sap-client=810&sap-language=ZH#Shell-home');
		},
		
		onTAX: function( ) {
			window.open('http://tax.ykjt.cc/saml/login');
		},
		
		onBW: function( ) {
			window.open('https://bw.ykjt.cc:8083/sap/bc/webdynpro/sap/zwda_bw_dcpage?sap-language=ZH#');
		},
		
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf PortalProduct.view.ToolPage
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf PortalProduct.view.ToolPage
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf PortalProduct.view.ToolPage
		 */
		//	onExit: function() {
		//
		//	}

	});

});