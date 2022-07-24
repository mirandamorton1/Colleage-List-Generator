const Engineer = require("../lib/engineer");
test("Can set Github account via consturctor", () => {
    const testValue = "Github";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("Can get Github username via getGithub()", () => {
    const testValue = "Github";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHub");
    expect(e.getRole()).toBe(testValue);
});