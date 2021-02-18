import { useStoreState } from 'easy-peasy'

function Basket() {
    const shop = useStoreState(state => state.shop)

    // returns:
    // {
    //   basket: {
    //     apple: 5,
    //     pear: 5,
    //     orange: 5
    //   }
    // }
    // However, nothing is displayed. When clicking on link, basket is displayed
    console.log(shop)

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
