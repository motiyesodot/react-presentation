import UserForm from '../components/UserForm';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function UseStatePage() {
  useDocumentTitle('useState');

  return (
    <div>
      <h1>useState - Object State</h1>
      <UserForm />
    </div>
  );
}
