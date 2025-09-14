import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET - Listar todos os produtos
export async function GET() {
  try {
    const produtos = await prisma.produto.findMany({
      orderBy: { id: 'asc' }
    });
    return NextResponse.json(produtos);
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// POST - Criar novo produto
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, categoria, codigo, medida, img } = body;

    const produto = await prisma.produto.create({
      data: { nome, categoria, codigo, medida, img }
    });

    return NextResponse.json(produto, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// PUT - Atualizar produto existente
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, nome, categoria, codigo, medida, img } = body;

    const produto = await prisma.produto.update({
      where: { id: parseInt(id) },
      data: { nome, categoria, codigo, medida, img }
    });

    return NextResponse.json(produto);
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// DELETE - Remover produto
export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    await prisma.produto.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: "Produto removido com sucesso" });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
