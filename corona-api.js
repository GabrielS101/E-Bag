const c = require("coronavirus-api.js")
c.covidall().then(console.log())
//logs all covid-19 data

c.covidcountry('USA').then(console.log())
//shows data for a specified country

c.usastate('Texas').then(console.log()) 
//shows data for a specified US state

c.allcontinents().then(console.log()) 

c.continents('Europe').then(console.log()) 