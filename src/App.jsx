import Container from "./component/Container"
import Hero from "./component/hero/Hero"
import Navbar from "./component/navbar/Navbar"


function App() {
  

  return (
    <>
      <Container className=" flex flex-col gap-3 py-0 px-10 w-full h-screen">
      <Navbar/>
      <Hero/>
      </Container>
    </>
  )
}

export default App
