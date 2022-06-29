// 1.display numbers in text box
function displayNum(num){
    
    calc.value+=num

}

// 2.clear content in ext box

function clearBox(){
    calc.value=""
}


// 3.evaluvate the expression

function evaluvateExpr(){
    // expr=calc.value
    // output=eval(expr)
    // calc.value=output

    calc.value=eval(calc.value)


}

// 4.remove last item from the text box

function removeItem(){
    cuExpr=calc.value
    calc.value=cuExpr.slice(0,-1)

}