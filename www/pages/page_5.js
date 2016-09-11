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
	text: '11:05-11:50  |  תושב"ע',
	layoutData: {centerX: 0, top: [h3, 15]}
}).appendTo(page);

var h5 = tabris.create("TextView", {
	text: '12:00-12:45  |  תושב"ע',
	layoutData: {centerX: 0, top: [h4, 15]}
}).appendTo(page);

var h6 = tabris.create("TextView", {
	text: '12:45-13:30  |  ארוחת צהריים',
	layoutData: {centerX: 0, top: [h5, 15]}
}).appendTo(page);

var h7 = tabris.create("TextView", {
	text: '13:45-14:30 |  חינוך',
	layoutData: {centerX: 0, top: [h6, 15]}
}).appendTo(page);

var h8 = tabris.create("TextView", {
	text: '14:35-15:20  |  תנ"ך',
	layoutData: {centerX: 0, top: [h7, 15]}
}).appendTo(page);

var h9 = tabris.create("TextView", {
	text: '15:30-16:15  |  חינוך גופני',
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
