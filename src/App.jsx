
import './App.css'
import { CandidateProfile } from './CandidateProfile'
import { CardWrapper } from './CardWrapper'
import { Contact } from './Contact'
import { Counter } from './Counter'
import { Greeting } from './Greeting'
import { LoginCard } from './LoginCard'
import { Menu } from './Menu'
import { Newsletter } from './Newsletter'
import { Product } from './Product'
import { TodoList } from './TodoList'
import { UserDetails } from './UserDetails'
import { Welcome } from './Welcome'

function App() {

  return (
    <>
    <TodoList/>
    <h1>Code Evolution Course</h1>
    <Counter/>
    <LoginCard/>
    <Menu/>
    <Contact/>
    <Newsletter/>
    <UserDetails name = "Bruce Wayne" isOnline={true} isPremium={true} isNewUser={true} role="vip"/>
    <UserDetails name = "Peter Parker" isOnline={false} isPremium={true} isNewUser={false} role="admin"/>
    <CardWrapper title = "Card Content">
      <h3>Bruce Wayne</h3>
      <p>He is batman.</p>
      <button>Contact</button>
    </CardWrapper>
      <Greeting name = "Drishti" message = "Good Evening"/>
      <Greeting name = "Drishti"/>
      <Greeting message = "Welcome"/>
      <Greeting/>
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
