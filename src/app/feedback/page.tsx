import SingleFeedback from "@/components/Feedback/SingleFeedback";
import FeedbackData from "@/components/Feedback/feedbackData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback Page | HighCode Tech",
  description: "This is Feedback Page for Startup Nextjs Template",
  // other metadata
};

const Feedback = () => {
  return (
    <>
      <Breadcrumb
        pageName="Feedback"
        description="See what out clients say about Highcode."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {FeedbackData.map((Feedback) => (
              <div
                key={Feedback.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleFeedback Feedback={Feedback} />
              </div>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Feedback;
