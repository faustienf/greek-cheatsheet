export function HomePage() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden px-6 py-16 sm:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(243,201,105,0.45),transparent_36%),linear-gradient(135deg,#fffdf8_0%,#f6f2e9_52%,#dff3f4_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 -z-10 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full border-[3rem] border-white/55 sm:h-96 sm:w-96"
      />

      <section className="mx-auto w-full max-w-5xl">
        <p className="text-sea mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase sm:text-sm">
          <span className="bg-sea/60 h-px w-10" />A practical Greek reference
        </p>

        <div className="max-w-3xl">
          <h1
            aria-label="Greek Cheatsheet"
            className="text-ink text-5xl leading-[0.95] font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-8xl"
          >
            Greek
            <span className="text-sea block">Cheatsheet</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            The first reference pages are being prepared. A clear, compact guide
            to Greek vocabulary and grammar is on its way.
          </p>
        </div>

        <footer className="mt-16 flex items-center gap-4 text-sm text-slate-500">
          <span className="bg-sun text-ink grid size-10 place-items-center rounded-full font-semibold">
            α
          </span>
          <span>Currently in development</span>
        </footer>
      </section>
    </main>
  );
}
