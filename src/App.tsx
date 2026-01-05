import { Routes, Route } from 'react-router-dom';
import UseStatePage from './pages/UseStatePage';
import Layout from './components/Layout';
import UseEffectPage from './pages/UseEffectPage';
import UseMemoPage from './pages/UseMemoPage';
import UseCallbackPage from './pages/UseCallbackPage';
import UseRefPage from './pages/UseRefPage';

// const UseStatePage = lazy(() => import('./pages/UseStatePage'));
// const UseEffectPage = lazy(() => import('./pages/UseEffectPage'));
// const UseRefPage = lazy(() => import('./pages/UseRefPage'));
// const UseMemoPage = lazy(() => import('./pages/UseMemoPage'));
// const UseCallbackPage = lazy(() => import('./pages/UseCallbackPage'));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/useState" element={<UseStatePage />} />
        <Route path="/useEffect" element={<UseEffectPage />} />
        <Route path="/useRef" element={<UseRefPage />} />
        <Route path="/useMemo" element={<UseMemoPage />} />
        <Route path="/useCallback" element={<UseCallbackPage />} />
      </Routes>
    </Layout>
  );
}
