import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import HomePage from './pages/HomePage';
import BranchPage from './pages/BranchPage';
import DetailPage from './pages/DetailPage';
import BasketPage from './pages/BasketPage';
import LoginPage from './pages/LoginPage';
import SearchResultPage from './pages/SearchResultPage';
import Layout from './components/Layout/Layout';
import ListPage from './pages/ListPage';
import Redirection from './pages/Redirection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/branch/:branchName" element={<BranchPage />} />
          <Route path="/branch/:branchName/:classification" element={<ListPage />} />

          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/oauth2/callback" element={<Redirection />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
