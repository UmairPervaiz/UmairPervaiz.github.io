import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import cover from "../../../public/assets/cover.webp";
import Link from "next/link";

export default function Superchat() {
    return (
        <div className="w-full">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image
                    className="absolute z-1"
                    layout="fill"
                    objectFit="cover"
                    src={cover}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
                    <h2 className="py-2">AML Watcher</h2>
                    <h3>Sanction Screening | Watchlist Screening | Adverse Media Screening | PEP Screening</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4 text-justify">
                    <h2 className="mb-10">AML Watcher</h2>
                    <p className="mb-5">
                    AML Watcher is a comprehensive and advanced <strong>Anti-Money Laundering</strong> (AML) compliance solution. 
                    It is designed to help businesses, particularly in the financial and fintech sectors, identify 
                    and mitigate risks associated with money laundering, fraud, and other regulatory compliance challenges. <br></br>
                    Leverages Artificial Intelligence and Machine Learning
                    to streamline and enhance due diligence and risk assessment processes.  <br></br>
                    This solution focuses on using advanced technologies to improve compliance and risk management in financial industries​.
                    </p>
                </div>
                <div className="h-fit col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technology Stack</p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Python (Flask)
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                MongoDB
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Vue js
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
}
