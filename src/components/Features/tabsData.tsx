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
                    first-letter:mr-3 first-letter:float-left text-lg">
                        Finding your next superstar hire is a joint venture for us.
                        Our matching specialists will learn about your company culture and positions to suggest custom-fit candidates.
                        Successful allocations build long-term partnerships.
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
                    first-letter:mr-3 first-letter:float-left text-lg">
                        We find, hire, and equip talent from 23 countries in Latin America so they are ready to start delivering value in no time. You only get charged if you onboard a dev.
                    </p>
                    <img className="m-auto" src="/images/feature/tab2.jpg" height={500} width={500} alt="onboarding-simplified" />
                </div>
            </>
        ),
    },
    {
        id: 'tab3',
        label: 'In-depth insights produced by perfectionists',
        image: '/images/feature/in-depth-insights.png',
        content: (
            <>
                <h2 className="text-2xl font-semibold">In-depth insights produced by perfectionists</h2>
                <div className="md:inline-flex md:h-80">
                    <p className="first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-bold
                    first-letter:mr-3 first-letter:float-left text-lg">
                        We vet candidates with our own tech leads and produce in-depth reports so you can save time by meeting only with the most appealing candidates.
                    </p>
                    <img className="m-auto" src="/images/feature/tab3.jpg" height={500} width={500} alt="personalized-matching" />
                </div>

            </>
        ),
    },
];
export default tabsData;