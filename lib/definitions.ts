import { z } from 'zod';

export const SignupFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: 'Введите действительный адрес электронной почты.' })
      .trim(),
    password: z
      .string()
      .min(8, { message: 'Минимум 8 символов' })
      .regex(/[A-Z]/, {
        message: 'Хотя бы одна заглавная буква',
      })
      .regex(/[a-z]/, {
        message: 'Хотя бы одна строчная буква',
      })
      .regex(/[0-9]/, { message: 'Хотя бы одна цифра' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Хотя бы один спецсимвол',
      })
      .trim()
      .refine(
        (value) => !/[а-яА-ЯЁё]/.test(value),
        'Пароль не должен содержать русские буквы',
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'], // Указываем, что ошибка относится к этому полю
  });

export type FormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
      };
      message?: string;
    }
  | undefined;
