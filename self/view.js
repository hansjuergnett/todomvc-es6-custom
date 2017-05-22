'use strict'

const renderItem = Symbol()

export default class{
    constructor($doc){
        this.$doc = $doc

        this.$input = this.$doc.querySelector(".new-todo")
        this.$input.addEventListener("change", this.onChangeInput.bind(this))

        this.$list = this.$doc.querySelector(".todo-list")
      //this.$list.addEventListener("click",this.onClickList.bind(this))
    }

    onAddItem(){}

    onRemoveItem(){}

    onChangeInput(ev) {
        this.$list = this.$doc.querySelector(".todo-list")
        this.onAddItem({title: ev.target.value})
        this.$input.value = "";
    }

    onClickList(ev){
        let $li = ev.parentNode
        let item = $li.innerText
        this.onRemoveItem(item)
    }

    addItemToHtml(item){
        let $elem = document.createElement('div')
        let html = this[renderItem](item)
        $elem.innerHTML = html
        this.$list.appendChild($elem.childNodes[0])
    }

   renderItems(items){
        this.$list.innerHTML = items.map(this[renderItem])
    }

     [renderItem](item){
        return `<li data-id="${item.id}">
            <label>${item.title}</label>
            <button class="destroy"></button>
        </li>`;
    }

    registerCallbacks(add,remove){
        this.onAddItem = add
        this.onRemoveItem = remove

    }
}