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
    else if ( score<49 ) {
        console.log("Grade = F ");
    }
}
findscore (71);
findscore (65);
findscore (40);
findscore (85);