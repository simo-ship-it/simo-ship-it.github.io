<script>
  import "../styles/global.css";
  import "../app.css";
  import logo from "../images/logo.svg"
  
</script>

<nav>
  <div class=" mx-auto px-5 lg:px-10 xl:px-20 flex justify-between items-center pt-6 border-b-4 border-red-900  pb-4  ">
    <img class=" w-8 lg:w-16 " src={logo} alt="download icon"/>
    <div class="">
      <ul class="inline-flex">
        <li><a class="px-10 text-lg hidden lg:block " href="/about">chi sono</a></li>
        <li><a class="px-10 text-lg hidden lg:block " href="/about">lavori</a></li>
        <li><a class="px-10 text-lg hidden lg:block " href="/about">esperienza</a></li>
      
        <div class="px-6 text-lg font-bold bg-clip-border  ">

        <li><a class=" py-4 px-6 bg-red-200  border-red-900  border-b-4 rounded-full" href="/about" >contattami</a></li>
        
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
