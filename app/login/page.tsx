"use client";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(6).max(15),
});

export default function Login() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      <Head>
        <title>Přihlášení - usePopcorn</title>
      </Head>
      <div className="w-full md:w-1/2 flex justify-center items-center p-8 min-h-screen">
        <div className="w-full max-w-sm mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Přihlášení</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-gray-300 text-sm font-bold mb-2">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block text-gray-300 text-sm font-bold mb-2">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-between">
                <Button
                  className="flex items-center justify-center w-full bg-gray-800 text-white font-bold rounded-full border-2 border-transparent hover:bg-gray-700 hover:border-purple-500 hover:scale-105 transition-transform duration-300"
                  type="submit"
                  onClick={() => router.push("/platforms")}
                >
                  Přihlásit se
                </Button>
              </div>
            </form>
          </Form>

          <div className="mt-4">
            <Link className="text-blue-400 hover:underline" href="/register">
              Nemáte účet? Zaregistrujte se
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Separator className="mb-3 bg-gray-500" />
            <p className="text-gray-400 mb-2">nebo</p>
            <Button type="button" variant="secondary">
              <img
                src="/google-logo.png"
                alt="Google logo"
                className="w-6 h-6 mr-2 texce"
              />
              Přihlásit se pomocí Google
            </Button>
          </div>
        </div>
      </div>
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg')",
        }}
      ></div>
    </div>
  );
}
