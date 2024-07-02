/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/WKjaIhlwDA8
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
"use client";

import React from "react";
import './nav.css';

function Nav() {
  const [openMenu, setOpenMenu] = React.useState(null);
  const [aboutAeonOpen, setAboutAeonOpen] = React.useState(false);
  const [navOpen, setNavOpen] = React.useState(false);
  const [showBookingWidget, setShowBookingWidget] = React.useState(false);
  const [bookingDate, setBookingDate] = React.useState(null);
  const [bookingTime, setBookingTime] = React.useState(null);
  const [contactInfo, setContactInfo] = React.useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
  });
  const [confirmationVisible, setConfirmationVisible] = React.useState(false);

  const toggleMenu = (index) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === index ? null : index));
  };
  const toggleAboutAeon = () => {
    setAboutAeonOpen((prevState) => !prevState);
  };
  const toggleNav = () => {
    setNavOpen((prevState) => !prevState);
  };
  const toggleBookingWidget = () => {
    setShowBookingWidget((prevState) => !prevState);
  };
  const handleDateChange = (date) => {
    setBookingDate(date);
  };
  const handleTimeChange = (time) => {
    setBookingTime(time);
  };
  const handleContactInfoChange = (field, value) => {
    setContactInfo((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };
  const handleConfirmation = () => {
    setConfirmationVisible(true);
  };

  return (
    <div className={`nav ${navOpen ? "bg-black text-white" : "bg-transparent text-black"} min-h-screen`}>
      <header className="nav-header flex items-center justify-between p-8 border-b border-gray-700 relative">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">AEON</span>
        </div>
        <div className="flex items-center">
          <div className="h-full border-r border-gray-700 mr-2" />
          <MenuIcon className="w-6 h-6 cursor-pointer" onClick={toggleNav} />
        </div>
        <div className="absolute right-1/4 transform -translate-x-1/2 h-full border-r border-gray-700" />
      </header>
      {navOpen && (
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center border-b border-gray-700 py-4" onClick={() => toggleMenu(0)}>
              <span className="text-lg">Functional Medicine</span>
              {openMenu === 0 ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
            </div>
            {openMenu === 0 && (
              <div className="flex flex-col space-y-2 pl-4">
                <div className="flex justify-between items-center py-4">
                  <span>Sub 1</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 2</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 3</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center border-b border-gray-700 py-4" onClick={() => toggleMenu(1)}>
              <span className="text-lg">Epigenetic Tuning</span>
              {openMenu === 1 ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
            </div>
            {openMenu === 1 && (
              <div className="flex flex-col space-y-2 pl-4">
                <div className="flex justify-between items-center py-4">
                  <span>Sub 1</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 2</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 3</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center border-b border-gray-700 py-4" onClick={() => toggleMenu(2)}>
              <span className="text-lg">Hormone Normalization</span>
              {openMenu === 2 ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
            </div>
            {openMenu === 2 && (
              <div className="flex flex-col space-y-2 pl-4">
                <div className="flex justify-between items-center py-4">
                  <span>Sub 1</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 2</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 3</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center border-b border-gray-700 py-4" onClick={() => toggleMenu(3)}>
              <span className="text-lg">Cardiometabolic Health</span>
              {openMenu === 3 ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
            </div>
            {openMenu === 3 && (
              <div className="flex flex-col space-y-2 pl-4">
                <div className="flex justify-between items-center py-4">
                  <span>Sub 1</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 2</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 3</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center border-b border-gray-700 py-4" onClick={() => toggleMenu(4)}>
              <span className="text-lg">Neurocognitive Performance</span>
              {openMenu === 4 ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
            </div>
            {openMenu === 4 && (
              <div className="flex flex-col space-y-2 pl-4">
                <div className="flex justify-between items-center py-4">
                  <span>Sub 1</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 2</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 3</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center border-b border-gray-700 py-4" onClick={() => toggleMenu(5)}>
              <span className="text-lg">Hair Restoration</span>
              {openMenu === 5 ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
            </div>
            {openMenu === 5 && (
              <div className="flex flex-col space-y-2 pl-4">
                <div className="flex justify-between items-center py-4">
                  <span>Sub 1</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 2</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 3</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center border-b border-gray-700 py-4" onClick={() => toggleMenu(6)}>
              <span className="text-lg">Sleep & Travel Wellness</span>
              {openMenu === 6 ? <MinusIcon className="w-4 h-4" /> : <PlusIcon className="w-4 h-4" />}
            </div>
            {openMenu === 6 && (
              <div className="flex flex-col space-y-2 pl-4">
                <div className="flex justify-between items-center py-4">
                  <span>Sub 1</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 2</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span>Sub 3</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col space-y-2" onClick={toggleAboutAeon}>
            <div className="flex justify-between items-center border-b border-gray-700 py-4">
              <span className="text-lg cursor-pointer">About Aeon</span>
            </div>
            {aboutAeonOpen && (
              <div className="flex flex-col space-y-2 pl-4">
                <div className="py-4">
                  <p>
                    Aeon is a leading provider of personalized healthcare solutions, dedicated to helping individuals
                    achieve optimal health and wellness through a holistic approach.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-between items-center border-b border-gray-700 py-4" onClick={toggleBookingWidget}>
            <span className="text-lg cursor-pointer">Schedule</span>
          </div>
        </div>
      )}
      {showBookingWidget && (
        <div className="p-4">
          <div>
            <h2 className="text-lg font-bold mb-2">Select Date and Time</h2>
            <div className="flex space-x-4">
              <div>
                <label htmlFor="date" className="block mb-1">Date</label>
                <input type="date" id="date" value={bookingDate} onChange={(e) => handleDateChange(e.target.value)} className="bg-gray-800 text-white px-2 py-1 rounded" />
              </div>
              <div>
                <label htmlFor="time" className="block mb-1">Time</label>
                <input type="time" id="time" value={bookingTime} onChange={(e) => handleTimeChange(e.target.value)} className="bg-gray-800 text-white px-2 py-1 rounded" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">Contact Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">First Name</label>
                <input type="text" id="firstName" value={contactInfo.firstName} onChange={(e) => handleContactInfoChange("firstName", e.target.value)} className="bg-gray-800 text-white px-2 py-1 rounded w-full" />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">Last Name</label>
                <input type="text" id="lastName" value={contactInfo.lastName} onChange={(e) => handleContactInfoChange("lastName", e.target.value)} className="bg-gray-800 text-white px-2 py-1 rounded w-full" />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="block mb-1">Mobile Number</label>
                <input type="tel" id="mobileNumber" value={contactInfo.mobileNumber} onChange={(e) => handleContactInfoChange("mobileNumber", e.target.value)} className="bg-gray-800 text-white px-2 py-1 rounded w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" value={contactInfo.email} onChange={(e) => handleContactInfoChange("email", e.target.value)} className="bg-gray-800 text-white px-2 py-1 rounded w-full" />
              </div>
            </div>
            <div className="mt-4">
              <button onClick={handleConfirmation} className="bg-blue-500 text-white px-4 py-2 rounded">Confirm Booking</button>
            </div>
          </div>
        </div>
      )}
      {confirmationVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-8 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Appointment Confirmed</h2>
            <p>Your appointment has been confirmed for {bookingDate && bookingTime ? `${bookingDate} at ${bookingTime}` : "the selected date and time"}.</p>
            <p>You will receive a confirmation SMS or email with the details.</p>
            <button onClick={() => setConfirmationVisible(false)} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MinusIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default Nav;
