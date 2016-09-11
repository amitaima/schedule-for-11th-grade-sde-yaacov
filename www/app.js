//  Adding the pages, functions etc. The drawer order is following to this 'require's order.
require("./pages/page_home.js");
require("./pages/page_1.js");
require("./pages/page_2.js");
require("./pages/page_3.js");
require("./pages/page_4.js");
require("./pages/page_5.js");

// Pages drawer.
var drawer = tabris.create("Drawer").append(tabris.create("PageSelector"));