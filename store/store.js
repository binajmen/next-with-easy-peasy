import { createStore, action, actionOn } from 'easy-peasy'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'

const model = {
    count: 0,
    addCount: action((state) => {
        state.count += 1
    }),
    initCount: action((state, init) => {
        state.count = init
    }),
    // 👇 catch the HYDRATE actions (__NEXT_REDUX_WRAPPER_HYDRATE__)
    //
    // How would you do if you have a nested model ?
    // e.g.: const model = { counter: { count: 0, addCount: ... }, user: { name, getName: ... }) }
    //
    // TODO: client side state reconciliation during hydration
    // --> https://github.com/kirill-konshin/next-redux-wrapper#state-reconciliation-during-hydration
    ssrHydrate: actionOn(
        () => HYDRATE,
        (state, target) => {
            state.count = target.payload.count
        }
    )
}

const initStore = () => { return createStore(model) }

export const wrapper = createWrapper(initStore)
