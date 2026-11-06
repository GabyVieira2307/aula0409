
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./registro.module.css";

export default function Registro() {
    const router = useRouter();

    function salvar() {
        router.push("/login");
    }

    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <h1>Criar conta</h1>

                <p className={styles.subtitle}>
                    Preencha os campos para realizar seu registro.
                </p>

                <div className={styles.form}>
                    <label>Usuário</label>
                    <input
                        type="text"
                        placeholder="Digite seu usuário"
                    />

                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                    />

                    <button onClick={salvar}>
                        Salvar registro
                    </button>
                </div>

                <p className={styles.login}>
                    Já possui uma conta?
                </p>

                <Link href="/login" className={styles.link}>
                    Voltar para login
                </Link>
            </div>
        </main>
    );
}
