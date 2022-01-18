const https = require('https')

let data='' //Buffer to fill up with the data from the request
let employees = {} //The object to be filled

https.get('https://dummy.restapiexample.com/api/v1/employees', (response) => {

// upon receiving data append it to the data variable
  response.on('data', (chunk) => {
    data += chunk;
  })

  //when the request finishes
  response.on('end', () => {
    // parse the JSON string
    let parsed = JSON.parse(data);

    // get the employees from the parsed object
    let parsedEmployees = parsed['data'];

    //iterate through the parsed data
    for (var i in parsedEmployees) {
      // fill the the object
      employees[i] = {
        employee_name: parsedEmployees[i].employee_name,
        employee_salary: parsedEmployees[i].employee_salary
      }
    }
    // Log the object 
    console.log('The object required for the challenge is as follows:');
    console.log(employees);
  })
})
