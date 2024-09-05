'use client'
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import tabs from "./tabsData"
import { useState } from "react";
import Image from "next/image";

const Features = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Tech Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />

          <div className="container mx-auto max-w-4/5 p-4">
            {/* Tab Buttons */}
            <div className="flex border-b">
              {

                tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-1/3 py-2 px-4 text-gray-600 hover:text-blue-500 focus:outline-none ${activeTab === tab.id
                      ? 'text-blue-500 border-b-2 border-blue-500'
                      : ''
                      }`}
                  >
                    <Image src={tab.image} alt="image" width={50} height={50} className="m-auto" />
                     {tab.label}
                  </button>
                ))
              }
            </div>

            {/* Tab Content */}
            <div className="p-4 bg-white rounded-lg shadow mt-4">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-content ${activeTab === tab.id ? 'block' : 'hidden'}`}
                >
                  {tab.content}
                </div>
              ))}
            </div>
          </div>

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
