import React from "react";
import CertItem from "@/components/certitem";


import vue_js from "../public/assets/skills/vue_js.png";
import iseplogo from "../public/assets/experience/isep-logo.png";

function Certification() {
    return (
        <div id="experience" className="w-full p-2 pt-12">
            <div className="max-w-[80%] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Certifications
                </p>
                <h2 className="py-4">Skills Validation</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div style={{backgroundColor: "white"}} >
                        <CertItem
                            image={vue_js}
                            title="Vue JS"
                            timeline="2024"
                            url="https://www.linkedin.com/learning/certificates/e8cbac1290b287d360f0c20327e70f3b1784651122a44c7d6e326b5c2476cf15?trk=share_certificate"
                        />
                    </div>
                    {/*<div style={{backgroundColor: "white"}}>*/}
                    {/*    <CertItem*/}
                    {/*        image={iseplogo}*/}
                    {/*        title="Data Scientist Intern"*/}
                    {/*        timeline="2022 - 2022"*/}
                    {/*        url="/projects/superchat"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>


            </div>

        </div>
    );
}

export default Certification;
