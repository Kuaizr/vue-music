var request = require('request');
function param(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
}


export default function req(url, data, headers, method) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    return new Promise((resolve, reject) => {
        request({url,method,headers},(err, response ,data) => {
            if (!err) {
                resolve(JSON.parse(data))
            } else {
                reject(err)
            }
        })
    })
}