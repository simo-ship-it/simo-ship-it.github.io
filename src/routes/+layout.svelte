<script>
  import "../styles/global.css";
  import "../app.css";
  import logo from "../images/logo.svg"
</script>

<nav>
  <div class="container mx-auto px-10 py-2 flex justify-between items-center pt-20">
    <img class="max-w-micro" src={logo} alt="download icon"/>
    <div class=" lg:block ">
      <ul class="inline-flex">
        <li><a class="pl-20 text-xl lg:text-xl" href="/about">chi sono</a></li>
        <li><a class="pl-20 text-xl lg:text-xl" href="/about">lavori</a></li>
        <li><a class="pl-20 text-xl lg:text-xl" href="/about">esperienza</a></li>
        <li><a class="pl-20 text-xl lg:text-xl" href="/about">contattami</a></li>
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
