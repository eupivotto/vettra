"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  codigo: string;
  medida: string;
  img: string;
}

const categorias = ["Pisos Vinílicos", "Forros", "Drywall", "Rodapés"];

export default function AdminPainel() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [form, setForm] = useState<Omit<Produto, "id">>({
    nome: "",
    categoria: categorias[0],
    codigo: "",
    medida: "",
    img: "",
  });
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // Buscar produtos da API
  const fetchProdutos = async () => {
    try {
      const res = await fetch("/api/produtos");
      const data = await res.json();
      console.log("Produtos carregados:", data);
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Erro desconhecido ao buscar produtos';
      
      alert(`Erro: ${errorMessage}`);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  // Atualizar campos do formulário
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  // Criar ou atualizar produto
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      if (editandoId) {
        // Atualizar produto existente
        console.log("Atualizando produto:", { id: editandoId, ...form });
        
        const response = await fetch("/api/produtos", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editandoId, ...form }),
        });

        const result = await response.json();
        console.log("Resposta da atualização:", result);

        if (!response.ok) {
          throw new Error(result.error || "Erro ao atualizar produto");
        }

        setEditandoId(null);
        alert("Produto atualizado com sucesso!");
      } else {
        // Criar novo produto
        console.log("Criando produto:", form);
        
        const response = await fetch("/api/produtos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        const result = await response.json();
        console.log("Resposta da criação:", result);

        if (!response.ok) {
          throw new Error(result.error || "Erro ao criar produto");
        }

        alert("Produto criado com sucesso!");
      }

      // Limpar formulário e atualizar lista
      setForm({ nome: "", categoria: categorias[0], codigo: "", medida: "", img: "" });
      await fetchProdutos();
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
      
      // Tratamento seguro do erro para TypeScript
      const errorMessage = error instanceof Error 
        ? error.message 
        : typeof error === 'string' 
        ? error 
        : 'Erro desconhecido ao salvar produto';
        
      alert(`Erro: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  }

  // Preparar edição
  function editarProduto(p: Produto) {
    console.log("Editando produto:", p);
    setForm({
      nome: p.nome,
      categoria: p.categoria,
      codigo: p.codigo,
      medida: p.medida,
      img: p.img,
    });
    setEditandoId(p.id);
    
    // Scroll para o formulário
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Cancelar edição
  function cancelarEdicao() {
    setForm({ nome: "", categoria: categorias[0], codigo: "", medida: "", img: "" });
    setEditandoId(null);
  }

  // Deletar produto
  async function deletarProduto(id: number) {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      try {
        const response = await fetch("/api/produtos", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        const result = await response.json();
        
        if (!response.ok) {
          throw new Error(result.error || "Erro ao deletar produto");
        }

        alert("Produto excluído com sucesso!");
        await fetchProdutos();
      } catch (error) {
        console.error("Erro ao deletar produto:", error);
        
        const errorMessage = error instanceof Error 
          ? error.message 
          : 'Erro desconhecido ao deletar produto';
          
        alert(`Erro: ${errorMessage}`);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#f9fafb] flex">
      {/* Menu lateral */}
      <nav className="w-56 bg-[#1e7a8c] text-white px-4 py-8 flex flex-col gap-8">
        <h1 className="text-2xl font-bold text-white">Painel Vettra</h1>
        <div className="flex flex-col gap-2">
          <div className="text-lg font-medium bg-[#2a9cb5] px-3 py-2 rounded text-white">
            Produtos
          </div>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-[#1e7a8c] mb-6">
          {editandoId ? `Editar Produto (ID: ${editandoId})` : "Cadastrar Produto"}
        </h2>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8 space-y-4 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-gray-700" htmlFor="nome">
                Nome *
              </label>
              <input
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e7a8c] focus:border-[#1e7a8c]"
                placeholder="Ex: Fibra Mineral"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700" htmlFor="categoria">
                Categoria *
              </label>
              <select
                id="categoria"
                name="categoria"
                value={form.categoria}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e7a8c] focus:border-[#1e7a8c]"
              >
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700" htmlFor="codigo">
                Código *
              </label>
              <input
                id="codigo"
                name="codigo"
                value={form.codigo}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e7a8c] focus:border-[#1e7a8c]"
                placeholder="Ex: 24896194"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700" htmlFor="medida">
                Medida
              </label>
              <input
                id="medida"
                name="medida"
                value={form.medida}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e7a8c] focus:border-[#1e7a8c]"
                placeholder="Ex: 208,5x1230mm"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="img">
              URL da Imagem
            </label>
            <input
              id="img"
              name="img"
              value={form.img}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e7a8c] focus:border-[#1e7a8c]"
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>

          <div className="flex gap-2">
            <Button type="submit" variant="default" disabled={loading}>
              {loading ? "Salvando..." : editandoId ? "Atualizar Produto" : "Adicionar Produto"}
            </Button>
            {editandoId && (
              <Button type="button" variant="outline" onClick={cancelarEdicao}>
                Cancelar
              </Button>
            )}
          </div>
        </form>

        {/* Lista de produtos */}
        <section>
          <h3 className="text-2xl font-semibold text-[#1e7a8c] mb-4">
            Produtos Cadastrados ({produtos.length})
          </h3>
          
          {produtos.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center text-gray-500">
              Nenhum produto cadastrado ainda.
            </div>
          ) : (
            <div className="grid gap-4">
              {produtos.map((produto) => (
                <div key={produto.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {produto.img && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={produto.img}
                          alt={produto.nome}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{produto.nome}</h4>
                      <p className="text-sm text-gray-600">{produto.categoria}</p>
                      <p className="text-sm text-gray-500">Código: {produto.codigo}</p>
                      <p className="text-sm text-gray-400">ID: {produto.id}</p>
                      {produto.medida && (
                        <p className="text-sm text-gray-500">Medida: {produto.medida}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => editarProduto(produto)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm" 
                      onClick={() => deletarProduto(produto.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
