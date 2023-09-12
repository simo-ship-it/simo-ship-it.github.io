<script>
  import "../styles/global.css";
  import "../app.css";
  import logo from "../images/logo.svg"
  
</script>

<nav>
  <div class="mx-auto px-3 md:px-10 xl:px-20 flex justify-between items-center border-b-4 border-red-900 pb-4  pt-4">
    <img class=" w-10 md:w-16 " src={logo} alt=" icon"/>
    <div class="">
      <ul class="inline-flex">
        <li><a class="px-10 text-lg hidden md:block " href="/about">chi sono</a></li>
        <li><a class="px-10 text-lg hidden md:block " href="/about">esperienza</a></li>
        <li><a class="px-10 pr-20 text-lg hidden md:block " href="/about">lavori</a></li>
      
        <div class="text-xs md:text-lg font-bold bg-clip-border  ">

        <li><a class="py-3 px-4 md:py-4 md:px-6 bg-salmone  border-red-900  border-b-4 rounded-full" href="/about" >contattami</a></li>
        
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
