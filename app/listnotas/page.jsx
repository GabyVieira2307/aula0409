
'use client';


import { useState, useEffect } from "react";
import Header from "../components/header";
import styles from './listanotas.module.css';
import { useRouter } from "next/navigation";

export default function ListNotas() {
    const [notas, setNotas] = useState([]);
    const router = useRouter();

    useEffect(() => {
        buscarNotas();
    }, []);

    async function buscarNotas() {
        const resposta = await fetch('/api/notas');
        const dados = await resposta.json();

        setNotas(dados);
    }

    function editarNota(id) {
        router.push(`/editanotas?id=${id}`);
    }

    async function excluirNota(id) {
        if (!confirm('Deseja realmente excluir esta nota?')) {
            return;
        }

        const resposta = await fetch("/api/notas", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: id })
        });

        const dados = await resposta.json();

        alert(dados.mensagem || dados.erro);

        if (resposta.ok) {
            buscarNotas();
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
                                <th>RA</th>
                                <th>T1</th>
                                <th>T2</th>
                                <th>N1</th>
                                <th>N2</th>
                                <th>N3</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {notas.length > 0 ? (
                                notas.map((nota) => (
                                    <tr key={nota.id_notas}>
                                        <td>{nota.id_notas}</td>
                                        <td>{nota.nome}</td>
                                        <td>{nota.ra}</td>
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
                                    <td colSpan="9">
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
