import { useStoreState } from 'easy-peasy'

function Basket() {
    const shop = useStoreState(state => state.shop)
    const basket = useStoreState(state => state.shop.basket)

    // When basket is not empty, although the store is populated on first render (non-empty in console),
    // the Object().map()ing output is empty. Only when you click on the links, the basket is showing
    console.log('shop:', shop)
    console.log('shop.basket:', basket)

    return (
        <div style={{ margin: '2rem' }}>
            <h1>Basket</h1>
            <ul>
                {Object.entries(shop.basket).map(([item, quantity], index) =>
                    <li key={index}>{item} x {quantity}</li>
                )}
            </ul>
        </div>
    )
}

export default Basket
