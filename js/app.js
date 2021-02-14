'use strict';

let hourWork=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


let Seattle ={
    locationName:'Seattle',
    minCust:23,
    maxCust:65,
    avgCookieSale:6.3,
    customersPerHour:[],
    cockies:[],
    total:0,
   updateCustomersPerHour : function() {
       for (let i= 0; i<hourWork.length;i++){
    this.customersPerHour.push(randomValue(this.minCust,this.maxCust));
    // return this.customersPerHour;

       }
      
   },
    updateCockiesPH: function(){
        for (let i=0; i<hourWork.length;i++){
            this.cockies.push(randomValue(this.minCust,this.maxCust)* Math.floor(this.avgCookieSale));
            this.total=this.total+this.cockies[i];
            

        }
    },
    createUList :function(){
        let body=document.getElementById('bodyel');
        let mainEl=document.createElement('main');
         body.appendChild(mainEl);
         let parghEl =document.createElement('p');
       mainEl.appendChild(parghEl);
       parghEl.textContent=`${this.locationName}`;
        let ulEl = document.createElement('ul');
        mainEl.appendChild(ulEl);
        let  liEl;
        for (let i=0;i<hourWork.length;i++){
            liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=`${hourWork[i]} : ${this.cockies[i]} cockies`;
        }
       let pargh =document.createElement('p');
       mainEl.appendChild(pargh);
       pargh.textContent=` Total: ${this.total} cockies`;

    },

}
Seattle.updateCockiesPH();
Seattle.createUList();
Seattle.updateCustomersPerHour();
console.log(Seattle);
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}




let  Tokyo ={
    locationName:'Tokyo',
    minCust:3,
    maxCust:24,
    avgCookieSale:1.2,
    customersPerHour:[],
    cockies:[],
    total:0,
   updateCustomersPerHour : function() {
       for (let i= 0; i<hourWork.length;i++){
    this.customersPerHour.push(randomValue(this.minCust,this.maxCust));
    // return this.customersPerHour;

       }
      
   },
    updateCockiesPH: function(){
        for (let i=0; i<hourWork.length;i++){
            this.cockies.push(randomValue(this.minCust,this.maxCust)* Math.floor(this.avgCookieSale));
            this.total=this.total+this.cockies[i];
            

        }
    },
    createUList :function(){
        let body=document.getElementById('bodyel');
        let mainEl=document.createElement('main');
         body.appendChild(mainEl);
         let parghEl =document.createElement('p');
       mainEl.appendChild(parghEl);
       parghEl.textContent=`${this.locationName}`;
        let ulEl = document.createElement('ul');
        mainEl.appendChild(ulEl);
        let  liEl;
        for (let i=0;i<hourWork.length;i++){
            liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=`${hourWork[i]} : ${this.cockies[i]} cockies`;
        }
       let pargh =document.createElement('p');
       mainEl.appendChild(pargh);
       pargh.textContent=` Total: ${this.total} cockies`;

    },

}
Tokyo.updateCockiesPH();
Tokyo.createUList();
Tokyo.updateCustomersPerHour();
console.log(Tokyo);


let  Dubai ={
    locationName:'Dubai',
    minCust:11,
    maxCust:38,
    avgCookieSale:3.7,
    customersPerHour:[],
    cockies:[],
    total:0,
   updateCustomersPerHour : function() {
       for (let i= 0; i<hourWork.length;i++){
    this.customersPerHour.push(randomValue(this.minCust,this.maxCust));
    // return this.customersPerHour;

       }
      
   },
    updateCockiesPH: function(){
        for (let i=0; i<hourWork.length;i++){
            this.cockies.push(randomValue(this.minCust,this.maxCust)* Math.floor(this.avgCookieSale));
            this.total=this.total+this.cockies[i];
            

        }
    },
    createUList :function(){
        let body=document.getElementById('bodyel');
        let mainEl=document.createElement('main');
         body.appendChild(mainEl);
         let parghEl =document.createElement('p');
       mainEl.appendChild(parghEl);
       parghEl.textContent=`${this.locationName}`;
        let ulEl = document.createElement('ul');
        mainEl.appendChild(ulEl);
        let  liEl;
        for (let i=0;i<hourWork.length;i++){
            liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=`${hourWork[i]} : ${this.cockies[i]} cockies`;
        }
       let pargh =document.createElement('p');
       mainEl.appendChild(pargh);
       pargh.textContent=` Total: ${this.total} cockies`;

    },

}
Dubai.updateCockiesPH();
Dubai.createUList();
Dubai.updateCustomersPerHour();
console.log(Dubai);


let   Paris ={
    locationName:'Paris',
    minCust:20,
    maxCust:38,
    avgCookieSale:2.3,
    customersPerHour:[],
    cockies:[],
    total:0,
   updateCustomersPerHour : function() {
       for (let i= 0; i<hourWork.length;i++){
    this.customersPerHour.push(randomValue(this.minCust,this.maxCust));
    // return this.customersPerHour;

       }
      
   },
    updateCockiesPH: function(){
        for (let i=0; i<hourWork.length;i++){
            this.cockies.push(randomValue(this.minCust,this.maxCust)* Math.floor(this.avgCookieSale));
            this.total=this.total+this.cockies[i];
            

        }
    },
    createUList :function(){
        let body=document.getElementById('bodyel');
        let mainEl=document.createElement('main');
         body.appendChild(mainEl);
         let parghEl =document.createElement('p');
       mainEl.appendChild(parghEl);
       parghEl.textContent=`${this.locationName}`;
        let ulEl = document.createElement('ul');
        mainEl.appendChild(ulEl);
        let  liEl;
        for (let i=0;i<hourWork.length;i++){
            liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=`${hourWork[i]} : ${this.cockies[i]} cockies`;
        }
       let pargh =document.createElement('p');
       mainEl.appendChild(pargh);
       pargh.textContent=` Total: ${this.total} cockies`;

    },

}
Paris.updateCockiesPH();
Paris.createUList();
Paris.updateCustomersPerHour();
console.log(Paris);


let  Lima ={
    locationName:'Lima',
    minCust:2,
    maxCust:16,
    avgCookieSale:4.6,
    customersPerHour:[],
    cockies:[],
    total:0,
   updateCustomersPerHour : function() {
       for (let i= 0; i<hourWork.length;i++){
    this.customersPerHour.push(randomValue(this.minCust,this.maxCust));
    // return this.customersPerHour;

       }
      
   },
    updateCockiesPH: function(){
        for (let i=0; i<hourWork.length;i++){
            this.cockies.push(randomValue(this.minCust,this.maxCust)* Math.floor(this.avgCookieSale));
            this.total=this.total+this.cockies[i];
            

        }
    },
    createUList :function(){
        let body=document.getElementById('bodyel');
        let mainEl=document.createElement('main');
         body.appendChild(mainEl);
         let parghEl =document.createElement('p');
       mainEl.appendChild(parghEl);
       parghEl.textContent=`${this.locationName}`;
        let ulEl = document.createElement('ul');
        mainEl.appendChild(ulEl);
        let  liEl;
        for (let i=0;i<hourWork.length;i++){
            liEl=document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=`${hourWork[i]} : ${this.cockies[i]} cockies`;
        }
       let pargh =document.createElement('p');
       mainEl.appendChild(pargh);
       pargh.textContent=` Total: ${this.total} cockies`;

    },

}
Lima.updateCockiesPH();
Lima.createUList();
Lima.updateCustomersPerHour();
console.log(Lima);