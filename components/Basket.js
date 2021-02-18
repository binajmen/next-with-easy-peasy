import { useStoreRehydrated, useStoreState } from 'easy-peasy'

function Basket() {
    const basket = useStoreState(state => state.shop.basket)
    const isRehydrated = useStoreRehydrated()

    return (
        <div style={{ margin: '2rem' }}>
            <h1>Basket</h1>
            <ul>
                {isRehydrated && Object.entries(basket).map(([item, quantity], index) =>
                    <li key={index}>{item} x {quantity}</li>
                )}
            </ul>
        </div>
    )
}

export default Basket
