<script>
   export let color = "none";
   export let width = "1em";
   export let height = "1em";
</script>

<svg
   xmlns="http://www.w3.org/2000/svg"
   {width}
   {height}
   viewBox="0 0 24 24"
   fill={color}
   stroke="currentColor"
   stroke-width="2"
   stroke-linecap="round"
   stroke-linejoin="round"
>
   <circle cx="12" cy="12" r="10" />
   <line x1="15" y1="9" x2="9" y2="15" />
   <line x1="9" y1="9" x2="15" y2="15" />
</svg>
