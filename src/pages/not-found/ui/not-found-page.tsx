export function NotFoundPage() {
  return (
    <main className="bg-paper grid min-h-screen place-items-center px-6 py-16">
      <section className="max-w-lg text-center">
        <p className="text-sea text-sm font-semibold tracking-[0.25em] uppercase">
          404
        </p>
        <h1 className="text-ink mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The page you requested does not exist in the Greek Cheatsheet.
        </p>
        <a
          className="bg-sea focus-visible:outline-sea mt-8 inline-flex rounded-full px-6 py-3 font-semibold text-white transition hover:bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4"
          href="/"
        >
          Return home
        </a>
      </section>
    </main>
  );
}
