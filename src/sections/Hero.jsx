
import { Canvas } from "@react-three/fiber";
const Hero = () => {
  return (
   <section className='min-h-screen w-full flex flex-col relative'>

<div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>

    <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generatalsans">Hi I am Attiq
        <span className='Waving-hand'>👋</span>
    </p>
    <p className="hero_tag text-white ">Building Products & Brands</p>
</div>
<div className="w-full h-full absolute inset-0">
<canvas class></canvas>

</div>
   </section>
  )
}

export default Hero
