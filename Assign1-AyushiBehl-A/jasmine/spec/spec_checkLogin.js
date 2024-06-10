describe("Test checkLogin function", () => {
    //Test to Pass
    describe("checkLogin Test to Pass", () => {
        it("should return the Boolean true if the username and the password match a known username and matching password.", () => {
            expect(checkLogin('aybehl', 'Ayu$h!2710')).toEqual(true);
        });
    });

    //Test to Fail
    describe("checkLogin Test to Fail", () => {
        it("should return 'No username entered.' if the username is an empty string and password is also empty", () => {
            expect(checkLogin('', '')).toEqual('No username entered.');
        });

        it("should return 'No username entered.' if the username is an empty string and password is not empty", () => {
            expect(checkLogin('', 'wfnjkwrnf')).toEqual('No username entered.');
        });

        it("should return 'No password entered.' if the password is an empty string and username is not empty", () => {
            expect(checkLogin('ayushi', '')).toEqual('No password entered.');
        });
        
        it("should return 'Invalid Username or Password.' if the username input DOESN'T MATCH a known username and the password DOESN'T MATCH the correct password", () => {
            expect(checkLogin('ayushi', 'hvdhew')).toEqual('Invalid Username or Password.');
        });

        it("should return 'Invalid Username or Password.' if the username input MATCHES a known username and the password DOESN'T MATCH the correct password", () => {
            expect(checkLogin('aybehl', 'hvdhew')).toEqual('Invalid Username or Password.');
        });

        it("should return 'Invalid Username or Password.' if the username input DOESN'T MATCH a known username and the password MATCHS the correct password", () => {
            expect(checkLogin('ayushi', 'Ayu$h!2710')).toEqual('Invalid Username or Password.');
        });
    });
});


