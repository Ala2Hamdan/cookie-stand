'use strict';

let hourWork=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
let divEl = document.getElementById('container');
let tableEl = document.createElement('table');
 divEl.appendChild(tableEl);


 function headTable (){
    let hours =['   ','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Daily Location Total'];
     
     let trEl = document.createElement('tr');
     tableEl.appendChild(trEl);
     let th1;
     for (let i =0 ; i < hours.length;i++){
         th1= document.createElement('th');
         trEl.appendChild(th1);
         th1.textContent= `${hours[i]}`;

     }
}
let arr=[];
function Location (locName,minCust,maxCust,avgCookieSale){
 this.locationName = locName ;
 this.minCustomer =  minCust;
 this.maxCustomer = maxCust;
 this.avgCookieSales = avgCookieSale;
 this. customersPerHour=[];
 this.cockies=[];
 this.total=0;
 arr.push(this);
 
} 

Location.prototype.updateCustomersPerHour = function() {
           for (let i= 0; i<hourWork.length;i++){
        this.customersPerHour.push(randomValue(this.minCustomer,this.maxCustomer));
        // console.log(this.customersPerHour[i]);
           }
        }
 Location.prototype. updateCockiesPH = function(){
         for (let i=0; i<hourWork.length;i++){
          this.cockies.push(randomValue(this.minCustomer,this.maxCustomer)* Math.ceil(this.avgCookieSales));
         this.total=this.total+this.cockies[i];
                        
                    } 
                }
 Location.prototype.render = function(){
  let tr2= document.createElement('tr');
  tableEl.appendChild(tr2);
  let td = document.createElement('td');
  tr2.appendChild(td);
  td.textContent=`${this.locationName}`;
  for (let i=0; i<hourWork.length;i++){
      td = document.createElement('td');
      tr2.appendChild(td);
      td.textContent=`${this.cockies[i]}`;

  }
  let td2 =document.createElement('td');
  tr2.appendChild(td2);
  td2.textContent=`${this.total}`;
  

 }


 let seattle = new Location ('seattle', 23 , 65 , 6.3);
seattle.updateCustomersPerHour();
seattle.updateCockiesPH();
headTable();
seattle.render();
// console.log(seattle);
let Tokyo = new Location('Tokyo',3 ,24 , 1.2);
Tokyo.updateCustomersPerHour();
Tokyo.updateCockiesPH();
Tokyo.render();
let dubai =new Location('Dubai', 11,38,3.7);
dubai.updateCustomersPerHour();
dubai.updateCockiesPH();
dubai.render();
let paris = new Location('Paris', 20 , 38 , 2.3);
paris.updateCustomersPerHour();
paris.updateCockiesPH();
paris.render();
let lima = new Location('Lima' , 2 , 16 ,4.6);
lima.updateCustomersPerHour();
lima.updateCockiesPH();
lima.render();


function totalTable (){
    let tr3 = document.createElement('tr');
    tableEl.appendChild(tr3);
    let td4=document.createElement('th');
    tr3.appendChild(td4);
    td4.textContent= 'Total';
    let th ;
    let sum1=0;
    for (let i=0; i < hourWork.length;i++){
            th = document.createElement('th');
            tr3.appendChild(th);
            let sum =0;
            for (let j=0; j <arr.length;j++){
             sum =sum +arr[j].cockies[i];
              
            }
            th.textContent=`${sum}`;
            sum1= sum1+sum;
        }
        let th2=document.createElement('th');
        tr3.appendChild(th2);
        th2.textContent=`${sum1}`;
        
        }
        totalTable();

      let form =document.getElementById('newLocation');
        form.addEventListener('submit',locationCreate);

        
    
    function locationCreate(event) {
        // to prevent default behavior from the webpages
        event.preventDefault();
        console.log(event);
       let namel = event.target.nameloc.value;
       console.log(namel);
       console.log( event.target.nameloc.value);
       const min=event.target.minCtr.value;
       parseInt(min);
       console.log(min);
       const max =event.target.maxctr.value;
       parseInt(max);
       console.log(max);
       const avge = event.target.avg.value;
       parseInt(avge);
       console.log(avge);
      
       let createLoc=new Location(namel,min,max,avge);
       tableEl.deleteRow(tableEl.rows.length-1);

       createLoc.updateCustomersPerHour();
       createLoc.updateCockiesPH();
       createLoc.render();
        totalTable();
        
    }

    
    
     