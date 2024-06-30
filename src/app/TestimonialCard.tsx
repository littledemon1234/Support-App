import React from 'react';
import Girl from './assets/img.png'
import Girl2 from './assets/img (1).png'
import Boy from './assets/img (2).png'
import Girl3 from './assets/img (3).png'
import Boy2 from './assets/img (4).png'
import Boy3 from './assets/img (5).png'
import Image from 'next/image'
const TestimonialCard = () => {
  return (
    <>
      <div className='flex flex-col md:gap-[60px] md:items-center  gap-[20px]'>
        <div className='flex flex-col justify-center items-center '>
          <h1 className='text-[#0F2137] text-[30px] text-center font-bold pl-4 pr-6 md:pl-0 md:pr-0'>What client say about us</h1>
          <p className='text-[#858B91] text-[18px] underline'>Customer testimonial</p>
        </div>
        <div className='flex flex-col gap-4 xl:w-[1200px]   md:ml-[21px] ml-[21px]  mr-[21px] md:mr-[21px]'>

          <div>
            <div className='flex flex-col md:flex md:flex-row xl:justify-center lg:justify-center gap-3'>

              <div className='flex flex-col md:w-[380px] md:rounded-3xl rounded-3xl bg-white '>
                <div className='flex flex-col gap-[20px] md:rounded-3xl rounded-3xl border-black shadow-2xl p-5'>
                  <p className='md:w-[330px]'>I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.</p>
                  <div className='flex flex-row gap-2'>
                    <Image src={Girl} alt="" />
                    <div>
                      <h5 className='font-bold'>Minnie Horn</h5>
                      <h4 className='text-[#4F96FF]'>@hello.mimmie</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:w-[380px] md:rounded-3xl rounded-3xl  bg-white gap-3'>
                <div className='flex flex-col gap-[20px] md:rounded-3xl rounded-3xl border-black shadow-xl p-5 '>
                  <p className='md:w-[330px]'>I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you</p>
                  <div className='flex flex-row gap-2'>
                    <Image src={Girl2} alt="" />
                    <div>
                      <h5 className='font-bold'>Veona Watson</h5>
                      <h4 className='text-[#4F96FF]'>@hi.veona</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div>
            <div className='flex flex-col md:flex md:flex-row xl:justify-center lg:justify-center gap-3'>
              <div className='flex flex-col md:w-[380px] md:rounded-3xl rounded-3xl  bg-white '>
                <div className='flex flex-col gap-[20px] md:rounded-3xl rounded-3xl border-black-500 shadow-xl p-5'>
                  <p className='md:w-[330px]'>Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.</p>
                  <div className='flex flex-row  gap-2'>
                    <Image src={Girl3} alt="" />
                    <div>
                      <h5 className='font-bold'>Merryn Manley</h5>
                      <h4 className='text-[#4F96FF]'>@merryn.manley</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col md:w-[380px] md:rounded-3xl rounded-3xl  bg-white '>
                <div className='flex flex-col gap-[20px] md:rounded-3xl rounded-3xl border-black shadow-xl p-5'>
                  <p className='md:w-[330px]'>I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result</p>
                  <div className='flex flex-row gap-2'>
                    <Image src={Boy2} alt="" />
                    <div>
                      <h5 className='font-bold'>Paseka Nku</h5>
                      <h4 className='text-[#4F96FF]'>@hey.nku</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;