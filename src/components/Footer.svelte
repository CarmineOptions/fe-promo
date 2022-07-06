<script>
  import Docs from "./Social/Docs.svelte";
  import Twitter from "./Social/Twitter.svelte";
  import Github from "./Social/Github.svelte";
  import Discord from "./Social/Discord.svelte";
</script>

<footer class="bg-dark text-white" style="--bs-bg-opacity: 0.9">
  <div class="container py-5">
    <div class="d-flex justify-content-evenly">
      <div>
        <h4>Carmine Finance</h4>
        <p>Technology of tommorow, today!</p>
      </div>
      <div>
        <div class="d-flex flex-column">
          <a
            href="https://carmine-finance.gitbook.io/carmine-options-amm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Docs />
          </a>

          <a
            href="https://discord.gg/uRs7j8w3bX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Discord />
          </a>

          <a
            href="https://github.com/CarmineOptions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>

          <a
            href="https://twitter.com/CarmineOptions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  </div>
  <p class="text-center text-white-50 pb-2">
    Carmine Finance© All Rights Reserved 2022.
  </p>
</footer>
