function calculescore(sub1, sub2, sub3) {
    return (sub1 + sub2 + sub3 ) / 3;
}

function findscore (score) {
    if ( score>80 && score <=100 ) {
        console.log("Grade = A++ ");
    }
    else if ( score>70 && score <=79 ) {
        console.log("Grade = A ");
    }
    else if ( score>60 && score <=69 ) {
        console.log("Grade = B ");
    }
    else if ( score>50 && score <=59 ) {
        console.log("Grade = C ");
    }
    else if ( score>59 ) {
        console.log("Grade = F ");
    }
}
var r1 = calculescore (78,54,85);
var r2 = calculescore (85,74,80);
var r3 = calculescore (58,64,55);
console.log("Result1 = "+r1);
console.log("Result2 = "+r2);
console.log("Result3 = "+r3);
findscore(r1);
findscore(r2);
findscore(r3);