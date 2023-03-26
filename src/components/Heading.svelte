<script>
   import LINKTREE from "../consts";
   import Social from "./Social.svelte";

   const { desc } = LINKTREE.user;
</script>

<section class="heading relative md:mt-0 mt-10">
   <div class="relative flex md:flex-row flex-col gap-6">
      <figure class="relative w-full md:w-2/5 h-72">
         <img
            src="/jeffercbs.png"
            width={500}
            height={500}
            alt="avatar"
            class="avatar"
         />
      </figure>
      <div class="mt-8 flex-1 flex flex-col justify-center">
         <h1 class="title mx-auto">Jeferson Barrero</h1>
         <p class="lg:text-lg text-base font-medium relative pb-4">
            <span class="effect">
               <span class="relative text-black">Software Enginner</span>
            </span>
            <span> * {desc}</span>
         </p>
         <Social />
      </div>
   </div>
</section>

<style>
   .heading {
      @apply flex lg:flex-row flex-col items-center gap-4 lg:gap-8 lg:max-w-3xl mx-auto py-8 md:h-[500px] h-auto;
   }
   figure {
      @apply bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800 via-dark rounded-full;
   }
   .avatar {
      @apply object-cover md:rounded-full mx-auto w-full h-full;
   }
   .title {
      @apply uppercase text-3xl md:text-4xl mb-2 font-bold px-3;
   }
   .effect {
      @apply before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white relative inline-block;
   }
</style>
