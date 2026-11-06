import { createFileRoute } from "@tanstack/react-router";
import {
  Check, ChevronDown, Search, ListChecks, Wrench, Compass, GitCompare, Layers, Image as ImageIcon,
  BookOpen, Smartphone, ShieldCheck, Gift, Star, MessageCircle, Lock, FileText,
} from "lucide-react";
import hero from "@/assets/hero-fichas.jpg";
import preview from "@/assets/preview-fichas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "120 Fichas Visuales de Mecánica de Bicicletas" },
      { name: "description", content: "Consulta síntomas, posibles causas y qué revisar primero con 120 fichas ilustradas en PDF, organizadas en 10 áreas." },
      { property: "og:title", content: "120 Fichas Visuales de Mecánica de Bicicletas" },
      { property: "og:description", content: "120 fichas ilustradas en PDF para diagnosticar y mantener tu bicicleta. + 5 bonos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CTA = ({ children, href = "#precios" }: { children: React.ReactNode; href?: string }) => (
  <a href={href} className="btn-cta w-full sm:w-auto">{children}</a>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
    <span className="h-px w-8 bg-primary" />{children}
  </span>
);

const areas = [
  ["Transmisión y cambios", "Cadena, cassette, cambios y cables."],
  ["Frenos", "Discos, pinzas, pastillas y puntos de revisión."],
  ["Ruedas y neumáticos", "Aros, radios, presión y centrado."],
  ["Bujes y rodamientos", "Ejes, ajustes y lubricación."],
  ["Bielas, platos y pedales", "Holguras, ruidos y puntos de revisión."],
  ["Dirección, manillar y potencia", "Ajustes y alineación del conjunto."],
  ["Suspensión", "Horquilla, ajustes, rebote y fugas."],
  ["Cuadro y horquilla", "Inspección de grietas, golpes y señales de daño."],
  ["Sillín y controles", "Sillín, ajustes, mandos y cables."],
  ["Diagnóstico y mantenimiento", "Ruidos, vibraciones y lubricación."],
];

const benefits = [
  [Compass, "Encuentra un punto de partida", "Consulta qué aspectos considerar cuando aparece un síntoma y necesitas orientar la revisión."],
  [GitCompare, "Relaciona síntomas y causas", "Revisa alternativas antes de dar por hecho cuál es el origen del problema."],
  [Layers, "Localiza por componente", "Las 10 áreas te ayudan a encontrar el tema que necesitas consultar."],
  [ImageIcon, "Apóyate en las ilustraciones", "Acompaña la información con imágenes de componentes y puntos de revisión."],
  [BookOpen, "Repasa mientras aprendes", "Utiliza las fichas para estudiar, recordar conceptos y revisar situaciones de mantenimiento."],
  [Smartphone, "En el formato que prefieras", "Abre el PDF en celular, tablet o computadora, o imprime las fichas."],
] as const;

const bonuses = [
  ["Listas de inspección", "Consulta los puntos esenciales antes y después del servicio para una revisión más organizada."],
  ["Guía visual de herramientas", "Identifica las herramientas y consulta cuándo utilizarlas."],
  ["Tabla de mantenimiento preventivo", "Organiza las tareas de revisión, limpieza y lubricación."],
  ["Guía de síntomas y posibles causas", "Repasa fallas y sus posibles orígenes en un material complementario."],
  ["Fichas de registro para el taller", "Registra la recepción de la bicicleta, la inspección y los servicios realizados."],
];

