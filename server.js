var fs = require("fs");

/* mkDir */
var mkDir = ["css", "fonts", "img", "module"];

for (var i = 0; i < mkDir.length; i++) {
  fs.mkdir(mkDir[i], function(err) {
    if (err) {
      return console.error(err);
    }
  });
}
