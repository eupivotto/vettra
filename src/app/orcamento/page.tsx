"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  nome: z.string().min(2),
  email: z.string().email(),
  mensagem: z.string().min(10),
});

export default function Orcamento() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { nome: "", email: "", mensagem: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Integre com API de envio (ex: EmailJS)
  }

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Solicite um Orçamento</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField control={form.control} name="nome" render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl><Input placeholder="Seu nome" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />
          {/* Campos para email e mensagem similares */}
          <Button type="submit">Enviar</Button>
        </form>
      </Form>
    </main>
  );
}
