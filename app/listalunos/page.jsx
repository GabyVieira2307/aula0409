'use client';

import Header from "../components/header";

export default function ListAlunos() {
    return (
        <>
            <Header />

            <main className="lista-page">

                <section className="lista-header">

                    <div>
                        <span className="section-tag">
                            VIDA ESCOLAR
                        </span>

                        <h1>Lista de Alunos</h1>

                        <p>
                            Consulte os alunos cadastrados no
                            sistema escolar do SESI Mirandópolis.
                        </p>
                    </div>

                    <div className="lista-count">
                        <strong>01</strong>
                        <span>ALUNO CADASTRADO</span>
                    </div>

                </section>


                <section className="lista-container">

                    <div className="lista-top">

                        <div>
                            <span>REGISTROS</span>
                            <h2>Alunos cadastrados</h2>
                        </div>

                        <div className="lista-status">
                            <span></span>
                            Sistema atualizado
                        </div>

                    </div>


                    <div className="table-wrapper">

                        <table>

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Série</th>
                                    <th>RA</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td>
                                        <span className="aluno-id">01</span>
                                    </td>

                                    <td>
                                        <div className="aluno-nome">
                                            <div className="aluno-avatar">
                                                AC
                                            </div>

                                            <strong>
                                                Ana Carolina
                                            </strong>
                                        </div>
                                    </td>

                                    <td>15 anos</td>

                                    <td>
                                        <span className="serie-badge">
                                            9B
                                        </span>
                                    </td>

                                    <td>
                                        <span className="ra-number">
                                            3431
                                        </span>
                                    </td>

                                    <td>
                                        <div className="acoes">

                                            <button className="btn-editar">
                                                Editar
                                            </button>

                                            <button className="btn-deletar">
                                                Deletar
                                            </button>

                                        </div>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </section>

            </main>
        </>
    );
}