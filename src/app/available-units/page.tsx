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
    fetch("http://localhost:8000/api/units/")
      .then((res) => res.json())
      .then((data) => {
        setUnits(data);
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
          Here’s a live snapshot of what’s available. Contact us to reserve a unit today!
        </p>

        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {units.map((unit) => (
                <div
                  key={unit.id}
                  className="border rounded-lg p-6 shadow hover:shadow-lg transition"
                >
                  <h2 className="text-2xl font-bold text-[#06398A] mb-2">
                    {unit.size}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">
                    Dimensions: {unit.dimensions}
                  </p>
                  <p className="text-sm mb-3">{unit.description}</p>
                  <p className="text-lg font-semibold">
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
