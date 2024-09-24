"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/pariscite.jpg";
import bahrialogo from "../public/assets/bahria-university-logo.png";

const Education = () => {
    return (
        <div id="education" className="w-full md:h-screen p-2 items-center py-16">

            <div className="max-w-[80%] m-auto md:grid grid-cols-3 gap-8" style={{marginTop:30}}>
                <div className="col-span-2">
                    <h2 className="py-4">Bachelors&apos;s in Computer Science 🎓</h2>
                    <p className="py-2 text-[#808080] font-mono"> 2014 - 2019</p>
                    <p className="py-2 text-gray-600">
                        I have completed my bachelors in Computer Science from Bahria University. I studied courses such as
                        Computer Programming, Object-Oriented Programming, Applied Calculus, Probability and Statistics,
                        Artificial Intelligence, and Discrete Mathematics. These courses provided me with a strong foundation
                        in Computer Science, which was further enhanced by technical skills.

                    </p>
                    <p>
                        <strong>Advisor</strong>
                        <span className="text-red-500"> Prof. Taimoor Aamer</span>
                    </p>

                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"  >
                    <Image
                        src={bahrialogo}
                        className="rounded-xl transition-transform duration-500"
                        alt="/"
                        style={{ backgroundColor: 'white' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;
