import { z } from 'zod';

export const SignupFormSchema = z
  .object({
    email: z
      .string()
      .email({ message: 'Адрес электронной почты не действителен.' })
      .trim(),
    password: z
      .string()
      .min(8, { message: 'Минимум 8-ми символов.' })
      .regex(/[A-Z]/, {
        message: 'Хотя бы одна заглавной буквы.',
      })
      .regex(/[a-z]/, {
        message: 'Хотя бы одной строчной буквы.',
      })
      .regex(/[0-9]/, { message: 'Хотя бы одной цифры.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Хотя бы одного спецсимвола.',
      })
      .trim()
      .refine(
        (value) => !/[а-яА-ЯЁё]/.test(value),
        'Не должен содержать русские буквы.',
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
