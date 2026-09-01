import Header from "../components/header";
import Link from "next/link";

export default function Principal() {

    return (
        <>
            <Header />

            <main>

                {/* ================= HERO ================= */}

                <section className="hero">

                    <div className="hero-content">

                        <div className="hero-badge">
                            <span></span>
                            PORTAL ESCOLAR SESI
                        </div>

                        <h1>
                            Educação conectada
                            <br />
                            com o <strong>futuro.</strong>
                        </h1>

                        <p>
                            Um espaço digital para acompanhar a vida escolar,
                            acessar informações acadêmicas e ficar por dentro
                            de tudo o que acontece no SESI Mirandópolis.
                        </p>

                        <div className="hero-buttons">

                            <Link
                                href="/listalunos"
                                className="hero-button-primary"
                            >
                                Acessar sistema
                                <span>→</span>
                            </Link>

                            <Link
                                href="#eventos"
                                className="hero-button-secondary"
                            >
                                Ver eventos
                            </Link>

                        </div>

                    </div>


                    <div className="hero-decoration">

                        <div className="hero-glow"></div>

                        <div className="hero-card">

                            <div className="card-top">

                                <div className="mini-logo">
                                    SESI
                                </div>

                                <span className="online">
                                    ● PORTAL ONLINE
                                </span>

                            </div>

                            <div className="hero-card-content">

                                <span>
                                    SISTEMA ESCOLAR
                                </span>

                                <h3>
                                    Tudo conectado.
                                </h3>

                                <p>
                                    Informação, organização
                                    e tecnologia.
                                </p>

                            </div>


                            <div className="card-footer">

                                <div>
                                    <strong>04</strong>
                                    <span>Recursos</span>
                                </div>

                                <div>
                                    <strong>24/7</strong>
                                    <span>Acesso</span>
                                </div>

                                <div>
                                    <strong>100%</strong>
                                    <span>Digital</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ================= AVISOS ================= */}

                <section className="notice-section">

                    <div className="section-heading">

                        <div>
                            <span className="section-tag">
                                COMUNICADOS
                            </span>

                            <h2>
                                Avisos importantes
                            </h2>
                        </div>

                        <span className="section-description">
                            Fique por dentro das principais informações
                        </span>

                    </div>


                    <div className="notice-grid">

                        <article className="notice-card highlight">

                            <div className="notice-icon">
                                !
                            </div>

                            <div className="notice-info">

                                <span>IMPORTANTE</span>

                                <h3>
                                    Reunião de responsáveis
                                </h3>

                                <p>
                                    Confira as informações sobre a próxima
                                    reunião de responsáveis.
                                </p>

                            </div>

                            <strong>
                                12 SET
                            </strong>

                        </article>


                        <article className="notice-card">

                            <div className="notice-icon">
                                ✓
                            </div>

                            <div className="notice-info">

                                <span>ACADÊMICO</span>

                                <h3>
                                    Período de avaliações
                                </h3>

                                <p>
                                    Consulte o calendário e organize
                                    seus estudos.
                                </p>

                            </div>

                            <strong>
                                15 SET
                            </strong>

                        </article>


                        <article className="notice-card">

                            <div className="notice-icon">
                                +
                            </div>

                            <div className="notice-info">

                                <span>ATIVIDADES</span>

                                <h3>
                                    Oficinas e atividades
                                </h3>

                                <p>
                                    Novas atividades estão disponíveis
                                    para participação.
                                </p>

                            </div>

                            <strong>
                                ABERTO
                            </strong>

                        </article>

                    </div>

                </section>


                {/* ================= EVENTOS ================= */}

                <section
                    className="events-section"
                    id="eventos"
                >

                    <div className="section-heading">

                        <div>

                            <span className="section-tag">
                                ACONTECE NO SESI
                            </span>

                            <h2>
                                Próximos eventos
                            </h2>

                            <p>
                                Cultura, conhecimento, ciência e inovação
                                fazem parte da nossa comunidade.
                            </p>

                        </div>

                        <span className="section-link">
                            PROGRAMAÇÃO ESCOLAR
                        </span>

                    </div>


                    <div className="events-grid">

                        {/* EVENTO 1 */}

                        <article className="event-card">

                            <div className="event-image">

                                <img
                                    src="/evento-cultural.jpg"
                                    alt="Festival Cultural SESI"
                                />

                                <div className="image-overlay"></div>

                                <span>
                                    CULTURA
                                </span>

                            </div>


                            <div className="event-content">

                                <div className="event-date">

                                    <strong>18</strong>
                                    <span>SET</span>

                                </div>

                                <div>

                                    <h3>
                                        Festival Cultural SESI
                                    </h3>

                                    <p>
                                        Apresentações artísticas,
                                        música e cultura.
                                    </p>

                                    <span className="event-time">
                                        19:00 • Pátio Sesi
                                    </span>

                                </div>

                            </div>

                        </article>


                        {/* EVENTO 2 */}

                        <article className="event-card">

                            <div className="event-image">

                                <img
                                    src="/palestra.jpg"
                                    alt="Palestra sobre tecnologia"
                                />

                                <div className="image-overlay"></div>

                                <span>
                                    INOVAÇÃO
                                </span>

                            </div>


                            <div className="event-content">

                                <div className="event-date">

                                    <strong>25</strong>
                                    <span>SET</span>

                                </div>

                                <div>

                                    <h3>
                                        Palestra: Tecnologia e Futuro
                                    </h3>

                                    <p>
                                        Uma conversa sobre inovação,
                                        tecnologia e profissões.
                                    </p>

                                    <span className="event-time">
                                        14:00 • Sala Dom Casmurro
                                    </span>

                                </div>

                            </div>

                        </article>


                        {/* EVENTO 3 */}

                        <article className="event-card">

                            <div className="event-image">

                                <img
                                    src="/feira-de-ciencias.jpg"
                                    alt="Feira de Ciências SESI"
                                />

                                <div className="image-overlay"></div>

                                <span>
                                    CIÊNCIA
                                </span>

                            </div>


                            <div className="event-content">

                                <div className="event-date">

                                    <strong>02</strong>
                                    <span>OUT</span>

                                </div>

                                <div>

                                    <h3>
                                        Feira de Ciências
                                    </h3>

                                    <p>
                                        Projetos e experiências
                                        desenvolvidos pelos estudantes.
                                    </p>

                                    <span className="event-time">
                                        09:00 • Laboratório de Química
                                    </span>

                                </div>

                            </div>

                        </article>

                    </div>

                </section>


                {/* ================= DESTAQUES ================= */}

                <section
                    className="highlights-section"
                    id="destaques"
                >

                    <div className="section-heading">

                        <div>

                            <span className="section-tag">
                                NOSSA COMUNIDADE
                            </span>

                            <h2>
                                Destaques da escola
                            </h2>

                            <p>
                                Projetos, atividades e momentos que
                                movimentam nossa comunidade escolar.
                            </p>

                        </div>

                    </div>


                    <div className="highlights-grid">

                        {/* INOVAÇÃO */}

                        <article className="highlight-card highlight-large">

                            <div className="highlight-image">

                                <img
                                    src="/destaque-inovacao.jpeg"
                                    alt="Projeto de inovação do SESI"
                                />

                                <div className="image-overlay"></div>

                                <span>
                                    INOVAÇÃO
                                </span>

                            </div>


                            <div className="highlight-content">

                                <span>
                                    TECNOLOGIA & CRIATIVIDADE
                                </span>

                                <h3>
                                    Ideias que se transformam
                                    em projetos
                                </h3>

                                <p>
                                    Estudantes desenvolvem projetos
                                    utilizando criatividade, tecnologia
                                    e conhecimento.
                                </p>

                                <Link href="#agenda">
                                    Ver programação →
                                </Link>

                            </div>

                        </article>


                        {/* CULTURA */}

                        <article className="highlight-card">

                            <div className="highlight-image">

                                <img
                                    src="/sesi-cultura.jpg"
                                    alt="Atividade cultural do SESI"
                                />

                                <div className="image-overlay"></div>

                                <span>
                                    CULTURA
                                </span>

                            </div>


                            <div className="highlight-content">

                                <span>
                                    ARTE & EXPRESSÃO
                                </span>

                                <h3>
                                    Cultura e arte na escola
                                </h3>

                                <p>
                                    Momentos de expressão,
                                    criatividade e participação.
                                </p>

                                <Link href="#eventos">
                                    Ver eventos →
                                </Link>

                            </div>

                        </article>


                        {/* ESPORTE */}

                        <article className="highlight-card">

                            <div className="highlight-image">

                                <img
                                    src="/destaque-esporte.jpg"
                                    alt="Atividades esportivas do SESI"
                                />

                                <div className="image-overlay"></div>

                                <span>
                                    ESPORTE
                                </span>

                            </div>


                            <div className="highlight-content">

                                <span>
                                    MOVIMENTO & EQUIPE
                                </span>

                                <h3>
                                    Esporte e espírito de equipe
                                </h3>

                                <p>
                                    O esporte também faz parte
                                    da experiência escolar.
                                </p>

                                <Link href="#eventos">
                                    Ver programação →
                                </Link>

                            </div>

                        </article>

                    </div>

                </section>


                {/* ================= VIDA ESCOLAR ================= */}

                <section className="school-section">

                    <div className="school-content">

                        <span className="section-tag">
                            VIDA ESCOLAR
                        </span>

                        <h2>
                            Tudo o que você precisa
                            <strong> em um só lugar.</strong>
                        </h2>

                        <p>
                            Acesse os principais recursos acadêmicos
                            do sistema de forma rápida, organizada
                            e segura.
                        </p>


                        <div className="school-links">

                            <Link href="/cadalunos">

                                <span>01</span>

                                <div>
                                    <strong>Cadastro de alunos</strong>
                                    <small>Adicionar novos estudantes</small>
                                </div>

                                <b>→</b>

                            </Link>


                            <Link href="/listalunos">

                                <span>02</span>

                                <div>
                                    <strong>Lista de alunos</strong>
                                    <small>Consultar estudantes cadastrados</small>
                                </div>

                                <b>→</b>

                            </Link>


                            <Link href="/cadnotas">

                                <span>03</span>

                                <div>
                                    <strong>Cadastro de notas</strong>
                                    <small>Registrar informações acadêmicas</small>
                                </div>

                                <b>→</b>

                            </Link>


                            <Link href="/listnotas">

                                <span>04</span>

                                <div>
                                    <strong>Lista de notas</strong>
                                    <small>Consultar registros acadêmicos</small>
                                </div>

                                <b>→</b>

                            </Link>

                        </div>

                    </div>


                    <div className="school-visual">

                        <div className="visual-circle"></div>

                        <div className="school-panel">

                            <span>
                                SESI
                            </span>

                            <strong>
                                Educação
                                <br />
                                em movimento.
                            </strong>

                            <small>
                                MIRANDÓPOLIS • SP
                            </small>

                        </div>

                    </div>

                </section>


                {/* ================= AGENDA ================= */}

                <section
                    className="agenda-section"
                    id="agenda"
                >

                    <div className="agenda-title">

                        <span className="section-tag">
                            PROGRAMAÇÃO
                        </span>

                        <h2>
                            Agenda escolar
                        </h2>

                        <p>
                            Fique por dentro dos próximos compromissos
                            da comunidade escolar.
                        </p>

                        <Link href="#eventos">
                            Ver eventos →
                        </Link>

                    </div>


                    <div className="agenda-list">

                        <div className="agenda-item">

                            <div className="agenda-day">
                                <strong>05</strong>
                                <span>SET</span>
                            </div>

                            <div>
                                <span>REUNIÃO</span>
                                <h3>
                                    Reunião de responsáveis
                                </h3>
                            </div>

                            <small>
                                18:30
                            </small>

                        </div>


                        <div className="agenda-item">

                            <div className="agenda-day">
                                <strong>12</strong>
                                <span>SET</span>
                            </div>

                            <div>
                                <span>PALESTRA</span>
                                <h3>
                                    Profissões e mercado de trabalho
                                </h3>
                            </div>

                            <small>
                                14:00
                            </small>

                        </div>


                        <div className="agenda-item">

                            <div className="agenda-day">
                                <strong>18</strong>
                                <span>SET</span>
                            </div>

                            <div>
                                <span>CULTURA</span>
                                <h3>
                                    Festival Cultural SESI
                                </h3>
                            </div>

                            <small>
                                19:00
                            </small>

                        </div>


                        <div className="agenda-item">

                            <div className="agenda-day">
                                <strong>25</strong>
                                <span>SET</span>
                            </div>

                            <div>
                                <span>INOVAÇÃO</span>
                                <h3>
                                    Palestra Tecnologia e Futuro
                                </h3>
                            </div>

                            <small>
                                14:00
                            </small>

                        </div>

                    </div>

                </section>


                {/* ================= NOTÍCIAS ================= */}

                <section
                    className="news-section"
                    id="noticias"
                >

                    <div className="section-heading">

                        <div>

                            <span className="section-tag">
                                FIQUE POR DENTRO
                            </span>

                            <h2>
                                Notícias e informações
                            </h2>

                            <p>
                                Acompanhe o que acontece em nossa
                                comunidade escolar.
                            </p>

                        </div>

                    </div>


                    <div className="news-grid">

                        {/* NOTÍCIA PRINCIPAL */}

                        <article className="news-card large">

                            <div className="news-image">

                                <img
                                    src="/destaque-inovacao.jpeg"
                                    alt="Projetos de inovação dos estudantes"
                                />

                                <div className="image-overlay"></div>

                                <span>
                                    DESTAQUE
                                </span>

                            </div>


                            <div className="news-info">

                                <span>
                                    EDUCAÇÃO & INOVAÇÃO
                                </span>

                                <h3>
                                    Estudantes participam de novos
                                    projetos de inovação
                                </h3>

                                <p>
                                    Conheça iniciativas que aproximam
                                    tecnologia, criatividade e educação
                                    dentro da comunidade escolar.
                                </p>

                                <Link href="#destaques">
                                    Ver destaque →
                                </Link>

                            </div>

                        </article>


                        {/* NOTÍCIA CULTURA */}

                        <article className="news-card">

                            <div className="news-image">

                                <img
                                    src="/sesi-cultura.jpg"
                                    alt="Atividades culturais do SESI"
                                />

                                <div className="image-overlay"></div>

                                <span>
                                    CULTURA
                                </span>

                            </div>


                            <div className="news-info">

                                <span>
                                    CULTURA
                                </span>

                                <h3>
                                    Arte e cultura ganham espaço
                                    na escola
                                </h3>

                                <p>
                                    Confira as próximas atividades
                                    culturais do SESI.
                                </p>

                                <Link href="#eventos">
                                    Ver eventos →
                                </Link>

                            </div>

                        </article>


                        {/* NOTÍCIA ESPORTE */}

                        <article className="news-card">

                            <div className="news-image">

                                <img
                                    src="/destaque-esporte.jpg"
                                    alt="Atividades esportivas do SESI"
                                />

                                <div className="image-overlay"></div>

                                <span>
                                    ESPORTE
                                </span>

                            </div>


                            <div className="news-info">

                                <span>
                                    ESPORTE
                                </span>

                                <h3>
                                    Competições movimentam
                                    a comunidade escolar
                                </h3>

                                <p>
                                    Confira os próximos desafios
                                    e atividades esportivas.
                                </p>

                                <Link href="#eventos">
                                    Ver programação →
                                </Link>

                            </div>

                        </article>

                    </div>

                </section>


                {/* ================= CTA ================= */}

                <section className="final-cta">

                    <div>

                        <span>
                            SISTEMA ESCOLAR • SESI MIRANDÓPOLIS
                        </span>

                        <h2>
                            Conhecimento,
                            <br />
                            conexão e futuro.
                        </h2>

                    </div>


                    <Link href="/listalunos">

                        Acessar plataforma

                        <b>→</b>

                    </Link>

                </section>

            </main>


            {/* ================= FOOTER ================= */}

            <footer className="footer">

                <div className="footer-container">


                    <div className="footer-brand">

                        <ImagePlaceholder />

                        <h3>
                            Sistema Escolar
                        </h3>

                        <p>
                            Portal escolar do SESI Mirandópolis,
                            desenvolvido para conectar informação,
                            educação e tecnologia.
                        </p>

                    </div>


                    <div className="footer-column">

                        <h4>NAVEGAÇÃO</h4>

                        <Link href="/">
                            Início
                        </Link>

                        <Link href="#eventos">
                            Eventos
                        </Link>

                        <Link href="#destaques">
                            Destaques
                        </Link>

                        <Link href="#agenda">
                            Agenda
                        </Link>

                    </div>


                    <div className="footer-column">

                        <h4>VIDA ESCOLAR</h4>

                        <Link href="/cadalunos">
                            Cadastro de alunos
                        </Link>

                        <Link href="/listalunos">
                            Lista de alunos
                        </Link>

                        <Link href="/cadnotas">
                            Cadastro de notas
                        </Link>

                        <Link href="/listnotas">
                            Lista de notas
                        </Link>

                    </div>


                    <div className="footer-column">

                        <h4>SESI MIRANDÓPOLIS</h4>

                        <span>
                            São Paulo — SP
                        </span>

                        <span>
                            Sistema Escolar
                        </span>

                        <span>
                            Educação • Tecnologia
                        </span>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © 2026 SESI Mirandópolis
                    </span>

                    <span>
                        Sistema Escolar
                    </span>

                </div>

            </footer>

        </>
    );
}


/*
    Pequeno componente apenas para manter o
    rodapé organizado sem duplicar a logo.
*/
function ImagePlaceholder() {
    return (
        <div className="footer-logo">
            SESI
        </div>
    );
}