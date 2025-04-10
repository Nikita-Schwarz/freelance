import { z } from 'zod';

export const SignupFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: 'Адрес электронной почты не действителен.' })
      .trim(),
    password: z
      .string()
      .min(8, { message: 'Пароль должен быть не менее 8 символов' })
      .regex(/^[^а-яА-ЯёЁ]*$/, {
        message: 'Пароль не должен содержать русские буквы',
      })
      .regex(/[A-Z]/, {
        message: 'Должна быть хотя бы одна заглавная буква',
      })
      .regex(/[a-z]/, {
        message: 'Должна быть хотя бы одна строчная буква',
      })
      .regex(/[0-9]/, { message: 'Должна быть хотя бы одна цифра' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Должен быть хотя бы один спецсимвол',
      })
      .trim(),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'], // Указываем, что ошибка относится к этому полю
  });

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignupState =
  | {
      email: string;
      password: string;
      confirmPassword?: string;
    }
  | undefined;

export type LoginState =
  | {
      email: string;
      password: string;
    }
  | undefined;
