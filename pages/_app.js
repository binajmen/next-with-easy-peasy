import { StoreProvider } from 'easy-peasy'
import { useStore } from '../store/store'

export default function WrappedApp({ Component, pageProps }) {
    const store = useStore(pageProps.initialStoreState)
    console.log('_app store', store.getState())
    console.log('_app props', pageProps)

    return (
        <StoreProvider store={store}>
            <Component {...pageProps} />
        </StoreProvider>
    )
}
