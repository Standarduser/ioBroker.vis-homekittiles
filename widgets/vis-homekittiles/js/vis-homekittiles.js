/*
    ioBroker.vis vis-homekittiles Widget-Set
    Copyright 2023 Standarduser
*/
"use strict";

/* global $, vis, systemDictionary */

// add translations for edit mode
$.extend(
	true,
	systemDictionary,
	{
		"description":          		{   "en": "Description",        		"de": "Beschreibung"					},
		"group_labelGroup1":    		{   "en": "Label group 1",      		"de": "Beschriftungsgruppe 1"			},
		"group_labelGroup2":    		{   "en": "Label group 2",      		"de": "Beschriftungsgruppe 2"			},
		"icon":                			{   "en": "Icon",              			"de": "Icon"							},
		"iconRound":					{	"en": "Show round icon",			"de": "Zeige rundes Icon"				},
		"unit":                			{   "en": "Unit",              			"de": "Einheit"							},
		"showLikeActive":               {   "en": "Show like active",  			"de": "Als aktiv anzeigen"				},
		
		"numberOfViews":				{	"en": "Number of views",			"de": "Anzahl der Views"				},
		"numberOfButtons":				{	"en": "Number of buttons",			"de": "Anzahl der Schaltflächen"		},
		"directionHorizontal":			{   "en": "Horizontal orientation",		"de": "Horizontale Ausrichtung"			},
		"setIdOnOpenClose":				{   "en": "OID to set on open/close",	"de": "Beim Öffnen/Schließen OID setzen"},
		"setValueOnOpen":				{   "en": "Value on open",				"de": "Wert bei Öffnen"					},
		"setValueOnClose":				{   "en": "Value on close",				"de": "Wert bei Schließen"				},
		"arrowDirection":				{   "en": "Show arrow on dialog",		"de": "Pfeil am Dialog anzeigen"		},
		"dialogWidgetId":				{   "en": "Dialog widget ID",			"de": "Dialog-Widget-ID"				},
		
		"label":                		{   "en": "Label",              		"de": "Beschriftung"					},
		"label_":                		{   "en": "Label ",              		"de": "Beschriftung "					},

		"label2pre":            		{   "en": "Label 2 text start", 		"de": "Beschriftung 2 Text Anfang"  	},
		"label2oid":            		{   "en": "Label 2 OID",        		"de": "Beschriftung 2 OID"          	},
		"label2unit":           		{   "en": "Label 2 unit",       		"de": "Beschriftung 2 Einheit"      	},
		"label2post":           		{   "en": "Label 2 text end",   		"de": "Beschriftung 2 Text Ende"    	},
		"label3pre":            		{   "en": "Label 3 text start", 		"de": "Beschriftung 3 Text Anfang"  	},
		"label3oid":            		{   "en": "Label 3 OID",        		"de": "Beschriftung 3 OID"          	},
		"label3unit":           		{   "en": "Label 3 unit",       		"de": "Beschriftung 3 Einheit"      	},
		"label3post":           		{   "en": "Label 3 text end",   		"de": "Beschriftung 3 Text Ende"    	},
		"label4pre":            		{   "en": "Label 4 text start", 		"de": "Beschriftung 4 Text Anfang"  	},
		"label4oid":            		{   "en": "Label 4 OID",        		"de": "Beschriftung 4 OID"          	},
		"label4unit":           		{   "en": "Label 4 unit",       		"de": "Beschriftung 4 Einheit"      	},
		"label4post":           		{   "en": "Label 4 text end",   		"de": "Beschriftung 4 Text Ende"    	},
		"label5pre":            		{   "en": "Label 5 text start", 		"de": "Beschriftung 5 Text Anfang"  	},
		"label5oid":            		{   "en": "Label 5 OID",        		"de": "Beschriftung 5 OID"          	},
		"label5unit":           		{   "en": "Label 5 unit",       		"de": "Beschriftung 5 Einheit"      	},
		"label5post":           		{   "en": "Label 5 text end",   		"de": "Beschriftung 5 Text Ende"    	},

		"group_blockOperation":			{	"en": "Block operation",			"de": "Bedienung sperren"				},
		"blockOperationIfTrue": 		{   "en": "Block operation if true",	"de": "Bedienung bei true sperren"		},
		"blockOperationIfFalse":		{   "en": "Block operation if false",	"de": "Bedienung bei false sperren"		},
		"blockOperationShowIcon":		{   "en": "Show icon if blocked",		"de": "Icon anzeigen wenn gesperrt"		},
		"blockOperationIcon":			{   "en": "Icon if blocked",			"de": "Icon wenn gesperrt"				},
		"blockOperationIconNotInEditor":{	"en": "Don't show icon in editor",	"de": "Icon im Editor nicht anzeigen"	},
		"blockOperationUseDifferentOID":{   "en": "Use different OID",			"de": "Verwende andere OID"				},
		"blockOperationOID":			{	"en": "OID for block operation",	"de": "OID für Bedienung sperren"		},

		"group_acknowledge":			{	"en": "Acknowledged change",		"de": "Bestätigte Änderung"				},
		"ackShowIcon": 					{   "en": "Show icon for ack",			"de": "Icon für Bestätigung anzeigen"	},
		"ackIcon":						{   "en": "Icon for ack",				"de": "Icon für Bestätigung"			},
		"ackUseSpin":					{   "en": "Spin icon",					"de": "Icon drehen lassen"				},
		"ackInvertFunction":			{   "en": "Invert function",			"de": "Funktion invertieren"			},
		"ackIconNotInEditor":			{	"en": "Don't show icon in editor",	"de": "Icon im Editor nicht anzeigen"	},

		"group_increment":				{	"en": "Increment value",			"de": "Wert inkrementieren"				},
		"incrementOid":					{	"en": "Object ID",					"de": "Objekt-ID"						},
		"incrementPlusShow":			{	"en": "Show (+)-Button",			"de": "Zeige (+)-Button"				},
		"incrementMinusShow":			{	"en": "Show (-)-Button",			"de": "Zeige (-)-Button"				},
		"incrementPlusValue":			{	"en": "Step (+)",					"de": "Schritt bei (+)"					},
		"incrementMinusValue":			{	"en": "Step (-)",					"de": "Schritt bei (-)"					},
		"incrementValueMax":			{	"en": "Maximum value",				"de": "Maximalwert"						},
		"incrementValueMin":			{	"en": "Minimum value",				"de": "Minimalwert"						},
		"incrementShowOnlyIfTrue":		{	"en": "Show only if switch is on",	"de": "Nur anzeigen, wenn Schalter an"	},

		"group_buttons":				{	"en": "Buttons",					"de": "Schaltflächen"					},
		"oid_":							{	"en": "Object ID ",					"de": "Objekt-ID "						},
		"value_":						{	"en": "Value ",						"de": "Wert "							},
		"valueButton_":					{	"en": "Value button ",				"de": "Wert Schaltfläche "				},
		"label_":						{	"en": "Label ",						"de": "Beschriftung "					}, 
		"labelButton_":					{	"en": "Label button ",				"de": "Beschriftung Schaltfläche "		}, 
		"icon_":						{	"en": "Icon button ",				"de": "Icon Schaltfläche "				},
		"iconButton_":					{	"en": "Icon button ",				"de": "Icon Schaltfläche "				},
		"closeDialog_":					{	"en": "Close dialog ",				"de": "Dialog schließen "				},

		"view":							{	"en": "View",						"de": "View"							},
		"group_views":					{	"en": "Views",						"de": "Views"							},
		"view_":						{	"en": "View ",						"de": "View "							},

		"notification1oid":				{	"en": "Notification 1 OID",			"de": "Benachrichtigung 1 OID"			},
		"notification2oid":				{	"en": "Notification 2 OID",			"de": "Benachrichtigung 2 OID"			},
		"notification3oid":				{	"en": "Notification 3 OID",			"de": "Benachrichtigung 3 OID"			},
		"notification4oid":				{	"en": "Notification 4 OID",			"de": "Benachrichtigung 4 OID"			},
		"notification5oid":				{	"en": "Notification 5 OID",			"de": "Benachrichtigung 5 OID"			},
		"notification1showZero":		{	"en": "Notification 1 show zero",	"de": "Benachrichtigung 1 zeige Null"	},
		"notification2showZero":		{	"en": "Notification 2 show zero",	"de": "Benachrichtigung 2 zeige Null"	},
		"notification3showZero":		{	"en": "Notification 3 show zero",	"de": "Benachrichtigung 3 zeige Null"	},
		"notification4showZero":		{	"en": "Notification 4 show zero",	"de": "Benachrichtigung 4 zeige Null"	},
		"notification5showZero":		{	"en": "Notification 5 show zero",	"de": "Benachrichtigung 5 zeige Null"	},


		"hktButtonDialogCloseDescription": {
			"en": "A button to close open dialogs. Fill 'Dialog widget ID' with ID of dialog widget if button is placed outside a dialog window.",
			"de": "Ein Button, der geöffnete Dialogfenster schließt. Wenn der Button außerhalb eines Dialogs platziert wird, muss in 'Dialog-Widget-ID' die Widget-ID des Dialogfensters angegeben werden."
		},
		"hktButtonNavigationDescription": {
			"en": "This button calls the configured view.",
			"de": "Der Button ruft die eingestellte View auf."
		},
		"hktButtonSetDescription": {
			"en": "This widget creates a set of buttons and is supposed to use within a dialog window. Each button can close the dialog window.",
			"de": "Das Widget erzeugt eine einstellbare Anzahl an Buttons und ist vornehmlich für die Verwendung innerhalb von Dialogen geacht. Jeder Button kann das Dialogfenster schließen."
		},
		"hktButtonSetNavigationDescription": {
			"en": "This widget creates a set of buttons to navigate between an amount of views.",
			"de": "Das Widget erzeugt eine einstellbare Anzahl an Buttons für die Navigation zwischen verschiedenen Views."
		},
		"hktDatepickerDescription": {
			"en": "A Widget to pick a date.",
			"de": "Widget zur Auswahl eines Datums."
		},
		"hktNotificationDescription": {
			"en": "Notification for 5 different states.",
			"de": "Benachrichtigung für 5 verschiedene States."
		},
		"hktRadiobuttonsDescription": {
			"en": "Radiobuttons with a variable amount of buttons.",
			"de": "Radiobuttons mit variabler Anzahl an Buttons."
		},
		"hktSettingsBoolDescription": {
			"en": "Simple switch (on/off).",
			"de": "Einfacher Schalter (an/aus)."
		},
		"hktSettingsValueDescription": {
			"en": "Value with increment buttons.",
			"de": "Analogwert mit Inkrement-Tasten."
		},
		"hktSwitchBoolDescription": {
			"en": "Simple switch (on/off) with icon, increment buttons and two free to define label groups.",
			"de": "Einfacher Schalter (an/aus) mit Icon, Inkrement-Tasten und zwei frei definierbaren Beschriftungsgruppen."
		},
		"hktValueDescription": {
			"en": "Value with increment buttons and two free to define label groups.",
			"de": "Analogwert mit Inkrement-Tasten und zwei frei definierbaren Beschriftungsgruppen."
		},
		"hktViewInWidgetDialogDescription": {
			"en": "Dialog window to show a view. The shown view should contain a dialog-close-button.",
			"de": "Dialog-Fenster zur Anzeige einer View. Die angezigte View sollte einen Dialog-Close-Button besitzen."
		},
		"hktViewInWidgetSwipeDescription": {
			"en": "View-in-widget for a free to define number of subviews with swipe function.",
			"de": "View-in-widget mit einer definierbaren Anzahl an Unterviews, die per Swipe gewechselt werden."
		},
	}
);

