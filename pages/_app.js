import App from 'next/app'
import { Provider } from 'react-redux'

import { fetchMovies, fetchSuccess } from '../src/store/actions'

import { useStore, initialStore } from '../src/store/store'
import { getURL } from '../src/store/helper/getURL'
import { SORT_BY, NAV_BAR_BUTTONS } from '../src/consts/const'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  const reduxStore = initialStore({})
  const { dispatch } = reduxStore
  dispatch(fetchMovies());
  const response = await fetch(getURL(NAV_BAR_BUTTONS[0], SORT_BY[0]))
  const result = await response.json()
  dispatch(
    fetchSuccess(result),
  )
  
  appProps.pageProps = { ...appProps.pageProps, initialReduxState: reduxStore.getState() }
  return appProps
}

export default MyApp
