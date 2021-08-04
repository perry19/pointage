import React, { useState } from 'react';
import client from '../images/client.svg';
function ForClientsSection() {
    return (
        <section className="relative bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Hero content */}
                <div class="mt-24">
                    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        {/* Section header */}
                        <div className="max-w-3xl mx-auto text-center pb-3 md:pb-9">
                            <h2 className="h2 mb-4">How Pointage works</h2>
                            <p className="text-xl text-gray-600">Pointage helps business and Individuals to find great talents to get their job done. In return Freelancers can make money and build their careers by providing quality services either remotely or in their neigborhoods.</p>
                            <h4 className="h4 mt-8">Pointage For Clients</h4>
                        </div>
                        {/* Left col */}
                        <div class="w-full md:w-1/2 py-6 text-center">
                            <img class="w-full md:w-4/5 z-50" src={client}
                                alt="" />
                        </div>

                        {/* Right col */}
                        <div class="flex flex-col w-full md:w-1/2 justify-center items-start text-center md:text-left">

                            <h1 class="my-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
                                Hire a professional for any skill
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                From quick turn around to big transformations
                                <p>pointage provides you with the neccessary talents to get your job done.</p>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none pb-8">

                    {/* 1st item */}
                    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                                <rect className="fill-current text-indigo-600" width="64" height="64" rx="32" />
                                <g strokeWidth="2">
                                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                                    <path className="stroke-current text-indigo-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                                </g>
                            </g>
                        </svg>
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Quickly create your account</h4>
                        <p className="text-gray-600 text-center">Creating your account is very simple and straight forward</p>
                    </div>

                    {/* 2nd item */}
                    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                                <rect className="fill-current text-indigo-600" width="64" height="64" rx="32" />
                                <g strokeWidth="2" transform="translate(19.429 20.571)">
                                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                                    <path className="stroke-current text-indigo-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                                </g>
                            </g>
                        </svg>
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Describe your needs</h4>
                        <p className="text-gray-600 text-center">After creating your account we guide you in describing your needs</p>
                    </div>

                    {/* 3rd item */}
                    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                        <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                                <rect className="fill-current text-indigo-600" width="64" height="64" rx="32" />
                                <g strokeLinecap="square" strokeWidth="2">
                                    <path className="stroke-current text-indigo-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
                                    <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
                                </g>
                            </g>
                        </svg>
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">We find the right talent</h4>
                        <p className="text-gray-600 text-center">Once your needs are clear, we match you with the right talent for the job</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ForClientsSection;

