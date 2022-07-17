document.querySelector("html").hidden = true;
document.body.classList = "min-h-screen bg-purple-800";
let app_div = document.createElement("div");
app_div.id="app";
app_div.innerHTML = `<div
class="min-h-screen bg-gradient-to-b from-red-500 to-purple-800"
>
<div
  id="navbar"
  class="hidden sticky top-0 z-50 rounded-b-2xl bg-purple-800"
>
  <div class="container mx-auto px-4 py-4 lg:py-6">
    <div class="flex">
      <p
        id="nav-title"
        class="text-white text-2xl lg:text-4xl font-bold text-center"
      >
        Ree.js
      </p>
    </div>
  </div>
</div>
<div class="px-4 lg:px-60 pt-8 align-middle">
  <div class="text-white text-center pt-32 lg:pt-48">
    <h1 class="font-bold text-5xl lg:text-8xl">
      Level Up Your Site
    </h1>
    <p class="mt-4 font-bold lg:text-6xl">With Ree.js {{ message }}</p>
  </div>
</div>
</div>
<div class="px-4 lg:px-16 pt-8">
<div class="text-white">
  <h1 class="font-bold text-3xl lg:text-6xl">
    Forget About Building
  </h1>
  <div class="grid lg:grid-cols-3">
    <p class="lg:col-span-2 mt-4 font-light lg:mr-32 lg:text-2xl">
      With Ree.js, you don't waste time building the optimized site.
    </p>
  </div>
  <h1 class="mt-8 font-bold text-3xl lg:text-6xl">
    Bundled with Hybrid Web Server
  </h1>
  <div class="grid lg:grid-cols-3">
    <p class="lg:col-span-2 mt-4 font-light lg:mr-32 lg:text-2xl">
      Ree.js measures Lighthouse performance and decides which method
      will perform faster and will cost less resources.
    </p>
  </div>
  <h1 class="mt-8 font-bold text-3xl lg:text-6xl">
    A Powerful Toolkit that is just fast enough
  </h1>
  <div class="grid lg:grid-cols-3">
    <p class="lg:col-span-2 mt-4 font-light lg:mr-32 lg:text-2xl">
      Ree.js Toolkit bundles your frontend project to be used inside a
      non-nodejs project! Now enjoy building frontends with other
      languages like python, rust, C++ and much more!
    </p>
  </div>
  <!-- footer -->
  <div class="mt-8">
    <div class="flex justify-center">
      <span class="text-white font-medium">Work In Progress! <a href="https://dscrdly.com/server" class="text-pink-500 underline-pink-500">Join our server to keep yourself updated!</a></span>
    </div>
    </div>
</div>
</div>`;
document.body.appendChild(app_div);
import("twind/shim/shim.js").then(() => {
});
import { createApp } from 'vue'

  createApp({
    data() {
      return {
        message: '& Vue.js !'
      }
    }
  }).mount('#app')