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

   <div class="subHeader">
      <img
         src="/jeferson.webp"
         width="140"
         height="140"
         alt="jeferson barrero"
         class="rounded-full border-2 border-white"
      />

      <div class="pt-8">
         <img src="/text.webp" width="320" class="mx-auto" alt="" />
         <p class="text-base font-medium">{desc}</p>
         <Social />
      </div>
   </div>

   <div class="flex flex-col w-11/12 lg:w-3/5 mx-auto mb-12">
      {#each LINKTREE.links.primarys as btn}
         <Button type={btn.type} href={btn.link} primary>
            <span>{btn.text}</span>
         </Button>
      {/each}
   </div>

   {#if $setModal}
      <Modal />
   {/if}

   <footer class="absolute inset-x-0 bottom-0 my-3">
      <small class="font-medium">
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
   .subHeader {
      @apply flex flex-col justify-center items-center text-center max-w-lg mx-auto my-5;
   }
</style>
