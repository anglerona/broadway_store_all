"use client";

import { useEffect, useState } from "react";
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

type HomepageContent = {
  features_title: string;
  features_description: string;
  unit_sizes_title: string;
  unit_sizes_text_1: string;
  unit_sizes_text_2: string;
  contact_title: string;
  phone_number: string;
  address: string;
  hours_description: string;
  weekday_hours: string;
  closed_hours: string;
  google_maps_embed_url: string;
};

type Feature = {
  id: number;
  title: string;
  icon: "sun" | "shield" | "fire" | "home" | "location" | "sparkles";
  display_order: number;
};

type Unit = {
  id: number;
  size: string;
  dimensions: string;
  description: string;
  available_units: number;
  price_range: string;
};

const iconMap = {
  sun: HiOutlineSun,
  shield: HiOutlineShieldCheck,
  fire: HiOutlineFire,
  home: HiOutlineHome,
  location: HiOutlineLocationMarker,
  sparkles: HiOutlineSparkles,
};

const sizeLabels: Record<string, string> = {
  S: "Small unit",
  M: "Medium unit",
  L: "Large unit",
  XL: "X-Large unit",
};

export default function Home() {
  const [content, setContent] = useState<HomepageContent | null>(null);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [units, setUnits] = useState<Unit[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const galleryImages = [
    { src: "/outside.jpg", alt: "Outside view" },
    { src: "/hall.jpg", alt: "Hall view 1" },
    { src: "/hall2.jpg", alt: "Hall view 2" },
  ];

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/homepage-content/`)
      .then((res) => res.json())
      .then((data) => setContent(Array.isArray(data) ? data[0] : data))
      .catch((err) => console.error("Failed to fetch homepage content:", err));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/features/`)
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.error("Failed to fetch features:", err));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/units/`)
      .then((res) => res.json())
      .then((data) => {
        const order = ["S", "M", "L", "XL"];
        const sorted = data.sort(
          (a: Unit, b: Unit) => order.indexOf(a.size) - order.indexOf(b.size),
        );
        setUnits(sorted);
      })
      .catch((err) => console.error("Failed to fetch units:", err));
  }, []);

  if (!content) {
    return null;
  }

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

      <section id="features" className="py-20 px-8 sm:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#06398A] mb-6">
            {content.features_title}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {content.features_description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 justify-center mb-12">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || HiOutlineSparkles;

            return (
              <FeatureItem key={feature.id} icon={Icon} title={feature.title} />
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-col lg:flex-row gap-4">
          <button
            onClick={() => setSelectedImageIndex(0)}
            className="flex-2 h-80 rounded-lg overflow-hidden"
          >
            <Image
              src="/outside.jpg"
              alt="Outside view"
              width={1200}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </button>

          <button
            onClick={() => setSelectedImageIndex(1)}
            className="flex-1 h-80 rounded-lg overflow-hidden"
          >
            <Image
              src="/hall.jpg"
              alt="Hall view 1"
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </button>

          <button
            onClick={() => setSelectedImageIndex(2)}
            className="flex-1 h-80 rounded-lg overflow-hidden"
          >
            <Image
              src="/hall2.jpg"
              alt="Hall view 2"
              width={600}
              height={400}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </button>
        </div>
      </section>

      <section id="unit-size" className="bg-[#06398A] text-white py-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {content.unit_sizes_title}
          </h2>

          <p className="mb-12 text-lg">
            {content.unit_sizes_text_1}
            <br />
            {content.unit_sizes_text_2}{" "}
            <a
              href="#contact"
              className="underline font-semibold hover:text-gray-300 transition-colors"
            >
              Contact us
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center mt-6 max-w-4xl mx-auto space-y-6 sm:space-y-0 sm:space-x-6 md:space-x-10 lg:space-x-16">
            {units.map((unit) => (
              <div key={unit.id} className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-20 sm:h-20 bg-white text-[#06398A] rounded-md relative shadow-md flex items-center justify-center">
                  <div className="absolute top-1 left-0 right-0 h-[2px] bg-gray-300 rounded"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-2 md:top-4 w-6 sm:w-8 h-1.5 md:h-2 bg-gray-300 rounded"></div>
                  <span className="font-bold absolute bottom-2 md:bottom-5 text-sm sm:text-base text-[#06398A] z-10">
                    {unit.size}
                  </span>
                </div>

                <div className="mt-2 sm:mt-3 text-sm sm:text-base text-white text-center space-y-1">
                  <p>{sizeLabels[unit.size] || unit.size}</p>

                  {unit.dimensions.split("&").map((line, i) => (
                    <p key={i}>{line.trim()}</p>
                  ))}

                  <p className="italic text-white/80">various sizes</p>
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
            {content.contact_title}
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Contact</h3>
              <p className="mb-2 flex items-center gap-2 font-medium">
                <HiOutlinePhone className="text-[#06398A] w-6 h-6" />{" "}
                {content.phone_number}
              </p>
              <p className="mb-2 flex items-start gap-2">
                <HiOutlineLocationMarker className="text-[#06398A] w-6 h-6" />{" "}
                {content.address}
              </p>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Hours</h3>
              <p className="mb-2 flex items-center gap-2">
                <HiOutlineClock className="text-[#06398A] w-6 h-6" />{" "}
                {content.hours_description}
              </p>
              <p className="mb-2 flex items-center gap-2">
                <HiOutlineCalendar className="text-[#06398A] w-6 h-6" />{" "}
                {content.weekday_hours}
              </p>
              <p className="flex items-center gap-2">
                <HiOutlineX className="text-[#06398A] w-6 h-6" />{" "}
                {content.closed_hours}
              </p>
            </div>
          </div>

          <div className="mt-12 w-full h-80 sm:h-96 rounded-lg overflow-hidden">
            <iframe
              title="Google Maps - 2425 Laurel Street"
              src={content.google_maps_embed_url}
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
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-6 text-white text-5xl z-50"
          >
            ×
          </button>

          <button
            onClick={() =>
              setSelectedImageIndex(
                selectedImageIndex === 0
                  ? galleryImages.length - 1
                  : selectedImageIndex - 1,
              )
            }
            className="absolute left-4 md:left-8 text-white text-6xl z-50"
          >
            ‹
          </button>

          <Image
            src={galleryImages[selectedImageIndex].src}
            alt={galleryImages[selectedImageIndex].alt}
            width={1600}
            height={1200}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />

          <button
            onClick={() =>
              setSelectedImageIndex(
                selectedImageIndex === galleryImages.length - 1
                  ? 0
                  : selectedImageIndex + 1,
              )
            }
            className="absolute right-4 md:right-8 text-white text-6xl z-50"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
