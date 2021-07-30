'use strict'
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
// let seattle = {
//     name: "seattle",
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     customerperhour: [],
//     Numberofcookies: [],
//     randomCustomer: function () {
//         for (let i = 0; i < hours.length; i++)


//             this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
//         console.log(this.customerperhour);
//     },

//     avgofcookies: function () {
//         for (let i = 0; i < hours.length; i++)

//             this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
//         console.log(this.Numberofcookies)


//     },

//     render: function () {

//         let main = document.getElementById('main')
//         let headtwo = document.createElement('h2')
//         main.appendChild(headtwo)
//         headtwo.textContent = `${this.name}`
//         let unorderedlist = document.createElement('ul')
//         main.appendChild(unorderedlist)

//         for (let i = 0; i < hours.length; i++) {
//             let listeditem = document.createElement('li')
//             unorderedlist.appendChild(listeditem)
//             listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

//         }
//         let total=0 
//         for (let i = 0; i < this.Numberofcookies.length; i++) {
//         total+=this.Numberofcookies[i]
//     }
//         let listitem2=document.createElement('li')
//         unorderedlist.appendChild(listitem2)
//         listitem2.textContent=`total: ${total} cookies`


//         console.log(main);



//     }


// }
// seattle.randomCustomer();
// seattle.avgofcookies();
// seattle.render();

// let tokyo = {
//     name: "tokyo",
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     customerperhour: [],
//     Numberofcookies: [],
//     randomCustomer: function () {
//         for (let i = 0; i < hours.length; i++)


//             this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
//         console.log(this.customerperhour);
//     },

//     avgofcookies: function () {
//         for (let i = 0; i < hours.length; i++)

//             this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
//         console.log(this.Numberofcookies)


//     },

//     render: function () {

//         let main = document.getElementById('main')
//         let headtwo = document.createElement('h2')
//         main.appendChild(headtwo)
//         headtwo.textContent = `${this.name}`
//         let unorderedlist = document.createElement('ul')
//         main.appendChild(unorderedlist)

//         for (let i = 0; i < hours.length; i++) {
//             let listeditem = document.createElement('li')
//             unorderedlist.appendChild(listeditem)
//             listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

//         }
//         let total=0 
//         for (let i = 0; i < this.Numberofcookies.length; i++) {
//         total+=this.Numberofcookies[i]
//     }
//         let listitem2=document.createElement('li')
//         unorderedlist.appendChild(listitem2)
//         listitem2.textContent=`total: ${total} cookies`


//         console.log(main);



//     }


// }
// tokyo.randomCustomer();
// tokyo.avgofcookies();
// tokyo.render();

// let dubai = {
//     name: "dubai",
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     customerperhour: [],
//     Numberofcookies: [],
//     randomCustomer: function () {
//         for (let i = 0; i < hours.length; i++)


//             this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
//         console.log(this.customerperhour);
//     },

//     avgofcookies: function () {
//         for (let i = 0; i < hours.length; i++)

//             this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
//         console.log(this.Numberofcookies)


//     },

//     render: function () {

//         let main = document.getElementById('main')
//         let headtwo = document.createElement('h2')
//         main.appendChild(headtwo)
//         headtwo.textContent = `${this.name}`
//         let unorderedlist = document.createElement('ul')
//         main.appendChild(unorderedlist)

//         for (let i = 0; i < hours.length; i++) {
//             let listeditem = document.createElement('li')
//             unorderedlist.appendChild(listeditem)
//             listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

//         }
//         let total=0 
//         for (let i = 0; i < this.Numberofcookies.length; i++) {
//         total+=this.Numberofcookies[i]
//     }
//         let listitem2=document.createElement('li')
//         unorderedlist.appendChild(listitem2)
//         listitem2.textContent=`total: ${total} cookies`


//         console.log(main);



//     }


// }
// dubai.randomCustomer();
// dubai.avgofcookies();
// dubai.render();

// let paris = {
//     name: "paris",
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     customerperhour: [],
//     Numberofcookies: [],
//     randomCustomer: function () {
//         for (let i = 0; i < hours.length; i++)


//             this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
//         console.log(this.customerperhour);
//     },

//     avgofcookies: function () {
//         for (let i = 0; i < hours.length; i++)

//             this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
//         console.log(this.Numberofcookies)


//     },

//     render: function () {

//         let main = document.getElementById('main')
//         let headtwo = document.createElement('h2')
//         main.appendChild(headtwo)
//         headtwo.textContent = `${this.name}`
//         let unorderedlist = document.createElement('ul')
//         main.appendChild(unorderedlist)

//         for (let i = 0; i < hours.length; i++) {
//             let listeditem = document.createElement('li')
//             unorderedlist.appendChild(listeditem)
//             listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

//         }
//         let total=0 
//         for (let i = 0; i < this.Numberofcookies.length; i++) {
//         total+=this.Numberofcookies[i]
//     }
//         let listitem2=document.createElement('li')
//         unorderedlist.appendChild(listitem2)
//         listitem2.textContent=`total: ${total} cookies`


//         console.log(main);



//     }


// }
// paris.randomCustomer();
// paris.avgofcookies();
// paris.render();


// let lima = {
//     name: "lima",
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     customerperhour: [],
//     Numberofcookies: [],
//     randomCustomer: function () {
//         for (let i = 0; i < hours.length; i++)


//             this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
//         console.log(this.customerperhour);
//     },

