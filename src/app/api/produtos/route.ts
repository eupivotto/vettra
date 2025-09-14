import { NextRequest, NextResponse } from "next/server";

// Função para obter o cliente Prisma dinamicamente
async function getPrismaClient() {
  try {
    const { prisma } = await import("@/lib/prisma");
    return prisma;
  } catch (error) {
    console.error('Error importing Prisma Client:', error);
    throw new Error('Database connection failed');
  }
}

// GET - Listar todos os produtos
export async function GET() {
  try {
    const prisma = await getPrismaClient();
    const produtos = await prisma.produto.findMany({
      orderBy: { id: 'asc' }
    });
    return NextResponse.json(produtos);
  } catch (error) {
    console.error('GET /api/produtos error:', error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// POST - Criar novo produto
export async function POST(request: NextRequest) {
  try {
    const prisma = await getPrismaClient();
    const body = await request.json();
    const { nome, categoria, codigo, medida, img } = body;

    const produto = await prisma.produto.create({
      data: { nome, categoria, codigo, medida, img }
    });

    return NextResponse.json(produto, { status: 201 });
  } catch (error) {
    console.error('POST /api/produtos error:', error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// PUT - Atualizar produto existente
export async function PUT(request: NextRequest) {
  try {
    const prisma = await getPrismaClient();
    const body = await request.json();
    const { id, nome, categoria, codigo, medida, img } = body;

    const produto = await prisma.produto.update({
      where: { id: parseInt(id) },
      data: { nome, categoria, codigo, medida, img }
    });

    return NextResponse.json(produto);
  } catch (error) {
    console.error('PUT /api/produtos error:', error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// DELETE - Remover produto
export async function DELETE(request: NextRequest) {
  try {
    const prisma = await getPrismaClient();
    const body = await request.json();
    const { id } = body;

    await prisma.produto.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({ message: "Produto removido com sucesso" });
  } catch (error) {
    console.error('DELETE /api/produtos error:', error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
