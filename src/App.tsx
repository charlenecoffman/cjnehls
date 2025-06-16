import React from 'react';
import {Layout} from './components/Layout'
import {PageHeader} from './components/PageHeader'
import {BookList} from './components/BookList'
import { AboutAuthor } from './components/AboutAuthor';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Layout>
      <PageHeader />
      <BookList />
      <AboutAuthor />
      <Contact />
      <Footer />
    </Layout>
  );
}
