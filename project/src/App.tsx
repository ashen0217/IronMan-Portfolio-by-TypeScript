import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Code, 
  Cpu, 
  Shield, 
  Rocket,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ExternalLink
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                STARK
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-300 hover:text-red-400 ${
                    activeSection === item.id ? 'text-red-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-red-500/20">
            <div className="px-4 py-2 space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900/20 to-yellow-900/20"></div>
        
        {/* Arc Reactor Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-96 h-96 rounded-full border-4 border-blue-400/30 animate-pulse"></div>
            <div className="absolute inset-8 rounded-full border-2 border-blue-300/50 animate-spin" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-16 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse shadow-2xl shadow-blue-400/50"></div>
            <div className="absolute inset-24 rounded-full bg-gradient-to-r from-white to-blue-100 animate-pulse"></div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 bg-clip-text text-transparent animate-pulse">
            TONY STARK
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Genius, Billionaire, Playboy, Philanthropist
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Welcome to my digital workshop. I'm Tony Stark, and I build the impossible.
            From revolutionary clean energy to cutting-edge AI, explore my innovations that shape tomorrow.
          </p>
          <button
            onClick={() => scrollToSection('about')}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
          >
            <span>Explore My World</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                About Tony Stark
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  As the CEO of Stark Industries and the armored superhero Iron Man, I've dedicated my life to 
                  advancing technology for the betterment of humanity. My journey from weapons manufacturer to 
                  clean energy pioneer has been driven by innovation and responsibility.
                </p>
                <p className="text-lg leading-relaxed">
                  With multiple degrees from MIT and decades of engineering experience, I specialize in:
                </p>
                <ul className="space-y-3">
                  {[
                    'Advanced Propulsion Systems',
                    'Artificial Intelligence Development',
                    'Clean Energy Solutions',
                    'Nanotechnology Applications',
                    'Quantum Computing Research'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-500/20 to-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm border border-red-500/20">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Iron Man Mark 85</h3>
                  <p className="text-gray-300 mb-6">
                    The pinnacle of engineering excellence, combining nanotechnology with arc reactor power.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="text-red-400 font-semibold">Power Output</div>
                      <div className="text-white">8 GJ/s</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="text-red-400 font-semibold">Max Speed</div>
                      <div className="text-white">Mach 3.2</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="text-red-400 font-semibold">Materials</div>
                      <div className="text-white">Vibranium</div>
                    </div>
                    <div className="bg-gray-700/50 rounded-lg p-3">
                      <div className="text-red-400 font-semibold">AI System</div>
                      <div className="text-white">FRIDAY</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-400">
              Cutting-edge technologies that power the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code, title: 'Software Engineering', level: 98, description: 'Advanced AI algorithms and system architecture' },
              { icon: Cpu, title: 'Hardware Design', level: 96, description: 'Custom processors and circuit optimization' },
              { icon: Zap, title: 'Energy Systems', level: 99, description: 'Arc reactor technology and clean energy' },
              { icon: Shield, title: 'Defense Systems', level: 95, description: 'Advanced armor and protection protocols' },
              { icon: Rocket, title: 'Propulsion Tech', level: 94, description: 'Repulsor technology and flight systems' },
              { icon: Code, title: 'Quantum Computing', level: 92, description: 'Next-generation computational systems' }
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center mr-4">
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{skill.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">Proficiency</span>
                    <span className="text-red-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-red-500 to-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Stark Industries Projects
            </h2>
            <p className="text-xl text-gray-400">
              Revolutionary innovations that changed the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Arc Reactor Technology',
                description: 'Clean, sustainable energy source powering the future of civilization.',
                tech: ['Palladium Core', 'Vibranium Housing', 'Quantum Field'],
                status: 'Production Ready'
              },
              {
                title: 'Iron Man Suit Series',
                description: 'Advanced powered exoskeleton with AI integration and defense capabilities.',
                tech: ['Nanotechnology', 'Repulsors', 'FRIDAY AI'],
                status: 'Mark 85 Complete'
              },
              {
                title: 'JARVIS AI System',
                description: 'Advanced artificial intelligence for home automation and assistance.',
                tech: ['Machine Learning', 'Neural Networks', 'Voice Recognition'],
                status: 'Evolved to Vision'
              },
              {
                title: 'Stark Tower',
                description: 'Self-sustaining skyscraper powered entirely by clean energy.',
                tech: ['Arc Reactor Grid', 'Smart Building', 'Holographic Interface'],
                status: 'Operational'
              },
              {
                title: 'Quantum Tunnel Technology',
                description: 'Revolutionary transportation system using quantum mechanics.',
                tech: ['Quantum Physics', 'Pym Particles', 'Time Navigation'],
                status: 'Successfully Tested'
              },
              {
                title: 'EDITH Defense System',
                description: 'Global defense network with satellite-based threat assessment.',
                tech: ['Satellite Network', 'AI Targeting', 'Drone Technology'],
                status: 'Legacy Project'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
                  </div>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Status:</span>
                    <span className="text-xs text-green-400 font-semibold">{project.status}</span>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-red-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400">
              Ready to discuss the next breakthrough innovation?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'tony@starkindustries.com' },
                    { icon: Phone, label: 'Phone', value: '+1 (555) STARK-01' },
                    { icon: MapPin, label: 'Location', value: 'Stark Tower, New York City' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">{item.label}</div>
                        <div className="text-white font-semibold">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, label: 'GitHub' },
                    { icon: Linkedin, label: 'LinkedIn' },
                    { icon: Twitter, label: 'Twitter' }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
                >
                  Launch Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-red-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
                STARK INDUSTRIES
              </span>
            </div>
            <div className="text-gray-400 text-sm text-center">
              <p>© 2024 Stark Industries. All rights reserved.</p>
              <p className="mt-1">Built with React and powered by Arc Reactor technology.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;