import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const produtos = [
  { nome: "Piso Vinílico Colado", descricao: "Alta durabilidade e acabamento impecável." },
  { nome: "Painéis Ripados", descricao: "Internos e externos, com curadoria de materiais." },
  // Adicione mais do PDF...
];

export default function Produtos() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Produtos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {produtos.map((produto, index) => (
          <Card key={index}>
            <CardHeader><CardTitle>{produto.nome}</CardTitle></CardHeader>
            <CardContent>{produto.descricao}</CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
