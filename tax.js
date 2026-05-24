function calculateTax() {
    let income =
    parseFloat(document.getElementById("income").value);

    let tax = 0;

    if (income <= 5000) {
        tax = 0;
    }

    else if (income <= 20000) {
        tax = income * 0.01;
    }

    else if (income <= 35000) {
        tax = income * 0.03;
    }

    else if (income <= 50000) {
        tax = income * 0.08;
    }

    else {
        tax = income * 0.12;
    }

    document.getElementById("result").innerHTML =

    "Tax Amount: RM " +
    tax.toFixed(2);

}