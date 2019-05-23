export interface Card  {name: string, typemagic: string, power: number}
 
 const port = 3000
 const Api = {
  
  getCards(): Promise<Card[]> {
    const path = 'http://' + location.hostname + ':' + port + '/api/card/list'
    return new Promise(function (resolve, reject) {
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