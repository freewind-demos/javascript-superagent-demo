const request = require('superagent')

request.get('http://taobao.com')
    .end((err, res) => {
        if (err) return console.error(err)
        console.log(res)
    })