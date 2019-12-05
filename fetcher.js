const request = require('request');
const fs = require('fs');

const url = process.argv[2]
const path = process.argv[3]


const fileFetcher = function(url, path, callback) {

  request(url, (error, response, body) => {
      console.log('error:', error)
      let information = body;
      callback(path, information);
      })
    }



const createFile = function(path, body) {
      fs.writeFile(path, body, function(err) {
        if (err) throw err;
        let size = fs.statSync(path).size;
        console.log(`Downloaded and saved ${size} bytes to ${path}`); 
       })
} 

fileFetcher(url, path, createFile);