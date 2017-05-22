'use strict'

export default class Store{

    getItems() {

        return fetch('http://localhost:3100/items').then(resp => {return resp.json()})
    }
}