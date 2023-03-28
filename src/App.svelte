<script>
   // @ts-nocheck
   import Button from "./components/Button.svelte";
   import Header from "./components/Header.svelte";
   import Heading from "./components/Heading.svelte";
   import Modal from "./components/Modal.svelte";
   import LINKTREE from "./consts";
   import setModal from "./stores/modal";
   import { GoogleAnalytics } from "@beyonk/svelte-google-analytics";

   const GA = import.meta.env.VITE_GA_ID;
</script>

<GoogleAnalytics properties={[GA]} />

<main>
   <Header />
   <Heading />

   <div class="flex flex-col">
      <span class="uppercase my-4 font-normal text-base">useful links</span>
      <div class="flex flex-col w-11/12 lg:w-3/5 mx-auto mb-12">
         {#each LINKTREE.links.primarys as btn}
            <Button type={btn.type} href={btn.link} primary>
               <span class="text-sm lg:text-base">{btn.text}</span>
            </Button>
         {/each}
      </div>
   </div>

   {#if $setModal}
      <Modal />
   {/if}

   <footer class="absolute inset-x-0 bottom-0 my-3 mx-4">
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
