import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import landingCss from "../landing.css?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Escalá tu negocio a High Ticket | Clari Pérez" },
      {
        name: "description",
        content:
          "El paso a paso exacto para escalar tu high ticket: el sistema que usaron mis clientas para llegar a 22K, 10K, 9K y 7K en 4 meses.",
      },
      { property: "og:title", content: "Escalá tu negocio a High Ticket | Clari Pérez" },
      {
        property: "og:description",
        content:
          "Agendá tu llamada y descubrí el sistema para escalar tu programa high ticket sin vivir en llamadas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500;1,600&display=swap",
      },
      { rel: "stylesheet", href: landingCss },
    ],
  }),
  component: Landing,
});

const HTML = "\n\n<section class=\"hero\">\n  <div class=\"wrap\">\n    <span class=\"pill shine\">PARA MENTORAS, COACHES Y EXPERTAS QUE QUIEREN ESCALAR</span>\n    <h1>El Paso a Paso exacto para escalar tu <em>High Ticket</em></h1>\n    <p class=\"sub\">El mismo que usaron mis clientas para escalar a 22K, 10K, 9K y 7K en solo 4 meses.</p>\n    <a href=\"#agendar\" class=\"cta-btn shine\">AGENDAR MI LLAMADA \u2192</a>\n    <div class=\"hero-note\">Cupos limitados \u00b7 Solo tomamos entre 5 y 10 perfiles por mes</div>\n  </div>\n</section>\n\n<section class=\"vsl\">\n  <div class=\"wrap\">\n    <div class=\"video-frame\">\n      <iframe src=\"https://www.youtube.com/embed/vOH1vhtmLfk\" title=\"Video presentación\" loading=\"lazy\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      <div class=\"video-caption\">Mir\u00e1 el video completo antes de agendar tu llamada \u2193</div>\n    </div>\n  </div>\n</section>\n\n<section class=\"calendario\" id=\"agendar\">\n  <div class=\"wrap\">\n    <div class=\"section-sub\">AGENDA DISPONIBLE</div>\n    <h2 class=\"section-title\">Eleg\u00ed el d\u00eda y horario de tu llamada</h2>\n    <div class=\"cal-frame\">\n      <iframe src=\"https://os.caminodigitalllc.com/widget/booking/TSsLaY1sPMSOMEcq1XP2\" allow=\"payment\" scrolling=\"no\" id=\"I2FfDIC3AS1kKzvMHUKA_1786388024640\" title=\"Agendar llamada\"></iframe>\n    </div>\n  </div>\n</section>\n\n<section class=\"problema\">\n  <div class=\"wrap\">\n    <div class=\"section-sub\">SI ESTO TE HACE RUIDO, ES PARA VOS</div>\n    <h2 class=\"section-title\">\u00bfHace cu\u00e1nto est\u00e1s en esta situaci\u00f3n?</h2>\n    <div class=\"problema-grid\">\n      <div class=\"problem-card\">\n        <div class=\"num\">01</div>\n        <p>Public\u00e1s contenido sin un sistema real que te traiga clientes calificados, los que s\u00ed pueden pagarte un ticket alto.</p>\n      </div>\n      <div class=\"problem-card\">\n        <div class=\"num\">02</div>\n        <p>Est\u00e1s todo el d\u00eda en llamada, d\u00e1ndole seguimiento manual a cada cliente, sin tiempo para dedicarte a lo que hace crecer el negocio.</p>\n      </div>\n      <div class=\"problem-card\">\n        <div class=\"num\">03</div>\n        <p>Segu\u00eds cobrando barato porque en el fondo no termin\u00e1s de creer que se puede vender distinto.</p>\n      </div>\n      <div class=\"problem-card\">\n        <div class=\"num\">04</div>\n        <p>Est\u00e1s atada a tu tiempo: si vos no trabaj\u00e1s, no entra plata. Y as\u00ed es imposible escalar.</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"casos\">\n  <div class=\"wrap\">\n    <div class=\"section-sub\">CASOS REALES, DENTRO DEL PROGRAMA</div>\n    <h2 class=\"section-title\">Esto es lo que pas\u00f3 cuando aplicaron el sistema</h2>\n    <div class=\"casos-grid\">\n      <div class=\"caso reveal\" style=\"animation-delay:.05s\">\n        <div class=\"nombre\">Miranda</div>\n        <a class=\"handle\" href=\"https://www.instagram.com/mirandagiok/\" target=\"_blank\" rel=\"noopener\">@mirandagiok</a>\n        <div class=\"resultado\">2K \u2192 10K/mes</div>\n        <p>Pas\u00f3 de 5.000 a 40.000 seguidores y multiplic\u00f3 su facturaci\u00f3n.</p>\n      </div>\n      <div class=\"caso reveal\" style=\"animation-delay:.1s\">\n        <div class=\"nombre\">Sele</div>\n        <div class=\"resultado\">0 \u2192 9K/mes</div>\n        <p>Empez\u00f3 de cero su cuenta y en 60 d\u00edas explotaron las ventas.</p>\n      </div>\n      <div class=\"caso reveal\" style=\"animation-delay:.15s\">\n        <div class=\"nombre\">Jesi</div>\n        <a class=\"handle\" href=\"https://www.instagram.com/jesicellucci.ok/\" target=\"_blank\" rel=\"noopener\">@jesicellucci.ok</a>\n        <div class=\"resultado\">7K facturados</div>\n        <p>Factur\u00f3 con su propio programa siguiendo el sistema.</p>\n      </div>\n      <div class=\"caso reveal\" style=\"animation-delay:.2s\">\n        <div class=\"nombre\">Vicky</div>\n        <a class=\"handle\" href=\"https://www.instagram.com/vickysolodujin/\" target=\"_blank\" rel=\"noopener\">@vickysolodujin</a>\n        <div class=\"resultado\">+3K desde cero</div>\n        <p>Literalmente empezando de cero, sin audiencia previa.</p>\n      </div>\n      <div class=\"caso reveal\" style=\"animation-delay:.25s\">\n        <div class=\"nombre\">Ale</div>\n        <a class=\"handle\" href=\"https://www.instagram.com/alevogeler/\" target=\"_blank\" rel=\"noopener\">@alevogeler</a>\n        <div class=\"resultado\">22K/mes</div>\n        <p>Sali\u00f3 del 1 a 1: pas\u00f3 de sesiones de 50 d\u00f3lares a un ticket de 4.000.</p>\n      </div>\n      <div class=\"caso reveal\" style=\"animation-delay:.3s\">\n        <div class=\"nombre\">Mica</div>\n        <a class=\"handle\" href=\"https://www.instagram.com/micahernandez.mkt/\" target=\"_blank\" rel=\"noopener\">@micahernandez.mkt</a>\n        <div class=\"resultado\">4K/mes</div>\n        <p>Dej\u00f3 su trabajo en relaci\u00f3n de dependencia empezando desde cero.</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"sobre-mi\" id=\"quien-soy\">\n  <div class=\"wrap\">\n    <div class=\"qs-block\">\n      <div class=\"qs-eyebrow\">QUI\u00c9N SOY</div>\n      <h2 class=\"qs-title\">Clara P\u00e9rez</h2>\n      <div class=\"qs-rule\"></div>\n      <p class=\"qs-lead\">Ayudo a mujeres a escalar su high ticket.</p>\n\n      <div class=\"qs-cards\">\n        <div class=\"qs-card\">\n          <div class=\"qs-badge\">\ud83d\udcc8</div>\n          <h4>+10 a\u00f1os de experiencia</h4>\n          <p>En negocios online y marketing digital.</p>\n        </div>\n        <div class=\"qs-card\">\n          <div class=\"qs-badge\">\ud83d\udc65</div>\n          <h4>+500.000 seguidores</h4>\n          <p>Entre todas mis cuentas.</p>\n        </div>\n        <div class=\"qs-card\">\n          <div class=\"qs-badge\">\ud83c\udfa4</div>\n          <h4>Conferencista en empresas</h4>\n          <p>Charlas y capacitaciones para equipos y organizaciones.</p>\n        </div>\n        <div class=\"qs-card\">\n          <div class=\"qs-badge\">\ud83d\udd34</div>\n          <h4>Conferencista TED</h4>\n          <p>Y parte del equipo organizador de charlas TED.</p>\n        </div>\n      </div>\n\n      <h3 class=\"qs-ted-title\">Mir\u00e1 mi charla TED</h3>\n      <div class=\"qs-ted\">\n        <iframe src=\"https://www.youtube.com/embed/Z7qYzo46IjQ\" title=\"El precio de vivir sin prop\u00f3sito | Maria Clara P\u00e9rez | TEDxBarrioSanIsidro\" loading=\"lazy\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"cierre\">\n  <div class=\"wrap\">\n    <div class=\"section-sub\">EL SIGUIENTE PASO</div>\n    <h2 class=\"section-title\">Agend\u00e1 tu llamada con mi equipo</h2>\n    <p class=\"lead\">Vamos a analizar tu caso puntual y ver si est\u00e1s en el punto para dar este paso. Cada semana tomamos entre 40 y 60 llamadas y elegimos \u00fanicamente a los perfiles 100% comprometidos.</p>\n    <a href=\"#agendar\" class=\"cta-btn shine\">QUIERO AGENDAR MI LLAMADA \u2192</a>\n    <div class=\"filtro\">Si no ingres\u00e1s al programa, igual sal\u00eds con un roadmap claro de tus pr\u00f3ximos pasos.</div>\n  </div>\n</section>\n\n<footer>\n  CLARI P\u00c9REZ \u00b7 @soyclaraperez\n</footer>\n\n";

