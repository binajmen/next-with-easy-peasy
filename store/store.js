import { useMemo } from 'react'
import { createStore, action /*, actionOn, persist */ } from 'easy-peasy'
// import { HYDRATE, createWrapper } from 'next-redux-wrapper'
// import { diff } from 'jsondiffpatch'

export let store = undefined

// const initialState = {
//     counter: {
//         count: 0
//     },
//     shop: {
//         basket: {}
//     },
//     inventory: {
//         items: []
//     }
// }

const initialState = {
    count: 0,
    basket: {},
    items: []
}

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
    shop: shopModel,
    inventory: inventoryModel,
    // // 👇 https://github.com/kirill-konshin/next-redux-wrapper#state-reconciliation-during-hydration
    // ssrHydrate: actionOn(
    //     () => HYDRATE,
    //     (state, target) => {
    //         state.inventory = target.payload.inventory
    //     }
    // )
}

function initStore(preloadedState = initialState) {
    return createStore(model, { preloadedState })
}

export function initializeStore(preloadedState) {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
