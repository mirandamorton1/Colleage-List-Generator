const Manager = require("../lib/manager");
test("Can set office number via consturctor", () => {
    const testValue = "Office Number";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("Can get office number getSchool()", () => {
    const testValue = "Office Number";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", "Office Number");
    expect(e.getRole()).toBe(testValue);
});