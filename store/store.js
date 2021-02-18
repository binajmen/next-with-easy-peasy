import { createStore, action, actionOn, persist } from 'easy-peasy'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
// import { diff } from 'jsondiffpatch'

const counterModel = {
    count: 0,
    increment: action((state) => {
        state.count += 1
    })
}

const shopModel = {
    basket: {},
    addItem: action((state, id) => {
        if (state.basket[id]) {
            state.basket[id]++
        } else {
            state.basket[id] = 1
        }
    })
}

const inventoryModel = {
    items: [],
    setItems: action((state, items) => state.items = items)
}

const model = {
    counter: counterModel,
    shop: persist(shopModel),
    inventory: inventoryModel,
    // 👇 https://github.com/kirill-konshin/next-redux-wrapper#state-reconciliation-during-hydration
    ssrHydrate: actionOn(
        () => HYDRATE,
        (state, target) => {
            state.inventory = target.payload.inventory
        }
    )
}

const initStore = () => { return createStore(model) }

export const wrapper = createWrapper(initStore)
