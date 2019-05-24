/// <reference path="Types" />
 
 const port = 3000
 const Api = {
  
  getCards(): Promise<Types.Card[]> {
    const path = 'http://' + location.hostname + ':' + port + '/api/card/list'
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      request.open('GET', path, true)
      request.onload = () => {
        if (request.status === 200) resolve(JSON.parse(request.response))
        else reject(Error('Ошибка' + request.statusText))
      }
      request.send(null)
    })
  }
}

export default Api