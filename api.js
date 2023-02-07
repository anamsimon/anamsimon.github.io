// const form = document.querySelector("#form");

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     const payload = new FormData(form)

//     console.log([...payload])
// })



const pay_up = document.querySelector('#pay_up');
pay_up.addEventListener('click', function(){
    //     fetch("https://us-central1-e-receipt-f8d0d.cloudfunctions.net/createReceipt", {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*"},
    //         mode:"no-cors",
    //         body: JSON.stringify({
    //             "storeId": "-NIGWWhLlwm9yloc2-n2",
    //             "receipt": [
    //                 {
    //                     "item": "Coke",
    //                     "price": 2.5,
    //                     "qty": 2,
    //                     "unit": "each"
    //                 }
    //             ]
    //         })
    // }).then(res =>{return res.json()})
    // .then(data => console.log(data))
    // .catch(e => console.log(e))

    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");

    let item1 =document.querySelector('#item1').innerHTML    
    let item2 =document.querySelector('#item2').innerHTML
    let item3 =document.querySelector('#item3').innerHTML

    let qty_A =document.querySelector('#qty_A').value   
    let qty_M =document.querySelector('#qty_M').value
    let qty_CE =document.querySelector('#qty_CE').value

    let price_A =document.querySelector('#price_A').value    
    let price_M =document.querySelector('#price_M').value
    let price_CE =document.querySelector('#price_CE').value

    console.log(item1)
    
    
        var raw = JSON.stringify({
            "storeId": "-NIGWWhLlwm9yloc2-n2",
            "receipt": [
                {
                    "item": item1,
                    "price": price_A,
                    "qty": qty_A,
                    "unit": "each"
                },
                {
                    "item": item2,
                    "price": price_M,
                    "qty": qty_M,
                    "unit": "litre"
                },
                {
                    "item": item3,
                    "price": price_CE,
                    "qty": qty_CE,
                    "unit": "dozen"
                }
            ]
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        console.log(raw)



        fetch("https://us-central1-e-receipt-f8d0d.cloudfunctions.net/createReceipt", requestOptions)
            .then(response => response.text())
            .then(result => {
                //alert('receipt created. ID '+ result) ; 
                console.log(result);
                const img = document.createElement("img");
                img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + result;
                const div = document.createElement("div");
                div.innerHTML = "Receipt No<br/>" +result;
                document.body.appendChild(img);
                document.body.appendChild(div);
            })
            .catch(error => {
                const div = document.createElement("div");
                div.innerText = error;
                document.body.appendChild(div);
                console.log('error', error)
            });
})
