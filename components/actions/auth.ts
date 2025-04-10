import { LoginState } from '@/lib/definitions';
import { SignupState } from '@/lib/definitions';
import { toast } from 'sonner';

export async function login(data: LoginState) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Accounts/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      return toast.error(response.text());
    } else {
      return toast.success('Проверка прошла успешно');
    }
  });
}

export async function signup(data: SignupState) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Accounts/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      return toast.error(response.text());
    } else {
      return toast.success('Регистрация прошла успешно');
    }
  });
}
