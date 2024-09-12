import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              
              <img
                src="/images/about/software development_2.jpeg"
                alt="about image"
                className="drop-shadow-three"
              />
              
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Mobile Development
                </h3>
                <p className="text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Process of creating software applications that run on mobile devices such as smartphones and tablets. Mobile development can target different platforms, primarily iOS (Apple devices) and Android (Google devices).
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Web Development
                </h3>
                <p className="text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Process of building and maintaining websites and web applications that run in a browser. It involves a combination of client-side (front-end) and server-side (back-end) development, each playing a key role in the functionality and user experience of websites.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Blockchain Development
                </h3>
                <p className="text-justify text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Process of creating applications and platforms based on blockchain technology, which is a decentralized and distributed ledger system. This technology enables secure, transparent, and tamper-proof recording of transactions across a network of computers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
