<script>
   export let primary = false;
   export let type;
   export let href;
</script>

<a
   href={`https://${href}`}
   class={`btn ${type === "icon" ? "icon" : "text"} ${
      primary ? "bg-primary" : ""
   }`}
   target="_blank"
   aria-label={`This link redirect to ${href}`}
   rel="noopener noreferrer"
>
   {#if type !== "icon"}
      <span class="icon-hover">
         {#if type === "download"}
            <img
               src="/icons/download.svg"
               alt="download"
               width="20"
               height="20"
            />
         {:else}
            <img src="/icons/link.svg" alt="link" width="20" height="20" />
         {/if}
      </span>
   {/if}
   <slot />
</a>

<style>
   .btn {
      @apply relative text-white flex justify-center items-center my-2 font-semibold;
   }
   .icon-hover {
      @apply hidden justify-center items-center w-9 h-9 absolute -top-2 -right-2 bg-white rounded-full p-2;
   }
   .btn.text {
      @apply py-4 px-11 my-3 capitalize rounded-3xl;
   }
   .btn.icon {
      @apply flex-col w-12 h-12 p-3 rounded-full mx-2;
   }
   .btn:hover > .icon-hover {
      animation: scale-up-right 0.4s;
      display: flex;
   }
   .btn:hover {
      animation: vibrate 1.5s linear both;
   }

   @keyframes scale-up-right {
      0% {
         transform: scale(0.5);
         transform-origin: right center;
      }
      100% {
         transform: scale(1);
         transform-origin: right center;
      }
   }

   @keyframes vibrate {
      0% {
         transform: translate(0);
      }
      20% {
         transform: translate(-2px, 2px);
      }
      40% {
         transform: translate(-2px, -2px);
      }
      60% {
         transform: translate(2px, 2px);
      }
      80% {
         transform: translate(2px, -2px);
      }
      100% {
         transform: translate(0);
      }
   }
</style>
