import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET - Listar todos os produtos
export async function GET() {
  const { data, error } = await supabase
    .from("produtos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("GET /api/produtos error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST - Criar novo produto
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, error } = await supabase.from("produtos").insert([body]).select();

    if (error) {
      console.error("POST /api/produtos error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data?.[0], { status: 201 });
  } catch (error) {
    console.error("POST /api/produtos error:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// PUT - Atualizar produto existente
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.id) {
      return NextResponse.json({ error: "ID é obrigatório para atualizar" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("produtos")
      .update(body)
      .eq("id", body.id)
      .select();

    if (error) {
      console.error("PUT /api/produtos error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data?.[0]);
  } catch (error) {
    console.error("PUT /api/produtos error:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

// DELETE - Remover produto
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json({ error: "ID é obrigatório para deletar" }, { status: 400 });
    }

    const { error } = await supabase.from("produtos").delete().eq("id", id);

    if (error) {
      console.error("DELETE /api/produtos error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Produto removido com sucesso" });
  } catch (error) {
    console.error("DELETE /api/produtos error:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
