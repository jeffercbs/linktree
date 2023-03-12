<script>
   import Button from "./Button.svelte";
   import LINKTREE from "../consts";
   import Github from "./Icons/Github.svelte";
   import Linkedin from "./Icons/Linkedin.svelte";
   import Instagram from "./Icons/Instagram.svelte";
   import Youtube from "./Icons/Youtube.svelte";

   const { social } = LINKTREE.links;
</script>

<div class="social-links">
   <Button href={social.github} type="icon">
      <Github width="50" height="50" color="black" />
   </Button>
   <Button href={social.linkedin} type="icon">
      <Linkedin width="50" height="50" color="black" />
   </Button>
   <Button href={social.instagram} type="icon">
      <Instagram width="50" height="50" color="black" />
   </Button>
   <Button href={social.youtube} type="icon">
      <Youtube width="50" height="50" color="black" />
   </Button>
</div>

<style>
   .social-links {
      @apply lg:justify-start justify-center;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: 50px;
   }
</style>
