<script>
  import { faqs } from "../content";
</script>

<div class="container">
  <h2 class="p-3">Frequently Asked Questions</h2>

  <div class="accordion" id="accordionFAQ">
    {#each faqs as faq, index}
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading{index}">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse{index}"
            aria-expanded="false"
            aria-controls="collapse{index}"
          >
            {faq.question}
          </button>
        </h2>
        <div
          id="collapse{index}"
          class="accordion-collapse collapse"
          aria-labelledby="heading{index}"
          data-bs-parent="#accordionFAQ"
        >
          <div class="accordion-body">
            {faq.answer}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
