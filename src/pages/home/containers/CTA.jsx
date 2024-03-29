import React from 'react'
import { images } from '../../../constants'
const CTA = () => {
    return (
        <>
            <svg
                className='w-full h-auto max-h-40 translate-y-[1px]'
                preserveAspectRatio='none'
                viewBox="0 0 1152 263"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    id="Wave"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1656 262.5H-504V0C-144 80 216 120 576 120C936 120 1296 80 1656 0V262.5Z"
                    fill="#0D2436"
                />
            </svg>

            <section className='relative bg-dark-hard px-5'>
                <div className='container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center'>
                    <div className='col-span-12 lg:col-span-6'>
                        <h2 className='text-white font-roboto font-bold text-2xl md:text-center md:text-4xl md:leading-normal lg:text-left'>
                            Get our stories delivered From us to your inbox weekly.
                        </h2>
                        <div className='w-full max-w-[494px] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0'>
                            <input type='text' className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light'
                                placeholder='Your Email' />
                            <button className='px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap'>
                                Get started
                            </button>
                        </div>
                        <p className='text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left'>
                            <span className='font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-dark-light'>
                                Get a response tomorrow
                            </span> 
                              {`\n`}if you submit by 9pm today.
                              If we received after 9pm will get a reponse the following day.
                        </p>
                    </div>
                    <div className='col-span-12 hidden md:block md:order-first rounded-lg mb-[70px] lg:col-span-6 lg:order-last'>
                        <div className='w-3/4 mx-auto relative'>
                            <div className='w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]'/>
                            <div className='w-1/2 h-1/2 bg-white opacity-[.06] rounded-lg absolute -bottom-[10%] -left-[8%]'/>
                            <div className={"w-full bg-white p-3 z-[1] relative rounded-xl"}>
                                <img 
                                    src={images.CtaImage} alt='CTA'
                                    className='w-full rounded-lg object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60' 
                                />
                                <div className='p-5'>
                                    <h2 className='font-roboto font-bold text-xl md:text-2xl lg:text-[28px] text-dark-soft'>
                                        The best aticles every week
                                    </h2>
                                    <p className='text-dark-light mt-3 md:text-lg text-sm'>
                                        Our insurance plans offers are priced the same everywhere else.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA
