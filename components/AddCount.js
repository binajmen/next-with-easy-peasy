import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const AddCount = () => {
    const state = useStoreState(state => state)
    const addCount = useStoreActions(actions => actions.first.addCount)

    return (
        <div>
            <h1>
                first: <span>{state.first.count}</span>
            </h1>
            <h1>
                second: <span>{state.second.count}</span>
            </h1>
            <button onClick={addCount}>Add count to message</button>
        </div>
    )
}

export default AddCount
