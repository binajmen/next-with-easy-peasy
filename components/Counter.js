import { useStoreState, useStoreActions } from 'easy-peasy'

function Counter() {
    const count = useStoreState(state => state.count)
    const increment = useStoreActions(actions => actions.increment)

    return (
        <div style={{ margin: '2rem' }}>
            <h1>Counter</h1>
            <p>value = {count}</p>
            <button onClick={increment}>Increment counter</button>
        </div>
    )
}

export default Counter
