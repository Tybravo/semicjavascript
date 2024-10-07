const Rectangle  = require("./rectangle")

test('test to claculate area of shape ', ()=>{
let theShape = new Rectangle("wall", 5,8);
let result = theShape.getArea();
expect(result).toBe(40)
})

test('test that shape is sqaurish', ()=>{
let thesquare = new Rectangle("wall", 4, 4);
let result = thesquare.isSqarish();
expect(result).toBe(true)
})
