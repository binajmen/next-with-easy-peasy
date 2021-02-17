import Page from '../components/Page'
import { wrapper } from '../store/store'

const Other = (props) => {
    return <Page title="Other Page" linkTo="/" />
}

// 👇 simulate data fetching to hydrate store

export const getServerSideProps = wrapper.getServerSideProps(
    ({ store }) => {
        console.log('ssr init count to 8')
        // 👇 is there a way to dispatch EP-style ? (eg: actions.initCount(8))
        store.dispatch({ type: '@action.initCount', payload: 8 })
    }
)

export default Other
