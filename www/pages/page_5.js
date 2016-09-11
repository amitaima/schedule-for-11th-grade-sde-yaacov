var page = tabris.create('Page', {
	title: "יום חמישי",
	topLevel: true
});

var h1 = tabris.create("TextView", {
	text: '8:30-9:15  |  הךכה',
	layoutData: {centerX: 0, top: 25}
}).appendTo(page);

var h2 = tabris.create("TextView", {
	text: '9:25-10:10  |  תנ"ך',
	layoutData: {centerX: 0, top: [h1, 15]}
}).appendTo(page);

var h3 = tabris.create("TextView", {
	text: '10:10-10:55  |  תנ"ך',
	layoutData: {centerX: 0, top: [h2, 15]}
}).appendTo(page);

var h4 = tabris.create("TextView", {
	text: '11:00-11:45  |  תושב"ע',
	layoutData: {centerX: 0, top: [h3, 15]}
}).appendTo(page);

var h5 = tabris.create("TextView", {
	text: '11:55-12:40  |  תושב"ע',
	layoutData: {centerX: 0, top: [h4, 15]}
}).appendTo(page);

var h6 = tabris.create("TextView", {
	text: '12:40-13:40  |  ארוחת צהריים',
	layoutData: {centerX: 0, top: [h5, 15]}
}).appendTo(page);

var h7 = tabris.create("TextView", {
	text: '13:35-14:20 |  חינוך',
	layoutData: {centerX: 0, top: [h6, 15]}
}).appendTo(page);

var h8 = tabris.create("TextView", {
	text: '14:30-15:15  |  תנ"ך',
	layoutData: {centerX: 0, top: [h7, 15]}
}).appendTo(page);

var h9 = tabris.create("TextView", {
	text: '15:25-16:10  |  חינוך גופני',
	layoutData: {centerX: 0, top: [h8, 15]}
}).appendTo(page);

var h10 = tabris.create("TextView", {
	text: "קומה ב'  |  מחשבים",
	layoutData: {centerX: 0, top: [h9, 15]}
}).appendTo(page);

var h11 = tabris.create("TextView", {
	text: "קומה ב'  |  מחשבים",
	layoutData: {centerX: 0, top: [h10, 15]}
}).appendTo(page);