<script>
   import { writable } from "svelte/store";
   import setModal from "../stores/modal";
   import Share from "./Icons/Share.svelte";

   let isTop = writable(false);
   const handleModal = () => setModal.set(!$setModal);

   if (typeof window !== "undefined") {
      window.addEventListener("scroll", function () {
         window.scrollY > 0 ? isTop.set(true) : isTop.set(false);
      });
   }
</script>

<header class:istop={$isTop}>
   {#if $isTop}
      <img
         src="/jeferson.webp"
         alt="logo"
         width="50"
         height="50"
         class="rounded-full"
      />
      <img
         src="text.webp"
         alt="jeferson barrero"
         class="md:flex hidden"
         width="200px"
      />
   {/if}
   <button
      class="btn-share"
      class:active={$isTop}
      on:click={handleModal}
      aria-label="share"
   >
      <Share width="60" height="60" color={$isTop ? "#ffffff" : "#000000"} />
   </button>
</header>

<style>
   header {
      @apply absolute inset-0 max-w-5xl h-20 z-50 flex items-center p-3 rounded-full justify-end ease-in;
      transition: background-color 150ms ease 0s,
         -webkit-transform 150ms ease 0s, -webkit-backdrop-filter 150ms ease 0s;
      transition-duration: 150ms, 150ms, 150ms;
      transition-property: background-color, -webkit-transform,
         -webkit-backdrop-filter;
   }

   .istop {
      @apply fixed justify-between bg-[#ffffff80] backdrop-blur-md mx-auto my-3 max-w-4xl shadow-xl border-2 border-white;
      animation: blur-in 0.3s linear both;
   }
   .btn-share {
      @apply w-11 h-11 p-3 flex justify-center items-center rounded-full;
      background: rgba(255, 255, 255, 0.5);
   }
   .active {
      @apply bg-primary;
   }

   @keyframes blur-in {
      0% {
         filter: blur(12px);
         opacity: 0;
      }
      100% {
         filter: blur(0);
         opacity: 1;
      }
   }
</style>
