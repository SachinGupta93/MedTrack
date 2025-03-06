import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import Adarsh from "../assets/7.png";
import Ganesh from "../assets/4.png";
import Karthik from "../assets/6.png";
import Vishnu from "../assets/3.png";
import Sachin from "../assets/2.png";
import Vikky from "../assets/8.png";
import Nagaraj from "../assets/5.png";
import Shivani from "../assets/1.png";

interface TeamMemberData {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  github: string;
  email?: string;
}

const team: TeamMemberData[] = [
  {
    name: 'Tiwari Naga Ganesh Prasad',
    role: 'Founder & CEO',
    image: Ganesh,
    bio: 'Steering the ship and making sure it doesn\'t sink!',
    linkedin: "https://www.linkedin.com/in/tiwari-naga-ganesh-prasad-18b885191/",
    github: "https://github.com/Ganesh540-crypto",
    email: "tiwari@medtrack.co.in",
  },
  {
    name: 'Surampudi Adarsh',
    role: 'Chief Technology officer (CTO)',
    image: Adarsh,
    bio: 'Code wizard fueled by caffeine and brilliance!',
    linkedin: 'https://www.linkedin.com/in/surampudi-adarsh-54226b25b',
    github: 'https://github.com/Adarsh1457',
    email: 'adarsh@medtrack.co.in',
  },
  {
    name: 'M Raj Mehathah',
    role: 'Sacial Media Manager',
    image: Vikky,
    bio: 'Digital storyteller breaking the internet daily!',
    linkedin: 'https://www.linkedin.com/in/rajmehathah',
    github: 'https://github.com/Rajmehathah',
    email: 'rajmehathah@medtrack.co.in',
  },
  {
    name: 'V Vishnu Vardhan Charry',
    role: 'Software Engineer',
    image: Vishnu,
    bio: 'Bug slayer with keyboard ninja skills!',
    linkedin: 'https://www.linkedin.com/in/vishnu-vardhan-chary-1158832a0/',
    github: 'https://github.com/VishnuChary36',
    email: 'vishnuchary@medtrack.co.in',
  },
  {
    name: 'Nagaraju Goud Goda',
    role: 'Chief Marketing Officer (CMO)',
    image: Nagaraj,
    bio: 'Marketing maverick with conversion magic!',
    linkedin: 'https://www.linkedin.com/in/godha-nagaraju-b86aab2a0',
    github: 'https://github.com/9390685994',
    email: 'nagaraju@medtrack.co.in',
  },
  {
    name: 'Sachin Gupta',
    role: 'Lead Developer',
    image: Sachin,
    bio: 'Code architect crafting digital wonders!',
    linkedin: 'https://www.linkedin.com/in/sachin-gupta-05aab3259',
    github: 'https://github.com/SachinGupta93',
    email: 'sachingupta@medtrack.co.in',
  },
  {
    name: 'MVSV Sai Karthik',
    role: 'Growth Hacker',
    image: Karthik,
    bio: 'Growth alchemist turning data into gold!',
    linkedin: 'http://www.linkedin.com/in/saikarthik22',
    github: 'https://github.com/saikarthik2204',
    email: 'saikarthik@medtrack.co.in',
  },
  {
    name: 'Puttoju Sai Shivani',
    role: 'Graphic designer',
    image: Shivani,
    bio: 'Pixel sorceress creating visual spells!',
    linkedin: 'https://www.linkedin.com/in/shivani-puttoju',
    github: 'https://github.com/shivanis-git',
    email: 'shivaniputtoju@medtrack.co.in',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>

      <div className="container-custom relative z-10">
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
            Passionate individuals working together to revolutionize healthcare management.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
  email,
  index,
}) => {
  // Function to handle email click
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>, emailAddress: string) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -5 }}
        className="relative group"
      >
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-lg transition-all duration-300 group-hover:shadow-xl">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            
            {/* Social Links - Appear on Hover */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100"
            >
              <SocialLink href={linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialLink href={github} icon={Github} label="GitHub" />
              {email && (
                <motion.a
                  href="#"
                  onClick={(e) => handleEmailClick(e, email)}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-neutral-700 hover:text-primary hover:bg-white transition-colors shadow-lg"
                  title={`Email ${name}`}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                {name}
              </h3>
              <p className="text-secondary font-medium mb-2 text-sm">{role}</p>
              <p className="text-neutral-600 text-sm">{bio}</p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-xl group-hover:opacity-100 transition-opacity duration-300 opacity-0" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SocialLink: React.FC<{
  href: string;
  icon: React.ComponentType<any>;
  label: string;
}> = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, y: -2 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-neutral-700 hover:text-primary hover:bg-white transition-colors shadow-lg"
    title={label}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
);

export default Team;