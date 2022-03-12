//------------Problem-01 --------------//
function budget_calculator(product_1, product_2, product_3){
    if(typeof(product_1) == "number" && typeof(product_2) == "number" && typeof(product_3) == "number"){
        var Total = product_1 + product_2 + product_3
        return Total
    }
    else{
        return "Not a number !"
    }
    
}

var computer = 89000
var watch = 3334
var coffee = 120 

var result = budget_calculator(computer, watch, coffee)

console.log(result);

//------------Problem-02 --------------//
var products =[
    {
    id:1,
    title:"Laptop",
    price:567,
    description:"Laptop fadhfa dsfaj d",
},
    {
    id:2,
    title:"Mobile",
    price:367,
    description:"Mobile dfado a dsjfo d",
},
    {
    id:3,
    title:"Watch",
    price:180,
    description:"Watch daf afsoe d asf",
},
    {
    id:4,
    title:"Coffee",
    price:40,
    description:"Coffee dafe eowe wopqwjla",
}
]

var whatProductYouWantToSearch = "Mobile"
var showProduct = 0;
var found = 0;

for(var i = 0; i < products.length; i++){
    if(products[i].title== whatProductYouWantToSearch){
        found = 1;
        showProduct = i;
        break
    }
}
if(found == 1){
    console.log("Product found");
    console.log(products[showProduct]);
}
else{
    console.log("Product not found");
}


//------------Problem-03 --------------//
function leapYear(year){
    if(year%400==0 && year%4==0 || year%100!=0){
        return 1
    }
    else return 0
}

function class5TotalTk(year){
    if(leapYear(year)){
        return 366*10
    }
    else{
        return 365*10
    }
}

var year = 2012
var totalTk = class5TotalTk(year)

console.log(totalTk);