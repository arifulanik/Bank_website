

function getInputValue(inputId) {
    const Input = document.getElementById(inputId);
    const Amount = parseFloat(Input.value);

    //// clear the deposit you inputed

    Input.value = '';

    return Amount;
}

function updateTotalField(givenAmount, id) {
    const totalElement = document.getElementById(id);
    const totalAmount = givenAmount + parseFloat(totalElement.innerText);
    totalElement.innerText = totalAmount;

    return totalElement.innerText;

}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const oldBalance = parseFloat(balanceTotal.innerText);
    return oldBalance;
}

function updateBalance(addedAmount, chk) {
    const balanceTotal = document.getElementById('balance-total');
    /* const oldBalance = parseFloat(balanceTotal.innerText); */
    const oldBalance = getCurrentBalance();

    if (chk) {
        const newBalance = parseFloat(oldBalance) + (addedAmount);
        balanceTotal.innerText = newBalance;

    }
    else {
        const newBalance = parseFloat(oldBalance) - (addedAmount);
        ///balanceTotal.innerText = newBalance;
        if (newBalance >= 0)
            balanceTotal.innerText = newBalance;
    }
}

// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
    /// get the amount you deposit


    /// show the deposit money to the deposit field
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalAmount = depositAmount + parseFloat(depositTotal.innerText);
    depositTotal.innerText = depositTotalAmount; 
    */



    /// update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const oldBalance = parseFloat(balanceTotal.innerText);
    const newBalance = parseFloat(oldBalance) + (depositAmount);
    balanceTotal.innerText = newBalance; 
    */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField(depositAmount, 'deposit-total');
        updateBalance(depositAmount, true);
    }



});

/// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {

    // show the withdraw money to withdraw field
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = parseFloat(withdrawAmount) + parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = withdrawTotalAmount; 
    */


    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const oldBalance = balanceTotal.innerText;
    const newBalance = parseFloat(oldBalance) - parseFloat(withdrawAmount);
    if (newBalance >= 0)
        balanceTotal.innerText = newBalance;
    else {
        withdrawTotal.innerText -= withdrawAmount;
    } */
    const withdrawAmount = getInputValue('withdraw-input');
    const currantBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount <= currantBalance) {
        updateTotalField(withdrawAmount, 'withdraw-total');
        updateBalance(withdrawAmount, false);
    }



});