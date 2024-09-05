import SectionTitle from "../Common/SectionTitle";
import SingleTech from "./SingleTech";

import {mobileNativeTechData, mobileHybridTechData, webFrontEndTechData, webBackEndTechData, blockChainTechData} from "./techData";

const Technology = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Technology Stack"
            paragraph="Our engineers apprehend your business requirements and help you choose the right technology for your solution."
            center
          />

          <div className="flex">
            <div className="m-3 w-1/4">
              <p className="text-3xl my-5 text-center">Mobile Development</p>
              <SingleTech title="Native" techs={mobileNativeTechData}/>
              <SingleTech title="Hybrid" techs={mobileHybridTechData}/>
            </div>
            <div className="m-3 w-2/4">
              <p className="text-3xl my-5 text-center">Web Development</p>
              <SingleTech title="FrontEnd" techs={webFrontEndTechData}/>
              <SingleTech title="BackEnd" techs={webBackEndTechData}/>
            </div>

            <div className="m-3 w-1/3">
              <p className="text-3xl my-5 text-center">BlockChain Development</p>
              <SingleTech title="" techs={blockChainTechData}/>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
