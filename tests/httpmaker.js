var http = require('http');

const customHttp = {
  request(url, dataObject) {
    return new Promise((resolve, reject) => {

      const data = JSON.stringify(dataObject)
      const options = {
        hostname: url.hostname,
        port: url.port,
        path: url.path,
        method: url.method,
        headers: {
          'Content-Type': 'application/parsedData',
          'Content-Length': data.length
        }
      }
      var req = http.request(options, function (res) {
        let data = ""
        res.on('data', function (chunk) {
          data += chunk

        });

        res.on("end", () => {
          if (!data) { data = "{}" }
          const parsed = JSON.parse(data)
          resolve(
            {
              body: parsed,
              statusCode: res.statusCode
            })



        })
        res.on("error", (error) => { reject(error.message) })
      });




      req.end(data)





    })
  }
}


module.exports = customHttp