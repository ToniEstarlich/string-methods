//concat() Method//
function full_sentence() {
    var part_1 ="I have";
    var part_2 ="made this";
    var part_3 ="into a complete";
    var part_4 ="sentence.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
    }
//End concat() Method//

//slice() Method//
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML= Section;
}
//End slice() Method//

//Number Method//
function string_Method() {
    var X =182;
    document.getElementById("Number_to_string").innerHTML= X.toString();
}
//End Number Method//

//toPrecision() Method//
function precision_Method() {
    var X = 12938.30129873761112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
//End toPrecision() Method//