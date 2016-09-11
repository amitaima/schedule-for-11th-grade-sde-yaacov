var page = tabris.create('Page', {
	title: "יום שלישי",
	topLevel: true
});

var h1 = tabris.create("TextView", {
	text: '8:30-9:15  |  אמונה',
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
	text: '11:05-11:50  |  אנגלית',
	layoutData: {centerX: 0, top: [h3, 15]}
}).appendTo(page);

var h5 = tabris.create("TextView", {
	text: '11:55-12:40  |  אנגלית',
	layoutData: {centerX: 0, top: [h4, 15]}
}).appendTo(page);

var h6 = tabris.create("TextView", {
	text: '13:05-13:50  |  מתמטיקה',
	layoutData: {centerX: 0, top: [h5, 15]}
}).appendTo(page);

var h7 = tabris.create("TextView", {
	text: '14:05-14:50  |  מתמטיקה',
	layoutData: {centerX: 0, top: [h6, 15]}
}).appendTo(page);

var h8 = tabris.create("TextView", {
	text: '14:55-15:40  |  חינוך גופני',
	layoutData: {centerX: 0, top: [h7, 15]}
}).appendTo(page);
