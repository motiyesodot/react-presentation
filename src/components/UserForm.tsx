import { useUserForm } from '../hooks/useUserForm';

export default function UserForm() {
  const { user, updateUser } = useUserForm({ name: 'moti', age: 25 });

  return (
    <form>
      <h1>User</h1>
      <h2>name: {user.name}</h2>
      <input type="text" placeholder="Edit name" name="name" onChange={(e) => updateUser(e)} />

      <h2>Age: {user.age}</h2>
      <input type="number" placeholder="Edit age" name="age" onChange={(e) => updateUser(e)} />
    </form>
  );
}