const faqs = [
  ["¿El material es físico o digital?", "Es un producto 100% digital en formato PDF. No recibirás libros ni fichas físicas."],
  ["¿Sirve para quienes están empezando?", "Sí. Las ilustraciones y la organización por componentes ayudan a visualizar los temas y repasar puntos de revisión. Es un material de apoyo para aprender y consultar."],
  ["¿Es un curso completo de mecánica?", "Es una colección de fichas visuales para estudio y consulta. No sustituye la formación práctica ni las especificaciones técnicas del fabricante."],
  ["¿Puedo consultar el material desde mi celular?", "Sí. Puedes abrir los archivos en tu celular, tablet o computadora."],
  ["¿Puedo imprimir las fichas?", "Sí. Puedes imprimirlas para tenerlas a mano durante el estudio o la consulta."],
  ["¿Cómo y cuándo recibo el acceso?", "Recibirás el acceso por WhatsApp después de la confirmación del pago. El tiempo de confirmación depende del medio de pago utilizado."],
  ["¿Qué diferencia hay entre los dos accesos?", "El Acceso Esencial incluye las 120 fichas visuales. El Acceso Completo incluye esas mismas fichas y los 5 bonos descritos en esta página."],
  ["¿Las fichas sirven para cualquier marca y modelo?", "El material ofrece orientación por componentes. Las particularidades de cada modelo deben consultarse en la documentación del fabricante."],
  ["¿El pago es único?", "Sí. Pagas una sola vez por el acceso elegido, sin mensualidades."],
  ["¿La compra tiene garantía?", "Sí. Tienes 7 días para revisar el material y solicitar el reembolso si consideras que no es para ti."],
];

const Trust = () => (
  <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
    <span className="inline-flex items-center gap-1"><Lock className="h-3.5 w-3.5" />Compra segura</span>
    <span className="inline-flex items-center gap-1"><FileText className="h-3.5 w-3.5" />Material digital</span>
    <span className="inline-flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" />Entrega por WhatsApp</span>
  </p>
);

