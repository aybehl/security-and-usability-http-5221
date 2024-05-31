describe("Test guessNum function", () => {
    //Test to Pass
    describe("guessNum Test to Pass", () => {
        it("should return 'You guessed it!' when the correct number is entered.", () => {
            expect(guessNum(4)).toEqual('You guessed it!');
        });
        
        it("should return 'Guess again.' for any number between 1 and 10 (inclusive) that is not the correct answer.", () => {
            expect(guessNum(5)).toEqual('Guess again.');
        });
    });

    //Test to Fail
    describe("guessNum Test to Fail", () => {
        it("should return 'A number was not input.' if the value entered is not a number.", () => {
            expect(guessNum('ayushi')).toEqual('A number was not input.');
        });
        
        it("should return 'A value was not entered.' if it receives an empty string. ", () => {
            expect(guessNum("")).toEqual('A value was not entered.');
        });

        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is a number outside of the allowed range of guessing values.", () => {
            expect(guessNum(9000)).toEqual('Way off!!!! Pick between 1 and 10.');
        });
    });

    //Boundary Tests
    describe("guessNum Boundary Conditions", () => {
        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is 0", () => {
            expect(guessNum(0)).toEqual('Way off!!!! Pick between 1 and 10.');
        });
        
        it("should return 'Guess again.' if the value entered is 1", () => {
            expect(guessNum(1)).toEqual('Guess again.');
        });

        it("should return 'Guess again.' if the value entered is 2", () => {
            expect(guessNum(2)).toEqual('Guess again.');
        });

        it("should return 'Way off!!!! Pick between 1 and 10.' if the value entered is 11", () => {
            expect(guessNum(11)).toEqual('Way off!!!! Pick between 1 and 10.');
        });
        
        it("should return 'Guess again.' if the value entered is 10", () => {
            expect(guessNum(10)).toEqual('Guess again.');
        });

        it("should return 'Guess again.' if the value entered is 9", () => {
            expect(guessNum(9)).toEqual('Guess again.');
        });
    });

});


