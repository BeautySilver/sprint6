var assert = require("assert");
var operations = require("./operations");
 
it("should multiply two numbers", function(){
     
    var expected = 15;
    var result = operations.multiply(3, 5);
    assert.notEqual(result, expected);
});