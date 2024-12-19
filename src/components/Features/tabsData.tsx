import { Tab } from "@/types/tab";
import Image from "next/image";

const tabsData: Tab[] = [
    {
        id: 'tab1',
        label: 'Personalized matching',
        image: "/images/feature/personalized-matching.png",
        content: (
            <>
                <h2 className="text-2xl font-semibold">Personalized matching</h2>
                <div className="md:inline-flex md:h-80">
                    <p className="first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-bold
                    first-letter:mr-3 first-letter:float-left text-lg pr-8">
                        We believe every business is unique, and so should be the solutions that power them. Our Personalized Matching service is designed to connect you with the right technologies, strategies, and expertise tailored specifically to your needs. We start by understanding your business goals, challenges, and vision through an in-depth discovery process. Using this insight, we recommend tools, frameworks, and approaches that align perfectly with your objectives. Whether it’s building scalable software, integrating AI capabilities, or enhancing user experiences, we ensure the solution fits like a glove. Additionally, we match you with a team of experts whose skills and experience are perfectly aligned with your project requirements. With ongoing support and optimization, we help you adapt to changing demands and stay ahead of the curve. At HighCode, our goal is to empower your business with solutions that are as unique as you are.
                    </p>
                    <img className="m-auto" src="/images/feature/tab1.jpg" height={500} width={500} alt="in-depth-insights" />
                    {/*<img className="max-w-96 max-h-80 min-w-96 min-h-80" src="/images/feature/tab1.jpg"></img>*/}
                </div>
            </>
        ),
    },
    {
        id: 'tab2',
        label: 'Onboarding simplified',
        image: '/images/feature/onboarding-simplified.png',
        content: (
            <>
                <h2 className="text-2xl font-semibold">Onboarding simplified</h2>
                <div className="md:inline-flex md:h-80">
                    <p className="first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-bold
                    first-letter:mr-3 first-letter:float-left text-lg pr-8">
                        We know that a smooth start sets the stage for success. That’s why our Onboarding Simplified service is designed to make the transition into our partnership effortless and efficient. From the moment you engage with us, we guide you through every step with clear communication and tailored processes. Our team ensures all the tools, resources, and expertise you need are in place, minimizing downtime and maximizing productivity. With a focus on collaboration, we align our approach with your goals to create a seamless onboarding experience. Whether it’s integrating new technologies, aligning workflows, or providing training, we make the complex feel simple. With HighCode, you can focus on what matters most—growing your business—while we handle the rest. Let’s start building success, together.
                    </p>
                    <img className="m-auto" src="/images/feature/tab2.jpg" height={500} width={500} alt="onboarding-simplified" />
                </div>
            </>
        ),
    },
    {
        id: 'tab3',
        label: 'In-depth insights',
        image: '/images/feature/in-depth-insights.png',
        content: (
            <>
                <h2 className="text-2xl font-semibold">In-depth insights produced by perfectionists</h2>
                <div className="md:inline-flex md:h-80">
                    <p className="first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-bold
                    first-letter:mr-3 first-letter:float-left text-lg pr-8">
                        We don’t just provide insights—we deliver precision-driven knowledge crafted by a team of perfectionists. Our experts dive deep into your data, processes, and goals to uncover actionable insights that drive real results. Leveraging cutting-edge analytics and meticulous attention to detail, we ensure every recommendation is accurate, relevant, and tailored to your business needs. From market trends to performance metrics, we analyze every detail to help you make informed decisions with confidence. Our perfectionist mindset means nothing is overlooked, and every insight is designed to deliver measurable impact. Whether you're streamlining operations or identifying growth opportunities, our insights empower you to stay ahead in a fast-changing world. With HighCode, you get more than data—you get a roadmap to success. Let’s transform complexity into clarity together.
                    </p>
                    <img className="m-auto" src="/images/feature/tab3.jpg" height={500} width={500} alt="personalized-matching" />
                </div>

            </>
        ),
    },
];
export default tabsData;