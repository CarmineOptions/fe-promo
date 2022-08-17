<script>
  import TeamCard from "./TeamCard.svelte";
  import { team } from "../content";
</script>

<div class="container">
  <h2 class="p-3">Team</h2>

  <div class="d-flex flex-column">
    {#each team as member,index}
      <TeamCard
        name={member.name}
        role={member.role}
        description={member.description}
        imageSrc={member.imageSrc}
        right={index % 2}
      />
    {/each}
  </div>
</div>
