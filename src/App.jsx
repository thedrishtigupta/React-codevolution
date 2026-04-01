
import './App.css'
import { CounterWithReducer } from './CounterWithReducer'
import { ShoppingCart } from './ShoppingCart'
import { ShoppingCartWithReducer } from './ShoppingCartWithReducer'

function App() {

  return (
    <>
    <ShoppingCartWithReducer/>
    <CounterWithReducer/>
    <h1>Code Evolution Course</h1>
    <ShoppingCart/>
    </>
  )
}

export default App
