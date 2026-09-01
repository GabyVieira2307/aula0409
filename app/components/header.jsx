import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="header">

            <div className="header-container">

                <Link href="/" className="logo-area">

                    <Image
                        src="/sesi-logo-1.png"
                        alt="Logo SESI"
                        width={95}
                        height={50}
                        className="logo"
                    />

                    <div className="logo-text">
                        <strong>SISTEMA ESCOLAR</strong>
                        <span>SESI MIRANDÓPOLIS</span>
                    </div>

                </Link>


                <nav className="main-nav">

                    <ul>

                        <li>
                            <Link href="/" className="nav-active">
                                Início
                            </Link>
                        </li>

                        <li>
                            <Link href="#eventos">
                                Eventos
                            </Link>
                        </li>

                        <li>
                            <Link href="#destaques">
                                Destaques
                            </Link>
                        </li>

                        <li>
                            <Link href="#agenda">
                                Agenda
                            </Link>
                        </li>

                        <li className="nav-dropdown">

                            <span>Vida Escolar ▾</span>

                            <div className="dropdown-menu">

                                <Link href="/cadalunos">
                                    Cadastro de Alunos
                                </Link>

                                <Link href="/listalunos">
                                    Lista de Alunos
                                </Link>

                                <Link href="/cadnotas">
                                    Cadastro de Notas
                                </Link>

                                <Link href="/listnotas">
                                    Lista de Notas
                                </Link>

                            </div>

                        </li>

                    </ul>

                </nav>


                <Link
                    href="/listalunos"
                    className="header-button"
                >
                    Acessar sistema
                    <span>→</span>
                </Link>

            </div>

        </header>
    );
}