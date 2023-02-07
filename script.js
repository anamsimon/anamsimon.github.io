
// function calc(){
//     let qty = parseInt(document.getElementById("qty").value)
//     let price = parseFloat(document.getElementById("price").value)
//     let amount = qty * price;
//     console.log(qty)
//     console.log(price)
//     console.log(amount)
//     // console.log(document.getElementById("amt_num").innerHTML=amount)
//     document.querySelector(".amount").innerHTML = "$" + amount;
// }

function findTotal(a,b){
    let arr = a;
    let tot=1;
    for(let i=0;i<arr.length;i++){
        if(parseFloat(arr[i].value))
            tot *= parseFloat(arr[i].value);
    }
    let tAmt = b.innerHTML = "$" + tot;
    
}

function sumT(){
    let amount = document.querySelector('.amount').innerHTML.match(/[+-]?\d+(\.\d+)?/g)
    let amount2 = document.querySelector('.amount2').innerHTML.match(/[+-]?\d+(\.\d+)?/g)
    let amount3 = document.querySelector('.amount3').innerHTML.match(/[+-]?\d+(\.\d+)?/g)
    let subTotal = parseFloat(amount) + parseFloat(amount2) + parseFloat(amount3);
    console.log(document.querySelector(".strong").innerHTML = "TOTAL: $" + parseFloat(subTotal));

    console.log(parseFloat(amount), parseFloat(amount2), parseFloat(amount3))
}
