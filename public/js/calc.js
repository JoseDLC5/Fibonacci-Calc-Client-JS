let myForm = document.getElementById("myForm");
let formNumber = document.getElementById("formNumber");
let myUl = document.getElementById("results");
let errorDiv = document.getElementById("errorDiv");

if (myForm) {
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (formNumber) {
            if (formNumber.value) {
                errorDiv.hidden = true;
                fib = computeFib(Number(formNumber.value));
                let li = document.createElement("li");
                if (isPrime(fib)) {
                    li.classList.add("is-prime");
                } else {
                    li.classList.add("not-prime");
                }
                li.innerHTML = `The Fibonacci of ${formNumber.value} is ${fib}.`;
                myUl.appendChild(li);
            } else {
                errorDiv.hidden = false;
                errorDiv.innerHTML = "Index number must be supplied.";
            }
            formNumber.focus();
            myForm.reset();
        }
    });
}

function computeFib(index) {
    if (typeof index != "number" || index % 1 != 0) {
        throw "index must be an integer";
    }
    let fib0 = 0;
    let fib1 = 1;
    let temp;
    if (index === 1) {
        return 1;
    }
    if (index < 1) {
        return 0;
    }

    for (let i = 0; i < index; i++) {
        temp = fib1;
        fib1 = fib1 + fib0;
        fib0 = temp;
    }
    return fib0;
}

function isPrime(num) {
    if (typeof num != "number" || num % 1 != 0) {
        throw "index must be an integer";
    }
    for (var i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
}
