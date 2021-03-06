import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './action'
import * as getters from './getter'
import state from './state'
import mutations from './mutation'

Vue.use(Vuex)

// const debug =  process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    // strict: debug
})