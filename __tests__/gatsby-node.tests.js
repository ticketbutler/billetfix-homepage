const mock = require("mock-fs");

describe("the static files should be namespaced to `homepage/static`", () => {
  it("moves the static folder", () => {
    mock({
      static: {
        "pretty-cow.img": "Moo"
      }
    });
    require("./move-static-files");
    mock.restore();
  });
});
