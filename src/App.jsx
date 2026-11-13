
import { useEffect, useState } from "react";
const fotoOzzo = "/ozzo-mobile.png";
const fotoOzzoLaptop = "/ozzo-laptop.png";
const fotoOzzoTablet = "/ozzo-tablet.png";


// Imagens localizadas na pasta public
const logo = "/logo1.png";
const logo2 = "/logo2.png";

const fotoDayane = "/foto-dayane.jpg";

const A = ({
  href = "#",
  children,
  className = "",
  external = false,
  ...props
}) => (
  <a
    className={className}
    href={href}
    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    {...props}
  >
    {children}
  </a>
);

const Arrow = () => <span aria-hidden="true">↗</span>;

const SectionHeading = ({ eyebrow, title, intro }) => (
  <header className="section-heading reveal">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {intro && <p className="section-intro">{intro}</p>}
  </header>
);

const projects = [
  {
    n: "01",
    type: "SAÚDE",
    title: "Clínica Ozzo",
    text: "Site, catálogo e experiência de compra.",
    className: "project-ozzo",
    image: "/ozzo-mobile.png",
    href: "#case-ozzo",
  },
  {
    n: "02",
    type: "ENGENHARIA",
    title: "EDN Topografia",
    text: "Apresentação institucional e serviços.",
    className: "project-edn",
    image: "edn-projeto.png",
    href: "https://www.edntopografia.com/",
  },
  {
    n: "03",
    type: "TELECOMUNICAÇÕES",
    title: "Conectividade que aproxima.",
    text: "Experiência digital para uma empresa de internet fibra óptica, com foco em serviços, planos e comunicação com clientes.",
    className: "project-netprimer",
    image: "/netprimer.png",
    href: "https://netprimer.vercel.app/",
  },
    {
    n: "04",
    type: "E-COMMERCE",
    title: "Experiência de compra",
    text: "Catálogo funcional e jornada intuitiva.",
    className: "project-commerce",
    image: "/ozzo-laptop.png",
    href: "#case-commerce",
  },
  {
    n: "05",
  type: "DESIGN GRÁFICO",
  title: "Designs que comunicam.",
  text: "Criação de peças visuais, conteúdos para redes sociais e identidades que fortalecem marcas.",
  className: "project-web",
  image: "/vision.png",
  href: "https://www.instagram.com/vision.conssig/",
  },
];

const navItems = [
  ["Sobre", "#sobre-mim"],
  ["Solução", "#solucao"],
  ["Projetos", "#projetos"],
  ["Processo", "#processo"],
  ["Contato", "#contato"],
];

const solutionFeatures = [
  {
    icon: "01",
    title: "EXPERIÊNCIA RESPONSIVA",
    text: "Navegação pensada para celulares, tablets e computadores.",
  },
  {
    icon: "02",
    title: "DESIGN QUE VALORIZA",
    text: "Identidade consistente, informação organizada e interfaces criativas.",
  },
  {
    icon: "03",
    title: "FUNCIONALIDADES ÚTEIS",
    text: "Catálogos, serviços e caminhos de contato adequados ao seu negócio.",
  },
  {
    icon: "04",
    title: "ESTRUTURA PARA CRESCER",
    text: "Organização técnica, SEO e uma base preparada para evoluir.",
  },
];

const deliverySteps = [
  ["01", "Planejamento", "Necessidades, objetivos e estrutura do site."],
  ["02", "Design e interface", "Organização visual, identidade e protótipo."],
  ["03", "Desenvolvimento", "Páginas, navegação e funcionalidades."],
  ["04", "Responsividade e testes", "Validação em diferentes tamanhos de tela."],
  ["05", "Publicação", "Preparação e entrega conforme o escopo."],
];

const differences = [
  [
    "01",
    "Design + programação",
    "Estética, organização visual e implementação técnica no mesmo projeto.",
  ],
  [
    "02",
    "Responsividade real",
    "Interfaces pensadas para cada tela, não apenas adaptadas.",
  ],
  [
    "03",
    "Soluções sob medida",
    "Estruturas definidas a partir do objetivo de cada negócio.",
  ],
  [
    "04",
    "Acompanhamento próximo",
    "Comunicação clara e validação das etapas previstas.",
  ],
];

