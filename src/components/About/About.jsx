import WhyWeBest from "../Home/WhyWeBest";
import Review from "../Home/Review";
import OurResturant from "../Home/OurResturant";

const About = () => {
  return (
    <div className="w-full min-h-screen h-auto bg-base-100 flex flex-col">
      <div className="about-header flex flex-col items-center justify-center text-TextWhite">
        <h1 className="text-2xl lg:text-4xl font-bold  mb-2 text-center ">
          About Us
        </h1>
        <p>Read our Story, How we started and about the Team</p>
      </div>

      <div className="px-5 lg:px-20 bg-bgClr text-secondaryGray ">
        {/* Our Mission Section */}
        <section className="py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center text-primaryRed">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center max-w-5xl mx-auto leading-relaxed">
            Food Hunter is dedicated to revolutionizing the way people
            experience food. We strive to make ordering meals effortless, share
            culinary inspiration through recipes, and support restaurants with
            innovative tools to thrive in a digital world.
          </p>
        </section>

        {/* Our Journey Section */}
        <section className="py-10 sm:py-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center text-primaryRed">
            Our Journey
          </h2>
          <div className="relative max-w-full sm:max-w-4xl mx-auto space-y-8">
            <div className="absolute left-0 sm:left-[40px] top-0 h-full border-l-2 border-primaryRed hidden sm:block"></div>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:pl-20">
              <div className="badge bg-primaryRed text-TextWhite text-white px-3 py-1 text-xs min-w-[120px] text-center">
                May 2023
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-secondaryGray">
                  The Beginning
                </h3>
                <p className="text-sm sm:text-base text-secondaryGray leading-relaxed">
                  Food Hunter launched with a vision to connect food lovers with
                  local restaurants, starting with 10 partners.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:pl-20">
              <div className="badge bg-primaryRed  text-TextWhite  px-3 py-1 text-xs min-w-[120px] text-center">
                Dec 2023
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-secondaryGray">
                  Recipe Community
                </h3>
                <p className="text-sm sm:text-base text-secondaryGray leading-relaxed">
                  We introduced a recipe platform, creating a space for food
                  enthusiasts to share and discover new dishes.
                </p>
              </div>
            </div>
          </div>
        </section>

      <WhyWeBest />
       <OurResturant />
       <Review />
      </div>
    </div>
  );
};

export default About;
