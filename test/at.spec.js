import chai from "chai";
import at from "../src/at.js";
const expect = chai.expect;

describe("At", () => {
  var testObject;
  before(function () {
    testObject = { a: [{ b: { c: 3 } }, 4] };
  });
  it("correctly creates an array", () => {
    expect(at(testObject, ["a[0].b.c", "a[1]"])).to.deep.equal([3, 4]);
  });
  it("returns correct type", () => {
    expect(at(testObject, ["a[0].b.c", "a[1]"])).to.be.an("array");
  });
});