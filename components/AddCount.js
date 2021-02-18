import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const AddCount = () => {
    const state = useStoreState(state => state)
    const incFirst = useStoreActions(actions => actions.first.increment)
    const incSecond = useStoreActions(actions => actions.second.increment)

    return (
        <div>
            <h1>
                First counter: <span>{state.first.count}</span>
            </h1>
            <h1>
                Second counter: <span>{state.second.count}</span>
            </h1>
            <button onClick={incFirst}>Increment first counter</button>
            <button onClick={incSecond}>Increment second counter</button>
        </div>
    )
}

export default AddCount
