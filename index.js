/* Your Code Here */
// Your code here



function createEmployeeRecord (arr) {
  
        let employeeRecord = {
        firstName: arr[0], 
        familyName: arr[1], 
        title: arr[2], 
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: [],
        }
       // console.log(employeeRecord);
        return employeeRecord
    }
    


 createEmployeeRecords = function (arr){
    let arr2 = []
    arr2 = arr2.concat(arr);
    let employeeRecords = [];
    for(let item of arr2){
      let newRecord = createEmployeeRecord(item)
      employeeRecords.push(newRecord)
    }
    return employeeRecords
}
let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]
//console.log(createEmployeeRecords(twoRows));
//let employeeRecord = [];
//console.log(createEmployeeRecord.call(employeeRecord, ["bartholomew", "simpson", "scamp", 3] ));

function createTimeInEvent(dateStamp){
    
    
     let newTimeInEvent = {
        type: "TimeIn",
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ', 1)[0]
    };

this.timeInEvents.push(newTimeInEvent)
return this
    }



//bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
//console.log(bpRecord)
//console.log(createTimeInEvent.call(bpRecord, "2014-02-28 1400"))

function createTimeOutEvent(dateStamp){
    
    
        let newTimeOutEvent = {
           type: "TimeOut",
           hour: parseInt(dateStamp.split(' ')[1]),
           date: dateStamp.split(' ', 1)[0]
       };
   
   this.timeOutEvents.push(newTimeOutEvent)
   return this
       }

function hoursWorkedOnDate(date){
let hourIn;
let hourOut;
let timeIn = this.timeInEvents.filter(event => event.date == date)[0].hour
let timeOut = this.timeOutEvents.filter(event => event.date == date)[0].hour

return (timeOut - timeIn)/100;
}

    




 function wagesEarnedOnDate(date){
   let hours = hoursWorkedOnDate.call(this, date)

return hours * this.payPerHour
 }



function findEmployeeByFirstName(sourceArr, firstName){

let name = sourceArr.filter(record => record.firstName === firstName)[0];
//for (const record of sourceArr) {
  //  if (record.firstName === firstName) {
    //    return record;}
//}

return name ? name : undefined
//return undefined
}    


function calculatePayroll(employeeRecords){

let payroll = []

    // employeeRecords.forEach(employee => payroll.push(allWagesFor(employee)))
    employeeRecords.forEach(employeeRecord => {
        let wageOfEmployee = allWagesFor.call(employeeRecord)
        payroll.push(wageOfEmployee)
    }) 

    let allWages = payroll.reduce((a, b) => a + b)

    return allWages

    // return payroll.reduce((a, b) => a + b)
    
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

