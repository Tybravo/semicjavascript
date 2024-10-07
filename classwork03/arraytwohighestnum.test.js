const {twoHighest} = require("./arrayhighestnum");

test("Test for two highest number",()=> {
    let arrayNumbers = [2,3,5,1,7];
    let result = twoHighest(arrayNumbers);
    let expected = [7,51];
    expect(result).toEqual(expected);
});
