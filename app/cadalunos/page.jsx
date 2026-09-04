'use client';

import { useState } from "react";
import Header from "../components/header";

export default function CadAlunos() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [ra, setRa] = useState('');

    return (
        <>
            <Header />

            <main className="cadastro-page">

                <section className="cadastro-header">

                    <div>
                        <span className="section-tag">
                            VIDA ESCOLAR
                        </span>

                        <h1>Cadastro de Alunos</h1>

                        <p>
                            Cadastre um novo aluno no sistema escolar
                            do SESI Mirandópolis.
                        </p>
                    </div>

                    <div className="cadastro-number">
                        <span>01</span>
                        <small>CADASTRO</small>
                    </div>

                </section>


                <section className="cadastro-container">

                    <div className="cadastro-info">

                        <div className="cadastro-icon">
                            +
                        </div>

                        <span>ESTUDANTE</span>

                        <h2>
                            Novo aluno
                        </h2>

                        <p>
                            Preencha os dados ao lado para adicionar
                            um novo estudante ao sistema.
                        </p>

                        <div className="info-line"></div>

                        <div className="info-item">
                            <strong>01</strong>
                            <span>Dados pessoais</span>
                        </div>

                        <div className="info-item">
                            <strong>02</strong>
                            <span>Informações escolares</span>
                        </div>

                        <div className="info-item">
                            <strong>03</strong>
                            <span>Finalizar cadastro</span>
                        </div>

                    </div>


                    <div className="cadastro-form-area">

                        <div className="form-title">
                            <span>DADOS DO ALUNO</span>
                            <h2>Informações</h2>
                        </div>

                        <form>

                            <div className="form-group full">

                                <label htmlFor="nome">
                                    Nome completo
                                </label>

                                <input
                                    id="nome"
                                    type="text"
                                    placeholder="Digite o nome completo"
                                    value={nome}
                                    onChange={(e) =>
                                        setNome(e.target.value)
                                    }
                                />

                            </div>


                            <div className="form-row">

                                <div className="form-group">

                                    <label htmlFor="idade">
                                        Idade
                                    </label>

                                    <input
                                        id="idade"
                                        type="number"
                                        placeholder="Ex: 16"
                                        value={idade}
                                        onChange={(e) =>
                                            setIdade(e.target.value)
                                        }
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="serie">
                                        Série
                                    </label>

                                    <input
                                        id="serie"
                                        type="text"
                                        placeholder="Ex: 3º ano B"
                                        value={serie}
                                        onChange={(e) =>
                                            setSerie(e.target.value)
                                        }
                                    />

                                </div>

                            </div>


                            <div className="form-group full">

                                <label htmlFor="ra">
                                    RA
                                </label>

                                <input
                                    id="ra"
                                    type="number"
                                    placeholder="Digite o registro do aluno"
                                    value={ra}
                                    onChange={(e) =>
                                        setRa(e.target.value)
                                    }
                                />

                            </div>


                            <div className="form-footer">

                                <span>
                                    Confira os dados antes de salvar.
                                </span>

                                <button type="submit">
                                    Salvar aluno
                                    <strong>→</strong>
                                </button>

                            </div>

                        </form>

                    </div>

                </section>

            </main>
        </>
    );
}