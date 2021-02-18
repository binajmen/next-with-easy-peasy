import * as React from 'react'
import { useStoreRehydrated, useStoreState } from 'easy-peasy'

function Basket() {
    const basket = useStoreState(state => state.shop.basket)
    const isRehydrated = useStoreRehydrated()

    if (isRehydrated) {
        return (
            <div style={{ margin: '2rem' }}>
                <h1>Basket</h1>
                <ul>
                    {Object.entries(basket).map(([item, quantity], index) =>
                        <li key={index}>{item} x {quantity}</li>
                    )}
                </ul>
            </div>
        )
    } else {
        return null
    }
}

export default Basket
