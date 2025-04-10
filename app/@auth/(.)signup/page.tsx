'use client';

import { useRouter } from 'next/navigation';
import SignupForm from '@/components/forms/signup-form';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Page() {
  const router = useRouter();
  // const [open, setOpen] = useState(false);  TODO: добавить закрытие формы при аутентификации

  return (
    <Dialog
      defaultOpen
      onOpenChange={() =>
        router.back()
      } /*  open={open} onOpenChange={setOpen}*/
    >
      <DialogContent aria-describedby={undefined} className="w-100 gap-7">
        <DialogHeader>
          <DialogTitle>Регистрация</DialogTitle>
        </DialogHeader>
        <SignupForm />
        <DialogFooter>
          <p className="text-center text-sm">
            Нажимая «Продолжить» или на кнопки сервисов, вы подтверждаете, что
            полностью принимаете{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              условия соглашения
            </a>{' '}
            и ознакомились с{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">
              политикой конфиденциальности
            </a>
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
