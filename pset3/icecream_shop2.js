const conesSoldPerHour = 4
const inventory = 96
let hour = 12

for(let t = 0; t < hour; t++){
    if(t < hour){
        print(conesSoldPerHour * t + " total sold at hour " + (t+1));
        print("Servings left: " + (inventory - conesSoldPerHour * t))
    }
}