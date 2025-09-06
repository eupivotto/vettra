import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  const produtos = await prisma.produto.findMany();
  return NextResponse.json(produtos);
}

export async function POST(request: Request) {
  const dados = await request.json();
  try {
    const novoProduto = await prisma.produto.create({ data: dados });
    return NextResponse.json(novoProduto, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar produto" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const dados = await request.json();
  if (!dados.id) {
    return NextResponse.json({ error: "ID é obrigatório para atualizar" }, { status: 400 });
  }
  try {
    const atualizado = await prisma.produto.update({
      where: { id: dados.id },
      data: dados,
    });
    return NextResponse.json(atualizado);
  } catch (error) {
    return NextResponse.json({ error: "Produto não encontrado ou erro ao atualizar" }, { status: 404 });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "ID é obrigatório para deletar" }, { status: 400 });
  }
  try {
    await prisma.produto.delete({ where: { id } });
    return NextResponse.json({ message: "Produto removido com sucesso" });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao remover produto" }, { status: 500 });
  }
}
