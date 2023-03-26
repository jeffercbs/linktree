<script>
   import isTop from "../stores/isTop";
   import setModal from "../stores/modal";
   import Share from "./Icons/Share.svelte";
   import { onDestroy, onMount } from "svelte";

   const handleModal = () => setModal.set(!$setModal);
   onMount(() => {
      const onScroll = () => {
         window.scrollY > 100 ? isTop.set(true) : isTop.set(false);
      };

      window.addEventListener("scroll", onScroll);
      onScroll();
      onDestroy(() => {
         window.removeEventListener("scroll", onScroll);
      });
   });
</script>

<header class:istop={$isTop}>
   {#if $isTop}
      <img
         src="/jeffercbs.png"
         alt="logo"
         width="50"
         height="50"
         class="rounded-full"
      />
      <p class="md:flex hidden font-extrabold text-3xl capitalize">linktree</p>
   {/if}
   <button
      class="btn-share"
      class:active={$isTop}
      on:click={handleModal}
      aria-label="share linktree"
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
      @apply fixed justify-between bg-black/30 backdrop-blur-md backdrop-saturate-150  mx-auto my-3 max-w-4xl shadow-xl border-[1px] border-white/20;
      animation: blur-in 0.3s linear both;
   }
   .btn-share {
      @apply w-11 h-11 p-3 flex justify-center items-center rounded-full bg-white/60 backdrop-blur-md backdrop-saturate-100;
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
