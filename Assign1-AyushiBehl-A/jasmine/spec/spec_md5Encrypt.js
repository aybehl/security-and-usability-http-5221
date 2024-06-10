describe("Test md5Encrypt function", () => {
    //Test to Pass
    describe("md5Encrypt Test to Pass", () => {
        it("should return a string of the hashed value (as 32 hexadecimal characters).", () => {
            expect(md5Encrypt('ayushi')).toMatch(/[0-9a-f]{32}/);
        });
    });
});