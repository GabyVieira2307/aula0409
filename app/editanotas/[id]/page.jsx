
'use client';

import { useState, useEffect } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import Header from "../../components/header";
import styles from "../../cadnotas/cadnotas.module.css";

export default function EditaNotas() {
    const searchParams = useSearchParams();
    const params = useParams();
    const router = useRouter();

    const id = params?.id ?? searchParams.get("id");

    const [aluno_id, setAlunoId] = useState("");
    const [t1, setT1] = useState("");
    const [t2, setT2] = useState("");
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [n3, setN3] = useState("");
    const [alunos, setAlunos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [salvando, setSalvando] = useState(false);

    useEffect(() => {
        if (!id) {
            setCarregando(false);
            return;
        }

        async function carregarDados() {
            try {
                const [resAlunos, resNotas] = await Promise.all([
                    fetch("/api/alunos"),
                    fetch(`/api/notas/${id}`)
                ]);

                const dadosAlunos = await resAlunos.json();
                const nota = await resNotas.json();

                if (!resAlunos.ok || !Array.isArray(dadosAlunos)) {
                    throw new Error("Não foi possível carregar os alunos.");
                }

                if (!resNotas.ok) {
                    throw new Error(nota.erro || "Nota não encontrada.");
                }

                setAlunos(dadosAlunos);
                setAlunoId(String(nota.aluno_id));
                setT1(String(nota.t1 ?? ""));
                setT2(String(nota.t2 ?? ""));
                setN1(String(nota.n1 ?? ""));
                setN2(String(nota.n2 ?? ""));
                setN3(String(nota.n3 ?? ""));
            } catch (error) {
                console.error("Erro ao carregar edição:", error);
                alert(error.message || "Erro ao carregar a nota.");
                router.push("/listnotas");
            } finally {
                setCarregando(false);
            }
        }

        carregarDados();
    }, [id, router]);

    async function editarNota(event) {
        event.preventDefault();

        if (!aluno_id) {
            alert("Selecione um aluno.");
            return;
        }

        setSalvando(true);

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

            if (!resposta.ok) {
                throw new Error(dados.erro || "Erro ao editar a nota.");
            }

            alert(dados.mensagem || "Nota editada com sucesso!");
            router.push("/listnotas");
        } catch (error) {
            console.error("Erro ao editar nota:", error);
            alert(error.message || "Erro ao salvar as alterações.");
        } finally {
            setSalvando(false);
        }
    }

    if (carregando) {
        return (
            <>
                <Header />
                <main className={styles.main}>
                    <section className={styles.container}>
                        <div className={styles.painel}>
                            Carregando nota...
                        </div>
                    </section>
                </main>
            </>
        );
    }

    return (
        <>
            <Header />

            <main className={styles.main}>
                <section className={styles.container}>
                    <div className={styles.painel}>
                        <p className={styles.status}>SISTEMA ONLINE</p>
                        <h2>Editar Nota</h2>

                        <form className={styles.form} onSubmit={editarNota}>
                            <div className={styles.campo}>
                                <label htmlFor="aluno_id">Aluno</label>
                                <select
                                    id="aluno_id"
                                    value={aluno_id}
                                    onChange={(e) => setAlunoId(e.target.value)}
                                    required
                                >
                                    <option value="">Selecione um aluno</option>
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

                            {[
                                ["t1", "Trabalho 1", t1, setT1],
                                ["t2", "Trabalho 2", t2, setT2],
                                ["n1", "Nota 1", n1, setN1],
                                ["n2", "Nota 2", n2, setN2],
                                ["n3", "Nota 3", n3, setN3]
                            ].map(([campo, rotulo, valor, alterar]) => (
                                <div className={styles.campo} key={campo}>
                                    <label htmlFor={campo}>{rotulo}</label>
                                    <input
                                        id={campo}
                                        type="number"
                                        step="any"
                                        value={valor}
                                        onChange={(e) => alterar(e.target.value)}
                                        required
                                    />
                                </div>
                            ))}

                            <button
                                type="submit"
                                className={styles.botao}
                                disabled={salvando}
                            >
                                {salvando ? "Salvando..." : "Salvar Alterações"}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
