import Page from '../components/Page'

import { initializeStore } from '../store/store'

export default function SSR() {
    return <Page title="SSR Page" linkTo="/" />
}

export function getServerSideProps() {
    const store = initializeStore()
    // const { dispatch } = reduxStore

    const data = ['apple', 'pear', 'orange']
    store.getActions().inventory.setItems(data)
    console.log('ssr page', store.getState())
    // dispatch({
    //     type: 'TICK',
    //     light: false,
    //     lastUpdate: Date.now(),
    // })

    return { props: { initialStoreState: store.getState() } }
}


// // 👇 simulate data fetching from database to hydrate client store
// export const getServerSideProps = wrapper.getServerSideProps(
//     ({ store }) => {
//         const data = ['apple', 'pear', 'orange']
//         store.getActions().inventory.setItems(data)
//     }
// )
