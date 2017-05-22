/**
 * Created by Nett on 18.04.2017.
 */

'use strict'

export default class Controller{

    constructor(view, store) {

        this.view = view
        this.store = store
        //this.items = this.getItems()
        this.getItems().then(items=>{
            this.view.renderItems(items)
        })
        this.view.registerCallbacks(this.addItem.bind(this), this.removeItem.bind(this))
    }

   addItem(item){
       this.view.addItemToHtml(item)
     //this.items.push(item)
       //this.view.renderItems(this.items)
   }

   removeItem(item){

       for(let idx = 0; idx < this.items.length; idx++){
           if(this.items[idx].title == item){
               this.items.slice(idx)
           }
       }
   }

    getItems(){
        return this.store.getItems()
    }
}