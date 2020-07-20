import chai from "chai";
import add from "../src/add.js";
const expect = chai.expect;

describe("Add", () => {
  it("correctly add small numbers", () => {
    expect(add(1, 1)).to.equal(2);
  });
  it("adds strings", () => {
    expect(add("asd", "asd")).to.equal("asdasd");
  });
});