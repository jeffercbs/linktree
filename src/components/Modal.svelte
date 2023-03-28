<script>
   import { blur } from "svelte/transition";
   import returnLink from "../lib/returnLink";
   import { handledOpenModal } from "../stores";
   import Button from "./Button.svelte";
   import Clipboard from "./Icons/Clipboard.svelte";
   import Facebook from "./Icons/Facebook.svelte";
   import Linkedin from "./Icons/Linkedin.svelte";
   import Pinterest from "./Icons/Pinterest.svelte";
   import Reddit from "./Icons/Reddit.svelte";
   import Twitter from "./Icons/Twitter.svelte";
   import XCircle from "./Icons/XCircle.svelte";
   import { writable } from "svelte/store";

   const msgCopy = writable(false);

   const copy = () => {
      navigator.clipboard
         .writeText(returnLink())
         .catch(() => console.error("Error copying link"));

      msgCopy.set(true);
      setTimeout(() => {
         msgCopy.set(false);
      }, 2000);
   };
</script>

<div class="modal-overlay">
   <div class="modal" transition:blur={{ amount: 0 }}>
      <div class="header flex">
         <span class="font-extrabold capitalize flex-1">Share Linktree</span>
         <button on:click={handledOpenModal} class="w-8">
            <XCircle width="30" height="30" />
         </button>
      </div>

      <div class="md:my-12 my-8">
         <div class="buttons">
            <Button href={returnLink("twitter")} type="icon">
               <svelte:fragment>
                  <span class="content">
                     <Twitter width="35" height="35" color="#1D9BF0" />
                  </span>
                  <small class="text-white text-sm mt-2">Twitter</small>
               </svelte:fragment>
            </Button>

            <Button href={returnLink("facebook")} type="icon">
               <svelte:fragment>
                  <span class="content">
                     <Facebook width="35" height="35" color="#3b5998" />
                  </span>
                  <small class="text-white text-sm mt-2">Facebook</small>
               </svelte:fragment>
            </Button>

            <Button href={returnLink("linkedin")} type="icon">
               <svelte:fragment>
                  <span class="content">
                     <Linkedin width="35" height="35" color="#0077b5" />
                  </span>
                  <small class="text-white text-sm mt-2">Linkedin</small>
               </svelte:fragment>
            </Button>

            <Button href={returnLink("pinterest")} type="icon">
               <svelte:fragment>
                  <span class="content">
                     <Pinterest width="35" height="35" color="#CB1F27" />
                  </span>
                  <small class="text-white text-sm mt-2">Pinterest</small>
               </svelte:fragment>
            </Button>

            <Button href={returnLink("reddit")} type="icon">
               <svelte:fragment>
                  <span class="content">
                     <Reddit width="35" height="35" />
                  </span>
                  <small class="text-white text-sm mt-2">Reddit</small>
               </svelte:fragment>
            </Button>
         </div>

         <div class="clipboard">
            <div class="flex flex-col flex-1">
               <input type="text" value={returnLink()} disabled />
               {#if $msgCopy}
                  <span
                     transition:blur={{ amount: 0 }}
                     class="text-sm text-white mt-2">👍 Link copied!</span
                  >
               {/if}
            </div>
            <button value="copy" on:click={copy}>
               <Clipboard width="20px" height="20px" />
            </button>
         </div>
      </div>
   </div>
</div>

<style>
   .modal-overlay {
      @apply fixed inset-0 z-50 flex justify-center items-center bg-black/50;
      backdrop-filter: blur(19px);
   }
   .modal {
      @apply border-[1px] border-white/30 text-white md:w-[500px] w-full h-auto md:h-80 rounded-3xl overflow-hidden px-8 py-4 m-4 shadow-md;
      background: var(--gradient);
   }
   .modal .header {
      @apply h-[10px] flex justify-between  pt-6;
   }
   .buttons {
      @apply flex gap-4 md:gap-4 h-full flex-wrap text-center md:my-7 justify-center items-center;
   }
   .clipboard {
      @apply flex gap-3 py-5;
   }
   .clipboard input {
      @apply w-full md:px-5 px-2 py-3 rounded-xl border-2 border-gray-400 text-sm disabled:bg-transparent;
      font-family: "poppins", sans-serif;
   }
   .clipboard button {
      @apply flex w-10 h-12 items-center border-2 border-gray-400 p-2 font-bold rounded-xl gap-3 animate-bounce;
      font-family: "poppins", sans-serif;
   }
</style>
