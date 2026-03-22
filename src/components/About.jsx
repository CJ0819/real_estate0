import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div
            id="About"
            className="min-h-screen flex items-center justify-center bg-neutral-100"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
        >
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl px-8 py-16 flex flex-col md:flex-row items-center gap-12">
                <img
                    src={assets.brand_img}
                    alt="Brand"
                    className="w-full md:w-1/2 max-w-md rounded-xl shadow-md object-cover"
                />
                <div className="flex-1 flex flex-col items-center md:items-start">
                    <h1 className="text-4xl font-semibold text-neutral-900 mb-2 text-center md:text-left tracking-tight">
                        About <span className="font-light underline decoration-neutral-300 underline-offset-8">Our Brand</span>
                    </h1>
                    <p className="text-neutral-500 text-lg mb-8 text-center md:text-left max-w-md">
                        Helping you find more than just a house
                    </p>
                    <div className="grid grid-cols-2 gap-8 w-full mb-10">
                        <div>
                            <p className="text-3xl font-semibold text-neutral-900">10+</p>
                            <p className="text-neutral-500">Years of Excellence</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-neutral-900">13+</p>
                            <p className="text-neutral-500">Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-neutral-900">20+</p>
                            <p className="text-neutral-500">Mn. Sq. Ft. Delivered</p>
                        </div>
                        <div>
                            <p className="text-3xl font-semibold text-neutral-900">25+</p>
                            <p className="text-neutral-500">Ongoing Projects</p>
                        </div>
                    </div>
                    <p className="mb-10 text-neutral-700 max-w-lg text-center md:text-left">
                        At Hillview Real Estate, we believe in turning dreams into reality. With over a decade of experience, we have successfully completed numerous projects, delivering quality homes and commercial spaces. Our commitment to excellence and customer satisfaction sets us apart in the real estate industry. Whether you're looking for your dream home or a lucrative investment opportunity, Hillview Real Estate is your trusted partner every step of the way.
                    </p>
                    <button className="bg-neutral-900 hover:bg-neutral-800 text-white text-base font-medium py-3 px-10 rounded-lg shadow transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About