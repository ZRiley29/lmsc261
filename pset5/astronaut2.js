function checkLifeSpan(hoursUsed = prompt("How many hours used?")){

    console.log(hoursUsed)

    const maxLifeSpan = 1000

    if (typeof hoursUsed === 'number'){
        console.log(hoursUsed)
        return("Please enter valid number")
    }

    if(hoursUsed < 800){
        return("Suit in working condition.")

    }else if(hoursUsed >= 800 && hoursUsed < maxLifeSpan){
        return("Suit needs replacing soon.")

    }else{
        return("Suit needs replacement.")
    }
}
print(checkLifeSpan())