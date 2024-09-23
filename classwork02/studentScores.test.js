const {passMark,addPoint,squareNum,distribute,classTiming} = require("./studentScores");

    test("Test for 70 as pass mark scores",()=> {
		let arrayScores = [34,87,56,73,81,55,82,53,70,91];
		let result = passMark(arrayScores);
        let expected = [87,73,81,82,91];
		expect(result).toEqual(expected);
    });


    test("Test 5 points are added to each grade",()=> {
		let arrayGrade = [85,92,78,88,95];
		let result = addPoint(arrayGrade);
        let expected = [90,97,83,93,100];
		expect(result).toEqual(expected);
    });


    test("Test that each element are squared",()=> {
		let arrayGrade = [2,4,6,8,10];
		let result = squareNum(arrayGrade);
        let expected = [4,16,36,64,100];
		expect(result).toEqual(expected);
    });


    test("Test for classes offered in the afternoon",()=> {
		let arrayTime = ["9:00 AM", "11:00 AM", "1:00 PM", "3:00PM", "5:00PM"];
		let result = classTiming(arrayTime);
        let expected = ["1:00 PM", "3:00PM", "5:00PM"];
		expect(result).toEqual(expected);
    });


    // test("Test that books are distributed to each member", ()=> {
    //     let arrayNames = ["Emily", "Jack", "Sophia", "Daniel"];
	// 	let result = distribute(arrayNames);
    //     //let expected = [{maths: "Emily"}, {english: "Jack"}, {biology: "Sophia"}, {economics: "Daniel"}]
	// 	let expected = [{maths: "Emily"}, {english: "Jack"}, {biology: "Sophia"}, {economics: "Daniel"}]
	// 	expect(result).toEqual(expected);
    // });

    