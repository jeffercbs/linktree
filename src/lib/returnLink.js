import LINKTREE from "../consts";

const user = LINKTREE.user;

function returnLink(social) {
   let baseUrl = encodeURIComponent(user.url);
   let desc = encodeURIComponent(user.desc);
   let image = encodeURIComponent(user.avatar);
   let url = "";

   switch (social) {
      case "facebook":
         url = `www.facebook.com/sharer/sharer.php?u=${baseUrl}`;
         break;
      case "twitter":
         url = `twitter.com/intent/tweet?text=${desc}&url=${baseUrl}`;
         break;
      case "linkedin":
         url = `www.linkedin.com/shareArticle?mini=true&url=${baseUrl}`;
         break;
      case "pinterest":
         url = `pinterest.com/pin/create/button/?url=${baseUrl}&media=${image}&description=${desc}`;
         break;
      case "reddit":
         url = `www.reddit.com/submit?url=${baseUrl}&title=${desc}`;
         break;
      default:
         url = user.url;
   }

   return url;
}
export default returnLink;
