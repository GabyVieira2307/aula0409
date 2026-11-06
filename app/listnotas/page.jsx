
'use client';

import { useState, useEffect } from "react";
import Header from "../components/header";
import { useRouter } from "next/navigation";
import styles from "./listanotas.module.css";

export default function ListNotas() {
    const [notas, setNotas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const router = useRouter();

    useEffect(() => {
        buscarNotas();
    }, []);

    async function buscarNotas() {
        try {
            const resposta = await fetch("/api/notas");
            const dados = await resposta.json();

            if (!resposta.ok) {
                throw new Error(dados.erro || "Erro ao buscar notas.");
            }

            setNotas(Array.isArray(dados) ? dados : []);
        } catch (error) {
            console.error("Erro ao buscar notas:", error);
            alert("Não foi possível carregar as notas.");
        } finally {
            setCarregando(false);
        }
    }

    function editarNota(id_nota) {
        router.push(`/editanotas/${id_nota}`);
    }

    async function excluirNota(id_nota) {
        if (!confirm("Deseja realmente excluir esta nota?")) {
            return;
        }

        try {
            const resposta = await fetch("/api/notas", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: Number(id_nota),
                }),
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                throw new Error(dados.erro || "Erro ao excluir nota.");
            }

            alert(dados.mensagem || "Nota excluída com sucesso!");
            await buscarNotas();
        } catch (error) {
            console.error("Erro ao excluir nota:", error);
            alert(error.message || "Não foi possível excluir a nota.");
        }
    }

    return (
        <>
            <Header />

            <main className={styles.main}>
                <section className={styles.tituloArea}>
                    <h2>Lista de Notas</h2>
                    <p>
                        Consulte todas as notas cadastradas no sistema.
                    </p>
                </section>

                <section className={styles.tabelaContainer}>
                    <table className={styles.tabela}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>T1</th>
                                <th>T2</th>
                                <th>N1</th>
                                <th>N2</th>
                                <th>N3</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {carregando ? (
                                <tr>
                                    <td colSpan="8">Carregando notas...</td>
                                </tr>
                            ) : notas.length > 0 ? (
                                notas.map((nota) => (
                                    <tr key={nota.id_notas}>
                                        <td>{nota.id_notas}</td>
                                        <td>{nota.nome}</td>
                                        <td>{nota.t1}</td>
                                        <td>{nota.t2}</td>
                                        <td>{nota.n1}</td>
                                        <td>{nota.n2}</td>
                                        <td>{nota.n3}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className={styles.botaoEditar}
                                                onClick={() => editarNota(nota.id_notas)}
                                            >
                                                Editar
                                            </button>

                                            <button
                                                type="button"
                                                className={styles.botaoExcluir}
                                                onClick={() => excluirNota(nota.id_notas)}
                                            >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8">
                                        Nenhuma nota encontrada.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </section>
            </main>
        </>
    );
}
