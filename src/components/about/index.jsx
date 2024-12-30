import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I am Ananya V Hegde, a dedicated web developer with experience 
            in web design, cloud infrastructure, and data analytics. I worked 
            as a Web/Epub Developer at Sun ITES Consulting, automating unit 
            tests and designing websites. I gained expertise in AWS services 
            during my internship as an AWS Developer and have completed projects 
            like an Online Voting System and School Bus Tracker App. Proficient 
            in Python, Java, JavaScript, and SQL, I am currently pursuing an MCA 
            at Acharya Institute of Technology, aiming to deliver innovative 
            solutions.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            MCA <sub className="font-semibold text-base">graduate</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+{" "}
            <sub className="font-semibold text-base">years of experience in Tech</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Ananya-Hegde2001&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Ananya Hegde"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Ananya-Hegde2001&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Ananya Hegde"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=java,python,aws,bootstrap,css,docker,figma,firebase,git,github,html,js,linux,mongodb,mysql,nextjs,nodejs,npm,postgres,react,tailwind,threejs,vercel,vite,vscode`}
            alt="Ananya Hegde"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
            <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=Ananya-Hegde2001&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="Ananya Hegde"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/Ananya-Hegde2001/Ananya-3DPortfolio"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src= "https://github-readme-stats.vercel.app/api/pin/?username=Ananya-Hegde2001&repo=Ananya-3DPortfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=1"
              alt="Ananya Hegde"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
