import React, { useState } from "react";
import { Clock, Users, BookOpen, Link, Info } from "lucide-react";

const ClassScheduler = () => {
  const [selectedDate, setSelectedDate] = useState("Mon");
  const [selectedTime, setSelectedTime] = useState("6 - 7 AM");

  const days = [
    { name: "Mon", fullName: "Monday", date: "June 1" },
    { name: "Tue", fullName: "Tuesday", date: "June 1" },
    { name: "Wed", fullName: "Wednesday", date: "June 1" },
    { name: "Thu", fullName: "Thursday", date: "June 1" },
    { name: "Fri", fullName: "Friday", date: "June 1" },
    { name: "Sat", fullName: "Saturday", date: "June 1" },
    { name: "Sun", fullName: "Sunday", date: "June 1" },
  ];

  const timeSlots = [
    { label: "Morning", time: "6 - 7 AM" },
    { label: "Morning", time: "7 - 8 AM" },
  ];

  const handleDateClick = (day) => {
    setSelectedDate(day.name);
    console.log(`Selected date: ${day.fullName} - ${day.date}`);
  };

  const handleTimeClick = (slot) => {
    setSelectedTime(slot.time);
    console.log(`Selected time: ${slot.label} ${slot.time}`);
  };

  const handleCopyLink = () => {
    console.log("Copy Class Link clicked");
    // Simulate copying to clipboard
    navigator.clipboard.writeText("https://example.com/class-link").then(() => {
      console.log("Class link copied to clipboard");
    });
  };

  const handleScheduleClass = () => {
    console.log("Schedule Class button clicked");
    console.log(`Scheduling class for: ${selectedDate} at ${selectedTime}`);
    if (!selectedDate || !selectedTime) {
      console.log("Please select both date and time");
      alert("Please select both date and time");
      return;
    }
    console.log("Class scheduled successfully!");
    alert("Class scheduled successfully!");
  };

  return (
    <div className="min-h-screen p-4 md:p-8 container mx-auto">
      <div className="mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 lg:mb-8">
          Schedule Your Class
        </h1>

        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Image and Copy Link */}
            <div className="">
              <div className="w-full">
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400&h=300&fit=crop"
                  alt="Student working with robotics kit"
                  className="w-full h-52 lg:h-full object-cover rounded-2xl mb-4"
                />
              </div>
              <button
                onClick={handleCopyLink}
                className="flex justify-center cursor-pointer bg-gray-200 py-3 px-6 rounded-2xl font-semibold shadow-md hover:shadow-lg w-full items-center gap-2 text-gray-400 hover:text-gray-500 hover:bg-gray-300 transition-colors duration-200 mb-3"
              >
                <Link size={16} />
                <span className="">Copy Class Link</span>
              </button>
              <button
                onClick={handleScheduleClass}
                className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Schedule Class
              </button>
            </div>

            {/* Right side - Class details and scheduling */}
            <div className="lg:w-2/3 py-6 lg:py-0 lg:px-6">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                Foundation And The Basics
              </h2>

              <p className="text-gray-600 mb-6">
                A Subset Of AI That Enables Machines To Learn From Data And
                Improve Their Performance Over Time Without Being Explicitly
                Programmed.
              </p>

              {/* Class Info */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users size={16} />
                  <span className="text-sm">5th+ Class</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={16} />
                  <span className="text-sm">2 Hours</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BookOpen size={16} />
                  <span className="text-sm">Project 0</span>
                </div>
              </div>

              {/* Choose Date */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose A Date
                </h3>
                <div className="grid grid-cols-2 sm:flex flex-wrap gap-3">
                  {days.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => handleDateClick(day)}
                      className={`px-6 sm:px-8 py-2 rounded-xl cursor-pointer text-center transition-all duration-200 border-2 ${
                        selectedDate === day.name
                          ? "border-green-400 bg-green-50 text-green-700"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="font-medium text-sm">{day.name}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {day.date}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
                  <Info size={20} />
                  <span>
                    Note: You Need Schedule Two Or Three Days Before The Actual
                    Class Start.
                  </span>
                </div>
              </div>

              {/* Choose Time */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Choose The Time Of The Day
                </h3>
                <div className="grid grid-cols-2 sm:flex flex-wrap gap-3">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeClick(slot)}
                      className={`px-6 py-2 rounded-xl cursor-pointer text-sm font-medium transition-all duration-200 border-2 ${
                        selectedTime === slot.time
                          ? "border-green-400 bg-green-50 text-green-700"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div>{slot.label}</div>
                      <div className="text-xs text-gray-500">{slot.time}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassScheduler;
