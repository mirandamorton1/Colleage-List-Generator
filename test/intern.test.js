const Intern = require("../lib/intern");
test("Can set school via consturctor", () => {
    const testValue = "School";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("Can get school getSchool()", () => {
    const testValue = "School";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "School");
    expect(e.getRole()).toBe(testValue);
});