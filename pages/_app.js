import '../styles/globals.css'
import Layouts from '../comps/layouts'

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default MyApp
