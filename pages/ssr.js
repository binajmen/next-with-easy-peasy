import Page from '../components/Page'
import { wrapper } from '../store/store'

function SSR() {
    return <Page title="SSR Page" linkTo="/" />
}

// 👇 simulate data fetching from database to hydrate client store
export const getServerSideProps = wrapper.getServerSideProps(
    ({ store }) => {
        console.log('ssr init inventory')
        const dataFetch = ['apple', 'pear', 'orange']
        store.getActions().inventory.setItems(dataFetch)
    }
)

export default SSR
