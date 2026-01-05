import { useState } from 'react';
import type { User } from '../types/user';

export function useUserForm(u: User): {
  user: User;
  updateUser: (e: React.ChangeEvent<HTMLInputElement>) => void;
} {
  const [user, setUser] = useState(u);

  const updateUser = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const key = e.target.name as keyof User;
    const value = key === 'age' ? Number(e.target.value) : e.target.value;

    setUser({ [key] : value })
  };

  return {
    user,
    updateUser,
  };
}
