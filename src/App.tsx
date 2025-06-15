import { AboutAuthor } from './components/AboutAuthor';
import { BookList } from './components/BookList';
import { Contact } from './components/Contact';
import { Layout } from './components/Layout';
import { PageHeader } from './components/PageHeader';

function App() {

  return (
    <Layout>
      <PageHeader />
      <BookList />
      <AboutAuthor />
      <Contact />
    </Layout>
  )
}

export default App
