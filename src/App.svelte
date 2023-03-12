<script>
   import Button from "./components/Button.svelte";
   import Header from "./components/Header.svelte";
   import Modal from "./components/Modal.svelte";
   import Social from "./components/Social.svelte";
   import LINKTREE from "./consts";
   import setModal from "./stores/modal";

   const { desc } = LINKTREE.user;
</script>

<main>
   <Header />

   <div class="heading">
      <img src="/jeferson.webp" width="auto" alt="avatar" class="avatar" />

      <div class="flex flex-col lg:items-start items-center lg:text-left">
         <img src="/text.webp" width="320" alt="Jeferson Barrero" />
         <p class="text-lg leading-tight font-medium">{desc}</p>
         <Social />
      </div>
   </div>

   <div class="flex flex-col w-11/12 lg:w-3/5 mx-auto mb-12">
      {#each LINKTREE.links.primarys as btn}
         <Button type={btn.type} href={btn.link} primary>
            <span class="text-sm lg:text-base">{btn.text}</span>
         </Button>
      {/each}
   </div>

   {#if $setModal}
      <Modal />
   {/if}

   <footer class="absolute inset-x-0 bottom-0 my-3">
      <small class="font-medium leading-tight">
         &copy; Hello world, this project is Open Source created by <a
            href="http://github.com/jeffercbs"
            target="_blank"
            class="font-extrabold"
            rel="noopener noreferrer">@jeffercbs</a
         >
      </small>
   </footer>
</main>

<style>
   .heading {
      @apply flex lg:flex-row flex-col items-center gap-4 lg:gap-8 max-w-3xl mx-auto py-8 mt-12;
   }
   .avatar {
      @apply rounded-full border-2 lg:w-36 w-40 border-white object-fill;
   }
</style>
