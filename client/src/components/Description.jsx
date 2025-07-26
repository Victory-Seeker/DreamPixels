import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (

    <motion.div 

    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}

    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>

      <h1 className='text-3xl sm:text-4xl'>Generate AI Images</h1>
      <p className='text-gray-500 mb-8'>Bring Creative Vision to Life</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>

        <img src={assets.sample_img_1} alt='' className='w-80 xl:w-96 rounded-lg' />

              <div>
                  <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing DreamPixels — Your Ultimate AI-Powered Text-to-Image Generator</h2>
                  <p className='text-gray-600 mb-4'>
                  Bring your ideas to life in moments using our free AI-powered image generator. Simply describe what you imagine, and watch it transform into striking visuals—fast and effortlessly.
                  </p>
                  <p className='text-gray-600 mb-4'>
                  Enter a text prompt and let our powerful AI turn it into high-resolution images instantly. Whether it's product concepts, portraits, or unreal creations, explore endless creativity with the magic of AI.
                  </p>
              </div>
              
      </div>
    </motion.div>
  )
}

export default Description