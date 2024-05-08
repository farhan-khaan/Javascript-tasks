// Simple Calculator 
function cal (num1, num2, sign) {
        if (sign == "+") {
        console.log(num1 + num2);
    }
        else if (sign == "-") {
            console.log(num1 - num2);
    }

        else if (sign == "*") {
        console.log(num1 * num2);
    }
        else if (sign == "/") {
        console.log(num1 / num2);
    }
    else {
        console.log("not vaild for calculation");
    }
}
cal (2,4,"==");
