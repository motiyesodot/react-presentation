import Counter from '../components/Counter';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function UseCallbackPage() {
  useDocumentTitle('useCallback');

  return (
    <div>
      <h1>UseCallback - counter</h1>
      <Counter />
    </div>
  );
}
