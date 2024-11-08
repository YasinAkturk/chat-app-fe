"use client";
import React, { useState } from "react";
import { authenticate } from "@/lib/auth.actions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  email: z.string().email("E-Posta adresinizi doğru giriniz."),
  password: z.string().min(6, "Şifreniz en az 8 karakterden oluşmalıdır."),
});
export const page = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "yasinqkturk@gmail.com",
      password: "123123",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true);
    const response:any = await authenticate(values);
    if (response?.error) {
      console.log("response", response?.error);
    } else {
      console.log("response", response);
      router.push("/chat")
      // Başarılı yanıtı işleyin
    }
    setLoading(false);
  }
  return (
    <Form {...form}>
      <div className="flex flex-col mb-6 gap-2">
        <Label className="text-3xl">Hesabına Giriş Yap!</Label>
        <Label className="text-xs">
          Hoşgeldin, E-Posta ve şifre ile giriş yapabilirsiniz.
        </Label>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Posta</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Şifre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full mt-8 bg-blue-400 hover:bg-blue-500" type="submit">
          {loading ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              <Label className="text-sm">Yükleniyor...</Label>
            </>
          ) : (
            "Giriş"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default page;
