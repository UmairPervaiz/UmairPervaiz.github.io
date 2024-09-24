import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
// import propertyImg from "../../../public/assets/projects/property.jpg";
import cover from "../../../public/assets/cover.webp";
import Link from "next/link";

export default function Property() {
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
          <h2 className="py-2">RecordME</h2>
          <h3>Streamlined Invoice Processing | Fast-Track Payment Categorisation</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p className="mb-5">
              RecordME is an AI-powered solution that automates bookkeeping tasks for 
              accountants and businesses, streamlining financial record-keeping, reducing errors, and providing real-time insights for better decision-making.
          </p>
          <h2 className="mb-5">Key Features:</h2>
          <ul>
              <li className="mb-5">
                  <strong>Streamlined Invoice Processing:</strong> Say goodbye to delays with on-the-spot invoice processing using our OCR-powered
                  bookkeeping solution. Integrate RecordME’s financial services in your accounting software and manage invoice processing in real-time.
              </li> 
              <li className="mb-5">
                  <strong>Fast-Track Payment Categorisation: </strong> Take the guesswork out of your financial processes, identify transaction 
                  types, and process payments with the highest level of accuracy. No bill, no problem – Seamlessly record expenses or bank transactions
                   without bills or invoices.
              </li> 

              <li className="mb-5">
                  <strong>Synchronize Email Request: </strong> Every request is handled with care, from single documents to multiple files via email.
                  With RecordME, you can easily send requests through email. When sending requests via email, subject lines become your instant description 
                  in RecordMe fields.
              </li>
              <li className="mb-5">
                  <strong>Ensure Smart Validations: </strong> Effortlessly manage multiple organizations and assign team members with ease. RecordME lets 
                  you take control of request approvals and submission processes, empowering your digital accountants with greater oversight.
              </li>

          </ul>
          {/* <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mt-4 mr-8">
            Demo
          </button>
          <button className="bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mt-4">
            Code
          </button> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technology Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vue JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
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
