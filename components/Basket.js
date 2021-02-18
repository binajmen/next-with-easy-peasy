import * as React from 'react'
import { useStoreState } from 'easy-peasy'

function Basket() {
    const basket = useStoreState(state => state.shop.basket)

    React.useEffect(() => console.log(basket), [basket])

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
}

export default Basket
