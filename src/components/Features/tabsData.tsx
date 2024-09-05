import { Tab } from "@/types/tab";

const tabsData: Tab[] = [
    {
        id: 'tab1',
        label: 'Personalized matching',
        image: "/images/feature/tab1.png",
        content: (
            <>
                <h2 className="text-2xl font-semibold">Personalized matching</h2>
                <p className="first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-bold
                    first-letter:mr-3 first-letter:float-left text-lg">
                    Finding your next superstar hire is a joint venture for us.
                    Our matching specialists will learn about your company culture and positions to suggest custom-fit candidates.
                    Successful allocations build long-term partnerships.
                </p>
            </>
        ),
    },
    {
        id: 'tab2',
        label: 'Onboarding simplified',
        image: '/images/feature/tab2.png',
        content: (
            <>
                <h2 className="text-2xl font-semibold">Onboarding simplified</h2>
                <p className="first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-bold
                    first-letter:mr-3 first-letter:float-left text-lg">
                    We find, hire, and equip talent from 23 countries in Latin America so they are ready to start delivering value in no time. You only get charged if you onboard a dev.
                </p>
            </>
        ),
    },
    {
        id: 'tab3',
        label: 'Technology',
        image: '/images/feature/tab3.png',
        content: (
            <>
                <h2 className="text-2xl font-semibold">In-depth insights produced by perfectionists</h2>
                <p className="first-line:tracking-widest
                    first-letter:text-5xl first-letter:font-bold
                    first-letter:mr-3 first-letter:float-left text-lg">
                    We vet candidates with our own tech leads and produce in-depth reports so you can save time by meeting only with the most appealing candidates.
                </p>
            </>
        ),
    },
];
export default tabsData;