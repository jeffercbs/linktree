<script>
   import { blur } from "svelte/transition";
   import returnLink from "../lib/returnLink";
   import setModal from "../stores/modal";
   import Button from "./Button.svelte";
   import Pinterest from "./Icons/Pinterest.svelte";
   import Clipboard from "./Icons/Clipboard.svelte";
   import Twitter from "./Icons/Twitter.svelte";
   import XCircle from "./Icons/XCircle.svelte";
   import Linkedin from "./Icons/Linkedin.svelte";
   import Reddit from "./Icons/Reddit.svelte";
   import Facebook from "./Icons/Facebook.svelte";

   const handleModal = () => setModal.set(!$setModal);

   const copy = () => {
      navigator.clipboard
         .writeText(returnLink())
         .catch(() => console.error("Error copying link"));
   };
</script>

<div class="modal-overlay">
   <div class="modal" transition:blur={{ amount: 0 }}>
      <div class="header border-b-2 border-b-gray-400">
         <span class="font-bold uppercase">Share Linktree</span>
         <button on:click={handleModal}>
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
                  <small class="text-primary text-sm mt-2">Twitter</small>
               </svelte:fragment>
            </Button>

            <Button href={returnLink("facebook")} type="icon">
               <svelte:fragment>
                  <span class="content">
                     <Facebook width="35" height="35" color="#3b5998" />
                  </span>
                  <small class="text-primary text-sm mt-2">Facebook</small>
               </svelte:fragment>
            </Button>

            <Button href={returnLink("linkedin")} type="icon">
               <svelte:fragment>
                  <span class="content">
                     <Linkedin width="35" height="35" color="#0077b5" />
                  </span>
                  <small class="text-primary text-sm mt-2">Linkedin</small>
               </svelte:fragment>
            </Button>

            <Button href={returnLink("pinterest")} type="icon">
               <svelte:fragment>
                  <span class="content">
                     <Pinterest width="35" height="35" color="#CB1F27" />
                  </span>
                  <small class="text-primary text-sm mt-2">Pinterest</small>
               </svelte:fragment>
            </Button>

            <Button href={returnLink("reddit")} type="icon">
               <svelte:fragment>
                  <span class="content">
                     <Reddit width="35" height="35" />
                  </span>
                  <small class="text-primary text-sm mt-2">Reddit</small>
               </svelte:fragment>
            </Button>
         </div>

         <div class="clipboard">
            <input type="text" value={returnLink()} disabled />
            <button value="copy" on:click={copy}>
               <Clipboard width="20px" height="20px" />
            </button>
         </div>
      </div>
   </div>
</div>

<style>
   .modal-overlay {
      @apply fixed inset-0 backdrop-blur-md z-50 flex justify-center items-center;
      background: rgba(0, 0, 0, 0.5);
   }
   .modal {
      @apply bg-white md:w-[500px] w-full h-auto md:h-80 rounded-3xl overflow-hidden px-8 py-4 m-4;
   }
   .modal .header {
      @apply h-[10px] flex justify-between items-center py-6;
   }
   .buttons {
      @apply flex gap-4 md:gap-4 h-full flex-wrap text-center md:mt-3 justify-center items-center;
   }
   .clipboard {
      @apply flex gap-3 py-5;
   }
   .clipboard input {
      @apply flex-1 px-5 py-2 rounded-xl border-2 border-gray-300 text-sm;
      font-family: "poppins", sans-serif;
   }
   .clipboard input:disabled {
      @apply bg-gray-100;
   }
   .clipboard button {
      @apply flex w-10 items-center border-2 border-gray-300 p-2 font-bold rounded-xl gap-3 animate-bounce;
      font-family: "poppins", sans-serif;
   }
</style>
