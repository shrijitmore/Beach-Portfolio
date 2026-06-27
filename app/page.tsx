/* eslint-disable @next/next/no-img-element */
import ClientEffects from "./components/ClientEffects";

export default function Home() {
  return (
    <>
      <ClientEffects />

      <div className="spotlight" id="spotlight" />
      <div className="cursor-dot" id="cursor" />

      {/* NAV */}
      <nav className="nav" id="nav" aria-label="Main navigation">
        <a className="brand" href="#hero">
          <span className="dot" />
          Shrijit
          <span
            className="italiana"
            style={{ fontSize: 18, color: "var(--amber-deep)", marginLeft: 6 }}
          >
            &mdash;Q.
          </span>
        </a>
        <ul>
          <li><a href="#about">01 &middot; About</a></li>
          <li><a href="#skills">02 &middot; Menu</a></li>
          <li><a href="#projects">03 &middot; Work</a></li>
          <li><a href="#tech">04 &middot; Tech</a></li>
          <li><a href="#contact">05 &middot; Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" aria-label="Hero">
        <video
          className="hero-video"
          src="/hero-beach.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hero-video-mask" aria-hidden="true" />
        <canvas id="mesh-canvas" aria-hidden="true" />
        <img className="cover-leaf-l" src="/hero-left-leaf.png" alt="" />
        <img className="cover-leaf-r" src="/hero-right-leaf.png" alt="" />

        <div className="wrap">
          <header className="masthead">
            <div className="meta">
              <span>Vol. XXVI</span>
              <span>No. 01</span>
              <span>May 2026</span>
            </div>
            <div className="meta">
              <span>Backends &middot; AI &middot; Web3 &middot; The In-Between</span>
            </div>
            <div className="meta">
              <span>Shrijit Quarterly</span>
            </div>
          </header>

          <div className="cover">
            <div className="title-stack">
              <div className="kicker reveal" data-delay="100">
                Code is my cocktail.{" "}
                <span style={{ color: "var(--amber-deep)", fontStyle: "italic" }}>
                  Served in production.
                </span>
              </div>
              <h1 className="bigword">
                <span className="reveal-mask">
                  <span className="inner">Ship</span>
                </span>
                <span className="amp">&amp;</span>
                <span className="reveal-mask">
                  <span className="inner">Stay&nbsp;Up</span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <span>Scroll &middot; Page Two</span>
          <span className="line" />
        </div>
      </section>

      {/* INSIDE THIS ISSUE */}
      <aside className="toc-strip" aria-label="Table of contents">
        <div className="wrap">
          <div className="toc-head">
            <span className="rule" />
            <span className="label">
              Inside this issue &mdash; <em>three pieces</em>
            </span>
            <span className="rule" />
          </div>

          <div className="toc-row">
            <a
              className="toc-item"
              href="https://crocko.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="toc-num">01</div>
              <div className="toc-body">
                <div className="toc-eyebrow">Feature &middot; SaaS &middot; Live</div>
                <h3 className="toc-title">
                  Crocko &mdash; AI <em>review&nbsp;engine</em>
                </h3>
                <p className="toc-blurb">
                  Grow Google reviews for local businesses with AI-drafted, anti-detection
                  reviews &mdash; multi-LLM fallback, zero fabrication.
                </p>
                <span className="toc-cta">Read &rarr;</span>
              </div>
            </a>

            <div className="toc-divide" />

            <a
              className="toc-item"
              href="https://influensa.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="toc-num">02</div>
              <div className="toc-body">
                <div className="toc-eyebrow">Feature &middot; AI &middot; Creators</div>
                <h3 className="toc-title">
                  Influensa &mdash; <em>content&nbsp;intelligence</em>
                </h3>
                <p className="toc-blurb">
                  Trend discovery, 4-agent script pipeline, per-scene editing, and
                  voice coaching for solo creators.
                </p>
                <span className="toc-cta">Read &rarr;</span>
              </div>
            </a>

            <div className="toc-divide" />

            <a
              className="toc-item"
              href="https://samantha.flashpact.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="toc-num">03</div>
              <div className="toc-body">
                <div className="toc-eyebrow">Feature &middot; AI &middot; Live</div>
                <h3 className="toc-title">
                  Samantha &mdash; AI <em>hotel&nbsp;receptionist</em>
                </h3>
                <p className="toc-blurb">
                  LangGraph orchestration, RAG-grounded answers, zero hallucinations
                  &mdash; live at samantha.flashpact.in.
                </p>
                <span className="toc-cta">Read &rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </aside>

      {/* MARQUEE 1 */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span className="marquee-item">Full-Stack <em>&middot;</em> AI <em>&middot;</em> Web3</span>
          <span className="marquee-item dot-sep">&middot;</span>
          <span className="marquee-item">LangGraph <em>&middot;</em> RAG <em>&middot;</em> Solana.js <em>&middot;</em> Solidity</span>
          <span className="marquee-item dot-sep">&middot;</span>
          <span className="marquee-item"><em>Ships</em> &amp; <em>stays running</em></span>
          <span className="marquee-item dot-sep">&middot;</span>
          <span className="marquee-item">Pune <em>&middot;</em> India <em>&middot;</em> Open <em>to collaborate</em></span>
          <span className="marquee-item dot-sep">&middot;</span>
          <span className="marquee-item">Full-Stack <em>&middot;</em> AI <em>&middot;</em> Web3</span>
          <span className="marquee-item dot-sep">&middot;</span>
          <span className="marquee-item">LangGraph <em>&middot;</em> RAG <em>&middot;</em> Solana.js <em>&middot;</em> Solidity</span>
          <span className="marquee-item dot-sep">&middot;</span>
          <span className="marquee-item"><em>Ships</em> &amp; <em>stays running</em></span>
          <span className="marquee-item dot-sep">&middot;</span>
          <span className="marquee-item">Pune <em>&middot;</em> India <em>&middot;</em> Open <em>to collaborate</em></span>
          <span className="marquee-item dot-sep">&middot;</span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" aria-label="About Shrijit">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="num">01</div>
            <div className="head-mid">
              <div className="eyebrow">The Bartender</div>
              <h2>On the <em>house</em> &mdash; an introduction</h2>
            </div>
            <div className="right">Folio &middot; 04&ndash;09</div>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <h3 className="reveal">
                Shaping
                <span className="rotor">
                  <span className="stack">
                    <span>ideas</span>
                    <span>concepts</span>
                    <span>designs</span>
                    <span>code</span>
                    <span>ideas</span>
                  </span>
                </span>
                into real projects that{" "}
                <em style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", color: "var(--amber-deep)" }}>
                  deliver results.
                </em>
              </h3>

              <p className="body reveal">
                <span className="lift">I</span>&apos;m Shrijit More &mdash; a full-stack
                engineer with <em style={{ fontStyle: "italic" }}>2.5 years</em> of production
                experience building distributed backends, real-time apps, and AI systems that
                actually ship. I currently own the backend for an industrial SaaS platform at{" "}
                <em style={{ fontStyle: "italic" }}>C4i4 Lab</em> running across 20&ndash;30
                plants &mdash; Kafka pipelines, Celery workers, PostgreSQL tenant isolation,
                nothing falls over without me knowing first.
              </p>

              <p className="body reveal" style={{ marginBottom: 36 }}>
                On the side I work in the <em>Solana ecosystem</em> &mdash; Solana.js, ethers.js,
                Solidity smart contracts, wallet integrations &mdash; and attended{" "}
                <em>Breakpoint Abu Dhabi</em>. My flagship is <em>Samantha</em>, a live AI hotel
                receptionist at samantha.flashpact.in, built end-to-end with a two-person team.
                Hallucination rate: zero.
              </p>

              <a className="about-cta reveal" href="#projects">
                <span>See the bar menu</span>
                <span className="arrow">&rarr;</span>
              </a>
            </div>

            <div className="dev-scene reveal" aria-label="Interactive developer workspace visualization">
              <div className="bg-grid" />
              <div className="orbit" />
              <div className="orbit-2" />
              <div className="label"><span className="live" /> Live &middot; workspace.tsx</div>
              <div className="tag-tr">on tap</div>
              <span className="chip c1"><span className="dot" /> LangGraph</span>
              <span className="chip c2 amber"><span className="dot" /> Solana.js</span>
              <span className="chip c3"><span className="dot" /> Kafka</span>
              <span className="chip c4"><span className="dot" /> React</span>
              <div className="code-window">
                <div className="cw-bar">
                  <i /><i /><i />
                  <span className="filename">~/shrijit/whoami.ts</span>
                </div>
                <pre id="typewriter" />
              </div>
              <div className="scene-badge">Now Pouring &middot; v26.1</div>
            </div>
          </div>

          <div className="about-stats reveal">
            <div className="cell">
              <div className="v">2<em>.</em>5</div>
              <div className="l">Years shipping to production</div>
            </div>
            <div className="cell">
              <div className="v">20<em>&mdash;</em>30</div>
              <div className="l">Plants running on backend I own</div>
            </div>
            <div className="cell">
              <div className="v">0<em>.</em>00</div>
              <div className="l">Hallucinations in prod (samantha)</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE 2 */}
      <div className="marquee cream reverse" aria-hidden="true">
        <div className="marquee-track">
          <span className="marquee-item"><em>The menu</em> &mdash; spirits &amp; mixers</span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item">Python <em>&middot;</em> Java <em>&middot;</em> TypeScript <em>&middot;</em> Solidity</span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item"><em>Garnish</em> with Kafka &amp; Celery</span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item"><em>The menu</em> &mdash; spirits &amp; mixers</span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item">Python <em>&middot;</em> Java <em>&middot;</em> TypeScript <em>&middot;</em> Solidity</span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item"><em>Garnish</em> with Kafka &amp; Celery</span>
          <span className="marquee-item">&middot;</span>
        </div>
      </div>

      {/* SKILLS / MENU */}
      <section id="skills" aria-label="Skills">
        <img className="leaf-l" src="/cocktail-left-leaf.png" alt="" />
        <img className="leaf-r" src="/cocktail-right-leaf.png" alt="" />
        <div className="wrap">
          <div className="menu-titles">
            <div className="pre reveal">A house list of</div>
            <h2 className="reveal">Spirits <em>&amp;</em> Mixers</h2>
            <div className="ornament reveal"><hr /><span>~ The Menu ~</span><hr /></div>
          </div>

          <div className="menu-cols">
            <div className="menu-col reveal">
              <h3>House Spirits</h3>
              <div className="sub">Things I pour daily</div>
              <div className="menu-row">
                <div className="name">AI &amp; LLM</div>
                <div className="leader" />
                <div className="price">&starf;&starf;&starf;&starf;&starf;</div>
                <div className="desc">LangChain &middot; LangGraph &middot; RAG &middot; OpenAI &amp; Claude APIs &mdash; <em>orchestrated &amp; grounded</em></div>
              </div>
              <div className="menu-row">
                <div className="name">Web3</div>
                <div className="leader" />
                <div className="price">&starf;&starf;&starf;&starf;&#9734;</div>
                <div className="desc">Solana.js &middot; ethers.js &middot; Solidity &middot; on-chain &amp; smart contracts &mdash; <em>on-chain &amp; on-call</em></div>
              </div>
              <div className="menu-row">
                <div className="name">Backend</div>
                <div className="leader" />
                <div className="price">&starf;&starf;&starf;&starf;&starf;</div>
                <div className="desc">Python &middot; Java (Spring Boot) &middot; Node.js &middot; Kafka &middot; Celery &mdash; <em>distributed &amp; durable</em></div>
              </div>
              <div className="menu-row">
                <div className="name">Frontend</div>
                <div className="leader" />
                <div className="price">&starf;&starf;&starf;&starf;&#9734;</div>
                <div className="desc">React.js &middot; TypeScript &middot; React Native &middot; Three.js &mdash; <em>realtime &amp; responsive</em></div>
              </div>
            </div>

            <div className="menu-divide" />

            <div className="menu-col reveal">
              <h3>Mixers &amp; Mods</h3>
              <div className="sub">Things that make it sing</div>
              <div className="menu-row">
                <div className="name">Databases</div>
                <div className="leader" />
                <div className="price">&starf;&starf;&starf;&starf;&#9734;</div>
                <div className="desc">PostgreSQL &middot; MongoDB &middot; Redis &middot; DynamoDB &mdash; <em>schema-isolated &amp; sub-500ms</em></div>
              </div>
              <div className="menu-row">
                <div className="name">Cloud / DevOps</div>
                <div className="leader" />
                <div className="price">&starf;&starf;&starf;&starf;&#9734;</div>
                <div className="desc">AWS &middot; GCP &middot; Azure &middot; Docker &middot; Kubernetes &middot; GH Actions &mdash; <em>monitored &amp; CI-ready</em></div>
              </div>
              <div className="menu-row">
                <div className="name">Realtime / APIs</div>
                <div className="leader" />
                <div className="price">&starf;&starf;&starf;&starf;&starf;</div>
                <div className="desc">REST &middot; GraphQL &middot; WebSockets &middot; Microservices &mdash; <em>live &amp; lossless</em></div>
              </div>
              <div className="menu-row">
                <div className="name">Vector / Search</div>
                <div className="leader" />
                <div className="price">&starf;&starf;&starf;&starf;&#9734;</div>
                <div className="desc">Semantic search &middot; vector DBs &middot; embeddings &mdash; <em>retrieved &amp; ranked</em></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" aria-label="Projects">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="num">03</div>
            <div className="head-mid">
              <div className="eyebrow">Selected Work</div>
              <h2>The <em>tasting</em> notes</h2>
            </div>
            <div className="right">Folio &middot; 14&ndash;31</div>
          </div>

          <div className="proj-list">
            <a className="proj-row" href="https://crocko.xyz" target="_blank" rel="noopener noreferrer">
              <div className="inline-img" style={{ backgroundImage: "url('/proj-dashboard.png')" }} />
              <div className="num">01<em>/03</em></div>
              <div className="title-wrap"><h3 className="title">Crocko &mdash; AI <em>Review Engine</em></h3></div>
              <div className="year">LIVE &middot; MMXXVI</div>
              <div className="tags">Next.js &middot; NestJS &middot; MongoDB &middot; Gemini &middot; Cloud Run</div>
              <div className="open" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5H8M19 5V16" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
            </a>

            <a className="proj-row" href="https://influensa.xyz" target="_blank" rel="noopener noreferrer">
              <div className="inline-img" style={{ backgroundImage: "url('/proj-digital-twin.png')" }} />
              <div className="num">02<em>/03</em></div>
              <div className="title-wrap"><h3 className="title">Influensa &mdash; AI <em>Content Intelligence</em></h3></div>
              <div className="year">LIVE &middot; MMXXVI</div>
              <div className="tags">AI Pipeline &middot; Voice Coach &middot; Trend Discovery &middot; Scripts</div>
              <div className="open" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5H8M19 5V16" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
            </a>

            <a className="proj-row" href="https://samantha.flashpact.in/" target="_blank" rel="noopener noreferrer">
              <div className="inline-img" style={{ backgroundImage: "url('/proj-hotel.png')" }} />
              <div className="num">03<em>/03</em></div>
              <div className="title-wrap"><h3 className="title">Samantha &mdash; AI <em>Hotel Receptionist</em></h3></div>
              <div className="year">LIVE &middot; MMXXV</div>
              <div className="tags">LangGraph &middot; RAG &middot; OpenAI &middot; React &middot; PostgreSQL</div>
              <div className="open" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5H8M19 5V16" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
            </a>
          </div>

          <div className="section-head reveal" style={{ marginTop: 80 }}>
            <div className="num">03b</div>
            <div className="head-mid">
              <div className="eyebrow">Deep Dives</div>
              <h2>The <em>full pour</em></h2>
            </div>
            <div className="right">03 spreads</div>
          </div>

          <div className="spreads">
            <article className="spread left">
              <div className="spread-folio">No. <span>01</span> &mdash; SaaS</div>
              <figure className="spread-media">
                <span className="badge amber">SaaS &middot; Live</span>
                <img src="/proj-dashboard.png" alt="Crocko AI Review Platform" />
              </figure>
              <div className="spread-body">
                <div className="num">01<em>/03</em></div>
                <div className="kind">2026 &middot; Review Intelligence</div>
                <h3>
                  <span className="word">Crocko&nbsp;</span>
                  <span className="word">&mdash;&nbsp;</span>
                  <span className="word"><em>AI-powered reviews</em></span>
                </h3>
                <p className="tagline">SaaS for local businesses to grow Google reviews. QR scan &rarr; quick feedback &rarr; AI drafts a human-sounding review. Anti-detection engine with style randomization and multi-LLM fallback (Gemini &rarr; Claude &rarr; OpenAI).</p>
                <div className="tags">
                  <span>Next.js</span><span>NestJS</span><span>MongoDB</span><span>Cloud Run</span>
                </div>
                <a className="readmore" href="https://crocko.xyz" target="_blank" rel="noopener noreferrer">
                  <span>Visit crocko.xyz</span>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </a>
              </div>
            </article>

            <article className="spread right">
              <div className="spread-folio">No. <span>02</span> &mdash; Creator AI</div>
              <figure className="spread-media">
                <span className="badge amber">AI &middot; Live</span>
                <img src="/proj-digital-twin.png" alt="Influensa Content Intelligence" />
              </figure>
              <div className="spread-body">
                <div className="num">02<em>/03</em></div>
                <div className="kind">2026 &middot; Content Intelligence</div>
                <h3>
                  <span className="word">Influensa&nbsp;</span>
                  <span className="word">&mdash;&nbsp;</span>
                  <span className="word"><em>your AI content brain</em></span>
                </h3>
                <p className="tagline">Trend discovery from YouTube &amp; Reddit, 4-agent script pipeline in your voice (Hinglish, regional), per-scene editing with AI reasoning, and voice coaching that scores confidence, energy &amp; filler words.</p>
                <div className="tags">
                  <span>AI Pipeline</span><span>Voice Coach</span><span>Trends</span><span>Scripts</span>
                </div>
                <a className="readmore" href="https://influensa.xyz" target="_blank" rel="noopener noreferrer">
                  <span>Visit influensa.xyz</span>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </a>
              </div>
            </article>

            <article className="spread left">
              <div className="spread-folio">No. <span>03</span> &mdash; AI Agent</div>
              <figure className="spread-media">
                <span className="badge amber">AI &middot; Live</span>
                <img src="/proj-hotel.png" alt="Samantha AI Hotel Receptionist" />
              </figure>
              <div className="spread-body">
                <div className="num">03<em>/03</em></div>
                <div className="kind">2025 &middot; AI Receptionist</div>
                <h3>
                  <span className="word">Samantha&nbsp;</span>
                  <span className="word">&mdash;&nbsp;</span>
                  <span className="word">a&nbsp;hotel&nbsp;</span>
                  <span className="word"><em>that doesn&apos;t sleep</em></span>
                </h3>
                <p className="tagline">LangGraph orchestration, RAG-grounded answers, zero hallucinations. Live with real users at samantha.flashpact.in. Built end-to-end with a two-person team.</p>
                <div className="tags">
                  <span>LangGraph</span><span>RAG</span><span>OpenAI</span><span>React</span>
                </div>
                <a className="readmore" href="https://samantha.flashpact.in/" target="_blank" rel="noopener noreferrer">
                  <span>Visit the site</span>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section id="tech" aria-label="Technical expertise">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="num">04</div>
            <div className="head-mid">
              <div className="eyebrow" style={{ color: "color-mix(in oklch, var(--paper) 70%, transparent)" }}>The Bar Cart</div>
              <h2>How I <em>contribute</em></h2>
            </div>
            <div className="right">Folio &middot; 32&ndash;36</div>
          </div>

          <div className="tech-grid">
            <div className="tech-cell">
              <div className="idx">a &middot; AI / LLM</div>
              <div className="glyph">L</div>
              <h4>LLM <em>Architect</em></h4>
              <p>LangChain, LangGraph, RAG, vector search. Production AI with hallucination rate of zero.</p>
            </div>
            <div className="tech-cell">
              <div className="idx">b &middot; Web3</div>
              <div className="glyph">&#9678;</div>
              <h4>On-chain <em>Engineer</em></h4>
              <p>Solana.js, ethers.js, Solidity smart contracts on EVM. Wallet adapters wired into React.</p>
            </div>
            <div className="tech-cell">
              <div className="idx">c &middot; Backend</div>
              <div className="glyph">{"{}"}</div>
              <h4>Backend <em>Operator</em></h4>
              <p>Kafka, Celery, PostgreSQL tenant isolation. The back-of-house that keeps front-of-house honest.</p>
            </div>
            <div className="tech-cell">
              <div className="idx">d &middot; Realtime</div>
              <div className="glyph">R</div>
              <h4>Realtime <em>React</em></h4>
              <p>TypeScript, WebSocket, 40% faster paint. Interfaces that feel honest the moment you trust them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" aria-label="Contact">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="num">05</div>
            <div className="head-mid">
              <div className="eyebrow">Reservation</div>
              <h2>Pull up a <em>stool</em></h2>
            </div>
            <div className="right">Folio &middot; 38</div>
          </div>

          <div className="contact-grid">
            <div className="contact-head">
              <h2 className="reveal">Last <em>call</em>.</h2>
              <p className="reveal">Building something AI-powered, on-chain, or quietly ambitious? I work end-to-end &mdash; backend, frontend, infra. Pune-based, async-friendly, available for collaborations and contract work.</p>
            </div>

            <form className="contact-form reveal" onSubmit={undefined} action="#">
              <div>
                <label>Your good name</label>
                <input type="text" name="name" placeholder="Mx. Future Collaborator" />
              </div>
              <div>
                <label>Where to reach you</label>
                <input type="email" name="email" placeholder="you@somewhere.cool" />
              </div>
              <div>
                <label>What&apos;s the occasion?</label>
                <textarea rows={3} name="message" placeholder="Tell me about the project, the team, the dream…" />
              </div>
              <button type="submit">
                <span>Send the order</span>
                <span className="arr">&rarr;</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* BIG MARQUEE BEFORE FOOTER */}
      <div className="marquee amber" aria-hidden="true">
        <div className="marquee-track">
          <span className="marquee-item">Made <em>by hand</em></span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item">Shrijit Quarterly <em>&middot;</em> Vol. XXVI</span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item">Smooth. <em>Clean.</em> Served with style.</span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item">Made <em>by hand</em></span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item">Shrijit Quarterly <em>&middot;</em> Vol. XXVI</span>
          <span className="marquee-item">&middot;</span>
          <span className="marquee-item">Smooth. <em>Clean.</em> Served with style.</span>
          <span className="marquee-item">&middot;</span>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="colophon">
          <div className="left">
            <div className="mast">The Colophon</div>
            <div className="quote">
              &ldquo;I build things that <em style={{ color: "var(--amber-soft)" }}>ship</em> &mdash; and{" "}
              <em style={{ color: "var(--amber-soft)" }}>stay running</em> in production.&rdquo;
            </div>
          </div>
          <div className="center">
            <div className="glyph">S<em>&amp;</em>Q</div>
          </div>
          <div className="right">
            <div className="socs">
              <a href="https://github.com/shrijitmore" target="_blank" rel="noopener noreferrer" title="GitHub">GH</a>
              <a href="https://linkedin.com/in/shrijitmore26" target="_blank" rel="noopener noreferrer" title="LinkedIn">In</a>
              <a href="https://x.com/ShrijitM_26" target="_blank" rel="noopener noreferrer" title="X (Twitter)">X</a>
              <a href="mailto:shrijit.m00@gmail.com" title="Email">@</a>
            </div>
            <div className="addr">Pune &middot; India &middot; shrijit.m00@gmail.com</div>
          </div>
        </div>
        <div className="bottom">
          <div>&copy; 2026 Shrijit More &middot; All rights poured</div>
          <div>Designed in cream &amp; amber &middot; Set in DM Serif &amp; IBM Plex</div>
        </div>
      </footer>
    </>
  );
}
