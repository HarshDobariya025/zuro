import { Linkedin, Users } from "lucide-react";

interface TeamMember {
  image: string;
  name: string;
  title: string;
  linkedinUrl: string;
}

function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      image: "./user.png",
      name: "Vansh Patel",
      title: "CEO & Founder",
      linkedinUrl: "https://linkedin.com/in/johndoe",
    },
    {
      image: "./user.png",
      name: "Urvish Mali",
      title: "Team Lead",
      linkedinUrl: "https://linkedin.com/in/janesmith",
    },
    {
      image: "./user.png",
      name: "Priyanshu Valiya",
      title: "Intern",
      linkedinUrl: "https://linkedin.com/in/michaelbrown",
    },
  ];

  return (
    <section className="bg-lightBg py-16 px-4 md:px-8 text-darkText">
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 bg-white px-2 py-1 rounded-full text-sm font-medium mb-4">
          <div className="flex justify-center items-center bg-[#B4ff8B] h-10 w-10 rounded-full">
            <Users />
          </div>
          <h2 className="text-lg">Our Team</h2>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium">
          <div>Meet the People</div>
          <div className="mt-2">Behind JGS Terminal</div>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto scale-90">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-between text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full rounded-t-2xl object-cover"
            />
            <div className="flex justify-between items-center w-full mt-4 px-4 mb-1">
              <div className="flex flex-col items-start">
                <h2 className="font-semibold text-xl">{member.name}</h2>
                <p className="text-gray-600">{member.title}</p>
              </div>
              <div className="bg-[#B4ff8B] h-10 w-10 flex justify-center items-center rounded-full">
                <a href={member.linkedinUrl}><Linkedin /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
