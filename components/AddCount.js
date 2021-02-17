import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const AddCount = () => {
    const count = useStoreState(state => state.count)
    const addCount = useStoreActions(actions => actions.addCount)

    return (
        <div>
            <h1>
                easyCount: <span>{count}</span>
            </h1>
            <button onClick={addCount}>Add count to message</button>
        </div>
    )
}

export default AddCount
