import { createStore, action, actionOn, debug } from 'easy-peasy'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import { diff } from 'jsondiffpatch'

const firstModel = {
    count: 0,
    addCount: action((state) => {
        state.count += 1
    }),
    initCount: action((state, init) => {
        state.count = init
    }),
}

const secondModel = {
    count: 0,
    addCount: action((state) => {
        state.count += 1
    }),
    initCount: action((state, init) => {
        state.count = init
    }),
}

const initialState = {
    first: { count: 0 },
    second: { count: 0 }
}

function reconciliation(state, initValues) {

}

const model = {
    first: firstModel,
    second: secondModel,
    // 👇 catch the HYDRATE actions (__NEXT_REDUX_WRAPPER_HYDRATE__)
    // state reconciliation during hydration
    // https://github.com/kirill-konshin/next-redux-wrapper#state-reconciliation-during-hydration
    ssrHydrate: actionOn(
        () => HYDRATE,
        (state, target) => {
            Object.entries(state).forEach(([key, values]) => {
                const stateDiff = diff(values, target.payload[key])
            })

            const stateDiff = diff(state, target.payload)
            const isFirstCountAlreadyInitiated = stateDiff?.first?.count?.[0] !== 0
            state.first = isFirstCountAlreadyInitiated ? state.first : target.payload.first
        }
    )
}

const initStore = () => { return createStore(model) }

export const wrapper = createWrapper(initStore)
