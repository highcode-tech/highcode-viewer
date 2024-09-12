import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Connecting Top Talent with Leading Tech Companies."
                paragraph=""
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3">
                    <List text="Search Profiles" />
                    <p className="text-justify">
                    Browse our list of fresh, vetted candidates in your tech stack. Review cultural and technical insights to get a better understanding of each candidate’s skills. Schedule a meeting to get the process started.
                    </p>
                    <List text="Get Suggestions" />
                    <p className="text-justify">
                    Building a strong team is a joint venture for us. We are here to give you a boost by using all of our experience to suggest top profiles that will make your hiring-life easier.
                    </p>
                    <List text="Review Assessments" />
                    <p className="text-justify">
                    Candidates are happy to go through panels, online challenges, and technical interviews.
                    With your approval, we’ll handle contracts, payments, and hardware to make out of this a quick and smooth addition on the team.
                    </p>
                  </div>


                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto my-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                
                <img 
                  src="/images/about/about_1.png"
                  alt="about-image"
                  className="mx-auto max-w-full drop-shadow-three dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
