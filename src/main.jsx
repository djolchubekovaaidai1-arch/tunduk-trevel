import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import CatalogPage from './pages/catalog/CatalogPage.jsx'
import ContactsPage from './pages/contacts/ContactsPage.jsx'
import AboutCompanyPage from './pages/about-company/AboutCompanyPage.jsx'
import BlogPage from './pages/blog/BlogPage.jsx'
import NewsPage from './pages/news/NewsPage.jsx'
import HomePage from './pages/home/HomePage.jsx'
import Header from './layout/header/Header.jsx'
import AdminPage from './pages/admin/AdminPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/about-company" element={<AboutCompanyPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/admin" element={<AdminPage/>} />
    </Routes>
  </BrowserRouter>,
)
