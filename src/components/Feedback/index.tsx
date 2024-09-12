import SectionTitle from "../Common/SectionTitle";
import SingleFeedback from "./SingleFeedback";
import FeedbackData from "./feedbackData";

const Feedback = () => {
  return (
    <section
      id="Feedback"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Feedbacks"
          paragraph=""
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {FeedbackData.map((Feedback) => (
            <div key={Feedback.id} className="w-full">
              <SingleFeedback Feedback={Feedback} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
