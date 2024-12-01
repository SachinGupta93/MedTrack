import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
import Manoj from "../assets/Manoj.png";
import Karthik from "../assets/Karthik.jpg";
import Ganesh from "../assets/Ganesh.png";
import Vikky from "../assets/Vikky.png";
import Adarsh from "../assets/Adarsh.png";
import Nagaraju from "../assets/Nagaraju.jpg";

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
    role: 'Founder & CEO',
    image: Ganesh,
    bio: 'Steering the ship and making sure it doesn\'t sink!',
    linkedin: "https://www.linkedin.com/in/tiwari-naga-ganesh-prasad-18b885191/",
    github: "https://github.com/Ganesh540-crypto",
  },
  {
    name: 'MVSV Sai Karthik',
    role: 'Outreach Manager',
    image: Karthik,
    bio: 'Keeping the chaos organized and users happy.',
    linkedin: 'https://www.linkedin.com/in/m-v-s-v-sai-karthik-5959b82a5/',
    github: 'https://github.com/saikarthik2204',
  },
  {
    name: 'Surampudi Adarsh',
    role: 'Technical Lead',
    image: Adarsh,
    bio: 'Turning caffeine into code, one bug at a time.',
    linkedin: 'https://www.linkedin.com/in/surampudi-adarsh-54226b25b',
    github: 'https://github.com/Adarsh1457',
  },
  {
    name: 'M Raj Mehathah',
    role: 'Marketing Lead',
    image: Vikky,
    bio: 'Crafting stories that make everyone say "Wow!"',
    linkedin: 'https://www.linkedin.com/in/rajmehathah/',
    github: 'https://github.com/Rajmehathah',
  },
  {
    name: 'Nagaraju Goud Goda',
    role: 'Operations Lead',
    image: Nagaraju,
    bio: 'Making it pretty and easy, one pixel at a time.',
    linkedin: 'https://www.linkedin.com/in/godha-nagaraju-b86aab2a0',
    github: 'https://github.com/bodhisathwa',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-neutral-600 bg-neutral-100 px-4 py-2 rounded-full">
            Our Team
          </span>
          <h2 className="text-4xl font-bold mt-6 mb-4">
            Meet the Minds Behind
            <span className="heading-gradient block">
              MedTrack
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
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

interface TeamMemberProps extends TeamMemberData {
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
        whileHover={{ y: -5 }}
        className="card p-6 text-center group"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="relative w-36 h-36 md:w-32 md:h-32 mx-auto mb-6"
        >
          <img
            src={image}
            alt={`Profile of ${name}`}
            className="w-full h-full object-cover rounded-full ring-4 ring-neutral-100 group-hover:ring-secondary transition-colors duration-300"
          />
        </motion.div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-secondary font-medium mb-4">{role}</p>

        <div className="flex justify-center space-x-4 mb-4">
          <SocialIcon icon={Linkedin} link={linkedin} />
          <SocialIcon icon={Github} link={github} />
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileHover={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="hidden md:block bg-neutral-50 p-4 rounded-lg mt-4 overflow-hidden"
        >
          <p className="text-neutral-600 break-words">{bio}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
const SocialIcon: React.FC<{ 
  icon: React.ComponentType<{ className?: string }>;
  link: string;
}> = ({ icon: Icon, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2 }}
    whileTap={{ scale: 0.9 }}
    className="text-neutral-400 hover:text-secondary transition-colors"
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export default Team;