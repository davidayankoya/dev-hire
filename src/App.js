import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import routes from './routes/routes'

function App() {
	return (
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
	)
}

export default App

{
	/* <Suspense fallback={
    <div style={loadingGifStyle}>
        <img src={LoadingGif} alt='loading_gif'></img>
        <p>Loading...</p>
    </div>
}> */
}
{
	/* </Suspense> */
}

// const loadingGifStyle = {   width: '100%',   height: '100%',   display:
// 'flex',   alignItems: 'center',   justifyContent: 'center' }
