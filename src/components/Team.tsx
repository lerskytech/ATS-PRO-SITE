import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Julian Vance',
    role: 'Chief Architect & CEO',
    avatar: '/assets/avatar_2.png'
  },
  {
    name: 'Lena Petrova',
    role: 'Lead UX/UI Alchemist',
    avatar: '/assets/avatar_1.png'
  },
  {
    name: 'Kenji Tanaka',
    role: 'Head of Engineering',
    avatar: '/assets/avatar_2.png'
  }
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">The Architects of Tomorrow</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">Meet the visionaries turning bold ideas into digital landmarks.</p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={itemVariants}
            >
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-2 border-white/20 group-hover:border-cyan-400 transition-all duration-300 group-hover:shadow-[0_0_20px_5px_rgba(0,255,255,0.2)]">
                <img src={member.avatar} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-white">{member.name}</h3>
              <p className="text-cyan-400">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-white">Our Digital Forge</h3>
          <img src="/assets/office.png" alt="Office Interior" className="rounded-lg shadow-lg w-full h-auto object-cover border border-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
