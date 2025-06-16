import React from 'react';
import {Layout} from './components/Layout'
import {PageHeader} from './components/PageHeader'
import {BookList} from './components/BookList'

export default function App() {
  return (
    <Layout>
      <PageHeader />
      <BookList />
    </Layout>
  );
}
