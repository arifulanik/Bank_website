

function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);

    //// clear the deposit you inputed

    depositInput.value = '';

    return depositAmount;
}

// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {
    /// get the amount you deposit
    const depositAmount = getInputValue();
    /// show the deposit money to the deposit field
    const depositTotal = document.getElementById('deposit-total');

    const depositTotalAmount = depositAmount + parseFloat(depositTotal.innerText);

    depositTotal.innerText = depositTotalAmount;


    /// add deposit to the total balance

    const balanceTotal = document.getElementById('balance-total');

    const oldBalance = parseFloat(balanceTotal.innerText);

    const newBalance = parseFloat(oldBalance) + (depositAmount);
    balanceTotal.innerText = newBalance;

});

/// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);

    // show the withdraw amount you wish to get on the withdraw board
    const withdrawTotal = document.getElementById('withdraw-total');

    const withdrawTotalAmount = parseFloat(withdrawAmount) + parseFloat(withdrawTotal.innerText);
    withdrawTotal.innerText = withdrawTotalAmount;

    // clear the withdraw field

    withdrawInput.value = '';
    // substract withdraw money from total balance
    const balanceTotal = document.getElementById('balance-total');
    const oldBalance = balanceTotal.innerText;

    const newBalance = parseFloat(oldBalance) - parseFloat(withdrawAmount);
    if (newBalance >= 0)
        balanceTotal.innerText = newBalance;






});