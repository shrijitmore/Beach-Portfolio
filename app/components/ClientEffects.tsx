"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // Force hero video play
    const v = document.querySelector<HTMLVideoElement>(".hero-video");
    if (v) {
      const tryPlay = () => v.play().catch(() => {});
      tryPlay();
      document.addEventListener("click", tryPlay, { once: true, passive: true });
      document.addEventListener("scroll", tryPlay, { once: true, passive: true });
    }

    // Custom cursor + spotlight
    const cursor = document.getElementById("cursor");
    const spot = document.getElementById("spotlight");
    if (cursor && spot) {
      let tx = window.innerWidth / 2,
        ty = window.innerHeight / 2;
      let cx = tx,
        cy = ty;
      const onMove = (e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        spot.style.setProperty("--mx", tx + "px");
        spot.style.setProperty("--my", ty + "px");
      };
      window.addEventListener("mousemove", onMove);
      let rafId: number;
      function tick() {
        cx += (tx - cx) * 0.25;
        cy += (ty - cy) * 0.25;
        cursor!.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
        rafId = requestAnimationFrame(tick);
      }
      tick();

      const hoverables = document.querySelectorAll(
        "a, button, .proj-row, .h-card, input, textarea"
      );
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("lg"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("lg"));
      });

      document.querySelectorAll("#tech, footer").forEach((sec) => {
        sec.addEventListener("mouseenter", () => cursor.classList.add("on-dark"));
        sec.addEventListener("mouseleave", () => cursor.classList.remove("on-dark"));
      });

      return () => {
        window.removeEventListener("mousemove", onMove);
        cancelAnimationFrame(rafId);
      };
    }
  }, []);

  // Particle mesh
  useEffect(() => {
    const c = document.getElementById("mesh-canvas") as HTMLCanvasElement | null;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0,
      H = 0;
    let pts: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const mouse = { x: -9999, y: -9999 };
    let rafId: number;

    function resize() {
      const r = c!.getBoundingClientRect();
      W = r.width;
      H = r.height;
      c!.width = W * dpr;
      c!.height = H * dpr;
      ctx!.scale(dpr, dpr);
      const n = Math.round((W * H) / 22000);
      pts = new Array(n).fill(0).map(() => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1 + Math.random() * 1.4,
      }));
    }

    function loop() {
      ctx!.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mouse.x,
          dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 160 * 160) {
          const d = Math.sqrt(d2) || 1;
          const f = (1 - d / 160) * 1.4;
          p.x += (dx / d) * f;
          p.y += (dy / d) * f;
        }
        ctx!.fillStyle = "rgba(176,58,31,0.55)";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i],
            b = pts[j];
          const dx = a.x - b.x,
            dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            const alpha = (1 - Math.sqrt(d2) / 120) * 0.35;
            ctx!.strokeStyle = `rgba(224,97,63,${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(loop);
    }

    const onResize = () => {
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    };
    window.addEventListener("resize", onResize);
    const parent = c.parentElement;
    const onParentMove = (e: MouseEvent) => {
      const r = c!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onParentLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    parent?.addEventListener("mousemove", onParentMove as EventListener);
    parent?.addEventListener("mouseleave", onParentLeave);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", onResize);
      parent?.removeEventListener("mousemove", onParentMove as EventListener);
      parent?.removeEventListener("mouseleave", onParentLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Typewriter
  useEffect(() => {
    const target = document.getElementById("typewriter");
    if (!target) return;
    const lines: [string, number][] = [
      ['<span class="c">// shrijit / whoami.ts</span>', 200],
      ['<span class="k">const</span> <span class="v">shrijit</span> <span class="k">=</span> {', 80],
      ['  <span class="v">name</span>: <span class="s">"Shrijit More"</span>,', 80],
      ['  <span class="v">role</span>: <span class="s">"Full-Stack · AI · Web3"</span>,', 90],
      ['  <span class="v">stack</span>: [<span class="s">"LangGraph"</span>, <span class="s">"Solana.js"</span>,', 80],
      ['           <span class="s">"React"</span>, <span class="s">"Kafka"</span>],', 80],
      ['  <span class="v">flagship</span>: <span class="s">"samantha.flashpact.in"</span>,', 90],
      ['  <span class="v">hallucinationRate</span>: <span class="k">0</span>,', 80],
      ['  <span class="v">availableFor</span>: <span class="s">"freelance"</span>,', 80],
      ['  <span class="v">ship</span>: <span class="k">async</span> () =&gt; <span class="s">"and stay running"</span>', 90],
      ["};", 200],
      ["", 200],
      ['<span class="v">shrijit</span>.<span class="v">ship</span>();<span class="caret"></span>', 9999],
    ];
    let buffer = "";
    let idx = 0;
    function step() {
      if (idx >= lines.length) return;
      buffer += lines[idx][0] + "\n";
      target!.innerHTML = buffer;
      const wait = lines[idx][1] || 80;
      idx++;
      setTimeout(step, wait);
    }
    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting) {
          step();
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const delay = parseInt(
              (e.target as HTMLElement).dataset.delay || "0",
              10
            );
            setTimeout(() => e.target.classList.add("in"), delay);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.05 }
    );
    document
      .querySelectorAll(".reveal, .reveal-mask, .clip-reveal")
      .forEach((el) => io.observe(el));

    const timer = setTimeout(() => {
      document
        .querySelectorAll(".reveal-mask:not(.in), .reveal:not(.in)")
        .forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight && r.bottom > 0) {
            el.classList.add("in");
          }
        });
    }, 2000);

    window.scrollTo(0, 0);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Spread reveal
  useEffect(() => {
    const spreads = document.querySelectorAll(".spread");
    if (!spreads.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.25 }
    );
    spreads.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Nav active state + scrolled
  useEffect(() => {
    const nav = document.getElementById("nav");
    const sections = ["hero", "about", "skills", "projects", "tech", "contact"].map(
      (id) => document.getElementById(id)
    );
    const links = document.querySelectorAll(".nav ul a");
    function update() {
      if (nav) {
        nav.classList.toggle("scrolled", window.scrollY > 80);
      }
      const y = window.scrollY + window.innerHeight * 0.3;
      let activeIdx = 0;
      sections.forEach((s, i) => {
        if (s && s.offsetTop <= y) activeIdx = i;
      });
      links.forEach((a, i) =>
        a.classList.toggle("active", i + 1 === activeIdx)
      );
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Parallax leaves
  useEffect(() => {
    const ll = document.querySelector<HTMLElement>(".cover-leaf-l");
    const rr = document.querySelector<HTMLElement>(".cover-leaf-r");
    const leafL = document.querySelector<HTMLElement>("#skills .leaf-l");
    const leafR = document.querySelector<HTMLElement>("#skills .leaf-r");
    const skills = document.getElementById("skills");

    function onScroll() {
      const y = window.scrollY;
      if (ll) ll.style.transform = `translateY(${y * 0.15}px)`;
      if (rr) rr.style.transform = `translateY(${y * 0.18}px)`;

      if (skills && (leafL || leafR)) {
        const rect = skills.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height + vh;
        let p = (vh - rect.top) / total;
        p = Math.max(0, Math.min(1, p));
        const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

        if (leafL) {
          const tx = (1 - e) * -100;
          const ty = (1 - e) * 100;
          leafL.style.transform = `translate(${tx}px, ${ty}px)`;
        }
        if (leafR) {
          const tx = (1 - e) * 100;
          const ty = (1 - e) * -100;
          leafR.style.transform = `translate(${tx}px, ${ty}px) rotate(-90deg)`;
          leafR.style.transformOrigin = "top right";
        }
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