const processSteps = [
  ["01", "Briefing", "Negócio, objetivos e necessidades."],
  ["02", "Planejamento e design", "Estrutura, referências e páginas."],
  ["03", "Desenvolvimento", "Interfaces e funcionalidades."],
  ["04", "Testes e aprovação", "Conteúdo, navegação e responsividade."],
  ["05", "Publicação", "Entrega conforme o escopo."],
];

const results = [
  [
    "01",
    "Mais eficiência operacional",
    "Serviços organizados em um canal acessível.",
  ],
  [
    "02",
    "Mais controle e organização",
    "Estrutura clara e conteúdo fácil de manter.",
  ],
  [
    "03",
    "Maior potencial de descoberta",
    "SEO e páginas organizadas para apoiar a visibilidade.",
  ],
  [
    "04",
    "Mais oportunidades de conversão",
    "Caminhos que ajudam o visitante a avançar.",
  ],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <nav className="nav" aria-label="Navegação principal">
        <A
          className="brand"
          href="#inicio"
          aria-label="Dayane Araújo — início"
          onClick={closeMenu}
        >
          <img src={logo} alt="Logo Dayane Araújo" />
        </A>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i />
          <i />
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(([label, href]) => (
            <A
              key={href}
              href={href}
              className="nav-link"
              onClick={closeMenu}
            >
              {label}
            </A>
          ))}
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-top">
            <p>PORTFÓLIO / 2026</p>
            <p>DESENVOLVIMENTO WEB & DESIGN</p>
          </div>

          <div className="hero-content">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                DESENVOLVEDORA FRONT-END & DESIGNER
              </p>

              <h1>
                DAYANE
                <span className="hero-name-last">ARAÚJO.</span>
              </h1>

              <a className="button button-primary" href="#projetos">
                <span>CONHEÇA MEU TRABALHO</span>
                <Arrow />
              </a>

              <div className="hero-statement">
                <h2>Design com propósito. Tecnologia com intenção.</h2>
                <p>
                  Desenvolvimento de sites responsivos, criativos e funcionais
                  para marcas que desejam fortalecer sua presença digital.
                </p>
              </div>
            </div>

            <div
              className="interface-stack reveal"
              aria-label="Identidade visual Dayane Araújo"
            >
              <div className="hero-orbit hero-orbit-1" />
              <div className="hero-orbit hero-orbit-2" />
              <div className="hero-orbit hero-orbit-3" />

              <div className="hero-logo-circle">
                <img src={logo2} alt="Monograma Dayane Araújo" />
              </div>

            </div>
          </div>

          <div className="hero-footer">
            <span>CRIATIVIDADE + ESTRATÉGIA + TECNOLOGIA</span>
            <a href="#sobre-mim">ROLE PARA DESCOBRIR ↓</a>
          </div>
        </section>

        {/* FRASE */}
        <section className="quote-section">
          <div className="quote-number"></div>
          <h4 className="frase">
            “Um bom site não apenas apresenta uma marca. Ele transforma ideias
            em experiências que conectam pessoas e negócios.”
            <cite>— Dayane Araújo</cite>
          </h4>
        </section>

        {/* SOBRE */}
        <section className="section about" id="sobre-mim">
          <div className="about-grid">
            <div className="about-visual reveal">
              <span className="about-eyebrow">
                QUEM ESTÁ POR TRÁS DE CADA PROJETO?
              </span>

              <div className="about-circle" />

              <div className="about-portrait">
                <img
                  src={fotoDayane}
                  alt="Dayane Araújo, desenvolvedora front-end e designer"
                  loading="lazy"
                />
              </div>

              <span className="about-signature">
                DAYANE <strong>ARAÚJO</strong>
              </span>

              <span className="about-index"></span>
            </div>

            <div className="about-copy reveal">
              <p className="eyebrow">UM POUCO SOBRE MIM</p>
              <h2 className="about-title">
                Olá, sou
                <br />
                <span>Dayane Araújo.</span>
              </h2>

              <p>
                Sou Dayane Araújo, desenvolvedora front-end e designer, com
                foco na criação de experiências digitais modernas, responsivas
                e funcionais.
              </p>

              <p>
                Meu trabalho une desenvolvimento web e visão visual para
                transformar ideias em sites que valorizam marcas, organizam
                informações e facilitam a experiência dos usuários.
              </p>

              <p>
                Acredito que tecnologia e design devem trabalhar juntos para
                criar soluções que façam sentido tanto para quem utiliza o
                site quanto para quem administra o negócio.
              </p>

              <div className="skill-row">
                <span>UI DESIGN</span>
                <span>FRONT-END</span>
                <span>RESPONSIVO</span>
              </div>

              <a className="text-link" href="#projetos">
                CONHEÇA MEUS PROJETOS <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
             
        <section className="section solution" id="solucao">
          <div className="solution-layout">

            <div className="solution-left">
             

              <div className="solution-copy">
                <h2>
                  Sua empresa
                  <br />
                  merece mais
                  <br />
                  que estar na
                  <br />
                  <span>internet.</span>
                </h2>

                <p>
                  Um site bem planejado apresenta seus serviços,
                  facilita o contato e transforma visitantes em
                  oportunidades.
                </p>

                <a className="text-link" href="#contato">
                  VAMOS CONVERSAR <Arrow />
                </a>
              </div>
            </div>

            <div className="solution-right">

              <p className="solution-intro">
                VAMOS TRANSFORMAR A PRESENÇA DIGITAL DA SUA EMPRESA?
              </p>

              <div className="solution-features">
                {solutionFeatures.map((feature) => (
                  <article
                    className="solution-feature"
                    key={feature.icon}
                  >
                    <div className="solution-feature-icon">
                      {feature.icon}
                    </div>

                    <div className="solution-feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="solution-cta">
                <a className="solution-button" href="#contato">
                  QUERO UM SITE PARA MINHA EMPRESA
                  <Arrow />
                </a>
              </div>

            </div>
          </div>
        </section>

        
        {/* PROJETOS */}
        <section className="section projects" id="projetos">

          <div className="projects-heading ">
            <p className="eyebrow">PORTFÓLIO / 2026</p>

            <h2>
              Projetos que ganham
              <br />
              <span>vida na web.</span>
            </h2>

            <p className="section-intro">
              Uma seleção de experiências digitais criadas
              com estratégia, design e tecnologia.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <A
                className="project-row "
                href={project.href}
                key={project.n}
              >
                <span className="project-number">
                  {project.n}
                </span>

                <div className="project-info">
                  <span className="project-category">
                    {project.type}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.text}</p>
                </div>

                <div className="project-thumbnail">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>

                <span className="project-arrow">
                  <Arrow />
                </span>
              </A>
            ))}
          </div>

          <div className="projects-footer">
            <span>DESIGN · DESENVOLVIMENTO · EXPERIÊNCIA</span>
            <span>DA. / 2026</span>
          </div>

        </section>


        {/* CASE OZZO — MOBILE */}
        <section className="case-showcase case-mobile" id="case-ozzo">
          <div className="case-copy reveal">
            <p className="eyebrow"></p>
            <h2>
              Uma experiência
              <br />
              <span>mobile-first.</span>
            </h2>
            <p>
              Uma navegação pensada para aproximar a clínica de seus pacientes,
              com acesso prático às informações e tratamentos.
            </p>
            <A
              className="text-link"
              href="https://clinicaozzo.com.br"
              external
            >
              Abrir o site da Clínica Ozzo <Arrow />
            </A>
          </div>

          <div className="device-scene reveal">
            <div className="phone">
              <div className="phone-speaker" />
              <div className="device-photo">
                <img src={fotoOzzo} alt="Site da Clínica Ozzo no celular" />
              </div>
            </div>
            <span className="annotation">
            </span>
          </div>
        </section>

        {/* CASE OZZO — TABLET */}
        <section className="case-showcase case-tablet">
          <div className="tablet-scene reveal">
            <div className="tablet">
              <div className="tablet-screen">
                <img src={fotoOzzoTablet} alt="Site da Clínica Ozzo no tablet" />
              </div>
            </div>
          </div>

          <div className="case-copy reveal">
            <p className="eyebrow">INTERFACE / TABLET</p>
            <h2>
              Tratamentos em
              <br />
              <span>cada detalhe.</span>
            </h2>
            <p>
              Informações organizadas para facilitar a descoberta dos
              tratamentos e tornar a navegação mais intuitiva.
            </p>
            <A
              className="text-link"
              href="https://clinicaozzo.com.br"
              external
            >
              Explorar tratamentos <Arrow />
            </A>
          </div>
        </section>

        {/* CASE OZZO — NOTEBOOK */}
        <section className="case-showcase case-laptop">
          <div className="case-copy reveal">
            <p className="eyebrow">CATÁLOGO / E-COMMERCE</p>
            <h2>
              Catálogo e
              <br />
              <span>experiência de compra.</span>
            </h2>
            <p>
              Um catálogo estruturado para facilitar a descoberta dos produtos
              e conduzir o cliente pelas etapas de compra.
            </p>
            <A
              className="text-link"
              href="https://clinicaozzo.com.br/catalog"
              external
            >
              Conhecer catálogo e produtos <Arrow />
            </A>
          </div>

          <div className="laptop-scene reveal">
            <div className="laptop">
              <div className="laptop-screen">
                <img src={fotoOzzoLaptop} alt="Site da Clínica Ozzo no laptop" />
              </div>
              <div className="laptop-base" />
            </div>
          </div>
        </section>

        {/* CLIENTES */}
        <section className="section clients" id="clientes">
          <SectionHeading
            eyebrow=" "
            title="Marcas que confiaram seus projetos à tecnologia."
          />

          <div className="logos reveal">
            <div>
              <strong>CLÍNICA  OZZO</strong>
              <span>SAÚDE E ESTÉTICA AVANÇADA</span>
            </div>
            <div>
              <strong>EDN</strong>
              <span>TOPOGRAFIA</span>
            </div>
            <div className="logo-placeholder">
               <strong>NETPRIMER</strong>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="section testimonials" id="depoimentos">
          <div className="testimonials-heading reveal">
            <h2>
              O que dizem
              <br />
              <span>sobre os projetos.</span>
            </h2>
          </div>

          <div className="testimonial-grid">
            <article className="testimonial-card reveal">
              <span className="testimonial-quote">“</span>
              <p>
                Estamos muito felizes com o resultado do nosso site! Ficou moderno,
                bonito e transmitiu exatamente o que buscávamos para nossa empresa
                de internet fibra óptica. Agradecemos pela dedicação, profissionalismo
                e por todo o cuidado durante o desenvolvimento. Foi uma ótima 
                experiência trabalhar com vocês. Parabéns pelo excelente trabalho!
                 </p>
              <div className="testimonial-author">
                <div className="author-avatar avatar-carla">CD</div>
                <div>
                  <strong>NETPRIMER</strong>
                  <small>Swends Araujo</small>
                </div>
              </div>
            </article>

            <article className="testimonial-card reveal">
              <span className="testimonial-quote">“</span>
              <p>
                Quero agradecer pelo excelente trabalho realizado na criação do nosso site. 
                Fiquei muito satisfeito com o resultado e, principalmente, com a atenção 
                e o comprometimento durante todo o desenvolvimento. Conseguiram entender
                 a proposta da EDN Topografia e transformar nossas ideias em um site 
                profissional e com a nossa identidade. Parabéns pelo trabalho e obrigado
                 pela parceria. Recomendo! 
              </p>
              <div className="testimonial-author">
                <div className="author-avatar avatar-tim">TC</div>
                <div>
                  <strong>EDN TOPOGRAFIA</strong>
                  <small>Ednalmo Almeida</small>
                </div>
              </div>
            </article>

          </div>
        </section> 

        {/* ENTREGAS */}
        <section className="section deliverables" id="entregas">

          <div className="deliverables-heading">
            <p className="eyebrow"></p>

            <h2>
              Escopo e <span>entregas.</span>
            </h2>
          </div>

          <div className="steps-list">
            {deliverySteps.map(([n, title, text]) => (
              <div className="step-row" key={n}>

                <div className="step-main">
                  <span className="step-icon">{n}</span>
                  <h3>{title}</h3>
                </div>

                <p>{text}</p>

              </div>
            ))}
          </div>

          <p className="fine-print">
            SEO, catálogo, formulários e outros recursos podem ser incluídos
            conforme o pacote contratado.
          </p>

        </section>

        {/* DIFERENCIAIS */}
        <section className="section differences" id="diferenciais">
          <div className="differences-heading ">
            <p className="eyebrow"></p>
            <h2>
              Por que desenvolver
              <br />
              seu site <span>comigo?</span>
            </h2>
          </div>

          <div className="difference-grid">
            {differences.map(([n, title, text]) => (
              <article className="difference reveal" key={n}>
                <div className="difference-icon">{n}</div>
                <div className="difference-content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div></section>

         <section className="">
          <div className="design-banner">
            <p className="eyebrow">DESIGN PARA REDES SOCIAIS</p>
            <h3>
              Seu site pode ir além
              <span> do código.</span>
            </h3>
            <p>
              Peças gráficas, banners e carrosséis podem manter toda a
              comunicação alinhada à identidade visual do seu site,
              criando uma presença digital mais consistente e profissional.
            </p>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="section process" id="processo">
          <div className="process-heading ">
            <p className="eyebrow"></p>
            <h2>
              Da primeira conversa
              <br />
              ao <span>site publicado.</span>
            </h2>
            <p>
              Um processo organizado para que cada etapa seja compreendida,
              revisada e aprovada.
            </p>
          </div>

          <div className="timeline">
            {processSteps.map(([n, title, text]) => (
              <article className="timeline-item " key={n}>
                <span className="timeline-number">{n}</span>
                <div className="timeline-marker">
                  <i />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* RESULTADOS */}
        <section className="section results" id="resultados">
          <SectionHeading
            eyebrow=" "
            title="O que um site bem estruturado pode proporcionar?"
          />

          <div className="result-grid">
            {results.map(([n, title, text]) => (
              <article className="result-card " key={n}>
                <span>{n}</span>
                <div className="result-icon">↗</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* MÉTRICAS */}
        <section className="section metrics" id="metricas">
          <SectionHeading
            eyebrow="ACOMPANHAMENTO E RESULTADOS"
            title="Do acesso aos resultados: seu site também entrega informações."
            intro="Todo site desenvolvido por mim conta com integração ao Google Analytics, permitindo acompanhar o desempenho da sua presença digital e entender melhor o comportamento dos visitantes."
          />

          <div className="analytics-content">

            {/* INDICADORES */}
            <div className="analytics-stats">

              <div className="analytics-stat">
                <span>USUÁRIOS</span>
                <strong>2.840</strong>
                <small>Visitantes no período</small>
              </div>

              <div className="analytics-stat">
                <span>VISUALIZAÇÕES</span>
                <strong>5.620</strong>
                <small>Páginas visualizadas</small>
              </div>

              <div className="analytics-stat">
                <span>ENGAJAMENTO</span>
                <strong>68,4%</strong>
                <small>Taxa de engajamento ilustrativa</small>
              </div>

            </div>

            {/* GRÁFICO */}
            <div className="chart-card">

              <div className="chart-header">
                <div>
                  <p className="chart-label">GOOGLE ANALYTICS 4</p>
                  <h3>Acessos ao longo do tempo</h3>
                </div>

                <span className="chart-period">ÚLTIMOS 30 DIAS</span>
              </div>

              <div className="chart-meta">
                <div>
                  <span className="dot olive" />
                  Usuários
                </div>

                <div>
                  <span className="dot white" />
                  Visualizações
                </div>
              </div>

              <div className="chart">

                <div className="chart-grid" />

                <svg
                  viewBox="0 0 700 260"
                  role="img"
                  aria-label="Gráfico ilustrativo de usuários e visualizações ao longo de 30 dias"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="interestGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#b3c4b0" stopOpacity=".25" />
                      <stop offset="100%" stopColor="#b3c4b0" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path
                    className="chart-area"
                    d="M0 220 C80 210,100 160,180 175 S290 110,360 130 S460 70,530 80 S620 28,700 35 L700 260 L0 260 Z"
                  />

                  <path
                    className="line-interest"
                    d="M0 220 C80 210,100 160,180 175 S290 110,360 130 S460 70,530 80 S620 28,700 35"
                  />

                  <path
                    className="line-sales"
                    d="M0 245 C100 230,120 220,190 225 S300 190,370 200 S470 145,540 160 S630 110,700 120"
                  />

                </svg>

                <div className="axis-labels">
                  <span>01 NOV</span>
                  <span>10 NOV</span>
                  <span>20 NOV</span>
                  <span>30 NOV</span>
                </div>

              </div>

              <p className="chart-note">
                Demonstração visual com dados fictícios. Os indicadores reais
                serão apresentados conforme os acessos e as interações registrados
                no site.
              </p>

            </div>

            {/* INFORMAÇÕES */}
            <div className="analytics-benefits">

              <div className="analytics-benefit">
                <span className="benefit-number">01</span>
                <div>
                  <h4>Origem dos acessos</h4>
                  <p>Descubra se os visitantes chegaram pelo Google, redes sociais ou outros canais.</p>
                </div>
              </div>

              <div className="analytics-benefit">
                <span className="benefit-number">02</span>
                <div>
                  <h4>Páginas mais acessadas</h4>
                  <p>Identifique quais serviços, produtos e conteúdos despertam mais interesse.</p>
                </div>
              </div>

              <div className="analytics-benefit">
                <span className="benefit-number">03</span>
                <div>
                  <h4>Dispositivos utilizados</h4>
                  <p>Saiba quantas pessoas acessam seu site pelo celular, tablet ou computador.</p>
                </div>
              </div>

              <div className="analytics-benefit">
                <span className="benefit-number">04</span>
                <div>
                  <h4>Comportamento dos visitantes</h4>
                  <p>Entenda como as pessoas navegam pelo site e quais conteúdos geram engajamento.</p>
                </div>
              </div>

            </div>

            <div className="analytics-footer">
              <p>
                Mais do que estar presente na internet, você terá informações
                para entender seus resultados e tomar decisões mais estratégicas.
              </p>
            </div>

          </div>
        </section>

        {/* CONTATO */}
        <section className="contact" id="contato">
          <div className="contact-top">
            <p className="eyebrow">VAMOS TIRAR SUA IDEIA DO PAPEL?</p>
            <span>DISPONÍVEL PARA NOVOS PROJETOS</span>
          </div>
          <h2>
            Toda grande presença digital começa com uma boa ideia.
            <br />
            <span>Vamos construir a sua?</span>
          </h2>
          <div className="contact-bottom">
            <p>
              Se você busca um site que represente sua marca, valorize seus
              serviços e ofereça uma experiência digital diferenciada,
              vamos conversar. Quero conhecer seu projeto e entender como
              posso transformar seus objetivos em uma solução digital.
            </p>
            <A
              className="button button-light"
              href="mailto:contato@dayanearaujo.dev?subject=Orçamento%20de%20projeto"
            >
              Vamos conversar sobre seu projeto
              <Arrow />
            </A>
          </div>
          <footer>
            <div className="footer-brand">
              <strong>DAYANE ARAÚJO.</strong>
              <span>DESENVOLVIMENTO WEB & DESIGN</span>
            </div>
            <div className="footer-social">
              <A
                href="https://github.com/d4yaraujo"
                external
              >
                GitHub
              </A>
              <A
                href="https://www.instagram.com/d4yaraujo._/"
                external
              >
                Instagram
              </A>
              <A
                href="https://wa.me/5511912958998?text=Ol%C3%A1!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os."
                external
              >
                WhatsApp
              </A>
            </div>
            <A href="#inicio" className="footer-top">
              Voltar ao topo ↑
            </A>
            <p className="footer-signature">
              CRIATIVIDADE · TECNOLOGIA · RESULTADOS
            </p>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;
