const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");

let oldStaticPath = "./public/static/";
let newStaticPath = "./public/homepage-xstatic";

if (fs.existsSync(path.resolve(newStaticPath))) {
  // If the dir exists, delete it
  rimraf.sync(newStaticPath);
}
// Create the dir
fs.mkdirSync(path.resolve(newStaticPath));
// Move the static files to `newStaticPath`
fs.renameSync(path.resolve(oldStaticPath), path.resolve(newStaticPath));

// Get JS files from root folder
fs.readdir("./public", (err, files) => {
  files.forEach(file => {
    console.log(/\.(js|map|json|css)$/i.test(filename));
    if (/\.(js|map|json|css)$/i.test(filename)) {
      fs.renameSync(file, "./public/homepage/");
    }
  });
});
console.log(
  "Moved static files from " + oldStaticPath + " to " + newStaticPath
);
