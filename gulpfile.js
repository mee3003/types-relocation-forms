const { src, dest } = require("gulp");

function copy() {
  return src(["package.json", "src/types/*"]).pipe(dest("dist"));
}

exports.copy = copy;
