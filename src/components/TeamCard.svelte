<script>
  import ProfilePic from "./TeamMemberProfilePic.svelte";
  export let name;
  export let role;
  export let description;
  export let right;
  export let imageSrc;
</script>

<div
  class="card mb-3 cstm-card shadow p-3 mb-5 bg-body rounded {right
    ? 'cstm-right'
    : ''}"
>
  <div class="row g-0 mb-2">
    <ProfilePic {imageSrc} />
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <h6 class="card-title">{role}</h6>
        <p class="card-text">
          {description}
        </p>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../node_modules/bootstrap/scss/bootstrap.scss";
  $middle: map-get($grid-breakpoints, md);

  .cstm-card {
    align-self: flex-start;
    @media screen and (min-width: $middle) {
      max-width: 60%;
    }
    &.cstm-right {
      align-self: flex-end;
    }
  }
</style>
