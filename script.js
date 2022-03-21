const operate = function(a, b, operation) {
    if (operation == "+")
        return a + b
    if (operation == "-")
        return a - b
    if (operation == "/")
        return a / b
    if (operation == "X")
        return a * b
}

const btn = Array.from(document.querySelectorAll('.btn'));
const output = document.querySelector('.output')

let firstEntry = 0;
let secondEntry = 0;
let mOp = "";
let calcCache = []

btn.forEach(function(iButton) {
    iButton.addEventListener('click', function (e) {
        if (e.target.textContent === "X" |
            e.target.textContent === "-" |
            e.target.textContent === "+" |
            e.target.textContent === "/" 
            ) 
            {

                if (firstEntry == 0) {
                    firstEntry = parseInt(calcCache.join(''));
                    calcCache = []
                    output.textContent = ''
                } else {
                    secondEntry = parseInt(calcCache.join(''));
                    calcCache = []
                    firstEntry = operate(firstEntry, secondEntry, mOp);
                    output.textContent = firstEntry;
                    secondEntry = 0;
                }

                mOp = e.target.textContent;

            } else if (e.target.textContent != "=" &&
                       e.target.textContent != "clear") {
                calcCache.push(e.target.textContent);
                output.textContent = calcCache.join('');
            } else if (e.target.textContent == "=") {
                secondEntry = parseInt(calcCache.join(''));
                calcCache = []
                console.log(firstEntry, mOp, secondEntry)
                output.textContent = operate(firstEntry, secondEntry, mOp);
            } else if (e.target.textContent == "clear") {
                output.textContent = '';
                calcCache = []
                firstEntry = 0;
                secondEntry = 0;
                mOp = ""
            }
    });
});