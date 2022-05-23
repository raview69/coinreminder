import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Hero = ({ buttonclick }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: crypto,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
    return (
        <div className="flex items-center justify-center pb-8 sm:pb-12 dark:text-white lg:mx-16">
            <div className="flex items-center p-4 justify-left lg:w-8/12  lg:-mr-12">
                <div className=" lg:mr-28">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                        Don't lose your Momentum!
                    </h1>
                    <h2 className="text-lg py-2 lg:text-2xl lg:py-4 pr-10">
                        Avoid creating FOMO, We help crypto traders keep
                        notified when your Goal price has been accomplished.
                    </h2>
                    <p className="text-lg pb-4 lg:text-lg lg:pr-10 lg:pb-4">
                        No registration is needed just scroll down and use the
                        features.
                    </p>
                    <button
                        onClick={buttonclick}
                        className=" lg:text-lg flex items-center justify-center border-2 dark:border-white rounded-lg p-2"
                    >
                        Get Started&nbsp;
                        <AiOutlineArrowDown className=" lg:text-xl" />
                    </button>
                </div>
            </div>
            <div className="hidden sm:flex sm:w-80"></div>
        </div>
    )
}

export default Hero
