import { SignupFormSchema, FormState } from '@/lib/definitions';
import { toast } from 'sonner';

export async function signup(state: FormState, formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  };
  const validatedFields = SignupFormSchema.safeParse(data);

  if (!validatedFields.success) {
    const errors = validatedFields.error.flatten().fieldErrors;
    toast.warning(errors.password);
    toast.warning(errors.email);
    return {
      errors: errors,
      values: data,
    };
  }

  const result = {
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    confirmPassword: validatedFields.data.confirmPassword,
  };

  toast.success('Alles Gut!', {
    description: JSON.stringify(result),
  });
  /*   const response = await fetch('http://176.119.157.113/api/Accounts/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(result),
  });

  if (!response.ok) {
    alert('Not okay');
  } */
}
