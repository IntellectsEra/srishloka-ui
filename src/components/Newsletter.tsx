export function Newsletter() {
  return (
    <section className="bg-forest-deep text-primary-foreground">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-2 md:items-end md:px-10">
        <div>
          <p className="eyebrow text-primary-foreground/70">The Sri Shloka Community</p>
          <h2 className="mt-5 text-4xl leading-[1.05] md:text-5xl">
            Festival calendars, fresh arrivals
            <br />
            and flower care notes.
          </h2>
        </div>
        <form
          className="flex flex-col gap-4 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Your email address"
            className="w-full border-b border-primary-foreground/40 bg-transparent pb-3 text-base text-primary-foreground placeholder:text-primary-foreground/55 focus:border-primary-foreground focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 border border-primary-foreground px-7 py-3 text-[0.7rem] tracking-[0.2em] uppercase transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
