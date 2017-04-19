/**
 * Created by Nett on 18.04.2017.
 */

'use strict'

export default class {

    constructor($doc){
        this.$doc = $doc
        let $input = $doc.querySelector("#inputtxt")
        $input.addEventListener("change", this.onChangeInput.bind(this))
    }

    onChangeInput(ev){
        let $list = this.$doc.querySelector("#list")
        let $li = this.$doc.createElement("li")
        $li.innerText = ev.target.value
        $list.appendChild($li)
    }
}
