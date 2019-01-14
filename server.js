var fs = require("fs");

// var mkDir = ["css", "fonts", "img", "module"];
var mkDir = ["module"];
/* 创建目录 */

for (var i = 0; i < mkDir.length; i++) {
  fs.mkdir(mkDir[i], function(err) {
    if (err) {
      return console.error(err);
    }
  });
}
