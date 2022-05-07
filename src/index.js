import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import {Provider} from 'react-redux'

import {worker} from './api/server'
import {fetchUsers} from './features/users/UserSlice'

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({onUnhandledRequest: 'bypass'})

  store.dispatch(fetchUsers())

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

window.addEventListener('load', () => {
  console.log('啦啦啦 - load')
})

start().then(() => {
  console.log('ReactDom Start ~')
})
