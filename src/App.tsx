import { Container, Nav, Navbar} from "react-bootstrap"
import { NavLink, Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import SpecialPage from "./SpecialPage"
import ProductDetailsPage from "./ProductDetailsPage"
import { useState } from "react"

function App() {
  const [productList, setProductList] = useState([ 
    { id: 0, name: "Shoes", price: 30},
    { id: 1, name: "Hat", price: 4000 }
  ])

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/my-special-page/special">Special</Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route
            path="/"
            element={<HomePage productList={productList} />}
          />
          <Route
            path="/my-special-page/special"
            element={<SpecialPage />}
          />
          <Route
            path="/products/:id" // URL parameter start with a :
            element={<ProductDetailsPage productList={productList} />}
          />
        </Routes>

      </Container>
    </>
  )
}

export default App
