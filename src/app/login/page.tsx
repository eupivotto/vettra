'use client'; // Esta diretiva é importante para páginas com interatividade

import { useState } from 'react';
// A função signIn virá do next-auth quando você implementar o login
// import { signIn } from 'next-auth/react'; 

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função de exemplo para o formulário
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Aqui você chamaria a função signIn:
    // await signIn('credentials', { email, password, callbackUrl: '/admin' });
    alert('Funcionalidade de login a ser implementada!');
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#1e7a8c]">
          Acesso ao Painel
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1e7a8c] focus:ring-[#1e7a8c] sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1e7a8c] focus:ring-[#1e7a8c] sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border border-transparent bg-[#1e7a8c] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#165a68] focus:outline-none focus:ring-2 focus:ring-[#1e7a8c] focus:ring-offset-2"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
