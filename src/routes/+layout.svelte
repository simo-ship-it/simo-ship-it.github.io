<script>
  import "../styles/global.css";
  import "../app.css";
  import { base } from '$app/paths';
  import logo from "../images/logo.svg"
  
</script>

<nav>
  <div class="mx-auto px-3 md:px-5 xl:px-20 justify-between items-center border-b-4 border-red-900 pb-4  pt-4 flex ">
    <img class=" w-10 md:w-16 hover:scale-110 transition delay-100 duration-200" src={logo} alt=" icon"/>
    <div class="">
      <!-- pulsanti -->

      <ul class="inline-flex">

        <div class="px-6 my-auto ">
          <li><a class="py-1 px-4 text-lg hidden md:block transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 border-orange-600/0 hover:border-orange-600/100 border-b-4 rounded-full duration-200" href="{base}/about">chi sono</a></li>
        </div>

        <div class="px-6 my-auto ">
          <li><a class="py-1 px-4 text-lg hidden md:block transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 border-orange-600/0 hover:border-orange-600/100 border-b-4 rounded-full duration-200" href="{base}/about">esperienza</a></li>
        </div>

        <div class="px-6 my-auto ">
          <li><a class="py-1 px-4 text-lg hidden md:block transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-200 border-orange-600/0 hover:border-orange-600/100 border-b-4 rounded-full duration-200" href="{base}/about">lavori</a></li>
        </div>
      
        <div class="pl-6 my-auto ">
          <li><a class="py-2 px-4 text-lg font-semibold hidden md:block bg-salmone border-red-900 border-b-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 hover:border-orange-700 rounded-full duration-200" href="{base}/about">contattami</a></li>
        </div>

      </ul>
    </div>
  </div>
  
</nav>

<main>
  <slot />
</main>

<div class="object-center">
  <footer class="object-center">
    <p></p>
  </footer>
</div>

<style>
</style>