//     avgofcookies: function () {
//         for (let i = 0; i < hours.length; i++)

//             this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
//         console.log(this.Numberofcookies)


//     },

//     render: function () {

//         let main = document.getElementById('main')
//         let headtwo = document.createElement('h2')
//         main.appendChild(headtwo)
//         headtwo.textContent = `${this.name}`
//         let unorderedlist = document.createElement('ul')
//         main.appendChild(unorderedlist)

//         for (let i = 0; i < hours.length; i++) {
//             let listeditem = document.createElement('li')
//             unorderedlist.appendChild(listeditem)
//             listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

//         }
//         let total=0 
//         for (let i = 0; i < this.Numberofcookies.length; i++) {
//         total+=this.Numberofcookies[i]
//     }
//         let listitem2=document.createElement('li')
//         unorderedlist.appendChild(listitem2)
//         listitem2.textContent=`total: ${total} cookies`


//         console.log(main);



//     }


// }
// lima.randomCustomer();
// lima.avgofcookies();
// lima.render();

let shopname = []
function Shops(name, min, max, avg) {
    this.Nameofshop = name;
    this.minofcustomer = min;
    this.maxofcustomer = max;
    this.avgofcustomer = avg;
    this.customerperhour = [];
    this.Numberofcookies = [];
    this.totalofcookies = 0;

    shopname.push(this);
}
let shop1 = new Shops("seattle", 23, 65, 6.3)
let shop2 = new Shops("Tokyo", 3, 24, 1.2)
let shop3 = new Shops("Dubai", 11, 38, 3.7)
let shop4 = new Shops("Paris", 20, 38, 2.3)
let shop5 = new Shops("lima", 2, 16, 4.6)

console.log(shopname, "hi")

Shops.prototype.randomCustomer = function () {
    for (let i = 0; i < hours.length; i++)

        this.customerperhour[i] = (Math.floor((Math.random() * (this.maxofcustomer - this.minofcustomer))))
    console.log(this.customerperhour)
}

Shops.prototype.avgofcookies = function () {
    for (let i = 0; i < hours.length; i++) {



        this.Numberofcookies.push(Math.floor(this.customerperhour[i] * this.avgofcustomer))

        console.log(this.Numberofcookies,)
        this.totalofcookies += this.Numberofcookies[i]
        console.log(this.totalofcookies)

    }
}


let main = document.getElementById('main')
let table = document.createElement('table')
main.appendChild(table)

function heading() {




    let tablerow = document.createElement('tr')
    table.appendChild(tablerow)
    let tablehead1 = document.createElement('th')
    tablerow.appendChild(tablehead1)
    tablehead1.textContent = ``;

    console.log(table)
    for (let i = 0; i < hours.length; i++) {
        let tablehead = document.createElement('th')

        tablerow.appendChild(tablehead)
        tablehead.textContent = `${hours[i]}`


    }

    let dailyrow = document.createElement('th')
    tablerow.appendChild(dailyrow)
    dailyrow.textContent = "Daily Location Total "
}





Shops.prototype.render = function () {

    let tablerow = document.createElement('tr')
    table.appendChild(tablerow)
    let tabledata = document.createElement('td')
    tablerow.appendChild(tabledata)
    tabledata.textContent = `${this.Nameofshop}`


    console.log(table)

    for (let i = 0; i < hours.length; i++) {


        let tabledata2 = document.createElement('td')
        tablerow.appendChild(tabledata2)
        tabledata2.textContent = `${this.Numberofcookies[i]}`




    }
    let dailydata = document.createElement('td')
    tablerow.appendChild(dailydata)
    dailydata.textContent = `${this.totalofcookies}`
}

heading()
for (let i = 0; i < shopname.length; i++) {
    shopname[i].randomCustomer()
    shopname[i].avgofcookies()

    shopname[i].render()


}

let footer = function () {

    let footerrow = document.createElement('tr')
    table.appendChild(footerrow)
    console.log(footerrow)
    let footerdata = document.createElement('td')
    footerrow.appendChild(footerdata)
    footerdata.textContent = "Total"

    let totalfooter = 0



    for (let i = 0; i < hours.length; i++) {
        let total = 0

        for (let b = 0; b < shopname.length; b++) {
            total += shopname[b].Numberofcookies[i]
            totalfooter += shopname[b].Numberofcookies[i]





            console.log(shopname[b].Numberofcookies[i])

        }

        let footerdatatotal = document.createElement('td')
        footerrow.appendChild(footerdatatotal)
        footerdatatotal.textContent = `${total} `


        console.log(totalfooter, "hi")
        console.log(total, "hello")
    }

    let totalrender = document.createElement('td')
    footerrow.appendChild(totalrender)
    totalrender.textContent = `${totalfooter} `

}
footer()

// get the form by using its ID 
let cookiesform = document.getElementById('form')

// add event listener 

cookiesform.addEventListener('submit', submitter);

function submitter(event) {

    event.preventDefault();

    console.log(event)

    let name = event.target.locationName.value;
    // console.log(name,"hi")

    let minCustomer = parseInt(event.target.minCustomer.value);
    let maxCustomer = parseInt(event.target.maxCustomer.value);
    let avgCookies = parseFloat(event.target.avgCookies.value);


    let addedShops = new Shops(name, minCustomer, maxCustomer, avgCookies)
    addedShops.randomCustomer()
    // addedShops.Numberofcookies

    console.log(addedShops)
}