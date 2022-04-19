import React, {Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import routes from './routes/routes'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

	return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((e, i) => (
              <Route
                index={e.index ? true : null}
                path={e.path}
                element={<e.element />}
                key={i}
              ></Route>
            ))}
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;


{/* <Suspense fallback={
    <div style={loadingGifStyle}>
        <img src={LoadingGif} alt='loading_gif'></img>
        <p>Loading...</p>
    </div>
}> */
}
{/* </Suspense> */
}

// const loadingGifStyle = {   width: '100%',   height: '100%',   display:
// 'flex',   alignItems: 'center',   justifyContent: 'center' }