import { writable } from "svelte/store";

const openModal = writable(false);

function handledOpenModal() {
   openModal.update((status) => !status);
}
export { openModal, handledOpenModal };
