let priceOfIceCream = 4.95
let paymentRecieved = prompt("How much you got?")
let isPaymentEnough = paymentRecieved >= priceOfIceCream

if(isPaymentEnough){
    print("Thanks, here's your change: $" + (paymentRecieved - priceOfIceCream).toFixed(2) + ". Enjoy your icecream!")
}else{
    print("Not enough cash!")
}