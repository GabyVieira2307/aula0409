
import db from "../../db/banco";
import { NextResponse } from "next/server";

function respostaErro(mensagem, status) {
  return NextResponse.json({ erro: mensagem }, { status });
}

function validarDados(dados) {
  if (!dados || typeof dados !== "object") {
    return "Dados inválidos.";
  }

  const alunoId = Number(
    String(dados.aluno_id ?? "").trim()
  );

  if (!Number.isInteger(alunoId) || alunoId <= 0) {
    return "Selecione um aluno válido.";
  }

  for (const campo of ["t1", "t2", "n1", "n2", "n3"]) {
    const valor = dados[campo];

    if (
      valor === "" ||
      valor === null ||
      valor === undefined ||
      !Number.isFinite(Number(valor))
    ) {
      return `Preencha corretamente o campo ${campo}.`;
    }
  }

  return null;
}

function normalizarNotas(dados) {
  return [
    Number(String(dados.aluno_id).trim()),
    Number(dados.t1),
    Number(dados.t2),
    Number(dados.n1),
    Number(dados.n2),
    Number(dados.n3),
  ];
}

function obterId(dados) {
  const valor = dados?.id ?? dados?.id_notas;

  if (valor === null || valor === undefined || String(valor).trim() === "") {
    return null;
  }

  const id = Number(valor);

  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function GET() {
  try {
    const notas = db.prepare(`
      SELECT
        notas.id_notas,
        notas.aluno_id,
        alunos.nome,
        alunos.ra,
        notas.t1,
        notas.t2,
        notas.n1,
        notas.n2,
        notas.n3
      FROM notas
      INNER JOIN alunos
        ON notas.aluno_id = alunos.id_aluno
      ORDER BY alunos.nome
    `).all();

    return NextResponse.json(notas);
  } catch (error) {
    console.error("Erro ao listar notas:", error);
    return respostaErro("Erro ao buscar notas.", 500);
  }
}

export async function POST(request) {
  try {
    const dados = await request.json();
    const erroValidacao = validarDados(dados);

    if (erroValidacao) {
      return respostaErro(erroValidacao, 400);
    }

    // Confirma que o aluno existe no banco de dados.
    const aluno = db.prepare(`
      SELECT id_aluno
      FROM alunos
      WHERE id_aluno = ?
    `).get(Number(String(dados.aluno_id).trim()));

    if (!aluno) {
      return respostaErro(
        "O aluno selecionado não foi encontrado.",
        400
      );
    }

    const inserir = db.prepare(`
      INSERT INTO notas (aluno_id, t1, t2, n1, n2, n3)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    const resultado = inserir.run(...normalizarNotas(dados));

    return NextResponse.json({
      mensagem: "Nota salva com sucesso!",
      id: Number(resultado.lastInsertRowid),
    }, { status: 201 });

  } catch (error) {
    console.error("Erro ao salvar nota:", error);
    return respostaErro("Não foi possível salvar a nota.", 500);
  }
}

export async function PUT(request) {
  try {
    const dados = await request.json();
    const erroValidacao = validarDados(dados);

    if (erroValidacao) {
      return respostaErro(erroValidacao, 400);
    }

    const id = obterId(dados);

    if (id === null) {
      return respostaErro("Identificador da nota inválido.", 400);
    }

    const aluno = db.prepare(`
      SELECT id_aluno
      FROM alunos
      WHERE id_aluno = ?
    `).get(Number(String(dados.aluno_id).trim()));

    if (!aluno) {
      return respostaErro(
        "O aluno selecionado não foi encontrado.",
        400
      );
    }

    const atualizar = db.prepare(`
      UPDATE notas
      SET aluno_id = ?, t1 = ?, t2 = ?, n1 = ?, n2 = ?, n3 = ?
      WHERE id_notas = ?
    `);

    const resultado = atualizar.run(
      ...normalizarNotas(dados),
      id
    );

    if (resultado.changes === 0) {
      return respostaErro("Nota não encontrada.", 404);
    }

    return NextResponse.json({
      mensagem: "Nota editada com sucesso!",
    });

  } catch (error) {
    console.error("Erro ao editar nota:", error);
    return respostaErro("Não foi possível editar a nota.", 500);
  }
}

export async function DELETE(request) {
  try {
    const dados = await request.json();
    const id = obterId(dados);

    if (id === null) {
      return respostaErro("Identificador da nota inválido.", 400);
    }

    const excluir = db.prepare(`
      DELETE FROM notas
      WHERE id_notas = ?
    `);

    const resultado = excluir.run(id);

    if (resultado.changes === 0) {
      return respostaErro("Nota não encontrada.", 404);
    }

    return NextResponse.json({
      mensagem: "Nota excluída com sucesso!",
    });

  } catch (error) {
    console.error("Erro ao excluir nota:", error);
    return respostaErro("Não foi possível excluir a nota.", 500);
  }
}
