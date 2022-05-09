const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should set github via constructor arguments", () => {
      // arrange
      const github = "bungycode";
      // act
      const engineer = new Engineer("Alice", 1, "test@test.com", github);
      // assert
      expect(engineer.github).toBe(github);
    });
  });

  describe("Getter methods", () => {
    it("should get github via getGithub()", () => {
      // arrange
      const github = "bungycode";
      // act
      const engineer = new Engineer("Alice", 1, "test@test.com", github);
      const engineerGithub = engineer.getGithub();
      // assert
      expect(engineerGithub).toBe(github);
    });

    it("should get role via getRole()", () => {
      // arrange
      const role = "Engineer";
      // act
      const engineer = new Engineer(
        "Alice",
        100,
        "test@test.com",
        "bungycode"
      );
      const engineerRole = engineer.getRole();
      // assert
      expect(engineerRole).toBe(role);
    });
  });
});