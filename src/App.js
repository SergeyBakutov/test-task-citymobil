import Content from './containers/Content/Content'
import Footer from './containers/Footer/Footer'
import Header from './containers/Header/Header'
import Main from './containers/Main/Main'
import Sidebar from './containers/Sidebar/Sidebar'
import Layout from './hoc/Layout'

function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <Sidebar />
        <Content />
      </Main>
      <Footer />
    </Layout>
  )
}

export default App
