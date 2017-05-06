'use strict'

const renderItem = Symbol()
export default class{
    constructor($doc){
        this.$doc = $doc

        let $input = this.$doc.querySelector(".new-todo")
        $input.addEventListener("change", this.onChangeInput.bind(this))
    }

    onChangeInput(ev) {
        let $list = this.$doc.querySelector(".todo-list")
        let $li = this.$doc.createElement("li")
        $li.innerText = ev.target.value
        $list.appendChild($li)
    }

    renderItems(items){
        let $list = this.$doc.querySelector(".todo-list")
        $list.innerHTML = items.map(this[renderItem])
    }

     [renderItem](item){
        return `<li data-id="${item.id}">
            <label>${item.title}</label>
            <button class="destroy"></button>
        </li>`;
    }
}