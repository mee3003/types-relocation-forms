const { src, dest } = require("gulp");

function copy() {
  return src(["src/types/*"]).pipe(dest("dist"));
}

exports.copy = copy;
