import React from "react";
import ExpItem from "./expItem";

import developers_studio from "../public/assets/experience/developers_studio.png";
import WebSoft from "../public/assets/experience/WebSoft.png";
import sjsolution from "../public/assets/experience/sj-solutions-logo.jpg";
import ashtexsol from "../public/assets/experience/ashtexsolution-logo.png";

function Experience() {
  return (
    <div id="experience" className="w-full p-2 pt-12">
        <div className="max-w-[80%] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                Experience
            </p>
            <h2 className="py-4">Past Workplaces</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div style={{backgroundColor: "white"}}>
                    <ExpItem
                        image={developers_studio}
                        company_name="Developers Stduio"
                        title="Senior Software Engineer Team Lead"
                        timeline="2022 - 2024"
                    />
                </div>
                <div style={{backgroundColor: "white"}}>
                    <ExpItem
                        image={WebSoft}
                        company_name="Emdad Digital Platform (WebSoft)"
                        title="Software Engineer"
                        timeline="2021 - 2022"
                    />
                </div>
                <div style={{backgroundColor: "white"}}>
                    <ExpItem
                        image={sjsolution}
                        company_name="SJ Solutions"
                        title="Back End Developer"
                        timeline="2019 - 2021"
                    />
                </div>
            </div>


        </div>

    </div>
  );
}

export default Experience;
