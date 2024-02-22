const {
  getMethod,
  postMethod,
  patchMethod,
} = require("../apiServer/apiObjects");

describe("Test API restful", function () {
  // Test case 1
  it("GET from Function", async function () {
    await getMethod();
  });
  it("POST from Function", async function () {
    await postMethod();
  });
  it("PATCH from Function", async function () {
    await patchMethod();
  });
});