function Landing() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const spark = document.createElement("div");
      spark.className = "click-spark";
      spark.style.left = e.clientX + "px";
      spark.style.top = e.clientY + "px";
      document.body.appendChild(spark);
      spark.addEventListener("animationend", () => spark.remove());
    };
    document.addEventListener("click", onClick);

    // --- Calendario embebido ---------------------------------------------
    // El widget avisa su alto real por postMessage en cada paso (calendario ->
    // formulario). Escuchamos esos mensajes y estiramos el iframe, así en mobile
    // el formulario nunca queda cortado y se scrollea con la página.
    const CAL_ORIGIN = "https://os.caminodigitalllc.com";
    const getFrame = () => document.querySelector<HTMLIFrameElement>(".cal-frame iframe");

    const applyHeight = (value: unknown) => {
      const h = typeof value === "string" ? parseInt(value, 10) : Number(value);
      const frame = getFrame();
      if (frame && Number.isFinite(h) && h > 240) {
        frame.style.height = `${Math.ceil(h)}px`;
      }
    };

    // El script de embed esconde el iframe fuera de pantalla hasta recibir su
    // propio mensaje de "listo"; si no llega, lo devolvemos a su lugar.
    const unhide = () => {
      const frame = getFrame();
      if (!frame) return;
      ["opacity", "visibility", "pointer-events", "position", "left", "top"].forEach((prop) =>
        frame.style.removeProperty(prop),
      );
    };
    unhide();
    const calTimer = window.setInterval(unhide, 400);
    const calStop = window.setTimeout(() => window.clearInterval(calTimer), 15000);

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== CAL_ORIGIN) return;
      let data: unknown = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          return;
        }
      }
      if (!data || typeof data !== "object") return;
      const payload = data as Record<string, unknown>;
      const height =
        payload["height"] ??
        payload["scrollHeight"] ??
        (payload["docHeight"] as unknown) ??
        (payload["data"] && typeof payload["data"] === "object"
          ? (payload["data"] as Record<string, unknown>)["height"]
          : undefined);
      if (height !== undefined) applyHeight(height);
      unhide();
    };
    window.addEventListener("message", onMessage);

    const embedSrc = `${CAL_ORIGIN}/js/form_embed.js`;
    if (!document.querySelector(`script[src="${embedSrc}"]`)) {
      const script = document.createElement("script");
      script.src = embedSrc;
      script.async = true;
      document.body.appendChild(script);
    }




    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            entry.target.classList.add("reveal");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".caso").forEach((el) => io.observe(el));

    return () => {
      document.removeEventListener("click", onClick);
      window.clearInterval(calTimer);
      window.clearTimeout(calStop);
      io.disconnect();
    };

  }, []);

  return <div className="landing-root" dangerouslySetInnerHTML={{ __html: HTML }} />;
}
