import { Provider } from 'react-redux'
import './App.css'
import { todo } from './components/todo'
import { store } from './app/store'
import Counter from './components/counter/Counter'

function App() {


  return (
    <Provider store={store}>
      <div className='app'>
        <Counter />
        <todo />
      </div>
    </Provider>
  )
}

export default App
