import "./GitHubStats.css";

function GitHubStats() {
  return (
    <section className="github-stats">

      <h1>GitHub Stats</h1>

      <div className="stats-container">

        <img
          src="https://github-readme-stats.vercel.app/api?username=nagaratnakarmandadi&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=nagaratnakarmandadi&theme=tokyonight"
          alt="GitHub Streak"
        />

      </div>

    </section>
  );
}

export default GitHubStats;