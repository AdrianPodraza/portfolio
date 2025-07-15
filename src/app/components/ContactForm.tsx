'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  nick: z.string().min(2, 'Name need to have at least 2 characters'),
  email: z.string().email('Invalid email'),
  message: z.string().min(5, 'Message need to have at least 5 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setSuccess('');

    try {
      console.log({
        service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        data,
      });

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.nick,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log(result.text);
      setSuccess('✅ Message has been sent!');
      reset();
    } catch (error) {
      console.error(error);
      setSuccess('❌ error occured try again');
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mb-[100px] flex h-full max-w-[1000px] flex-col rounded-2xl border border-gray-700 bg-[#0d0d0f] px-8 py-8"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="nick">Your name</Label>
          <Input
            id="nick"
            className="w-full rounded-md border-gray-900 bg-[#2d2c38] px-2 py-4 text-gray-200"
            placeholder="What's your name?"
            {...register('nick')}
          />
          {errors.nick && <p className="text-sm text-red-600">{errors.nick.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            className="w-full rounded-md border-gray-900 bg-[#2d2c38] px-2 py-4 text-gray-200"
            type="email"
            placeholder="yourMail@email.com"
            {...register('email')}
          />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            className="max-h-[300px] w-full resize-y overflow-auto rounded-md border border-gray-900 bg-[#2d2c38] p-2 px-2 py-4 text-gray-200 focus:outline-none"
            placeholder="Your Message..."
            rows={4}
            {...register('message')}
          />
          {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
        </div>
      </div>
      <Button
        type="submit"
        className="mt-auto w-full cursor-pointer self-end rounded-lg bg-[#daedff] px-4 py-8 text-xl text-black hover:bg-[#daedff]/80"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send'}
      </Button>
      {success && (
        <p className={cn('text-sm', success.includes('✅') ? 'text-green-600' : 'text-red-600')}>
          {success}
        </p>
      )}
    </form>
  );
}