//Navigation change callback
vis.navChangeCallbacks.push(function (view) {
	$('.hkt-nav-state').each(function () {
		var $this = $(this);
		if ($this.attr('data-vis-nav') === view) {
			$this.removeClass('state-default');
			$this.addClass('state-active');
		} else {
			$this.addClass('state-default');
			$this.removeClass('state-active');
		}
	});
});

// this code can be placed directly in vis-homekittiles.html
vis.binds["vis-homekittiles"] = {
    version: "0.0.1",
    showVersion: function () {
        if (vis.binds["vis-homekittiles"].version) {
            console.log('Version vis-homekittiles: ' + vis.binds["vis-homekittiles"].version);
            vis.binds["vis-homekittiles"].version = null;
        }
    },
    //VIS Edit Info Texte - thanx @inventwo ;)
	infoText: function (widAttr, data) {
		let text = "";

		if 		(data[1] === "hktButtonDialogClose")	{ text = "hktButtonDialogCloseDescription";		}
		else if (data[1] === "hktButtonNavigation")		{ text = "hktButtonNavigationDescription";		}
		else if (data[1] === "hktButtonSet")			{ text = "hktButtonSetDescription";				}
		else if (data[1] === "hktButtonSetNavigation")	{ text = "hktButtonSetNavigationDescription";	}
		else if (data[1] === "hktDatepicker")			{ text = "hktDatepickerDescription";			}
		else if (data[1] === "hktNotification")			{ text = "hktNotificationDescription";			}
		else if (data[1] === "hktRadiobuttons")			{ text = "hktRadiobuttonsDescription";			}
		else if (data[1] === "hktSettingsBool")			{ text = "hktSettingsBoolDescription";			}
		else if (data[1] === "hktSettingsValue")		{ text = "hktSettingsValueDescription";			}
		else if (data[1] === "hktSwitchBool")			{ text = "hktSwitchBoolDescription";			}
		else if (data[1] === "hktValue")				{ text = "hktValueDescription";					}
		else if (data[1] === "hktViewInWidgetDialog")	{ text = "hktViewInWidgetDialogDescription";	}
		else if (data[1] === "hktViewInWidgetSwipe")	{ text = "hktViewInWidgetSwipeDescription";		}
		else if (data[1] === "emptyText")				{ text = "";									}
		return {input: `<span>${_(text)}</span>`};
	},
	//Radiobuttons - copied from jqui to don't force jqui button styles
	radio: function (el, options, process) {
		var $this    = $(el);
		var id = $this.parent().parent().attr('id');
		if (id && id.match(/_removed$/)) {
			return;
		}

		if (!process) {
			setTimeout(function () {
				vis.binds['vis-homekittiles'].radio(el, process, true);
			}, 50);
			return;
		}
		var settings = $.extend({}, options);
		var oid      = $this.attr('data-oid');

		function onChange(e, newVal) {
			$this.find('input').removeAttr('checked');
			if (newVal === true || newVal === 'true') {
				newVal = 1;
			} else
			if (newVal === false || newVal === 'false') {
				newVal = 0;
			}
			$this.find('input').prop('checked', false);
			$this.find('input[value="' + newVal + '"]').prop('checked', true);
			$this.find('input').each(function () {
				if ($(this).button('instance')) $(this).button('refresh');
			});
		}

		// Observable -> Buttonset
		if (oid) {
			vis.states.bind(oid + '.val', onChange);

			// remember all ids, that bound
			$this.parent().parent()
				.data('bound', [oid + '.val'])
				// remember bind handler
				.data('bindHandler', onChange);

			var val = vis.states.attr(oid + '.val');

			if (val === true  || val === 'true')  {
				val = 1;
			}
			if (val === false || val === 'false') {
				val = 0;
			}

			setTimeout(function () {
				console.log(val + ' ' + $this.find('input[value="' + val + '"]').length);
				$this.find('input').prop('checked', false);
				$this.find('input[value="' + val + '"]').prop('checked', true);
				//$this.buttonset(settings);	//don't force styles

				$this.find('input').each(function () {
					if ($this.button('instance')) {
						$(this).button('refresh');
					}
				});

				if (!vis.editMode) {
					// Buttonset -> Observable
					$this.find('input').on('click touchstart', function () {
						// Protect against two events
						if (vis.detectBounce(this)) return;

						var val = $(this).val();
						var f = parseFloat(val);
						if (f.toString() === val.toString()) {
							vis.setValue(oid, f);
						} else {
							vis.setValue(oid, val);
						}
					});
				}
			}, 50);
		}
	},
	//Datepicker - copied from jqui to don't force jqui button styles
	datepicker: function (el, options) {
		var $this = $(el);
		var oid = $this.attr('data-oid');
		var datepickerOptions = $.extend(true, {
			dateFormat:      'yy-mm-dd',
			monthNamesShort: vis.binds.jqueryui.shortMonths[vis.language],
			monthNames:      vis.binds.jqueryui.months[vis.language],
			dayNamesMin:     vis.binds.jqueryui.shortWeekDays[vis.language],
			showAnim:        'fadeIn',
			firstDay: 1,
			currentText:     vis.binds.jqueryui.currentText[vis.language],
			closeText:       vis.binds.jqueryui.closeText[vis.language]

		}, options);

		if (!vis.editMode) $this.datepicker(datepickerOptions);

		function onChange(e, newVal) {
			$this.val(newVal);
		}

		if (oid) {
			$this.change(function () {
				vis.setValue(oid, $(this).val());
			});

			vis.states.bind(oid + '.val', onChange);

			// remember all ids, that bound
			$this.parent().parent()
				.data('bound', [oid + '.val'])
				// remember bind handler
				.data('bindHandler', onChange);

			$this.val(vis.states.attr(oid + '.val'));
		}
	},
	//View in widget dialog - copied from jqui to don't force jqui button styles
	dialogContainer: function (el, options, persistent, preload) {
		var $dlg = $(el).parent().find('div.vis-widget-dialog');

		var id = $(el).parent().attr('id');
		if (id && id.match(/_removed$/)) {
			return;
		}

		if (!$dlg.length) {
			setTimeout(function () {
				vis.binds['vis-homekittiles'].dialogContainer(el, options, persistent, preload);
			}, 200);
			return;
		}

		options.width     = options.dialog_width;
		options.height    = options.dialog_height;
		options.top       = options.dialog_top;
		options.left      = options.dialog_left;
		options.minHeight = options.height;
		options.minWidth  = options.width;

		$dlg.dialog($.extend({
			autoOpen: false,
			open: function () {
				$(this).parent().find('.ui-widget-header button .ui-button-text').html('');
				$(this).parent().css('z-index', 998);
				//touchscreen fix
				$dlg.find('.vis-view-container').each(function () {
					var cview = $(this).attr('data-vis-contains');
					if (!vis.views[cview]) {
						$(this).append('error: view not found.');
						return false;
					} else if (cview === vis.activeView) {
						$(this).append('error: view container recursion.');
						return false;
					}
					var $this = this;
					vis.renderView(cview, cview, false, function (_view) {
						$('#visview_' + _view)
								.appendTo($this)
								.show();
					});
				});

				//add and remove classes for styling
				//main window
				$(this).parent().addClass('homekitTiles dialog');
				$(this).parent().removeClass('ui-widget ui-widget-content ui-corner-all ui-front ui-draggable ui-resizable');
				//head
				$(this).parent().find('div.ui-dialog-titlebar').addClass('header').removeClass('ui-widget-header ui-corner-all ui-draggable-handle');
				//title
				$(this).parent().find('span.ui-dialog-title').addClass('title').removeClass('ui-dialog-title');
				//close button
				$(this).parent().find('button.ui-dialog-titlebar-close').remove();
				//content
				$(this).parent().find('div.ui-dialog-content').addClass('content');//.removeClass('vis-widget-dialog ui-widget-content');
				//resizable
				$(this).parent().find('div.ui-resizable-handle').remove();

				//set OID on open
				if (options.setIdOnOpenClose && options.setValueOnOpen) vis.setValue(options.setIdOnOpenClose, options.setValueOnOpen);

				//size window
				if (options.height)   $(this).css('height', options.height);
				if (options.width)    $(this).css('width',  options.width);

				//position window
				if (options.top  || options.top  === 0 || options.top  === '0') $(this).parent().css('top',  options.top);
				if (options.left || options.left === 0 || options.left === '0') $(this).parent().css('left', options.left);
				
				//scroll content
				if (options.overflowX) $(this).css('overflow-x', options.overflowX);
				if (options.overflowY) $(this).css('overflow-y', options.overflowY);

				//arrows
				if (options.arrowDirection) $(this).parent().addClass('arrow-' + options.arrowDirection);


				//$id.parent().find('.ui-state-focus').blur();

				//var $closeButton = $(this).parent().find('button.ui-dialog-titlebar-close');
				//$closeButton.off('touchend').on('touchend', function (event) {
				//	event.stopPropagation();
				//	$dlg.dialog('close');
				//	var $view = $dlg.find('.vis-view');
				//	if (!$view.data('persistent')) {
				//		vis.destroyView($view.data('view'), $view.data('view'));
				//	}
				//	return false;
				//});
			},
			close: function () {
				if ($dlg.data('timer')) {
					clearTimeout($dlg.data('timer'));
					$dlg.data('timer', null);
				}
				//set OID on close
				if (options.setIdOnOpenClose && options.setValueOnClose) vis.setValue(options.setIdOnOpenClose, options.setValueOnClose);

				vis.destroyUnusedViews();
			}
		}, options));

		//if (persistent) $dlg.find('.vis-view-container').data('persistent', persistent);

		if (!vis.editMode) {
			$(el).parent().find('div.vis-widget-body').on('click touchend', function (event) {
				event.stopPropagation();
				// Protect against two events
				if (vis.detectBounce(this)) return;

				var $id =  $('#' + $(this).parent().attr('id') + '_dialog');
				$id.dialog('open');
				return false;
			});
		} else {
			$(el).parent().find('div.vis-widget-body').show();
		}
	},
	//Dialog close button - copied from jqui to don't force jqui button styles
	dialogClose: function (el, options) {
		$(el).click(function () {
			if (options.dialogWidgetId) {
				$('#' + options.dialogWidgetId + '_dialog').dialog('close');
			} else {
				var $parent = $(this).parent().parent().parent();
				var $dlg = $parent.find('.vis-widget-dialog');
				if ($dlg.length) {
					$dlg.dialog('close');
					return;
				}
				$parent = $parent.parent();
				$dlg = $parent.find('.vis-widget-dialog');
				if ($dlg.length) {
					$dlg.dialog('close');
					return;
				}
				$parent = $parent.parent();
				$dlg = $parent.find('.vis-widget-dialog');
				if ($dlg.length) {
					$dlg.dialog('close');
					return;
				}
				$parent = $parent.parent();
				$dlg = $parent.find('.vis-widget-dialog');
				if ($dlg.length) {
					$dlg.dialog('close');
					return;
				}
			}
		});
	},
	//Navigation active
	hktNavigationActive: function (el) {
		var $this = $(el);
		var view = $this.attr('data-vis-nav');
		if (window.location.hash.slice(1) === view) {
			$this.removeClass('state-default').addClass('state-active');
		}
	},
	//Navigate to other views
	hktNavigation: function (el) {
		var $this = $(el);
		var view = $this.attr('data-vis-nav');
		if (!vis.editMode && view) {
			var $this = $(el);
			var moved = false;
			$this.on('click touchend', function (e) {
				// Protect against two events
				if (vis.detectBounce(this)) return;
				if (moved) return;
				vis.changeView(view, view);
			}).on('touchmove', function () {
				moved = true;
			}).on('touchstart', function () {
				moved = false;
			});
		}
	},
	
	//Add elements to widgets 
	addButtonIcon: function (el, data) {
		var $this = $(el);
		var html = '';
		
		if (data.icon !== '' && data.icon !== undefined) html += `<img class="` + (data.iconRound ? 'round' : '') + `"  src="${data.icon}">`;
		
		$this.html(html);
	},
	addLabelGroup1: function (el, data) {
		var $this = $(el);
		var html = '';
		
		if (data.label)      html += `<span class="label">${data.label}</span>`;
		if (data.label2pre !== undefined || data.label2oid !== undefined || data.label2unit !== undefined || data.label2post !== undefined) html += `<br>`;
		if (data.label2pre)  html += `<span class="label2pre">${data.label2pre} </span>`;
		if (data.label2oid)  html += `<span class="label2value">${vis.states.attr(data.label2oid + '.val')}</span>`;
		if (data.label2unit) html += `<span class="label2unit">${data.label2unit}</span>`;
		if (data.label2post) html += `<span class="label2post"> ${data.label2post}</span>`;
		
		$this.html(html);

		// subscribe on updates of value
		if (data.label2oid) { vis.states.bind(data.label2oid + '.val', function (e, newVal, oldVal) { $this.find('.label2value').html(String(newVal)) }); }
	},
	addLabelGroup2: function (el, data) {
		var $this = $(el);
		var html = '';

		if (data.label3pre)  html += `<span class="label3pre">${data.label3pre} </span>`;
		if (data.label3oid)  html += `<span class="label3value">${vis.states.attr(data.label3oid + '.val')}</span>`;
		if (data.label3unit) html += `<span class="label2unit">${data.label3unit}</span>`;
		if (data.label3post) html += `<span class="label3post"> ${data.label3post}</span>`;
		if (data.label4pre !== undefined || data.label4oid !== undefined || data.label4unit !== undefined || data.label4post !== undefined) html += `<br>`;
		if (data.label4pre)  html += `<span class="label4pre">${data.label4pre} </span>`;
		if (data.label4oid)  html += `<span class="label4value">${vis.states.attr(data.label4oid + '.val')}</span>`;
		if (data.label4unit) html += `<span class="label4unit">${data.label4unit}</span>`;
		if (data.label4post) html += `<span class="label4post"> ${data.label4post}</span>`;
		if (data.label5pre !== undefined || data.label5oid !== undefined || data.label5unit !== undefined || data.label5post !== undefined) html += `<br>`;
		if (data.label5pre)  html += `<span class="label5pre">${data.label5pre} </span>`;
		if (data.label5oid)  html += `<span class="label5value">${vis.states.attr(data.label5oid + '.val')}</span>`;
		if (data.label5unit) html += `<span class="label5unit">${data.label5unit}</span>`;
		if (data.label5post) html += `<span class="label5post"> ${data.label5post}</span>`;

		$this.html(html);

		// subscribe on updates of values
		if (data.label3oid) { vis.states.bind(data.label3oid + '.val', function (e, newVal, oldVal) { $this.find('.label3value').html(String(newVal)) }); }
		if (data.label4oid) { vis.states.bind(data.label4oid + '.val', function (e, newVal, oldVal) { $this.find('.label4value').html(String(newVal)) }); }
		if (data.label5oid) { vis.states.bind(data.label5oid + '.val', function (e, newVal, oldVal) { $this.find('.label5value').html(String(newVal)) }); }
	},
	addIncrement: function (el, data) {
		var $this = $(el);
		var html = '';
		
		function showHideIncrement(show) {
			if (show) {
				if (data.incrementPlusShow || data.incrementMinusShow) {

					if (data.incrementPlusShow) {
						html += `<div class="incrementPlus"`;
						html += `data-oid="${data.incrementOid}"`;
						html += `data-vis-step="${data.incrementPlusValue}"`;
						html += `data-val="${data.incrementOid}"`;
						html += `>+</div>`;
					}
					if (data.incrementMinusShow) {
						html += `<div class="incrementMinus"`;
						html += `data-oid="${data.incrementOid}"`;
						html += `data-vis-step="${data.incrementMinusValue}"`;
						html += `data-val="${data.incrementOid}"`;
						html += `>-</div>`;
					}
					$this.html(html);
					vis.binds.basic.increment($this.parent().find('.incrementPlus'), data.incrementValueMax);
					vis.binds.basic.increment($this.parent().find('.incrementMinus'), data.incrementValueMin);
				}
			} else {
				html = '';
				$this.html(html);
			}	
		}

		//add incrementbuttons on startup
		if (vis.editMode || !data.incrementShowOnlyIfTrue || data.incrementShowOnlyIfTrue && vis.states.attr(data.oid + '.val')) {
			showHideIncrement(true);
		} else {
			showHideIncrement(false);
		}

		// subscribe on updates of values
		if (data.oid) { vis.states.bind(data.oid + '.val', function (e, newVal, oldVal){
			if (data.incrementShowOnlyIfTrue) showHideIncrement(newVal);
		});}
	},
	addBlockOperation: function (el, data) {
		var $this = $(el);
		var html = '';
		
		function blocked(blocked) {
			if (blocked) {
				html += `<div class="blocked" style="width: 100%; height:100%; position: absolute; top: 0; left: 0;"></div>`;
			} else {
				html = '';
			}

			//add blocked icon
			if (data.blockOperationShowIcon) {
				if (vis.editMode && !data.blockOperationIconNotInEditor || !vis.editMode && blocked) {
					if (data.blockOperationIcon) html += `<img class="blockedIcon" src="${data.blockOperationIcon}">`;
				}
			}

			$this.html(html);
		}


		//get value for blocked on startup
		var currentState = false;
		if (data.blockOperationUseDifferentOID) {
			currentState = vis.states.attr(data.blockOperationOID + '.val');
		} else {
			currentState = vis.states.attr(data.oid + '.val');
		}

		//set blocked on startup
		if (data.blockOperationIfTrue && currentState == true || data.blockOperationIfFalse && currentState != true) {
			blocked(true);
		} else {
			blocked(false);
		}

		// subscribe on updates of values
		if (data.blockOperationIfTrue || data.blockOperationIfFalse) {
			function updateBlocked(stateValue) {
				if (data.blockOperationIfTrue && stateValue == true || data.blockOperationIfFalse && stateValue != true) {
					blocked(true);
				} else {
					blocked(false);
				}
			}

			if (data.blockOperationUseDifferentOID) { 
				vis.states.bind(data.blockOperationOID + '.val', function (e, newVal, oldVal){ updateBlocked(newVal); });
			} else {
				vis.states.bind(data.oid + '.val', function (e, newVal, oldVal){ updateBlocked(newVal); });
			}
		}
	},
	addAckIcon: function (el, data) {
		var $this = $(el);
		var html = '';
		
		function showHideIcon(show) {
			if (show) {
				html += `<img class="icon`;
				if (data.ackUseSpin) html += ` spin`
				html += `" src="${data.ackIcon}">`;	
			} else {
				html = '';
			}
			$this.html(html);
		}

		//add incrementbuttons on startup
		if (
			(data.ackShowIcon && !vis.editMode && !data.ackInvertFunction && !vis.states.attr(data.oid + '.ack')) || 
			(data.ackShowIcon && !vis.editMode && data.ackInvertFunction && vis.states.attr(data.oid + '.ack')) || 
			(data.ackShowIcon && vis.editMode && !data.ackIconNotInEditor)
		) {
			showHideIcon(true);
		} else {
			showHideIcon(false);
		}

		// subscribe on updates of values
		if (data.ackShowIcon && data.oid) { vis.states.bind(data.oid + '.ack', function (e, newVal, oldVal){
			if (data.ackInvertFunction) {
				showHideIcon(newVal);
			} else {
				showHideIcon(!newVal);
			}
			
		});}
	},
};

vis.binds["vis-homekittiles"].showVersion();