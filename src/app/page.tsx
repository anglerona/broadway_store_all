import Navbar from "../components/Navbar";
import Image from "next/image";
import FeatureItem from "../components/FeatureItem";
import {
  HiOutlineSun,
  HiOutlineShieldCheck,
  HiOutlineFire,
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiOutlineSparkles,
  HiOutlinePhone,
  HiOutlineClock,
  HiOutlineCalendar,
  HiOutlineX,
} from "react-icons/hi";

export default function Home() {
  const features = [
    { icon: HiOutlineSun, title: "Dry" },
    { icon: HiOutlineShieldCheck, title: "Secure" },
    { icon: HiOutlineFire, title: "Heated units" },
    { icon: HiOutlineHome, title: "Neighborhood facility" },
    { icon: HiOutlineLocationMarker, title: "Close to VGH" },
    { icon: HiOutlineSparkles, title: "Clean" },
  ];

  return (
    <div className="min-h-screen">
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/van.jpg')" }}
      >
        <Navbar />
        <main className="pt-24 flex items-center justify-center h-screen">
          <div className="relative w-80 h-80 sm:w-[400px] sm:h-[400px]">
            <Image
              src="/sign.svg"
              alt="Sign overlay"
              fill
              className="object-contain"
              priority
            />
          </div>
        </main>
      </div>

      {/* Facility Features Section */}
      <section id="features" className="py-20 px-8 sm:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#06398A] mb-6">
            Facility Features
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Broadway Store-All provides a selection of storage units for you to
            choose from. We are conveniently located in a neighborhood facility
            located in Fairview Slopes. Whether you need storage for your home
            or business, we have the space for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 justify-center mb-12">
          {features.map((feature) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

        {/* Images Row */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-col lg:flex-row gap-4">
          <Image
            src="/outside.jpg"
            alt="Outside view"
            width={1200}
            height={600}
            className="flex-2 h-80 rounded-lg object-fit"
          />
          <Image
            src="/hall.jpg"
            alt="Hall view 1"
            width={600}
            height={400}
            className="flex-1 h-80 rounded-lg object-fit"
          />
          <Image
            src="/hall2.jpg"
            alt="Hall view 2"
            width={600}
            height={400}
            className="flex-1 h-80 rounded-lg object-fit"
          />
        </div>
      </section>

      <section id="unit-size" className="bg-[#06398A] text-white py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Unit Sizes</h2>
          <p className="mb-12 text-lg">
            Prices range from $60-$350 / month + GST. <br />
            Not sure what size is best? Our storage experts are here to help!{" "}
            <a
              href="#contact"
              className="underline font-semibold hover:text-gray-300 transition-colors"
            >
              Contact us
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-6 max-w-4xl mx-auto space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-10 lg:space-x-16">
            {[
              {
                label: "S",
                desc: ["Small unit", "5 x 5 x 5", "various sizes available"],
              },
              {
                label: "M",
                desc: ["Medium unit", "5 x 5 x 8", "various sizes available"],
              },
              { label: "L", desc: ["Large unit", "7 x 7 x 8 & 5 x 10 x 8"] },
              { label: "XL", desc: ["X-Large unit", "8 x 16 x 8"] },
            ].map((unit, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Storage box */}
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white text-[#06398A] rounded-md relative shadow-md flex items-center justify-center">
                  {/* Lid line */}
                  <div className="absolute top-1 left-0 right-0 h-[2px] bg-gray-300 rounded"></div>
                  {/* Handle/stripe */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 sm:bottom-4 w-6 sm:w-8 h-2 bg-gray-300 rounded"></div>
                  {/* Size label */}
                  <span className="font-bold text-sm sm:text-base text-[#06398A] z-10">
                    {unit.label}
                  </span>
                </div>

                <div className="mt-2 sm:mt-3 text-sm sm:text-base text-white text-center space-y-1">
                  {unit.desc.map((line, i) => (
                    <p
                      key={i}
                      className={i === 2 ? "italic text-white/80" : ""}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gray-100 text-gray-900 py-16 px-8 sm:px-20"
      >
        <div className="max-w-6xl mx-auto text-center sm:text-left">
          <h2 className="text-3xl font-bold mb-8 text-[#06398A]">
            Contact & Hours
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Contact Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="mb-2 flex items-center gap-2 font-medium">
                <HiOutlinePhone className="text-[#06398A] w-6 h-6" />{" "}
                604-731-6689
              </p>
              <p className="mb-2 flex items-start gap-2">
                <HiOutlineLocationMarker className="text-[#06398A] w-6 h-6" />{" "}
                2425 Laurel Street, Vancouver, BC V5Z 4M3, Canada
              </p>
            </div>

            {/* Hours Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Hours</h3>
              <p className="mb-2 flex items-center gap-2">
                <HiOutlineClock className="text-[#06398A] w-6 h-6" /> Accessible
                during hours of operation
              </p>
              <p className="mb-2 flex items-center gap-2">
                <HiOutlineCalendar className="text-[#06398A] w-6 h-6" />{" "}
                Tuesday-Saturday: 10am - 6pm
              </p>
              <p className="flex items-center gap-2">
                <HiOutlineX className="text-[#06398A] w-6 h-6" /> Closed
                Sunday-Monday
              </p>
            </div>
          </div>
          <div className="mt-12 w-full h-80 sm:h-96 rounded-lg overflow-hidden">
            <iframe
              title="Google Maps - 2425 Laurel Street"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.8854894857686!2d-123.08452968433845!3d49.27185797933135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867392e1b9aa13%3A0xa1b3c24f5e8f5f5f!2s2425%20Laurel%20St%2C%20Vancouver%2C%20BC%20V5Z%204M3%2C%20Canada!5e0!3m2!1sen!2sus!4v1692295567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
