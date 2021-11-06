const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data/participantData.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {    //to create synchronicity - i.e. after the data is recieved

        //calculating the number of labs and appending it in the results
        results.forEach((result) => {
            console.log(result['Email Address'])
        })

        //creating a file called participantData
        fs.writeFileSync(
            "data/participantData.json",
            JSON.stringify(results),
            (err) => {
                if (err) throw err;
                console.log("Data saved!");
            }
        );
    });
