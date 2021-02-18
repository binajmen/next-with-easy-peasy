import { useMemo } from 'react'
import { createStore, action, persist } from 'easy-peasy'

let store

const initialState = {
    count: 0,
    basket: {},
    items: []
}

const model = {
    ...initialState,
    // counter
    increment: action((state) => {
        state.count += 1
    }),
    // basket
    addItem: action((state, id) => {
        if (state.basket[id]) {
            state.basket[id]++
        } else {
            state.basket[id] = 1
        }
    }),
    // inventory
    setItems: action((state, items) => {
        state.items = items
    })
}

function initStore(preloadedState = initialState) {
    return createStore(
        persist(
            model,
            { allow: ['count', 'basket'] }
        ),
        { initialState: preloadedState }
    )
}

export const initializeStore = (preloadedState) => {
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