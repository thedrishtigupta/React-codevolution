
import './App.css'
import { CandidateProfile } from './CandidateProfile'
import { Product } from './Product'
import { Welcome } from './Welcome'

function App() {

  return (
    <>
      <Product
        title = "Gaming Laptop"
        price = {1299.99}
        inStock = {true}
        categories = {["Electronics", "Computers", "Gaming"]}
      />
      <Welcome name = "Drishti" alias = "Nonu"/>
      <Welcome name = "Piyush" alias = "Sonu"/>
      <CandidateProfile/>
    </>
  )
}

export default App