function Index() {
  return (
    <main className="overflow-x-hidden">
      <div className="bg-stripes h-2" />

      {/* HERO */}
      <section className="bg-hero relative">
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Eyebrow>Material digital · PDF</Eyebrow>
            <h1 className="mt-5 text-6xl md:text-8xl">
              120 Fichas <span className="text-primary">Visuales</span> de Mecánica de Bicicletas
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Consulta posibles causas y descubre qué revisar primero con fichas ilustradas, organizadas y fáciles de consultar.
            </p>
            <div className="mt-8"><CTA>Quiero acceder a las 120 fichas</CTA></div>
            <div className="mt-8 flex gap-8 font-display">
              {[["120", "Fichas"], ["10", "Áreas"], ["5", "Bonos"]].map(([n, l]) => (
                <div key={l}><div className="text-5xl text-accent">{n}</div><div className="text-sm tracking-widest text-muted-foreground">{l}</div></div>
              ))}
            </div>
          </div>
          <img src={hero} alt="Mockup de las 120 fichas en papel, tablet y celular" width={1280} height={1024} className="rounded-xl border shadow-card" />
        </div>
      </section>

      {/* HOW */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Así funcionan</Eyebrow>
          <h2 className="mt-4 text-5xl md:text-6xl">Mira cómo son las fichas que vas a consultar</h2>
          <p className="mt-4 text-muted-foreground">¿La bicicleta presenta una falla y no sabes por dónde empezar? Las fichas te ayudan a relacionar el síntoma con posibles causas y reconocer qué revisar.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[[Search, "Identifica el síntoma", "Busca una ficha relacionada con el problema que presenta la bicicleta."],
            [ListChecks, "Consulta las posibles causas", "Revisa las situaciones que podrían estar relacionadas con esa falla."],
            [Wrench, "Identifica qué comprobar", "Usa las ilustraciones y los puntos de revisión para orientar tus comprobaciones."]].map(([Icon, t, d], i) => {
            const I = Icon as typeof Search;
            return (
              <div key={i} className="relative rounded-xl border bg-card p-7">
                <span className="absolute right-6 top-4 font-display text-6xl text-secondary">0{i + 1}</span>
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground"><I className="h-6 w-6" /></div>
                <h3 className="mt-5 text-3xl">{t as string}</h3>
                <p className="mt-2 text-muted-foreground">{d as string}</p>
              </div>
            );
          })}
        </div>
        <img src={preview} alt="Vista previa de fichas: cambios, freno hidráulico y salto vertical de la rueda" width={1536} height={864} loading="lazy" className="mt-12 rounded-xl border shadow-card" />
        <div className="mt-8 flex flex-col items-center gap-6 text-center">
          <p className="font-display text-3xl tracking-wider">10 áreas · 12 fichas por área · <span className="text-primary">120 fichas en total</span></p>
          <CTA>Quiero ver las opciones de acceso</CTA>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y bg-card/50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl"><Eyebrow>Beneficios</Eyebrow>
            <h2 className="mt-4 text-5xl md:text-6xl">Ten una referencia visual cuando surjan dudas durante la revisión</h2></div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([I, t, d]) => (
              <div key={t} className="bg-background p-7 transition-colors hover:bg-card">
                <I className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR YOU */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
        <div><Eyebrow>Para quién es</Eyebrow><h2 className="mt-4 text-5xl md:text-7xl">Este material es <span className="text-accent">para ti</span> si…</h2></div>
        <ul className="space-y-3">
          {["Estás aprendiendo mecánica de bicicletas.", "Quieres una referencia visual durante tus revisiones.", "Buscas repasar componentes y fallas comunes.", "Realizas mantenimiento de tu propia bicicleta y quieres orientarte mejor.", "Prefieres consultar información organizada por temas."].map((x) => (
            <li key={x} className="flex items-start gap-3 rounded-lg border bg-card p-4">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" /><span>{x}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* AREAS */}
      <section className="bg-paper py-20 text-paper-foreground">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center"><Eyebrow>Contenido</Eyebrow><h2 className="mt-4 text-5xl md:text-6xl">120 fichas organizadas en 10 áreas</h2></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {areas.map(([t, d], i) => (
              <div key={t} className="rounded-lg border-2 border-paper-foreground/10 bg-background/0 p-5 transition-transform hover:-translate-y-1">
                <div className="font-display text-4xl text-primary">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 text-xl">{t}</h3>
                <p className="mt-1 text-sm opacity-70">{d}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary">12 fichas</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <Eyebrow>Incluye</Eyebrow>
        <h2 className="mt-4 text-5xl md:text-6xl">Esto es lo que recibes con las fichas</h2>
        <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {["120 fichas visuales de mecánica de bicicletas.", "10 áreas, con 12 fichas por área.", "Material digital en PDF.", "Consulta desde celular, tablet y computadora.", "Posibilidad de imprimir las fichas.", "Acceso después de la confirmación del pago."].map((x) => (
            <div key={x} className="flex items-center gap-3 rounded-lg border bg-card p-4"><Check className="h-5 w-5 shrink-0 text-primary" />{x}</div>
          ))}
        </div>
        <div className="mt-10"><CTA>Quiero acceder a las 120 fichas</CTA></div>
      </section>

      {/* BONUSES */}
      <section className="bg-hero border-y py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center"><Eyebrow>Acceso completo</Eyebrow>
            <h2 className="mt-4 text-5xl md:text-6xl">También recibes estos <span className="text-accent">5 bonos</span></h2>
            <p className="mt-4 text-muted-foreground">Complementa tu material de consulta y organiza mejor las tareas de revisión.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {bonuses.map(([t, d], i) => (
              <div key={t} className="rounded-xl border border-accent/30 bg-card p-6">
                <div className="flex items-center gap-2 text-accent"><Gift className="h-5 w-5" /><span className="font-display text-xl tracking-wider">Bono {i + 1}</span></div>
                <h3 className="mt-3 text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center font-semibold text-accent">Los 5 bonos están incluidos en el Acceso Completo.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center"><Eyebrow>Opiniones</Eyebrow><h2 className="mt-4 text-5xl md:text-6xl">Opiniones de compradores</h2></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-xl border border-dashed bg-card p-6">
              <div className="flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 italic text-muted-foreground">[Testimonio real del comprador {n}]</p>
              <p className="mt-4 text-sm font-semibold">— [Nombre]</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" className="border-t bg-card/50 py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center"><Eyebrow>Precios</Eyebrow><h2 className="mt-4 text-5xl md:text-7xl">Elige tu acceso</h2></div>
          <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
            <div className="flex flex-col rounded-2xl border bg-background p-8">
              <p className="font-display text-xl tracking-widest text-muted-foreground">Acceso Esencial</p>
              <h3 className="mt-2 text-3xl">120 Fichas Visuales</h3>
              <p className="mt-2 text-sm text-muted-foreground">Una opción para tener el material principal de consulta.</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {["120 fichas visuales en 10 áreas.", "Material digital en PDF.", "Celular, tablet y computadora.", "Posibilidad de imprimir.", "Acceso tras confirmar el pago.", "Garantía de 7 días."].map((x) => (
                  <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-success" />{x}</li>))}
              </ul>
              <div className="mt-8 font-display text-5xl">[PRECIO]</div>
              <p className="text-sm text-muted-foreground">Pago único.</p>
              <a href="#" className="mt-6 inline-flex justify-center rounded-lg border-2 border-primary px-6 py-4 font-display text-xl tracking-wider text-primary transition-colors hover:bg-primary hover:text-primary-foreground">Quiero el acceso esencial</a>
              <Trust />
            </div>
            <div className="relative flex flex-col rounded-2xl border-2 border-primary bg-background p-8 shadow-glow">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 font-display text-lg tracking-widest text-accent-foreground">Más elegido</span>
              <p className="font-display text-xl tracking-widest text-primary">Acceso Completo</p>
              <h3 className="mt-2 text-3xl">120 Fichas + 5 Bonos</h3>
              <p className="mt-2 text-sm text-muted-foreground">Para ampliar tu material de consulta y organizar tus revisiones.</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {["Todo lo del Acceso Esencial.", "Listas de inspección.", "Guía visual de herramientas.", "Tabla de mantenimiento preventivo.", "Guía de síntomas y posibles causas.", "Fichas de registro para el taller.", "Garantía de 7 días."].map((x) => (
                  <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />{x}</li>))}
              </ul>
              <div className="mt-8 font-display text-5xl text-primary">[PRECIO]</div>
              <p className="text-sm text-muted-foreground">Pago único.</p>
              <a href="#" className="btn-cta mt-6">Quiero las 120 fichas + 5 bonos</a>
              <Trust />
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="flex flex-col items-center gap-8 rounded-2xl border bg-card p-10 text-center md:flex-row md:text-left">
          <div className="grid h-32 w-32 shrink-0 place-items-center rounded-full border-4 border-accent text-accent">
            <div className="text-center"><ShieldCheck className="mx-auto h-8 w-8" /><div className="font-display text-3xl">7 días</div></div>
          </div>
          <div>
            <h2 className="text-5xl">Tienes 7 días de garantía</h2>
            <p className="mt-3 text-muted-foreground">Accede al material, revisa las fichas y comprueba si se ajustan a lo que buscas. Si durante los primeros 7 días consideras que el producto no es para ti, puedes solicitar el reembolso.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="text-center"><Eyebrow>Dudas</Eyebrow><h2 className="mt-4 text-5xl md:text-6xl">Preguntas frecuentes</h2></div>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-lg border bg-card p-5 open:border-primary">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q}<ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-hero relative border-t">
        <div className="bg-grid absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center">
          <h2 className="text-5xl md:text-7xl">Ten una referencia visual para tu <span className="text-primary">próxima revisión</span></h2>
          <p className="mt-5 text-muted-foreground">Consulta síntomas, repasa posibles causas e identifica qué comprobar primero con las 120 Fichas Visuales de Mecánica de Bicicletas.</p>
          <div className="mt-8"><CTA>Quiero acceder a las 120 fichas</CTA></div>
          <p className="mt-4 text-sm text-muted-foreground">Material digital · Pago único · Garantía de 7 días</p>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">
        <p className="font-display text-xl tracking-wider text-foreground">120 Fichas Visuales de Mecánica de Bicicletas</p>
        <p className="mt-1">Material digital de apoyo para estudio, diagnóstico, mantenimiento y consulta.</p>
        <p className="mt-4">© 2026. Todos los derechos reservados. · Política de privacidad · Términos de uso</p>
        <p className="mt-1">Contacto: [CONTACTO DE SOPORTE]</p>
      </footer>
      <div className="bg-stripes h-2" />
    </main>
  );
}
