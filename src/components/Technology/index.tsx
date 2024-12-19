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
            paragraph={<span>From <span className="font-bold">next-generation AI</span> to cutting edge <span className="font-bold">hybrid cloud solutions</span> to the deep expertise of <span className="font-bold">HighCode Tech</span>, HighCode has what it takes to help you reinvent how your business works in the age of AI.</span>}
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
            <div className="m-3 p-3">
              <p className="text-3xl my-5 text-center">Mobile Development</p>
              <SingleTech title="Native" techs={mobileNativeTechData}/>
              <SingleTech title="Hybrid" techs={mobileHybridTechData}/>
            </div>
            <div className="m-3 p-3">
              <p className="text-3xl my-5 text-center">Web Development</p>
              <SingleTech title="FrontEnd" techs={webFrontEndTechData}/>
              <SingleTech title="BackEnd" techs={webBackEndTechData}/>
              
            </div>

            <div className="m-3 p-3">
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
