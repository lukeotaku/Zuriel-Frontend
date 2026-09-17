"use client";

import { useState } from "react";

export default function Home() {
  const [cliques, setCliques] = useState(0);

  return (
    <main className="grid min-h-screen place-items-center bg-base-200 p-6">
      <section className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body gap-6">
          <span className="badge badge-primary">Meu primeiro projeto</span>

          <h1 className="text-3xl font-bold">Meu site está funcionando!</h1>

          <p className="text-base-content/70">
            Feito com Next.js, Tailwind CSS e daisyUI.
          </p>

          <p aria-live="polite">Você clicou {cliques} vez(es).</p>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setCliques(cliques + 1)}
          >
            Clique aqui
          </button>
        </div>
      </section>
    </main>
  );
}
