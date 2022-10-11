import { getDaysToNewYear1 } from "../src/getDaysToNewYear1";
import { expect } from "chai";

describe("Example testing of module `module`", () => {
  describe("function getDaysToNewYear1()", () => {
    it("should return 10 дней", () => {
      expect(getDaysToNewYear1(new Date(2022, 11, 22))).to.be.equal(
        "10 дн. 0 ч. 0 мин. 0 сек."
      );
    });

    it("should return 288 дней", () => {
        expect(getDaysToNewYear1(new Date(2022, 2, 19))).to.be.equal(
          "288 дн. 0 ч. 0 мин. 0 сек."
        );
      });

    it("should return 100 дней", () => {
        expect(getDaysToNewYear1(new Date(2022, 8, 23))).to.be.equal(
            "100 дн. 0 ч. 0 мин. 0 сек."
        )
    })
  });
});
