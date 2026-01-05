import Timer from '../components/Timer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function UseEffectPage() {
  useDocumentTitle('useEffect');

  return (
    <div>
      <h1>UseEffect - timer</h1>
      <Timer />
    </div>
  );
}
