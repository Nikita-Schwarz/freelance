'use client';

import { signup } from '@/components/actions/auth';
import { useActionState, useState } from 'react';
import Form from 'next/form';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from './ui/tooltip';
import { Info, Loader } from 'lucide-react';

export function SignupForm() {
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>trigger</Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined} className="w-100 gap-7">
        <DialogHeader>
          <DialogTitle>Регистрация</DialogTitle>
        </DialogHeader>
        <Form action={action}>
          <div className="flex flex-col gap-6">
            <div className="relative grid gap-2">
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                type="email"
                aria-invalid={!!state?.errors.email}
                defaultValue={state?.values.email}
                placeholder="m@example.com"
              />
            </div>
            <div className="relative grid gap-2">
              <Label htmlFor="password">Пароль:</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild className="absolute right-0 h-4 w-4">
                    <Info />
                  </TooltipTrigger>
                  <TooltipContent className="rounded-sm px-4 py-2">
                    <p className="mb-1 font-bold">Пароль должен содержать:</p>
                    <ul className="list-inside list-disc">
                      <li>Минимум 8 символов</li>
                      <li>Латинские буквы</li>
                      <li>Заглавную букву</li>
                      <li>Строчную букву</li>
                      <li>Цифру</li>
                      <li>Спецсимвол</li>
                    </ul>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <Input
                id="password"
                name="password"
                type="password"
                aria-invalid={!!state?.errors.password}
                defaultValue={state?.values.password}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Подтверждение пароля:</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
              />
            </div>
            <Button type="submit" disabled={pending} className="w-full">
              {pending === true ? (
                <>
                  <Loader className="animate-spin" />
                  Регистрация
                </>
              ) : (
                'Зарегистрироваться'
              )}
            </Button>
          </div>
        </Form>

        <DialogFooter>
          <div className="relative flex items-start space-x-2">
            <Checkbox id="terms" className="mt-[2px]" disabled />
            <label
              htmlFor="terms"
              className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Я ознакомлен(а), понимаю и принимаю{' '}
              <a
                href="#"
                className="text-blue-700 transition-colors hover:text-blue-600"
              >
                Пользовательское соглашение
              </a>
              ,{' '}
              <a
                href="#"
                className="text-blue-700 transition-colors hover:text-blue-600"
              >
                Политику конфеденциальности
              </a>{' '}
              и согласен на получение e-mail рассылок
            </label>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

/*     <form action={action}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      {state?.errors?.email && <p>{state.errors.email}</p>}
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <button disabled={pending} type="submit">
        Sign Up
      </button>
    </form> */
