var data = [
  [""],
  ["2014"],
  ["2015"],
  ["2016"]
];

var container = document.getElementById('second-table');
var hot = new Handsontable(container, {
  data: data,
  colWidths: [250],
  minSpareRows: 1,
  rowHeaders: false,
  colHeaders: false,
  contextMenu: true
});
