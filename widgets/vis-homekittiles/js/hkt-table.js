/* The MIT License (MIT)
   Copyright (c) 2013-2024 Denis Haev dogafox@gmail.com, Copyright (c) 2013 hobbyquaker
   Modified 2024 Standarduser */

"use strict";

// following json string or object is expected:
//    '[\
//       {"Time": "12:34:34", "Event": "Door opened",   "_data":{"Type": "1", "Event" : "SomeEvent1"}, "_class": "selected"},\
//       {"Time": "12:34:35", "Event": "Door closed",   "_data":{"Type": "2", "Event" : "SomeEvent2"}, "_class": "red" },\
//       {"Time": "12:34:36", "Event": "Window opened", "_data":{"Type": "3", "Event" : "SomeEvent3"}}\
//     ]'


/* global $, vis, systemDictionary */

// add translations for edit mode
$.extend(
	true,
	systemDictionary,
	{
		"aligncenter":					{"en": "center",							"de": "zentriert"							},
		"aligncontent":					{"en": "Align with content",				"de": "Ausrichtung wie Inhalt"				},
		"alignleft":					{"en": "left",								"de": "links"								},
		"alignright":					{"en": "right",								"de": "rechts"								},
		"colAttr":						{"en": "Attribute in JSON ",				"de": "Attribut in JSON "					},
		"colName":						{"en": "Rename attribute ",					"de": "Attribut umbenennen "				},
		"colWidth":						{"en": "Column width ",						"de": "Spaltenbreite "						},
		"group_column":					{"en": "Columns",							"de": "Spalten"								},
		"hideHeader":					{"en": "Hide header",						"de": "Ohne Kopfzeile"						},
		"maxRows":						{"en": "Number of rows (max.)",				"de": "Anzahl Zeilen (max.)"				},
		"noLineBreak":					{"en": "No line breaks",					"de": "Keine Zeilenumbrüche"				},
		"numCols":						{"en": "Number of Columns",					"de": "Anzahl Spalten"						},
		"oidJsonTable":					{"en": "Object ID for JSON Table",			"de": "Objekt-ID für JSON-Tabelle"			},
		"scrollable":					{"en": "Scrollable",						"de": "Scrollbar"							},
		"textalignCol":					{"en": "Text-align column ",				"de": "Textausrichtung Spalte "				},
		"textalignHead":				{"en": "Text-align header",					"de": "Textausrichtung Kopfzeile"			},

		"hktTableDescription": {
			"en": "The widget generates a table from a JSON string. To format all columns, the correct number must be entered correctly. The order of the columns can be adapted via the JSON attributes.",
			"de": "Das Widget generiert aus einem JSON-String eine Tabelle. Um alle Spalten formatieren zu können muss die richtige Anzahl korrekt eingetragen werden. Die Reihenfolge der Spalten kann über die JSON-Attribute angepasst werden."
		},
	}
);

vis.binds.hktTable = {
	createRow: function  (rowData, wid, options, rowNumber, noTR, index, serverID) {
		var text;

		// Create row
		if (!noTR) {
			text = '<tr class="table-row" data-index="' + index + '" data-server-id="' + serverID + '">';
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

			/* if (attr && attr[0] === '_') {
				if (options['colAttr' + k]) {
					text += '<td class="row-item content ' + options['textalignCol' + k] + (options['noLineBreak'] ? ' nowrap' : '') + '" ' + (options['colWidth' + k] ? 'style="width:' + options['colWidth' + k] + '"' : '') + '>' + rowData[attr] + '</td>';
					k++;
				}
				continue;
			} */

			if (!options.numCols || k <= options.numCols) {
				text += '<td class="row-item content ' + options['textalignCol' + k] + (options['noLineBreak'] ? ' nowrap' : '') + '" ' + (options['colWidth' + k] ? 'style="width:' + options['colWidth' + k] + '"' : '') + '>' + rowData[attr] + '</td>';
			}
			k++;
		}

		if (!noTR) text += '</tr>';
		return text;
	},

	showTable: function  (view, wid, options) {
		var $div = $('#' + wid);
		if (!$div.length) {
			setTimeout(function () {
				vis.binds.hktTable.showTable(view, wid, options);
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
				console.log ("showTable: Cannot parse json table");
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
		var text   = '<div class="table-content-wrapper' + ((options.scrollable) ? ' scrollable' : '') + ((options.hideHeader) ? ' noheader' : '') + '"><table class="table table-content">';
		var headerDone = false;
		var j = 0;

		if (options.maxRows) options.maxRows = parseInt(options.maxRows);

		// Go through all lines
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

					/* if (attr && attr[0] === '_') {
						if (attr.match(/^_btn/) || options['colAttr' + k]) {
							header += '<th class="row-item ';
							header += (options['textalignHead'] != 'aligncontent' ? options['textalignHead'] : options['textalignCol' + k]);
							header += '" ' + (options['colWidth' + k] ? 'style="width:' + options['colWidth' + k] + '"' : '') + '>' + (options['colName' + k] || '') + '</th>';
							k++;
						}
						continue;
					} */
					if (!options.numCols || k <= options.numCols) {
						header += '<th class="row-item ';
						header += (options['textalignHead'] != 'aligncontent' ? options['textalignHead'] : options['textalignCol' + k]);
						header += '" ' + (options['colWidth' + k] ? 'style="width:' + options['colWidth' + k] + '"' : '') + '>' + (options['colName' + k] || attr) + '</th>';
					}
					k++;
				}
				headerDone = true;
			}

			//if (_classes &&_classes.indexOf('selected') !== -1) selectedId = ii;

			text += vis.binds.hktTable.createRow(table[ii], wid, options, j, false, ii, table[ii]._id);
			j++;
			if (options.maxRows && j >= options.maxRows) break;
		}
		text += '</table></div>\n';
		header += '</table>\n';

		// Insert table into container
		$elem.append((options.hideHeader ? '' : header) + text);
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
			$elem.on('newEvent', function (e, newVal) {
				if (e.handled) return;
				e.handled = true;
				var newEvent;
				var data = $(this).data('options');
				// Convert event to json
				if (newVal) {
					if (typeof newVal === 'string') {
						try {
							newEvent = JSON.parse(newVal);
						} catch (e) {
							console.log('elem.triggered: Cannot parse json new event ' + newVal);
							return;
						}
					} else {
						newEvent = newVal;
					}
				}
				else {
					return;
				}

				// Try to find, if this event yet exists
				var $row = (newEvent._id !== undefined) ? $(this).find('tr[data-index="' + newEvent._id + '"]') : [];

				// get next row number for new line
				if (!$row.length) data.rowNum++;

				var text = vis.binds.hktTable.createRow(newEvent, data.wid, data.options, data.rowNum, ($row.length > 0), (newEvent._id === undefined) ? data.rowNum : newEvent._id);

				if ($row.length) {
					$row.html(text).addClass(newEvent._class || '');
				} else {
					// Add to the bottom of table
					$('#' + this.id).find('.vis-table-body').append(text);
				}
			})
			.on('newTable', function (e, newVal) {
				if (e.handled) return;
				e.handled = true;
				var data = $(this).data('options');
				// Update whole table
				_setTimeout(vis.binds.hktTable.showTable, 50, data.view, data.wid, data.options);
			});
		}
		$('#' + wid).data('options', data);

		//bind oid
		if ($('#' + wid).data('binded') !== options.oidJsonTable) {
			$('#' + wid).data('binded', options.oidJsonTable);
			vis.states.bind(options.oidJsonTable + '.val', cbNewTable);
		}

	},
};
