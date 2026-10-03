export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Gaming community</p>
        <h1>eSports Wala</h1>
        <p className="lead">
          Discover tournaments, team rankings, player profiles, and community-driven
          esports action in one place.
        </p>
        <div className="cta-row">
          <button>Explore Tournaments</button>
          <button className="secondary">Join Community</button>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>120+</strong>
          <span>Teams</span>
        </div>
        <div>
          <strong>35</strong>
          <span>Tournaments</span>
        </div>
        <div>
          <strong>8k+</strong>
          <span>Players</span>
        </div>
      </section>
    </main>
  );
}
