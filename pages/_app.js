import { wrapper } from '../store/store'
import { useStore } from 'react-redux'
import { StoreProvider } from 'easy-peasy'

function WrappedApp({ Component, pageProps }) {
    const store = useStore()

    return (
        <StoreProvider store={store}>
            <Component {...pageProps} />
        </StoreProvider>
    )
}

export default wrapper.withRedux(WrappedApp)
