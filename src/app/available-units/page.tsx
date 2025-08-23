"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Spinner from "@/components/ui/spinner";

type Unit = {
  id: number;
  size: string;
  dimensions: string;
  description: string;
  available_units: number;
};

export default function AvailableUnits() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/units/`)
      .then((res) => res.json())
      .then((data) => {
        const order = ["S", "M", "L", "XL"];
        const sorted = data.sort(
          (a: Unit, b: Unit) => order.indexOf(a.size) - order.indexOf(b.size)
        );
        setUnits(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch units:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-[#06398A] mb-8 text-center">
          Available Units
        </h1>

        <p className="text-center mb-12 text-gray-600">
          Here’s a live snapshot of what’s available. Contact us to reserve a
          unit today!
        </p>

        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {units.map((unit) => (
                <div
                  key={unit.id}
                  className="border relative rounded-lg p-6 shadow hover:shadow-lg transition"
                >
                  <h2 className="text-2xl font-bold text-[#06398A] mb-4">
                    {unit.size}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    Dimensions: {unit.dimensions}
                  </p>
                  <p className="text-sm mb-8">{unit.description}</p>
                  <p className="text-lg font-semibold absolute bottom-4">
                    {unit.available_units} available
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/#contact"
                className="inline-block px-6 py-3 bg-[#06398A] text-white font-semibold rounded hover:bg-[#052d6f] transition"
              >
                Contact Us to Book
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
