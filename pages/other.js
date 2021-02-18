import Page from '../components/Page'
import { wrapper } from '../store/store'

const Other = (props) => {
    return <Page title="Other Page" linkTo="/" />
}

// 👇 simulate data fetching to hydrate client store
export const getServerSideProps = wrapper.getServerSideProps(
    ({ store }) => {
        console.log('ssr init count to 8')
        store.getActions().first.initCount(8)
    }
)

export default Other
