let btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill_amount').value
    let tipPercentage = document.getElementById('tip_percentage').value
    let tipAmount = document.getElementById('tip_amount').value = billAmount / tipPercentage
    let totalBill = document.getElementById('total_amount').value = parseFloat(billAmount) + parseFloat(tipAmount)
    console.log(typeof totalBill) 
})