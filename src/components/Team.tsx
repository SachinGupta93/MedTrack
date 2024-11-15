import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import Manoj from "../assets/Manoj.png";
import Karthik from "../assets/karthik.jpg";
import Ganesh from "../assets/Ganesh.png";
import Vikky from "../assets/Vikky.png";
import Bodhi from "../assets/Bodhi.jpg";
import Adarsh from "../assets/Adarsh.png";

interface TeamMemberData {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  github: string;
}

const team: TeamMemberData[] = [
  {
    name: 'Tiwari Naga Ganesh Prasad',
    role: 'Project Lead',
    image: Ganesh, // Replace with your image URL
    bio: 'Steering the ship and making sure it doesn\'t sink!',
    linkedin: "https://www.linkedin.com/in/tiwari-naga-ganesh-prasad-18b885191/",
    github: "https://github.com/Ganesh540-crypto",
  },
  {
    name: 'MVSV Sai Karthik',
    role: 'Product Manager',
    image: Karthik, // Replace with your image URL
    bio: 'Keeping the chaos organized and users happy.',
    linkedin: 'https://www.linkedin.com/in/m-v-s-v-sai-karthik-5959b82a5/',
    github: 'https://github.com/saikarthik2204',
  },
  {
    name: 'Surampudi Adarsh',
    role: 'Technical Lead',
    image: Adarsh, // Replace with your image URL
    bio: 'Turning caffeine into code, one bug at a time.',
    linkedin: 'https://www.linkedin.com/in/surampudi-adarsh-54226b25b1',
    github: 'https://github.com/Adarsh1457',
  },
  {
    name: 'M Raj Mehathah',
    role: 'Marketing & Outreach Lead',
    image: Vikky, // Replace with your image URL
    bio: 'Crafting stories that make everyone say "Wow!"',
    linkedin: 'https://www.linkedin.com/in/rajmehathah/',
    github: 'https://github.com/Rajmehathah',
  },
  {
    name: 'Surya Bodhi Sathwa',
    role: 'UI/UX Designer',
    image: Bodhi, // Replace with your image URL
    bio: 'Making it pretty and easy, one pixel at a time.',
    linkedin: 'http://www.linkedin.com/in/bodhisathwa',
    github: 'https://github.com/bodhisathwa',
  },
  {
    name: 'M Manoj Kumar',
    role: 'Operations Coordinator',
    image: Manoj, // Replace with your image URL
    bio: 'Keeping the wheels turning behind the scenes.',
    linkedin: 'https://www.linkedin.com/in/manoj-myana-714399297',
    github: 'https://github.com/oliviadavis',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Meet Our Dream Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The people making the magic happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  github: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  bio,
  linkedin,
  github,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      <motion.div
        whileHover={{ y: -5, scale: 1.05 }}
        className="glass-card p-6 text-center shadow-lg rounded-xl bg-white hover:shadow-2xl transition-all duration-300"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-32 h-32 mx-auto mb-6"
        >
          <img
            src={image}
            alt={`Profile of ${name}`}
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-blue-600 font-medium mb-4">{role}</p>

        <div className="flex justify-center space-x-4">
          <SocialIcon icon={Linkedin} link={linkedin} />
          <SocialIcon icon={Github} link={github} />
        </div>

        {/* Updated Bio Section */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="bg-gray-100 p-4 rounded-lg mt-4 overflow-hidden"
        >
          <p className="text-gray-700 break-words">{bio}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SocialIcon: React.FC<{ icon: React.ComponentType<{ className?: string }>; link: string }> = ({
  icon: Icon,
  link,
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-gray-400 hover:text-blue-600 transition-colors"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export default Team;
