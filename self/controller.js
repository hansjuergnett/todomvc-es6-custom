/**
 * Created by Nett on 18.04.2017.
 */

'use strict'

export default class {

    constructor(view) {
        this.items = this.getItems()
        view.renderItems(this.items)
    }


   onAddItem(item){
       this.items.push(item)
   }

    getItems(){
        return[
            {
                title: 'Einkaufen'
            },
            {
                title: 'Auto waschen'
            }
        ]
    }
}