'use strict'
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let seattle = {
    name: "seattle",
    min: 23,
    max: 65,
    avg: 6.3,
    customerperhour: [],
    Numberofcookies: [],
    randomCustomer: function () {
        for (let i = 0; i < hours.length; i++)


            this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
        console.log(this.customerperhour);
    },

    avgofcookies: function () {
        for (let i = 0; i < hours.length; i++)

            this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
        console.log(this.Numberofcookies)


    },

    render: function () {

        let main = document.getElementById('main')
        let headtwo = document.createElement('h2')
        main.appendChild(headtwo)
        headtwo.textContent = `${this.name}`
        let unorderedlist = document.createElement('ul')
        main.appendChild(unorderedlist)

        for (let i = 0; i < hours.length; i++) {
            let listeditem = document.createElement('li')
            unorderedlist.appendChild(listeditem)
            listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

        }
        let total=0 
        for (let i = 0; i < this.Numberofcookies.length; i++) {
        total+=this.Numberofcookies[i]
    }
        let listitem2=document.createElement('li')
        unorderedlist.appendChild(listitem2)
        listitem2.textContent=`total: ${total} cookies`
            
        
        console.log(main);



    }


}
seattle.randomCustomer();
seattle.avgofcookies();
seattle.render();

let tokyo = {
    name: "tokyo",
    min: 3,
    max: 24,
    avg: 1.2,
    customerperhour: [],
    Numberofcookies: [],
    randomCustomer: function () {
        for (let i = 0; i < hours.length; i++)


            this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
        console.log(this.customerperhour);
    },

    avgofcookies: function () {
        for (let i = 0; i < hours.length; i++)

            this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
        console.log(this.Numberofcookies)


    },

    render: function () {

        let main = document.getElementById('main')
        let headtwo = document.createElement('h2')
        main.appendChild(headtwo)
        headtwo.textContent = `${this.name}`
        let unorderedlist = document.createElement('ul')
        main.appendChild(unorderedlist)

        for (let i = 0; i < hours.length; i++) {
            let listeditem = document.createElement('li')
            unorderedlist.appendChild(listeditem)
            listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

        }
        let total=0 
        for (let i = 0; i < this.Numberofcookies.length; i++) {
        total+=this.Numberofcookies[i]
    }
        let listitem2=document.createElement('li')
        unorderedlist.appendChild(listitem2)
        listitem2.textContent=`total: ${total} cookies`
            
        
        console.log(main);



    }


}
tokyo.randomCustomer();
tokyo.avgofcookies();
tokyo.render();

let dubai = {
    name: "dubai",
    min: 11,
    max: 38,
    avg: 3.7,
    customerperhour: [],
    Numberofcookies: [],
    randomCustomer: function () {
        for (let i = 0; i < hours.length; i++)


            this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
        console.log(this.customerperhour);
    },

    avgofcookies: function () {
        for (let i = 0; i < hours.length; i++)

            this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
        console.log(this.Numberofcookies)


    },

    render: function () {

        let main = document.getElementById('main')
        let headtwo = document.createElement('h2')
        main.appendChild(headtwo)
        headtwo.textContent = `${this.name}`
        let unorderedlist = document.createElement('ul')
        main.appendChild(unorderedlist)

        for (let i = 0; i < hours.length; i++) {
            let listeditem = document.createElement('li')
            unorderedlist.appendChild(listeditem)
            listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

        }
        let total=0 
        for (let i = 0; i < this.Numberofcookies.length; i++) {
        total+=this.Numberofcookies[i]
    }
        let listitem2=document.createElement('li')
        unorderedlist.appendChild(listitem2)
        listitem2.textContent=`total: ${total} cookies`
            
        
        console.log(main);



    }


}
dubai.randomCustomer();
dubai.avgofcookies();
dubai.render();

let paris = {
    name: "paris",
    min: 20,
    max: 38,
    avg: 2.3,
    customerperhour: [],
    Numberofcookies: [],
    randomCustomer: function () {
        for (let i = 0; i < hours.length; i++)


            this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
        console.log(this.customerperhour);
    },

    avgofcookies: function () {
        for (let i = 0; i < hours.length; i++)

            this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
        console.log(this.Numberofcookies)


    },

    render: function () {

        let main = document.getElementById('main')
        let headtwo = document.createElement('h2')
        main.appendChild(headtwo)
        headtwo.textContent = `${this.name}`
        let unorderedlist = document.createElement('ul')
        main.appendChild(unorderedlist)

        for (let i = 0; i < hours.length; i++) {
            let listeditem = document.createElement('li')
            unorderedlist.appendChild(listeditem)
            listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

        }
        let total=0 
        for (let i = 0; i < this.Numberofcookies.length; i++) {
        total+=this.Numberofcookies[i]
    }
        let listitem2=document.createElement('li')
        unorderedlist.appendChild(listitem2)
        listitem2.textContent=`total: ${total} cookies`
            
        
        console.log(main);



    }


}
paris.randomCustomer();
paris.avgofcookies();
paris.render();


let lima = {
    name: "lima",
    min: 2,
    max: 16,
    avg: 4.6,
    customerperhour: [],
    Numberofcookies: [],
    randomCustomer: function () {
        for (let i = 0; i < hours.length; i++)


            this.customerperhour[i] = (Math.floor((Math.random() * (this.max - this.min))))
        console.log(this.customerperhour);
    },

    avgofcookies: function () {
        for (let i = 0; i < hours.length; i++)

            this.Numberofcookies[i] = Math.floor(this.customerperhour[i] * this.avg)
        console.log(this.Numberofcookies)


    },

    render: function () {

        let main = document.getElementById('main')
        let headtwo = document.createElement('h2')
        main.appendChild(headtwo)
        headtwo.textContent = `${this.name}`
        let unorderedlist = document.createElement('ul')
        main.appendChild(unorderedlist)

        for (let i = 0; i < hours.length; i++) {
            let listeditem = document.createElement('li')
            unorderedlist.appendChild(listeditem)
            listeditem.textContent = `${hours[i]}:${this.Numberofcookies[i]} cookies`

        }
        let total=0 
        for (let i = 0; i < this.Numberofcookies.length; i++) {
        total+=this.Numberofcookies[i]
    }
        let listitem2=document.createElement('li')
        unorderedlist.appendChild(listitem2)
        listitem2.textContent=`total: ${total} cookies`
            
        
        console.log(main);



    }


}
lima.randomCustomer();
lima.avgofcookies();
lima.render();