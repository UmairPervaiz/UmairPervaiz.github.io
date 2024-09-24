import React from "react";
import ProjectItem from "./projectItem";

import aml from "../public/assets/projects/aml.png";
import recordMe from "../public/assets/projects/recordMe.png";
import iCarePro from "../public/assets/projects/iCarePro.png";
import kyb from "../public/assets/projects/kyb.webp";
import cover from "../public/assets/cover.webp";
import smartPunch from "../public/assets/projects/smartPunch.jpeg";
import emdad from "../public/assets/projects/emdad.jpeg";
import path from "../public/assets/projects/path.jpeg";
import planner from "../public/assets/projects/planner.jpeg";


function Projects() {
  return (
    <div id="projects" className="w-full p-2 pt-12">
      <div className="max-w-[80%] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
              image={aml}
              name="AML"
              title="Comprehensive and advanced AML compliance solution"
              tools={["Python, MongoDB, Vue js"]}
              url="/projects/aml"
          />
          <ProjectItem
              image={recordMe}
              name="RecordME"
              title="An AI-driven solution that automates bookkeeping for accountants and businesses"
              tools={["Express JS, Vue JS, MongoDB"]}
              url="/projects/recordME"
          />
          <ProjectItem
              image={iCarePro}
              name="iCarePro"
              title="One of the best EMRs/EHRs in the market"
              tools={["Laravel, Vue JS, PostgreSQL"]}
              url="/projects/iCarePro"
          />
          <ProjectItem
              image={kyb}
              name="KYB"
              title="Business compliance management through CMS"
              tools={["Laravel, Vue JS, PostgreSQL"]}
              url="/projects/kyb"
          />
          <ProjectItem
              image={smartPunch}
              name="SmartPunch"
              title="Automated attendance tracking"
              tools={["Laravel, MySQL"]}
              url="/projects/smartPunch"
          />
          <ProjectItem
              image={emdad}
              name="Emdad Supply Chain"
              title="Streamline supply chain operations"
              tools={["Laravel, MySQL"]}
              url="/projects/emdad"
          />
          <ProjectItem
              image={path}
              name="Path"
              title="Job matching for students and employers"
              tools={["Laravel, MySQL"]}
              url="/projects/path"
          />
          <ProjectItem
              image={planner}
              name="Planner"
              title="Job matching for students and employers"
              tools={["Laravel, MySQL"]}
              url="/projects/planner"
          />
        </div>

      </div>
    </div>
  );
}

export default Projects;
