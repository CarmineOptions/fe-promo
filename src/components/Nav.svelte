<script>
  import Docs from "./Social/Docs.svelte";
  import Twitter from "./Social/Twitter.svelte";
  import Github from "./Social/Github.svelte";
  import Discord from "./Social/Discord.svelte";
  import NewWindow from "./Social/NewWindow.svelte";
</script>

<nav
  class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
  style="--bs-bg-opacity: 0.9"
>
  <div class="container">
    <a class="navbar-brand" href="#top">
      <img
        src="android-chrome-192x192.png"
        alt="carmine logo"
        width="24"
        height="24"
        class="d-inline-block align-text-top"
      />
      Carmine Options
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="#traders">Traders</a>
        <a class="nav-link" href="#investors">Investors</a>
        <a class="nav-link" href="#timeline">Timeline</a>
        <a class="nav-link" href="#team">Team</a>
        <a class="nav-link" href="#faq">FAQ</a>
        <a
          class="nav-link"
          target="_blank"
          href="https://carmine-finance.gitbook.io/carmine-options-amm/"
          ><span>Docs&nbsp;<NewWindow /></span></a
        >
        <hr class="dropdown-divider" />
        <div class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <b>Links</b>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a
                class="dropdown-item"
                href="https://carmine-finance.gitbook.io/carmine-options-amm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Docs />
              </a>
            </li>

            <li>
              <a
                class="dropdown-item"
                href="https://discord.gg/uRs7j8w3bX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Discord />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/CarmineOptions"
                target="_blank"
                rel="noopener noreferrer"
                class="dropdown-item"
              >
                <Github />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/CarmineOptions"
                target="_blank"
                rel="noopener noreferrer"
                class="dropdown-item"
              >
                <Twitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
