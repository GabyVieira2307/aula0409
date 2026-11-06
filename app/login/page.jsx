"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./login.module.css";

export default function Login() {
    const router = useRouter();

    function entrar() {
        router.push("/principal");
    }

    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <h1>Bem-vindo!</h1>

                <p className={styles.subtitle}>
                    Entre no sistema para continuar.
                </p>

                <div className={styles.form}>
                    <label>Usuário</label>
                    <input
                        type="text"
                        placeholder="Digite seu usuário"
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                    />

                    <button onClick={entrar}>
                        Entrar no sistema
                    </button>
                </div>

                <p className={styles.register}>
                    Ainda não possui uma conta?
                </p>

                <Link href="/registro" className={styles.link}>
                    Criar registro
                </Link>
            </div>
        </main>
    );
}