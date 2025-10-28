import React from 'react';

const HonoraryStaffCard = ({ name, title, image }) => (
  <div className="bg-orange-100 p-4 rounded-lg shadow-md text-center">
    <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-2" />
    <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
    <p className="text-sm text-gray-600">{title}</p>
  </div>
);

const AboutUs = () => {
  const staffMembers = [
    { name: "Calilead Muhiin", title: "Lead Coordinator", image: "https://via.placeholder.com/100" },
    { name: "Trtbiver Cailled", title: "Senior Advisor", image: "https://via.placeholder.com/100" },
    { name: "Lananding Nealth", title: "Project Manager", image: "https://via.placeholder.com/100" },
    { name: "Thetere Noilied", title: "HR Specialist", image: "https://via.placeholder.com/100" },
    { name: "Tiannenn Nualh", title: "Assistant", image: "https://via.placeholder.com/100" },
    { name: "Bungne Naaff", title: "Consultant", image: "https://via.placeholder.com/100" },
    { name: "Sohierin Staff", title: "Marketing Lead", image: "https://via.placeholder.com/100" },
    { name: "Walece Chimson", title: "Finance Officer", image: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500 to-orange-300 min-h-screen p-6">
      <header className="flex justify-between items-center mb-6">
        <div className="text-white text-2xl font-bold">About Us</div>
        <nav className="space-x-4">
          <a href="#" className="text-white hover:text-orange-100">Welcome</a>
          <a href="#" className="text-white hover:text-orange-100">Details</a>
          <a href="#" className="text-white hover:text-orange-100">Language</a>
        </nav>
      </header>
      <h1 className="text-4xl font-bold text-white text-center mb-8">Our Honorary Staff</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {staffMembers.map((member, index) => (
          <HonoraryStaffCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;