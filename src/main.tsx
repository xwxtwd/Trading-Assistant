import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import NotFound from "./pages/404.tsx";
import Home from "./pages/Home.tsx";
import WalletAnalysis from "./pages/WalletAnalysis.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}></Route>
          <Route path='detail/:address' element={<WalletAnalysis />}></Route>
        </Route>

        {/* 匹配 404 页面 */}
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
