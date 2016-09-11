
var page = tabris.create('Page', {
	title: "מערכת שעות",
	alignment: "right",
	topLevel: true
});

var welcome = tabris.create("TextView", {
	text: "מערכת שעות לכיתה י'א 1",
	alignment: "right",
	font: "22px",
	layoutData: {centerX: 0, top: 220}
}).appendTo(page);

var appVer = tabris.create("TextView", {
	text: "גרסה 1.2",
	alignment: "right",
	textColor: "#a7a7a7",
	layoutData: {centerX: 0, bottom: 15}
}).appendTo(page);

page.open();