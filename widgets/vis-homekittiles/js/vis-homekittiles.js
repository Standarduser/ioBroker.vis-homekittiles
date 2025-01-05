/*
	ioBroker.vis vis-homekittiles Widget-Set
	Copyright 2024 Standarduser
*/
"use strict";

/* global $, vis, systemDictionary */

// add translations for edit mode
$.extend(
	true,
	systemDictionary,
	{
		"ackIcon":						{	"en": "Icon for ack",					"de": "Icon für Bestätigung"				},
		"ackIconNotInEditor":			{	"en": "Don't show icon in editor",		"de": "Icon im Editor nicht anzeigen"		},
		"ackInvertFunction":			{	"en": "Invert function",				"de": "Funktion invertieren"				},
		"ackShowIcon": 					{	"en": "Show icon for ack",				"de": "Icon für Bestätigung anzeigen"		},
		"ackUseSpin":					{	"en": "Spin icon",						"de": "Icon drehen lassen"					},
		"activeProfileLabel":			{	"en": "Label heating profile",			"de": "Beschriftung Heizprofil"				},
		"activeProfileTexts":			{	"en": "Names of heating profile",		"de": "Namen des Heizprofils"				},
		"activeProfileValues":			{	"en": "Values of heating profile",		"de": "Werte des Heizprofils"				},
		"actualHumidityLabel":			{	"en": "Label humidity",					"de": "Beschriftung Feuchte"				},
		"actualTemperatureLabel":		{	"en": "Label actual temperature",		"de": "Beschriftung aktuelle Temperatur"	},
		"aligncenter":					{	"en": "center",							"de": "zentriert"							},
		"aligncontent":					{	"en": "Align with content",				"de": "Ausrichtung wie Inhalt"				},
		"alignleft":					{	"en": "left",							"de": "links"								},
		"alignright":					{	"en": "right",							"de": "rechts"								},
		"allthesame":					{	"en": "all the same",					"de": "Alle gleich"							},
		"arrowDirection":				{	"en": "Show arrow on dialog",			"de": "Pfeil am Dialog anzeigen"			},
		"arrowsShow":					{	"en": "Arrows show",					"de": "Pfeile anzeigen"						},
		"arrowLeftImage":				{	"en": "Arrows image for left",			"de": "Pfeile Bild für Links"				},
		"arrowRightImage":				{	"en": "Arrows image for right",			"de": "Pfeile Bild für Rechts"				},
		"arrowsSize":					{	"en": "Arrows size [%]",				"de": "Pfeile Größe [%]"					},
		"arrowsPosition":				{	"en": "Arrows position [%]",			"de": "Pfeile Position [%]"					},
		"arrowsOpacity":				{	"en": "Arrows opacity",					"de": "Pfeile Transparenz"					},
		"arrowsPulse":					{	"en": "Arrows pulsate",					"de": "Pfeile Pulsieren"					},
		"auto":							{	"en": "automatic",						"de": "automatisch"							},
		"autofillOids":					{	"en": "Autofill object IDs",			"de": "Objekt-IDs automatisch füllen"		},
		"blockOperationIcon":			{	"en": "Icon if blocked",				"de": "Icon wenn gesperrt"					},
		"blockOperationIconNotInEditor":{	"en": "Don't show icon in editor",		"de": "Icon im Editor nicht anzeigen"		},
		"blockOperationIfTrue": 		{	"en": "Block operation if true",		"de": "Bedienung bei true sperren"			},
		"blockOperationIfFalse":		{	"en": "Block operation if false",		"de": "Bedienung bei false sperren"			},
		"blockOperationShowDisabled":	{	"en": "Show disabled",					"de": "Als deaktiviert anzeigen"			},
		"blockOperationShowIcon":		{	"en": "Show icon if blocked",			"de": "Icon anzeigen wenn gesperrt"			},
		"blockOperationUseDifferentOID":{	"en": "Use different OID",				"de": "Verwende andere OID"					},
		"buttonsAdd":					{	"en": "Add buttons",					"de": "Schaltflächen hinzufügen"			},
		"closebuttonLabel":				{	"en": "Label close-button",				"de": "Beschriftung Schließen-Button"		},
		"closeDialog_":					{	"en": "Close dialog ",					"de": "Dialog schließen "					},
		"colAttr":						{	"en": "Attribute in JSON ",				"de": "Attribut in JSON "					},
		"colName":						{	"en": "Rename attribute ",				"de": "Attribut umbenennen "				},
		"colWidth":						{	"en": "Column width ",					"de": "Spaltenbreite "						},
		"comma":						{	"en": "Comma as separator",				"de": "Komma als Trennzeichen"				},
		"comparisonEqual":				{	"en": "==",								"de": "=="									},
		"comparisonGreater":			{	"en": ">",								"de": ">"									},
		"comparisonGreaterEqual":		{	"en": ">=",								"de": ">="									},
		"comparisonLower":				{	"en": "<",								"de": "<"									},
		"comparisonLowerEqual":			{	"en": "<=",								"de": "<="									},
		"comparisonNotEqual":			{	"en": "!=",								"de": "!="									},
		"dateformat":					{	"en": "Date format",					"de": "Datumsformat"						},
		"decimals":						{	"en": "Decimals",						"de": "Nachkommastellen"					},
		"description":					{	"en": "Description",					"de": "Beschreibung"						},
		"dialogWidgetId":				{	"en": "Dialog widget ID",				"de": "Dialog-Widget-ID"					},
		"directionHorizontal":			{	"en": "Horizontal orientation",			"de": "Horizontale Ausrichtung"				},
		"displaystyle":					{	"en": "Display style",					"de": "Darstellungsart"						},
		"english":						{	"en": "English",						"de": "Englisch"							},
		"ever":							{	"en": "Ever",							"de": "Immer"								},
		"everAndEmptyLine":				{	"en": "Ever + empty line",				"de": "Immer + leere Zeile"					},
		"everAndNotice":				{	"en": "Ever + notice",					"de": "Immer + Hinweis"						},
		"factor":						{	"en": "Multiplicator",					"de": "Multiplikator"						},
		"german":						{	"en": "German",							"de": "Deutsch"								},
		"group_acknowledge":			{	"en": "Acknowledged change",			"de": "Bestätigte Änderung"					},
		"group_arrows":					{	"en": "Arrows",							"de": "Pfeile"								},
		"group_blockOperation":			{	"en": "Block operation",				"de": "Bedienung sperren"					},
		"group_buttons":				{	"en": "Buttons",						"de": "Schaltflächen"						},
		"group_column":					{	"en": "Columns",						"de": "Spalten"								},
		"group_dialodButtons":			{	"en": "Dialog buttons",					"de": "Dialog-Schaltflächen"						},
		"group_dialogContent":			{	"en": "Dialog content",					"de": "Dialog-Inhalt"						},
		"group_dialogSettings":			{	"en": "Dialog settings",				"de": "Dialog-Einstellungen"				},
		"group_increment":				{	"en": "Increment value",				"de": "Wert inkrementieren"					},
		"group_label":					{	"en": "Label",							"de": "Beschriftung"						},
		"group_labelGroup1":			{	"en": "Label group 1",					"de": "Beschriftungsgruppe 1"				},
		"group_labelGroup2":			{	"en": "Label group 2",					"de": "Beschriftungsgruppe 2"				},
		"group_notification":			{	"en": "Notification ",					"de": "Benachrichtigung "					},
		"group_select":					{	"en": "Select",							"de": "Select"								},
		"group_signalpics":				{	"en": "Signal pictures",				"de": "Signalbilder"						},
		"group_thermostatDialog":		{	"en": "Thermostat dialog",				"de": "Thermostat-Dialog"					},
		"group_views":					{	"en": "Views",							"de": "Views"								},
		"headline1":					{	"en": "Headline 1",						"de": "Überschrift 1"						},
		"headline2":					{	"en": "Headline 2",						"de": "Überschrift 2"						},
		"headline3":					{	"en": "Headline 3",						"de": "Überschrift 3"						},
		"htmlDialogPadding":			{	"en": "HTML dialog padding",			"de": "HTML-Diaglog Innenabstand"			},
		"htmlTextPosition":				{	"en": "HTML text position",				"de": "HTML Textausrichtung"				},
		"htmlTextSize":					{	"en": "HTML text size",					"de": "HTML Textgröße"						},
		"icon_":						{	"en": "Icon button ",					"de": "Icon Schaltfläche "					},
		"iconButton_":					{	"en": "Icon button ",					"de": "Icon Schaltfläche "					},
		"iconLowBat":					{	"en": "Icon for low battery",			"de": "Icon für Batterie schwach"			},
		"iconUnreach":					{	"en": "Icon for unreach",				"de": "Icon für nicht erreichbar"			},
		"incrementPlusShow":			{	"en": "Show (+)-Button",				"de": "Zeige (+)-Button"					},
		"incrementMinusShow":			{	"en": "Show (-)-Button",				"de": "Zeige (-)-Button"					},
		"incrementPlusValue":			{	"en": "Step (+)",						"de": "Schritt bei (+)"						},
		"incrementMinusValue":			{	"en": "Step (-)",						"de": "Schritt bei (-)"						},
		"incrementValueMax":			{	"en": "Maximum value",					"de": "Maximalwert"							},
		"incrementValueMin":			{	"en": "Minimum value",					"de": "Minimalwert"							},
		"incrementShowOnlyIfTrue":		{	"en": "Show only if switch is on",		"de": "Nur anzeigen, wenn Schalter an"		},
		"indicator":					{	"en": "Indicator",						"de": "Indikator"							},
		"icon":							{	"en": "Icon",							"de": "Icon"								},
		"iconRound":					{	"en": "Icon round",						"de": "Icon rund anzeigen"					},
		"iconColored":					{	"en": "Icon colored when off",			"de": "Icon farbig wenn aus"				},
		"label":						{   "en": "Label",							"de": "Beschriftung"						},
		"label_":						{   "en": "Label ",							"de": "Beschriftung "						},
		"label2comma":					{	"en": "Label 2 Comma as separator",		"de": "Beschriftung 2 Komma als Trennz."	},
		"label2decimals":				{	"en": "Label 2 Decimals",				"de": "Beschriftung 2 Nachkommastellen"		},
		"label2factor":					{	"en": "Label 2 Multiplicator",			"de": "Beschriftung 2 Multiplikator"		},
		"label2oid":					{	"en": "Label 2 OID",					"de": "Beschriftung 2 OID"					},
		"label2post":					{	"en": "Label 2 text end",				"de": "Beschriftung 2 Text Ende"			},
		"label2pre":					{	"en": "Label 2 text start",				"de": "Beschriftung 2 Text Anfang"			},
		"label2tdp":					{	"en": "Label 2 Thousends sep.",			"de": "Beschriftung 2 Tausendertrennz."		},
		"label2unit":					{	"en": "Label 2 unit",					"de": "Beschriftung 2 Einheit"				},
		"label3comma":					{	"en": "Label 3 Comma as separator",		"de": "Beschriftung 3 Komma als Trennz."	},
		"label3decimals":				{	"en": "Label 3 Decimals",				"de": "Beschriftung 3 Nachkommastellen"		},
		"label3factor":					{	"en": "Label 3 Multiplicator",			"de": "Beschriftung 3 Multiplikator"		},
		"label3oid":					{	"en": "Label 3 OID",					"de": "Beschriftung 3 OID"					},
		"label3post":					{	"en": "Label 3 text end",				"de": "Beschriftung 3 Text Ende"			},
		"label3pre":					{	"en": "Label 3 text start",				"de": "Beschriftung 3 Text Anfang"			},
		"label3tdp":					{	"en": "Label 3 Thousends sep.",			"de": "Beschriftung 3 Tausendertrennz."		},
		"label3unit":					{	"en": "Label 3 unit",					"de": "Beschriftung 3 Einheit"				},
		"label4comma":					{	"en": "Label 4 Comma as separator",		"de": "Beschriftung 4 Komma als Trennz."	},
		"label4decimals":				{	"en": "Label 4 Decimals",				"de": "Beschriftung 4 Nachkommastellen"		},
		"label4factor":					{	"en": "Label 4 Multiplicator",			"de": "Beschriftung 4 Multiplikator"		},
		"label4oid":					{	"en": "Label 4 OID",					"de": "Beschriftung 4 OID"					},
		"label4post":					{	"en": "Label 4 text end",				"de": "Beschriftung 4 Text Ende"			},
		"label4pre":					{	"en": "Label 4 text start",				"de": "Beschriftung 4 Text Anfang"			},
		"label4tdp":					{	"en": "Label 4 Thousends sep.",			"de": "Beschriftung 4 Tausendertrennz."		},
		"label4unit":					{	"en": "Label 4 unit",					"de": "Beschriftung 4 Einheit"				},
		"label5comma":					{	"en": "Label 5 Comma as separator",		"de": "Beschriftung 5 Komma als Trennz."	},
		"label5decimals":				{	"en": "Label 5 Decimals",				"de": "Beschriftung 5 Nachkommastellen"		},
		"label5factor":					{	"en": "Label 5 Multiplicator",			"de": "Beschriftung 5 Multiplikator"		},
		"label5oid":					{	"en": "Label 5 OID",					"de": "Beschriftung 5 OID"					},
		"label5post":					{	"en": "Label 5 text end",				"de": "Beschriftung 5 Text Ende"			},
		"label5pre":					{	"en": "Label 5 text start",				"de": "Beschriftung 5 Text Anfang"			},
		"label5tdp":					{	"en": "Label 5 Thousends sep.",			"de": "Beschriftung 5 Tausendertrennz."		},
		"label5unit":					{	"en": "Label 5 unit",					"de": "Beschriftung 5 Einheit"				},
		"labelButton_":					{	"en": "Label button ",					"de": "Beschriftung Schaltfläche "			},
		"lowBatLabel":					{	"en": "Label battery low",				"de": "Beschriftung Batterie schwach"		},
		"maxRows":						{	"en": "Number of rows (max.)",			"de": "Anzahl Zeilen (max.)"				},
		"never":						{	"en": "Never",							"de": "Niemals"								},
		"noLineBreak":					{	"en": "No line breaks",					"de": "Keine Zeilenumbrüche"				},
		"noticeEmptyTable":				{	"en": "Notice if table is emtpy",		"de": "Hinweis wenn Tabelle leer"			},
		"notification1oid":				{	"en": "Notification 1 OID",				"de": "Benachrichtigung 1 OID"				},
		"notification2oid":				{	"en": "Notification 2 OID",				"de": "Benachrichtigung 2 OID"				},
		"notification3oid":				{	"en": "Notification 3 OID",				"de": "Benachrichtigung 3 OID"				},
		"notification4oid":				{	"en": "Notification 4 OID",				"de": "Benachrichtigung 4 OID"				},
		"notification5oid":				{	"en": "Notification 5 OID",				"de": "Benachrichtigung 5 OID"				},
		"notification1showZero":		{	"en": "Notification 1 show zero",		"de": "Benachrichtigung 1 zeige Null"		},
		"notification2showZero":		{	"en": "Notification 2 show zero",		"de": "Benachrichtigung 2 zeige Null"		},
		"notification3showZero":		{	"en": "Notification 3 show zero",		"de": "Benachrichtigung 3 zeige Null"		},
		"notification4showZero":		{	"en": "Notification 4 show zero",		"de": "Benachrichtigung 4 zeige Null"		},
		"notification5showZero":		{	"en": "Notification 5 show zero",		"de": "Benachrichtigung 5 zeige Null"		},
		"numberOfButtons":				{	"en": "Number of buttons",				"de": "Anzahl der Schaltflächen"			},
		"numberOfCols":					{	"en": "Number of Columns",				"de": "Anzahl Spalten"						},
		"numberOfSignals":				{	"en": "Number of signal pictures",		"de": "Anzahl Signalbilder"					},
		"numberOfViews":				{	"en": "Number of views",				"de": "Anzahl der Views"					},
		"oid_":							{	"en": "Object ID ",						"de": "Objekt-ID "							},
		"oidActive":					{	"en": "Object ID for Active State",		"de": "Objekt-ID für Aktiv"					},
		"oidActiveProfile":				{	"en": "Object ID for heating profile",	"de": "Objekt-ID für Heizprofil"			},
		"oidActualTemperature":			{	"en": "Object ID for temperature",		"de": "Objekt-ID für Temperatur"			},
		"oidBlockOperation":			{	"en": "OID for block operation",		"de": "OID für Bedienung sperren"			},
		"oidHumidity":					{	"en": "Object ID for humidity",			"de": "Objekt-ID für Feuchte"				},
		"oidIncrement":					{	"en": "Object ID",						"de": "Objekt-ID"							},
		"oidJsonTable":					{	"en": "Object ID for JSON Table",		"de": "Objekt-ID für JSON-Tabelle"			},
		"oidLowBat":					{	"en": "Object ID for low battery",		"de": "Objekt-ID für Batterie schwach"		},
		"oidOrLocalVar":				{	"en": "Object ID or local variable",	"de": "Objekt-ID oder Lokal-Variable"		},
		"oidSetPointMode":				{	"en": "Object ID for setpoint mode",	"de": "Objekt-ID für Sollwert Modus"		},
		"oidSetPointTemperature":		{	"en": "Object ID for setpoint temp",	"de": "Objekt-ID für Sollwert Temp."		},
		"oidSignal":					{	"en": "Object ID",						"de": "Objekt-ID"							},
		"oidUnreach":					{	"en": "Object ID for unreach",			"de": "Objekt-ID für nicht Erreichbar"		},
		"oidWindowState":				{	"en": "Object ID for window contact",	"de": "Objekt-ID für Fensterkontakt"		},
		"ownseparation":				{	"en": "own separation",					"de": "Eigene Aufteilung"					},
		"scrollable":					{	"en": "Scrollable",						"de": "Scrollbar"							},
		"separationselect":				{	"en": "Separation of buttons",			"de": "Aufteilung der Buttons"				},
		"separationvalues":				{	"en": "Separtion values (%)",			"de": "Aufteilung Werte (%)"				},
		"setIdOnOpenClose":				{	"en": "OID to set on open/close",		"de": "Beim Öffnen/Schließen OID setzen"	},
		"setpointTemperatureLabel":		{	"en": "Label setpoint temperature",		"de": "Beschriftung Sollwert Temperatur"	},
		"setpointModeLabel":			{	"en": "Label setpoint mode",			"de": "Beschriftung Sollwert Modus"			},
		"setpointModeValues":			{	"en": "Values setpoint mode",			"de": "Werte Sollwert Modus"				},
		"setpointModeTexts":			{	"en": "Names setpoint mode",			"de": "Namen Sollwert Modus"				},
		"setpointModeOperable":			{	"en": "Setpoint mode operable",			"de": "Sollwert Modus bedienbar"			},
		"setValueOnClose":				{	"en": "Value on close",					"de": "Wert bei Schließen"					},
		"setValueOnOpen":				{	"en": "Value on open",					"de": "Wert bei Öffnen"						},
		"showHeader":					{	"en": "Show header",					"de": "Kopfzeile anzeigen"					},
		"showLikeActive":				{	"en": "Allways show like active",		"de": "Immer als aktiv anzeigen"			},
		"showNotifications":			{	"en": "Show notifications",				"de": "Zeige Benachrichtigungen"			},
		"signalComparison":				{	"en": "Comparison",						"de": "Vergleichsoperator"					},
		"signalCompValue":				{	"en": "Comparison value",				"de": "Vergleichswert"						},
		"signalIcon":					{	"en": "Icon",							"de": "Icon"								},
		"signalDescription":			{	"en": "Description",					"de": "Beschreibung"						},
		"signalsNotInEditor":			{	"en": "Don't show signals in editor",	"de": "Signalbilder nicht im Editor"		},
		"smalllabel":					{	"en": "Small label",					"de": "kleine Beschriftung"					},
		"tdp":							{	"en": "Thousends separator",			"de": "Tausendertrennzeichen"				},
		"temperatureMin":				{	"en": "Minimum temperature",			"de": "Minimale Temperatur"					},
		"temperatureMax":				{	"en": "Maximum temperature",			"de": "Maximale Temperatur"					},
		"temperatureStep":				{	"en": "Temperature steps",				"de": "Schrittweite Temperatur"				},
		"text":							{	"en": "Text",							"de": "Text"								},
		"textalignCol":					{	"en": "Text-align column ",				"de": "Textausrichtung Spalte "				},
		"textalignHead":				{	"en": "Text-align header",				"de": "Textausrichtung Kopfzeile"			},
		"textlabel":					{	"en": "Text/Label",						"de": "Text/Beschriftung"					},
		"textstyle":					{	"en": "Style of text",					"de": "Stil des Textes"						},
		"texttemplate":					{	"en": "Text template",					"de": "Textvoreinstellung"					},
		"tile":							{	"en": "Tile",							"de": "Kachel"								},
		"tile big":						{	"en": "Tile (big)",						"de": "Kachel (groß)"						},
		"tile iconOnly":				{	"en": "Only icon",						"de": "nur Icon"							},
		"tile small":					{	"en": "Tile (small)",					"de": "Kachel (klein)"						},
		"tile textonly":				{	"en": "Only Text",						"de": "nur Text"							},
		"unit":							{	"en": "Unit",							"de": "Einheit"								},
		"value_":						{	"en": "Value ",							"de": "Wert "								},
		"valueButton_":					{	"en": "Value button ",					"de": "Wert Schaltfläche "					},
		"valueOn":						{	"en": "Value for ON",					"de": "Wert für EIN"						},
		"valueOff":						{	"en": "Value for OFF",					"de": "Wert für AUS"						},
		"view":							{	"en": "View",							"de": "View"								},
		"view_":						{	"en": "View ",							"de": "View "								},
		"windowStateLabel":				{	"en": "Label window contact",			"de": "Beschriftung Fensterkontakt"			},
		"windowStateTexts":				{	"en": "Value names of window contact",	"de": "Textwerte des Fensterkontakts"		},
		"windowStateValues":			{	"en": "Values of window contact",		"de": "Werte des Fensterkontakts"			},
		"unitHumidity":					{	"en": "Unit for humidity",				"de": "Einheit für Feuchte"					},
		"unitTemperature":				{	"en": "Unit for temperature",			"de": "Einheit für Temperatur"				},
		"unreachLabel":					{	"en": "Label unreach",					"de": "Beschriftung nicht erreichbar"		},

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
		"hktButtonSetNavigationSubmenuDescription": {
			"en": "This widget creates a set of buttons to navigate with a View-in-Widget8.",
			"de": "Das Widget erzeugt eine einstellbare Anzahl an Buttons für die Navigation mit einem View-in-Widget8."
		},
		"hktDatepickerDescription": {
			"en": "A Widget to pick a date.",
			"de": "Widget zur Auswahl eines Datums."
		},
		"hktHtmlDialogDescription": {
			"en": "Dialog window for displaying any content generated with HTML code. Buttons can be added via the dialog settings and configured in the 'Buttons' section.",
			"de": "Dialog-Fenster zur Anzeige von beliebigem Inhalt, der mit HTML-Code erzeugt wird. Über die Dialog-Einstellungen können Schaltflächen hinzugefügt und im Abschnitt 'Schaltflächen' konfiguriert werden."
		},
		"hktJsonTableDescription": {
			"en": "The widget generates a table from a JSON string. In order to format all columns, the correct/desired number must be entered. The order of the columns can be adjusted using the JSON attributes. If the table header should always be displayed, all columns should be named (rename attribute).",
			"de": "Das Widget generiert aus einem JSON-String eine Tabelle. Um alle Spalten formatieren zu können muss die richtige/gewünschte Anzahl eingetragen werden. Die Reihenfolge der Spalten kann über die JSON-Attribute angepasst werden. Wenn der Tabellenkopf immer angezeigt werden soll, sollten alle Spalten benannt sein (Attribut umbenennen)."
		},
		"hktLabelDescription": {
			"en": "A simple textfield with predefined styles.",
			"de": "Textfeld mit vordefinierten Stilen."
		},
		"hktNotificationDescription": {
			"en": "Notification for 5 different states.",
			"de": "Benachrichtigung für 5 verschiedene States."
		},
		"hktRadiobuttonsDescription": {
			"en": "Radiobuttons with a variable amount of buttons. The division of the buttons can be changed, but the sum of the values ​​must result in 100 (%).",
			"de": "Radiobuttons mit variabler Anzahl an Buttons. Die Aufteilung der Buttons kann verändert werden, dabei muss die Summe der Werte jedoch 100 (%) ergeben."
		},
		"hktSettingsBoolDescription": {
			"en": "Simple switch (on/off).",
			"de": "Einfacher Schalter (an/aus)."
		},
		"hktSettingsSelectDescription": {
			"en": "With the SELECT menu, plain texts can be selected via values lists and associated values will be set.",
			"de": "Mit dem Select-Menü können über Werte-Listen Klartexte ausgewählt und zugehörige Werte gesetzt werden."
		},
		"hktSettingsValueDescription": {
			"en": "Value with increment buttons.",
			"de": "Analogwert mit Inkrement-Tasten."
		},
		"hktThermostatDialogDescription": {
			"en": "Thermostat dialog that can be used for different thermostats, but is specifically adapted for Homematic. If an HmIP device is selected for the current temperature, the remaining data points are filled automatically.",
			"de": "Thermostat-Dialog, das für verschiedene Thermostate genutzt werden kann, jedoch speziell für Homematic angepasst ist. Wird für die aktuelle Temperatur ein HmIP-Gerät ausgewählt, werden die restlichen Datenpunkte automatisch befüllt."
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
			"en": "View-in-widget for a free to define number of subviews with swipe function. The 'arrow' settings can be used to add indicators to indicate that the widget can be 'swiped'.",
			"de": "View-in-widget mit einer definierbaren Anzahl an Unterviews, die per Swipe gewechselt werden. Über die 'Pfeil'-Einstellungen können Indikatoren als Hinweis hinzugefügt werden, dass das Widget 'geswiped' werden kann."
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

		if 		(data[1] === "hktButtonDialogClose")			{ text = "hktButtonDialogCloseDescription";				}
		else if (data[1] === "hktButtonNavigation")				{ text = "hktButtonNavigationDescription";				}
		else if (data[1] === "hktButtonSet")					{ text = "hktButtonSetDescription";						}
		else if (data[1] === "hktButtonSetNavigation")			{ text = "hktButtonSetNavigationDescription";			}
		else if (data[1] === "hktButtonSetNavigationSubmenu")	{ text = "hktButtonSetNavigationSubmenuDescription";	}
		else if (data[1] === "hktDatepicker")					{ text = "hktDatepickerDescription";					}
		else if (data[1] === "hktHtmlDialog")					{ text = "hktHtmlDialogDescription";					}
		else if (data[1] === "hktJsonTable")					{ text = "hktJsonTableDescription";						}
		else if (data[1] === "hktLabel")						{ text = "hktLabelDescription";							}
		else if (data[1] === "hktNotification")					{ text = "hktNotificationDescription";					}
		else if (data[1] === "hktRadiobuttons")					{ text = "hktRadiobuttonsDescription";					}
		else if (data[1] === "hktSettingsBool")					{ text = "hktSettingsBoolDescription";					}
		else if (data[1] === "hktSettingsSelect")				{ text = "hktSettingsSelectDescription";				}
		else if (data[1] === "hktSettingsValue")				{ text = "hktSettingsValueDescription";					}
		else if (data[1] === "hktSwitchBool")					{ text = "hktSwitchBoolDescription";					}
		else if (data[1] === "hktThermostatDialog")				{ text = "hktThermostatDialogDescription";				}
		else if (data[1] === "hktValue")						{ text = "hktValueDescription";							}
		else if (data[1] === "hktViewInWidgetDialog")			{ text = "hktViewInWidgetDialogDescription";			}
		else if (data[1] === "hktViewInWidgetSwipe")			{ text = "hktViewInWidgetSwipeDescription";				}
		else if (data[1] === "emptyText")						{ text = "";											}
		return {input: `<span>${_(text)}</span>`};
	},

	//Remove input fields for icons if displaystyle is textonly and add if not
	//Used at SwitchBool and ViewInWidgetDialog
	iconShowHideInputfields: function (widgetID, view, newId, attr, isCss) {

		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val = data.displaystyle;

			if (val == 'tile textonly') {
				vis.hideShowAttr('icon', false);
				vis.hideShowAttr('iconRound', false);
				vis.hideShowAttr('iconColored', false);
			} else {
				vis.hideShowAttr('icon', true);
				vis.hideShowAttr('iconRound', true);
				vis.hideShowAttr('iconColored', true);
			}

		});
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

		// Show/hide fields on placing widget
		if (vis.editMode) {
			setTimeout(function () {
				vis.binds["vis-homekittiles"].radioShowHideInputfields();
			}, 100);
		}
	},
	radioShowHideInputfields: function (widgetID, view, newId, attr, isCss) {

		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val = data.separationselect;

			if (val == 'ownseparation') {
				vis.hideShowAttr('separationvalues', true);
			} else {
				vis.hideShowAttr('separationvalues', false);
			}

		});
	},

	//Datepicker - copied from jqui to don't force jqui button styles
	hktDatepicker: function (el, options) {
		var $this = $(el);
		var oid = $this.attr('data-oid');
		var datepickerOptions = $.extend(true, {
			dateFormat:      $this.attr('data-dateformat'),
			monthNamesShort: vis.binds.jqueryui.shortMonths[vis.language],
			monthNames:      vis.binds.jqueryui.months[vis.language],
			dayNamesMin:     vis.binds.jqueryui.shortWeekDays[vis.language],
			showAnim:        'fadeIn',
			firstDay: 1,
			currentText:     vis.binds.jqueryui.currentText[vis.language],
			closeText:       vis.binds.jqueryui.closeText[vis.language]

		}, options);

		if (!vis.editMode) $this.hktDatepicker(datepickerOptions);

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

	//Switch
	switch: function (el, data) {
		var $this = $(el);
		var oid = data.oid;
		var trueVal = data.valueOn;
		var falseVal = data.valueOff;

		if (!trueVal || trueVal == '' || trueVal === 'true') trueVal = true;
		if (!falseVal || falseVal == '' || falseVal === 'false') falseVal = false;
		if (trueVal === 'false') trueVal = false;
		if (falseVal === 'true') falseVal = true;

		if (!vis.editMode) {
			var moved = false;
			$this.on('click touchend', function () {

				// Protect against two events
				if (vis.detectBounce(this)) return;
				if (moved) return;

				var val;

				if (oid) {

					val = vis.states[oid + '.val'];
					val = val.toString();

					if (val) {
						if (val === 'true') val = true;
						if (val === 'false') val = false;

						if (val == trueVal) {
							vis.setValue(oid, falseVal);
							$(this).parent().removeClass('state-active');
							$(this).parent().addClass('state-default');
						} else {
							vis.setValue(oid, trueVal);
							$(this).parent().removeClass('state-default');
							$(this).parent().addClass('state-active');
						}
					}
				}

			}).on('touchmove', function () {
				moved = true;
			}).on('touchstart', function () {
				moved = false;
			}).data('destroy', function (id, $widget) {
				$widget.off('click touchend').off('touchmove').off('touchstart');
			});
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

		const regexNumber = /\d+/;

		if (options.dialog_width	!== undefined)	options.width	= options.dialog_width.match(regexNumber);
		if (options.dialog_height	!== undefined)	options.height	= options.dialog_height.match(regexNumber);
		if (options.dialog_top		!== undefined)	options.top		= options.dialog_top.match(regexNumber);
		if (options.dialog_left		!== undefined)	options.left	= options.dialog_left.match(regexNumber);
		options.minHeight = options.height;
		options.minWidth = options.width;

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
				if (options.top  || options.top  === 0 || options.top  === '0') $(this).parent().css('top',  options.top  + 'px');
				if (options.left || options.left === 0 || options.left === '0') $(this).parent().css('left', options.left + 'px');

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
	//Select - copied from jqui to don't force jqui button styles
	multiselect: function (el) {
		var $this = $(el);
		var oid = $this.attr('data-oid');
		if (oid) $this.val(vis.states[oid + '.val']);

		$this.change(function () {
			var val = $this.val();
			if (parseFloat(val).toString() == val) val = parseFloat(val);
			if (val === 'true') val = true;
			if (val === 'false') val = false;
			if (!vis.editMode) vis.setValue(oid, val);
		});

		$this.val(vis.states[oid + '.val']);
		$this.prop('disabled', vis.editMode);
		var id =  $this.attr('id');

		function onChange(e, newVal) {
			var $select = $('#' + id);
			$select.val(newVal);
		}

		if (oid) {
			vis.states.bind(oid + '.val', onChange);
			// remember all ids, that bound
			$this.parent().parent()
				.data('bound', [oid + '.val'])
				// remember bind handler
				.data('bindHandler', onChange);
		}

		if (vis.editMode) {

			vis.bindWidgetClick($this.attr('data-view'), $this.attr('id').replace('_multiselect', ''));
			$this.parent().parent().resize(function () {
			}).data('destroy', function (id, $widget) {
				$widget.off('resize');
			});
		}
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
	//Format values if type is float
	formatValue: function (val, decimals, factor, comma, tdp) {

		//value is a number or float
		if (!isNaN(parseFloat(val))) {
			val = parseFloat(val);

			if (factor !== undefined && factor !== '') val = val * parseFloat(factor);
			if (decimals !== undefined && decimals !== '') val = val.toFixed(parseFloat(decimals, 10));

			if (tdp) {
				val = vis.binds.basic.formatValue(val, decimals ? parseInt(decimals) : 2, comma ? ".," : ",.");
			} else if (comma) {
				val = '' + val;
				val = val.replace('.', ',');
			}
		}
		return val;
	},
	//Increment function
	increment: function (el, minmax, delay, interval) {

		function fInterval($that) {
			vis.binds.basic.pressedNext = true;
			vis.binds.basic.pressed = null;
			var oid = $that.attr('data-oid');
			if (!vis.editMode) {
				var step = parseFloat($that.attr('data-vis-step'));
				var tmp  = parseFloat(vis.states[oid + '.val']) + step;
				if (step < 0) {
					if (tmp >= minmax) {
						vis.setValue($that.attr('data-oid'), tmp);
						vis.binds.basic.pressed = _setTimeout(fInterval, interval, $that);
					}
				} else {
					if (tmp <= minmax) {
						vis.setValue($that.attr('data-oid'), tmp);
						vis.binds.basic.pressed = _setTimeout(fInterval, interval, $that);
					}
				}
			}
		}

		function intervalStart(e) {
			vis.binds.basic.pressedNext = false;
			var $this = $(this);
			var oid = $this.attr('data-oid');

			if (vis.binds.basic.pressed) {
				clearInterval(vis.binds.basic.pressed);
				vis.binds.basic.pressed = null;
			}

			vis.binds.basic.pressed = setTimeout(fInterval, delay, $this);
		}

		if (!vis.editMode) {
			var moved = false;
			$(el).on('click touchend', function (e) {
				// Protect against two events
				if (vis.detectBounce(this)) return;

				if (moved) return;

				if (vis.binds.basic.pressed) {
					clearInterval(vis.binds.basic.pressed);
					vis.binds.basic.pressed = null;
				}

				if (vis.binds.basic.pressedNext) {
					vis.binds.basic.pressedNext = false;
					return;
				}
				var $this = $(this);
				var oid = $this.attr('data-oid');
				var step = parseFloat($this.attr('data-vis-step'));
				var tmp  = parseFloat(vis.states[oid + '.val']) + step;
				if (step < 0) {
					if (minmax === undefined || tmp >= minmax) {
						vis.setValue($this.attr('data-oid'), tmp);
					}
				} else {
					if (minmax === undefined || tmp <= minmax) {
						vis.setValue($this.attr('data-oid'), tmp);
					}
				}
			}).on('touchmove', function () {
				moved = true;
			}).on('touchstart', function () {
				moved = false;
			});
		}

		if (interval) {
			$(el).on('mousedown', intervalStart)
				.on('touchstart', intervalStart)
				.on('touchend', function () {
					if (vis.binds.basic.pressed) {
						clearInterval(vis.binds.basic.pressed);
						vis.binds.basic.pressed = null;
					}
				})
				.on('mouseup', function () {
					if (vis.binds.basic.pressed) {
						clearInterval(vis.binds.basic.pressed);
						vis.binds.basic.pressed = null;
					}
				}).data('destroy', function (id, $widget) {
				$widget && $widget.off('mousedown').off('touchstart').off('touchend').off('mouseup');
			});
		}
	},
	//Thermostat slider - thanx @inventwo ;)
	thermostatSlider: function (el, data, options) {
		var $this = $(el);
		var oid = data.oidSetPointTemperature;

		let min = parseFloat(data.temperatureMin);
		let max = parseFloat(data.temperatureMax);
		let step = parseFloat(data.temperatureStep);

		if (isNaN(min)) min = 15;
		if (isNaN(max)) max = 28;
		if (isNaN(step)) step = 0.5;

		let isDragging = false;

		var settings = $.extend({
			min: min,
			max: max,
			step: step,
			slide: function (event, ui) {
				isDragging = true;
				if (!vis.editMode) {
					//$this.parent().parent().find(".ui-slider-handle").html(`<span class="value">${ui.value}${data.unitTemperature}</span>`);
				}
			},
			stop: function (event, ui) {
				isDragging = false;
				if (!vis.editMode) {
					vis.setValue(oid, ui.value);
					//$this.parent().parent().find(".ui-slider-handle").html(`<span class="value">${ui.value}${data.unitTemperature}</span>`);
				}
			}
		}, options);

		$this.slider(settings)
			.each(function () {

				// show steps
				var opt = $(this).data().uiSlider.options;

				// Get the number of possible values
				let visibleSteps = 1;
				let vals = (opt.max - opt.min) / visibleSteps;

				// Space out values
				for (let i = 0; i <= vals; i++) {

					let label = null;

					let val = opt.max - i * visibleSteps;
					label = $('<span class="step-label">' + val + '</span>')
						.css('top', (i / vals * 100) + '%')

					$(this).append(label);
				}
			});

		function updateSlider() {

			$this.slider();
			if (oid == undefined) {
				return;
			}
			let val = vis.states.attr(oid + ".val");

			val = parseFloat(val);
			if (isNaN(val)) {
				val = min;
			}
			$this.slider("option", "value", val);
		}

		updateSlider();

		//clean up css classes
		$this.removeClass('ui-widget');
		$this.removeClass('ui-widget-content');
		$this.removeClass('ui-corner-all');
		$this.find(".ui-slider-handle").removeClass('ui-state-default');
		$this.find(".ui-slider-handle").removeClass('ui-corner-all');

		//get value on startup
		let value = vis.states.attr(oid + '.val');
		//$this.find(".ui-slider-handle").html(`<span class="value">${value}${data.unitTemperature}</span>`);

		// subscribe on updates of values
		vis.states.bind(oid + ".val", function (e, newVal, oldVal) {
			if (!isDragging) { updateSlider(); }
			//$this.find(".ui-slider-handle").html(`<span class="value">${newVal}${data.unitTemperature}</span>`);
		});
	},

	//Thermostat dialog - same as "dialogContainer" with some modifications
	dialogThermostat: function (el, options, persistent, preload) {
		var $dlg = $(el).parent().find('div.vis-widget-dialog');

		var id = $(el).parent().attr('id');
		if (id && id.match(/_removed$/)) {
			return;
		}

		if (!$dlg.length) {
			setTimeout(function () {
				vis.binds['vis-homekittiles'].dialogThermostat(el, options, persistent, preload);
			}, 200);
			return;
		}

		const regexNumber = /\d+/;

		//if (options.dialog_width	!== undefined)	options.width	= options.dialog_width.match(regexNumber);
		//if (options.dialog_height	!== undefined)	options.height	= options.dialog_height.match(regexNumber);
		if (options.dialog_top		!== undefined)	options.top		= options.dialog_top.match(regexNumber);
		if (options.dialog_left		!== undefined)	options.left	= options.dialog_left.match(regexNumber);
		//options.minHeight = options.height;
		//options.minWidth = options.width;

		//fix some parameters
		options.height = 340;
		options.width = 300;

		$dlg.dialog($.extend({
			autoOpen: false,
			open: function () {
				$(this).parent().find('.ui-widget-header button .ui-button-text').html('');
				$(this).parent().css('z-index', 998);
				//touchscreen fix
				$dlg.find('.vis-view-container').each(function () {
					var cview = $(this).attr('data-vis-contains');
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

				//size window
				if (options.height)   $(this).css('height', options.height);
				if (options.width)    $(this).css('width',  options.width);

				//position window
				if (options.top  || options.top  === 0 || options.top  === '0') $(this).parent().css('top',  options.top  + 'px');
				if (options.left || options.left === 0 || options.left === '0') $(this).parent().css('left', options.left + 'px');

				//arrows
				if (options.arrowDirection) $(this).parent().addClass('arrow-' + options.arrowDirection);
			},
			close: function () {
				if ($dlg.data('timer')) {
					clearTimeout($dlg.data('timer'));
					$dlg.data('timer', null);
				}
				vis.destroyUnusedViews();
			}
		}, options));

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
	dialogThermostatAutofill: function (widgetID, view, value, attr, isCss) {

		var autofill = vis.views[view].widgets[widgetID].data.autofillOids;

		if (autofill && value) {
			var oidPath = value.split('.');

			//check if thermostat is from homematic and autofill if calculated object id exists
			if (oidPath[0] === 'hm-rpc' && oidPath[4] === 'ACTUAL_TEMPERATURE') {
				if (vis.states.attr(oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.SET_POINT_TEMPERATURE.val')	!== undefined) vis.views[view].widgets[widgetID].data.oidSetPointTemperature	= oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.SET_POINT_TEMPERATURE';
				if (vis.states.attr(oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.SET_POINT_MODE.val')			!== undefined) vis.views[view].widgets[widgetID].data.oidSetPointMode			= oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.SET_POINT_MODE';
				if (vis.states.attr(oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.HUMIDITY.val')				!== undefined) vis.views[view].widgets[widgetID].data.oidHumidity				= oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.HUMIDITY';
				if (vis.states.attr(oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.ACTIVE_PROFILE.val')			!== undefined) vis.views[view].widgets[widgetID].data.oidActiveProfile			= oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.ACTIVE_PROFILE';
				if (vis.states.attr(oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.0.LOW_BAT.val')				!== undefined) vis.views[view].widgets[widgetID].data.oidLowBat					= oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.0.LOW_BAT';
				if (vis.states.attr(oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.0.UNREACH.val')				!== undefined) vis.views[view].widgets[widgetID].data.oidUnreach				= oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.0.UNREACH';
				if (vis.states.attr(oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.WINDOW_STATE.val')			!== undefined) vis.views[view].widgets[widgetID].data.oidWindowState			= oidPath[0] + '.' + oidPath[1] + '.' + oidPath[2] + '.1.WINDOW_STATE';
			}

			//reset autofill
			vis.views[view].widgets[widgetID].data.autofillOids = false;
		}
	},
	dialogThermostatTextpresets: function (widgetID, view, value, attr, isCss) {

		var texttemplate = vis.views[view].widgets[widgetID].data.texttemplate;

		switch (texttemplate) {
			case 'english':
				vis.views[view].widgets[widgetID].data.label2pre				= 'Set at';
				vis.views[view].widgets[widgetID].data.label2post				= '';

				vis.views[view].widgets[widgetID].data.title					= 'Room';
				vis.views[view].widgets[widgetID].data.closebuttonLabel			= 'Close';
				vis.views[view].widgets[widgetID].data.actualTemperatureLabel	= 'Actual temperature';
				vis.views[view].widgets[widgetID].data.setpointTemperatureLabel	= 'Setpoint temperature';
				vis.views[view].widgets[widgetID].data.setpointModeLabel		= 'Setpoint mode';
				vis.views[view].widgets[widgetID].data.setpointModeValues		= '0;1;2';
				vis.views[view].widgets[widgetID].data.setpointModeTexts		= 'Auto;Manual;Holiday';
				vis.views[view].widgets[widgetID].data.actualHumidityLabel		= 'Humidity';
				vis.views[view].widgets[widgetID].data.activeProfileLabel		= 'Heating profile';
				vis.views[view].widgets[widgetID].data.activeProfileValues		= '1;2;3;4;5;6';
				vis.views[view].widgets[widgetID].data.activeProfileTexts		= 'Comfort;Eco;-;-;Preheating;Away';
				vis.views[view].widgets[widgetID].data.windowStateLabel			= 'Window';
				vis.views[view].widgets[widgetID].data.windowStateValues		= '0;1';
				vis.views[view].widgets[widgetID].data.windowStateTexts			= 'closed;open';
				vis.views[view].widgets[widgetID].data.lowBatLabel				= 'Battery low';
				vis.views[view].widgets[widgetID].data.unreachLabel				= 'Unreach';
				break;
			case 'german':
				vis.views[view].widgets[widgetID].data.label2pre				= '';
				vis.views[view].widgets[widgetID].data.label2post				= 'eingestellt';

				vis.views[view].widgets[widgetID].data.title					= 'Raum';
				vis.views[view].widgets[widgetID].data.closebuttonLabel			= 'Schließen';
				vis.views[view].widgets[widgetID].data.actualTemperatureLabel	= 'Aktuelle Temperatur';
				vis.views[view].widgets[widgetID].data.setpointTemperatureLabel	= 'Sollwert Temperatur';
				vis.views[view].widgets[widgetID].data.setpointModeLabel		= 'Sollwert Modus';
				vis.views[view].widgets[widgetID].data.setpointModeValues		= '0;1;2';
				vis.views[view].widgets[widgetID].data.setpointModeTexts		= 'Auto;Manuell;Urlaub';
				vis.views[view].widgets[widgetID].data.actualHumidityLabel		= 'Feuchte';
				vis.views[view].widgets[widgetID].data.activeProfileLabel		= 'Heizprofil';
				vis.views[view].widgets[widgetID].data.activeProfileValues		= '1;2;5;6';
				vis.views[view].widgets[widgetID].data.activeProfileTexts		= 'Komfort;Eco;Vorheizen;Abwesend';
				vis.views[view].widgets[widgetID].data.windowStateLabel			= 'Fenster';
				vis.views[view].widgets[widgetID].data.windowStateValues		= '0;1';
				vis.views[view].widgets[widgetID].data.windowStateTexts			= 'zu;auf';
				vis.views[view].widgets[widgetID].data.lowBatLabel				= 'Batterie schwach';
				vis.views[view].widgets[widgetID].data.unreachLabel				= 'Nicht erreichbar';
		}
		//reset autofill
		vis.views[view].widgets[widgetID].data.texttemplate = '-';
	},

	//JSON Table
	jsonTableInsertRow: function  (rowData, wid, options, rowNumber, noTR, index, serverID) {
		var text;

		// Create row
		if (!noTR) {
			text = '<tr class="table-row content" data-index="' + index + '" data-server-id="' + serverID + '">';
		} else {
			text = '';
		}

		var k = 1;
		for (var obj in rowData) {
			if (!rowData.hasOwnProperty(obj) ||
				obj.match(/^jQuery/) ||
				typeof rowData[obj] === 'function') {
				continue;
			}

			var attr = options['colAttr' + k] || obj;

			if (!options.numberOfCols || k <= options.numberOfCols) {
				text += '<td class="row-item content ' + options['textalignCol' + k] + (options['noLineBreak'] ? ' nowrap' : '') + '" ' + (options['colWidth' + k] ? 'style="width:' + options['colWidth' + k] + '"' : '') + '>' + rowData[attr] + '</td>';
			}
			k++;
		}

		if (!noTR) text += '</tr>';
		return text;
	},
	jsonTableCreateTable: function  (view, wid, options) {
		var $div = $('#' + wid);
		if (!$div.length) {
			setTimeout(function () {
				vis.binds["vis-homekittiles"].jsonTableCreateTable(view, wid, options);
			}, 100);
			return;
		}

		// read actual table as json string
		var tableJson = options.oidJsonTable ? vis.states.attr(options.oidJsonTable + '.val') : '[{"Title": "first", "Value": 1, "Description": "Value1"}]';
		var table = [];
		if (typeof app !== 'undefined' && app.replaceFilePathJson) {
			tableJson = app.replaceFilePathJson(tableJson);
		}
		if (tableJson && typeof tableJson === 'string') {
			try {
				table = JSON.parse(tableJson);
			}
			catch (e) {
				console.log ("jsonTableCreateTable: Cannot parse json table");
				table = [];
			}
		} else {
			table = tableJson;
		}

		if (!table) table = [];

		// Create widget container
		var $elem = $('#' + wid);

		// Start creation of table
		var header = '<table class="table table-head">';
		var text   = '<div class="table-content-wrapper' + ((options.scrollable) ? ' scrollable' : '') + ((options.showHeader === 'never') ? ' noheader' : '') + '"><table class="table table-content">';
		var headerDone = false;
		var j = 0;

		if (options.maxRows) options.maxRows = parseInt(options.maxRows);

		// If there is a table go through all lines
		for (var ii = 0, ilen = table.length; ii < ilen; ii++) {
			if (!table[ii]) continue;

			//var _classes = table[ii]['_class'] ? table[ii]['_class'].split(' ') : null;

			//  Create table header
			if (!headerDone) {
				header += '<tr class="table-row head">';
				var k = 1;
				for (var obj in table[ii]) {
					if (!table[ii].hasOwnProperty(obj) ||
						obj.match(/^jQuery/) ||
						typeof table[ii][obj] === 'function') {
						continue;
					}

					var attr = options['colAttr' + k] || obj;
					if (!options.numberOfCols || k <= options.numberOfCols) {
						header += '<th class="row-item head ';
						header += (options['textalignHead'] != 'aligncontent' ? options['textalignHead'] : options['textalignCol' + k]);
						header += '" ' + (options['colWidth' + k] ? 'style="width:' + options['colWidth' + k] + '"' : '') + '>' + (options['colName' + k] || attr) + '</th>';
					}
					k++;
				}
				headerDone = true;
			}
			text += vis.binds["vis-homekittiles"].jsonTableInsertRow(table[ii], wid, options, j, false, ii, table[ii]._id);
			j++;
			if (options.maxRows && j >= options.maxRows) break;
		}

		// If there is no table just render the head as configured
		if (table.length === 0 && (options.showHeader === 'ever' || options.showHeader === 'everAndEmptyLine' || options.showHeader === 'everAndNotice')) {

			header += '<tr class="table-row head">';
			for (var k = 1; k <= options.numberOfCols; k++) {
				var attr = options['colAttr' + k] || obj;
				if (!options.numberOfCols || k <= options.numberOfCols) {
					header += '<th class="row-item head ';
					header += (options['textalignHead'] != 'aligncontent' ? options['textalignHead'] : options['textalignCol' + k]);
					header += '" ' + (options['colWidth' + k] ? 'style="width:' + options['colWidth' + k] + '"' : '') + '>' + options['colName' + k] + '</th>';
				}
			}

			// Show empty line
			if (options.showHeader === 'everAndEmptyLine') {
				var k = 1;
				text += '<tr class="table-row content">';
				for (var k = 1; k <= options.numberOfCols; k++) {
					text += '<td class="row-item content" ' + (options['colWidth' + k] ? 'style="width:' + options['colWidth' + k] + '"' : '') + '>&nbsp;</td>';
				}
				text += '</tr>';
			}

			// Show notice
			if (options.showHeader === 'everAndNotice') {
				text += '<tr class="table-row content">';
				text += '<td class="row-item content empty-table notice" style="width: 100%;">' + options.noticeEmptyTable + '</td>';
				text += '</tr>';
			}
		}

		text += '</table></div>\n';
		header += '</table>\n';

		// delete old content on update
		$elem.find('.table-head').remove();
        $elem.find('.table-content-wrapper').remove();

		// Insert table into container
		$elem.append((options.showHeader === 'never' ? '' : header) + text);
		var data = {
			options: options,
			wid:     wid,
			view:    view
		};

		// Remember index to calculate even or odd
		data.rowNum = ((j - 1) >= 0 ? j - 1 : 0);

		function cbNewTable (e, newVal, oldVal) {
			$elem.trigger('newTable', newVal);
		}

		if (!$('#' + wid).data('inited')) {
			$('#' + wid).data('inited', true);
			// New event coming
			$elem.on('newTable', function (e, newVal) {
				if (e.handled) return;
				e.handled = true;
				var data = $(this).data('options');
				// Update whole table
				_setTimeout(vis.binds["vis-homekittiles"].jsonTableCreateTable, 50, data.view, data.wid, data.options);
			});
		}
		$('#' + wid).data('options', data);

		//bind oid
		if ($('#' + wid).data('binded') !== options.oidJsonTable) {
			$('#' + wid).data('binded', options.oidJsonTable);
			vis.states.bind(options.oidJsonTable + '.val', cbNewTable);
		}

		// Show/hide fields on placing widget
		if (vis.editMode) {
			setTimeout(function () {
				vis.binds["vis-homekittiles"].jsonTableShowHideInputfields();
			}, 100);
		}
	},
	jsonTableAutocomplete: function (widgetID, view, newId, attr, isCss) {
		// Get attributes from JSON
		function getJsonAttrs() {
			var jsonAttrs = [];

			// read actual table as json string
			var tableJson = vis.states.attr(vis.views[view].widgets[widgetID].data.oidJsonTable + '.val');
			var table = [];

			if (tableJson && typeof tableJson === 'string') {
				try {
					table = JSON.parse(tableJson);
				}
				catch (e) {
					console.log('jsonTableAutocomplete: Cannot parse json table');
					table = [];
				}
			} else {
				table = tableJson;
			}
			if (!table) table = [];

			// read first line
			var headerDone = false;
			for (var ii = 0, ilen = table.length; ii < ilen; ii++) {
				if (!table[ii]) continue;

				if (!headerDone) {
					var k = 1;
					for (var obj in table[ii]) {
						jsonAttrs.push(obj);
						k++;
					}
					headerDone = true;
				}
			}
			return jsonAttrs;
		}

		// write values to autocomplete function
		setTimeout(function () {

			// get JSON attrs
			var jsonAttrs = getJsonAttrs();

			// set number of cols if not set yet and oid is selected
			if (vis.views[view].widgets[widgetID].data.oidJsonTable !== undefined &&
				vis.views[view].widgets[widgetID].data.oidJsonTable !== '' &&
				(
					vis.views[view].widgets[widgetID].data.numberOfCols === undefined ||
					vis.views[view].widgets[widgetID].data.numberOfCols === '0' ||
					vis.views[view].widgets[widgetID].data.numberOfCols === 0 ||
					vis.views[view].widgets[widgetID].data.numberOfCols === ''
				) &&
				jsonAttrs.length > 0
			) {
				vis.views[view].widgets[widgetID].data.numberOfCols = jsonAttrs.length.toString();
			}

			// prepare autocomplete
			var ms_options = {
				source: jsonAttrs,
				minLength: 0,
				delay: 400,
				classes: {
					'ui-autocomplete': 'highlight'
				},
				select: function (event, ui) {
					$(this).val(ui.item.value);
					$(this).trigger('change', ui.item.value);
				}

			};

			// get number of colls (= number of fields to fill)
			var numberOfCols = parseInt(vis.views[view].widgets[widgetID].data.numberOfCols);
			if (numberOfCols === undefined) numberOfCols = 1;

			// fill autocomplete
			for (var i = 1; i <= numberOfCols; i++) {
				var target = $('#inspect_colAttr' + i);
				target.autocomplete(ms_options).on('focus.vis-homekittiles', function () {
					if ($(this).autocomplete('widget').is(':visible')) {
						return;
					}
					$(this).autocomplete('search');
				});

				target.autocomplete('instance')._renderItem = function(ul, item) {
					return $('<li>')
						.attr('data-value', item.value)
						.append(' ' + item.value)
						.appendTo(ul);
				};
			}
		}, 200);
		return ' ';
	},
	jsonTableShowHideInputfields: function (widgetID, view, newId, attr, isCss) {

		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val = data.showHeader;

			if (val == 'everAndNotice') {
				vis.hideShowAttr('noticeEmptyTable', true);
			} else {
				vis.hideShowAttr('noticeEmptyTable', false);
			}

		});
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

		var val2 = vis.binds['vis-homekittiles'].formatValue(vis.states.attr(data.label2oid + '.val'), data.label2decimals, data.label2factor, data.label2comma, data.label2tdp);

		if (data.label)      html += `<span class="label">${data.label}</span>`;
		if (data.label2pre !== undefined || data.label2oid !== undefined || data.label2unit !== undefined || data.label2post !== undefined) html += `<br>`;
		if (data.label2pre)  html += `<span class="label2pre">${data.label2pre} </span>`;
		if (data.label2oid)  html += `<span class="label2value">${val2}</span>`;
		if (data.label2unit) html += `<span class="label2unit">${data.label2unit}</span>`;
		if (data.label2post) html += `<span class="label2post"> ${data.label2post}</span>`;

		$this.html(html);

		// subscribe on updates of value
		if (data.label2oid) {
			vis.states.bind(data.label2oid + '.val', function (e, newVal, oldVal) {
				var value = vis.binds['vis-homekittiles'].formatValue(newVal, data.label2decimals, data.label2factor, data.label2comma, data.label2tdp);
				$this.find('.label2value').html(String(value))
			});
		}
	},
	addLabelGroup2: function (el, data) {
		var $this = $(el);
		var html = '';

		var val3 = vis.binds['vis-homekittiles'].formatValue(vis.states.attr(data.label3oid + '.val'), data.label3decimals, data.label3factor, data.label3comma, data.label3tdp);
		var val4 = vis.binds['vis-homekittiles'].formatValue(vis.states.attr(data.label4oid + '.val'), data.label4decimals, data.label4factor, data.label4comma, data.label4tdp);
		var val5 = vis.binds['vis-homekittiles'].formatValue(vis.states.attr(data.label5oid + '.val'), data.label5decimals, data.label5factor, data.label5comma, data.label5tdp);

		if (data.label3pre)  html += `<span class="label3pre">${data.label3pre} </span>`;
		if (data.label3oid)  html += `<span class="label3value">${val3}</span>`;
		if (data.label3unit) html += `<span class="label2unit">${data.label3unit}</span>`;
		if (data.label3post) html += `<span class="label3post"> ${data.label3post}</span>`;
		if (data.label4pre !== undefined || data.label4oid !== undefined || data.label4unit !== undefined || data.label4post !== undefined) html += `<br>`;
		if (data.label4pre)  html += `<span class="label4pre">${data.label4pre} </span>`;
		if (data.label4oid)  html += `<span class="label4value">${val4}</span>`;
		if (data.label4unit) html += `<span class="label4unit">${data.label4unit}</span>`;
		if (data.label4post) html += `<span class="label4post"> ${data.label4post}</span>`;
		if (data.label5pre !== undefined || data.label5oid !== undefined || data.label5unit !== undefined || data.label5post !== undefined) html += `<br>`;
		if (data.label5pre)  html += `<span class="label5pre">${data.label5pre} </span>`;
		if (data.label5oid)  html += `<span class="label5value">${val5}</span>`;
		if (data.label5unit) html += `<span class="label5unit">${data.label5unit}</span>`;
		if (data.label5post) html += `<span class="label5post"> ${data.label5post}</span>`;

		$this.html(html);

		// subscribe on updates of values
		if (data.label3oid) {
			vis.states.bind(data.label3oid + '.val', function (e, newVal, oldVal) {
				var value = vis.binds['vis-homekittiles'].formatValue(newVal, data.label3decimals, data.label3factor, data.label3comma, data.label3tdp);
				$this.find('.label3value').html(String(value))
			});
		}
		if (data.label4oid) {
			vis.states.bind(data.label4oid + '.val', function (e, newVal, oldVal) {
				var value = vis.binds['vis-homekittiles'].formatValue(newVal, data.label4decimals, data.label4factor, data.label4comma, data.label4tdp);
				$this.find('.label4value').html(String(value))
			});
		}
		if (data.label5oid) {
			vis.states.bind(data.label5oid + '.val', function (e, newVal, oldVal) {
				var value = vis.binds['vis-homekittiles'].formatValue(newVal, data.label5decimals, data.label5factor, data.label5comma, data.label5tdp);
				$this.find('.label5value').html(String(value))
			});
		}
	},
	addIncrement: function (el, data) {
		var $this = $(el);
		var html = '';

		function showHideIncrement(show) {
			if (show) {
				let value = vis.states[data.oidIncrement + '.val'];

				if (data.incrementPlusShow || data.incrementMinusShow) {

					if (data.incrementPlusShow) {
						html += `<div class="incrementPlus"`;
						html += `data-oid="${data.oidIncrement}"`;
						html += `data-vis-step="${data.incrementPlusValue}"`;
						html += `data-val="${value}"`;
						html += `>+</div>`;
					}
					if (data.incrementMinusShow) {
						html += `<div class="incrementMinus"`;
						html += `data-oid="${data.oidIncrement}"`;
						html += `data-vis-step="${data.incrementMinusValue}"`;
						html += `data-val="${value}"`;
						html += `>-</div>`;
					}
					$this.html(html);
					vis.binds["vis-homekittiles"].increment($this.parent().find('.incrementPlus'), data.incrementValueMax);
					vis.binds["vis-homekittiles"].increment($this.parent().find('.incrementMinus'), data.incrementValueMin);
				}
			} else {
				html = '';
				$this.html(html);
			}
		}

		function updateIncrementValue(newVal) {
			//no need to update anything
		}

		//add incrementbuttons on startup
		if (vis.editMode || !data.incrementShowOnlyIfTrue || data.incrementShowOnlyIfTrue && vis.states[data.oid + '.val']) {
			showHideIncrement(true);
		} else {
			showHideIncrement(false);
		}

		// subscribe on updates of values
		if (data.oid) { vis.states.bind(data.oid + '.val', function (e, newVal, oldVal){
			if (data.incrementShowOnlyIfTrue) showHideIncrement(newVal);
		});}
		if (data.oidIncrement) { vis.states.bind(data.oidIncrement + '.val', function (e, newVal, oldVal){
			updateIncrementValue(newVal);
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

			//show widget disabled (due to a bug in vis we add an additional div and check by css if its there)
			if (blocked && data.blockOperationShowDisabled) {
				html += `<div class="show-disabled"></div>`;
			}

			$this.html(html);
		}

		//get value for blocked on startup
		var currentState = false;
		if (data.blockOperationUseDifferentOID) {
			currentState = vis.states.attr(data.oidBlockOperation + '.val');
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
				vis.states.bind(data.oidBlockOperation + '.val', function (e, newVal, oldVal){ updateBlocked(newVal); });
			} else {
				vis.states.bind(data.oid + '.val', function (e, newVal, oldVal){ updateBlocked(newVal); });
			}
		}

		// Show/hide fields on placing widget
		if (vis.editMode) {
			setTimeout(function () {
				vis.binds["vis-homekittiles"].addBlockOperationShowHideInputfields();
			}, 100);
		}
	},
	addBlockOperationShowHideInputfields: function (widgetID, view, newId, attr, isCss) {

		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val;

			val = data.blockOperationShowIcon;
			if (val) {
				vis.hideShowAttr('blockOperationIcon', true);
				vis.hideShowAttr('blockOperationIconNotInEditor', true);
			} else {
				vis.hideShowAttr('blockOperationIcon', false);
				vis.hideShowAttr('blockOperationIconNotInEditor', false);
			}

			val = data.blockOperationUseDifferentOID;
			if (val) {
				vis.hideShowAttr('oidBlockOperation', true);
			} else {
				vis.hideShowAttr('oidBlockOperation', false);
			}

		});
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

		//add ack icon on startup
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

		// Show/hide fields on placing widget
		if (vis.editMode) {
			setTimeout(function () {
				vis.binds["vis-homekittiles"].addAckIconShowHideInputfields();
			}, 100);
		}
	},
	addAckIconShowHideInputfields: function (widgetID, view, newId, attr, isCss) {

		vis.activeWidgets.forEach(function (el) {
			let data = vis.views[vis.activeView].widgets[el].data;
			let val = data.ackShowIcon;

			if (val) {
				vis.hideShowAttr('ackIcon', true);
				vis.hideShowAttr('ackUseSpin', true);
				vis.hideShowAttr('ackInvertFunction', true);
				vis.hideShowAttr('ackIconNotInEditor', true);
			} else {
				vis.hideShowAttr('ackIcon', false);
				vis.hideShowAttr('ackUseSpin', false);
				vis.hideShowAttr('ackInvertFunction', false);
				vis.hideShowAttr('ackIconNotInEditor', false);
			}

		});
	},
	addSignalIcon: function (el, data) {
		var $this = $(el);
		var val = 		$this.attr('data-val');
		var oid = 		$this.attr('data-oid');
		var compOp =	$this.attr('data-compOp');
		var compVal =	$this.attr('data-compVal');
		var icon =		$this.attr('data-icon');
		var desc =		$this.attr('data-desc');

		var html = '';

		function showHideSignal(value) {
			if (compVal && compVal === 'true') compVal = true;
			if (compVal && compVal === 'false') compVal = false;

			if (
				oid != undefined && oid != "" && (
					(!vis.editMode && value == compVal && compOp == "comparisonEqual") ||
					(!vis.editMode && value != compVal && compOp == "comparisonNotEqual") ||
					(!vis.editMode && value <= compVal && compOp == "comparisonLowerEqual") ||
					(!vis.editMode && value >= compVal && compOp == "comparisonGreaterEqual") ||
					(!vis.editMode && value <  compVal && compOp == "comparisonLower") ||
					(!vis.editMode && value >  compVal && compOp == "comparisonGreater") ||
					(vis.editMode && !data.signalsNotInEditor)
				)
			) {
				if (icon !== undefined && icon !== "") html += `<img class="icon" src="${icon}">`;
				html += `<span class="description">${desc}</span>`;
			} else {
				html = '';
			}
			$this.html(html);
		}

		//add icon on startup
		showHideSignal(vis.states.attr(oid + ".val"));

		// subscribe on updates of values
		if (oid) { vis.states.bind(oid + ".val", function (e, newVal, oldVal){
			showHideSignal(newVal);
		});}

	},
};

vis.binds["vis-homekittiles"].showVersion();