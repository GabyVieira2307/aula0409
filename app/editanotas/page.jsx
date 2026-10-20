
'use client';

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Header from "../components/header";
import styles from "../cadnotas/cadnotas.module.css";

export default function EditaNotas() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get("id");

    const [aluno_id, setAlunoId] = useState('');
    const [t1, setT1] = useState('');
    const [t2, setT2] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        if (!id) {
            alert("ID da nota não informado.");
            router.push("/listnotas");
            return;
        }

        buscarAlunos();
        buscarNota();
    }, [id]);

    async function buscarAlunos() {
        try {
            const resposta = await fetch("/api/alunos");
            const dados = await resposta.json();

            if (resposta.ok && Array.isArray(dados)) {
                setAlunos(dados);
            }
        } catch (error) {
            console.error("Erro ao buscar alunos:", error);
            alert("Erro ao carregar os alunos.");
        }
    }

    async function buscarNota() {
        try {
            const resposta = await fetch("/api/notas");
            const dados = await resposta.json();

            if (!resposta.ok || !Array.isArray(dados)) {
                alert("Erro ao buscar as notas.");
                return;
            }

            const nota = dados.find(
                (item) => String(item.id_notas) === String(id)
            );

            if (!nota) {
                alert("Nota não encontrada.");
                router.push("/listnotas");
                return;
            }

            setAlunoId(String(nota.aluno_id));
            setT1(String(nota.t1));
            setT2(String(nota.t2));
            setN1(String(nota.n1));
            setN2(String(nota.n2));
            setN3(String(nota.n3));
        } catch (error) {
            console.error("Erro ao buscar nota:", error);
            alert("Erro ao carregar a nota.");
        }
    }

    async function editarNota(event) {
        event.preventDefault();

        try {
            const resposta = await fetch("/api/notas", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: Number(id),
                    aluno_id: Number(aluno_id),
                    t1: Number(t1),
                    t2: Number(t2),
                    n1: Number(n1),
                    n2: Number(n2),
                    n3: Number(n3)
                })
            });

            const dados = await resposta.json();

            alert(dados.mensagem || dados.erro);

            if (resposta.ok) {
                router.push("/listnotas");
            }
        } catch (error) {
            console.error("Erro ao editar nota:", error);
            alert("Erro ao salvar as alterações.");
        }
    }

    return (
        <>
            <Header />

            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.painel}>
                        <p className={styles.status}>
                            SISTEMA ONLINE
                        </p>

                        <h2>Editar Nota</h2>

                        <form
                            className={styles.form}
                            onSubmit={editarNota}
                        >
                            <div className={styles.campo}>
                                <label htmlFor="aluno_id">
                                    Aluno
                                </label>

                                <select
                                    id="aluno_id"
                                    value={aluno_id}
                                    onChange={(e) =>
                                        setAlunoId(e.target.value)
                                    }
                                    required
                                >
                                    <option value="">
                                        Selecione um aluno
                                    </option>

                                    {alunos.map((aluno) => (
                                        <option
                                            key={aluno.id_aluno}
                                            value={aluno.id_aluno}
                                        >
                                            {aluno.nome} - RA {aluno.ra}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="t1">Trabalho 1</label>
                                <input
                                    id="t1"
                                    type="number"
                                    value={t1}
                                    onChange={(e) => setT1(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="t2">Trabalho 2</label>
                                <input
                                    id="t2"
                                    type="number"
                                    value={t2}
                                    onChange={(e) => setT2(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="n1">Nota 1</label>
                                <input
                                    id="n1"
                                    type="number"
                                    value={n1}
                                    onChange={(e) => setN1(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="n2">Nota 2</label>
                                <input
                                    id="n2"
                                    type="number"
                                    value={n2}
                                    onChange={(e) => setN2(e.target.value)}
                                    required
                                />
                            </div>

                            <div className={styles.campo}>
                                <label htmlFor="n3">Nota 3</label>
                                <input
                                    id="n3"
                                    type="number"
                                    value={n3}
                                    onChange={(e) => setN3(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className={styles.botao}
                            >
                                Salvar Alterações
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
