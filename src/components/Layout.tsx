import { PropsWithChildren } from "react";
import { Link } from 'react-router-dom'

export default function Layout({ children } : PropsWithChildren<{}>): JSX.Element {
  return (
    <>
      <header>
        <button><Link to="/useState">useState</Link></button>
        <button><Link to="/useEffect">useEffect</Link></button>
        <button><Link to="/useRef">useRef</Link></button>
        <button><Link to="/useMemo">useMemo</Link></button>
        <button><Link to="/useCallback">useCallback</Link></button>
      </header>
      <main>
        {children}
      </main>
    </>
  );
}
