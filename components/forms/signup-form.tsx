'use client';

import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SignupFormSchema } from '@/lib/definitions';
import { signup } from '../actions/auth';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '../ui/tooltip';
import { Eye, EyeOff, Info, Loader } from 'lucide-react';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof SignupFormSchema>) {
    await signup(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger
                      asChild
                      className="absolute right-0 h-4 w-4"
                    >
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
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  tabIndex={-1}
                  className="absolute top-5.5 right-0 hover:bg-transparent focus-visible:border-none focus-visible:ring-0 dark:hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel>Подтверждение пароля</FormLabel>
                <FormControl>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    {...field}
                  />
                </FormControl>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  tabIndex={-1}
                  className="absolute top-5.5 right-0 hover:bg-transparent focus-visible:border-none focus-visible:ring-0 dark:hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader className="animate-spin" />
                Вход
              </>
            ) : (
              'Войти'
            )}
          </Button>
        </form>
      </Form>
      {/*    <form action={action}>
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
              type={showPassword ? 'text' : 'password'}
              aria-invalid={!!state?.errors.password}
              defaultValue={state?.values.password}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              tabIndex={-1}
              className="absolute right-0 bottom-0 hover:bg-transparent focus-visible:border-none focus-visible:ring-0 dark:hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="relative grid gap-2">
            <Label htmlFor="confirmPassword">Подтверждение пароля:</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              aria-invalid={!!state?.errors.confirmPassword}
              defaultValue={state?.values.confirmPassword}
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              tabIndex={-1}
              className="absolute right-0 bottom-0 hover:bg-transparent focus-visible:border-none focus-visible:ring-0 dark:hover:bg-transparent"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Button type="submit" disabled={pending} className="w-full">
            {pending ? (
              <>
                <Loader className="animate-spin" />
                Регистрация
              </>
            ) : (
              'Зарегистрироваться'
            )}
          </Button>
        </div>
      </form> */}
    </>
  );
}
