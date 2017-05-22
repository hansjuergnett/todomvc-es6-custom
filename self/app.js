/**
 * Created by Nett on 11.04.2017.
 */
'use strict'
import Controller from './controller'
import View from './view'
import Store from './store'

let view = new View(window.document);
let store = new Store()
let ctr = new Controller(view, store)


