import { useDocumentTitle } from '../hooks/useDocumentTitle';
import CounterRefState from '../components/CounterRefState';

export default function UseRefPage() {
  useDocumentTitle('useRef');

  return (
      <>
      <h1>useRef - useRef vs useState</h1>
      <CounterRefState />
      </>
    )
}