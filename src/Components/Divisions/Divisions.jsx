import React, { useEffect, useState } from "react";
import api from "../../api";
import divisionsImage from "../../../assets/all.png"; // <— Add your image here

function Divisions() {
  const [divisions, setDivisions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await api.get("/divisions/");
        setDivisions(response.data);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDivisions();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-600">Loading divisions...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-indigo-700">
        Our Divisions
      </h1>

      {/* Large image section */}
      <div className="flex justify-center mb-12">
        <img
          src={divisionsImage}
          alt="Our Divisions"
          className="w-full h-auto rounded-sm shadow-md object-cover hover:scale-[1.02] transition-transform duration-500"
        />
      </div>

      {/* Division cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {divisions.map((division) => (
          <div
            key={division.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {division.name}
            </h2>
            <p className="text-gray-700">{division.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Divisions;
