/// <reference path="./Types.ts" />

import { STATUS_CODES } from "http";

export class Error {
  code: string
  message: string
  constructor(code: string, message: string) {
    this.code = code
    this.message = message
  }
}

const port = process.env.DESX_CARD_SERVER_PORT || 9000
const Api = {
  
  getCards(): Promise<Types.Card[]> {
    const path = 'http://' + location.hostname + ':' + port + '/api/card/list'
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      request.open('GET', path, true)
      request.onload = () => {
        if (request.status === 200) resolve(JSON.parse(request.response))
        else {
          reject(new Error(request.statusText.code, request.statusText.message))
        }
      }
      request.send(null)
    })
  },
  setCard(parameters: Types.Card) {
    const path = 'http://' + location.hostname + ':' + port + '/api/card'
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      request.open('POST', path, false)
      request.setRequestHeader("Content-type", "application/json")
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) resolve(JSON.parse(request.response))
        else {
          const {code, message} = JSON.parse(request.responseText)
          reject(new Error(code, message)) 
        }       
      }
      request.send(JSON.stringify(parameters))
    })
  },
  deleteCard(id: string) {
    const path = 'http://' + location.hostname + ':' + port + '/api/card/' + id
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()
      request.open('delete', path, true)
      request.onload = () => {
        if (request.status === 204) resolve(request.response)
        else {
          const {code, message} = JSON.parse(request.responseText)
          reject(new Error(code, message)) 
        }
      }
      request.send(null)
    })
  }
}

export default Api