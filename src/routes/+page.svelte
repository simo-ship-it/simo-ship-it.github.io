<script>
import "../app.css";
import { base } from '$app/paths';

import io from "../images/simone-billeri-home.svg"
import ioSquare from "../images/simone-billeri-home-square.svg"
import sfondo from "../images/background.svg"
</script>



 
<div class="mx-auto md:flex px-5  max-w-xl md:max-w-6xl pt-16 md:pt-32  items-center">
<div class="mx-auto md:w-2/3 md:mr-4 font-mono text-base">

    <div class="md:hidden bg-rosa border-b-4 border-red-900 rounded-2xl max-w-md mx-auto p-4 pt-6">
        <div class="flex justify-between">
            <div>
                <p class="text-3xl pt-0 font-bold text-rosso">
                    Simone 
                </p>

                <p class="text-2xl mt-2 font-light text-rosso-2 ">
                    informatico
                </p>
                <div class="mt-8">
                    <a class="py-2 px-4 text-sm font-semibold text-rosso bg-salmone border-red-900 border-b-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-orange-300 hover:border-orange-700 rounded-full duration-200" href="{base}/about">contattami</a>
                </div>
            </div>
        
                <img src={ioSquare} alt="simone billeri" class= "w-32 -mt-16"/>
        </div>

    </div>


    <div class="hidden md:block">
        <p class="text-lg pb-4 font-bold text-rosa-pelle">
            ciao
        </p>
        <p class="text-7xl  pb-4 font-semibold text-rosso ">
            Mi chiamo Simone 
        </p>
        <p class="text-3xl font-light text-left text-rosso">
            sono un informatico
        </p>
    </div>

    <p class="text-gray-600 font-noraml text-sm md:text-base pt-10 max-w-md md:max-w-full mx-auto px-2 md:px-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, debitis. Odio, suscipit nihil quia quod delectus saepe sapiente doloribus exercitationem laboriosam est adipisci velit vero nostrum corrupti excepturi culpa optio. </p>


    
</div>


<div class="md:w-1/3 pt-0 mx-auto w-40 hidden md:block max-w-lg">
    <img src={io} alt="simone billeri" class= "drop-shadow-2xl "/>
</div>
</div>

<img src={sfondo} alt="sfondo" class= "pt-16 px-5 mx-auto -mb-10  max-w-md md:max-w-3xl"/>
<div class="bg-orange-200">
    <pre>

    </pre>
</div>


