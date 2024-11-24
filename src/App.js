import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PROJECTS, WORKS } from './constants';
import WordCloud from './WordCloud';
import NavBar from './NavBar'

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Animated geometric shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-xl"
          style={{  
            top: '10%',
            left: '10%',
            transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-xl"
          style={{
            top: '40%',
            right: '10%',
            transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.1}px)`,
          }}
        />
        <div 
          className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-xl"
          style={{
            bottom: '10%',
            left: '30%',
            transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.1}px)`,
          }}
        />
      </div>

      <NavBar/>

      {/* Header */}
      <header id="Header" className="relative pt-32 pb-16 text-center">
        <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
          Linhao Liu
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Software Developer
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/P311" className="text-gray-300 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/linhao-liu" className="text-gray-300 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:linhao.liu98@gmail.com" className="text-gray-300 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </header>


      <section id="Experience" className="relative max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
        {WORKS.map((work) => (
          <section className="mb-32">
            <div className="bg-white/5 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6">{work.title}</h2>
              <h4 className="text-xl font-bold text-white mb-6 hover:text-gray-200 underline"> <a href={work.link}> {work.company} </a></h4>
              <h4 className="text-xl font-bold text-white mb-6"> {work.location} | {work.time} </h4>
              <p className="text-xl text-gray-200 leading-relaxed">
                <ul class="list-disc list-inside" role="list">
                  {work.description.map((bullet) => (
                    <li class="my-2">{bullet}</li>
                  ))}
                </ul>
              </p>
              <div className="mt-5 flex flex-wrap gap-6">
                {work.tags.map((tag) => (
                  <span
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-gray-700 rounded-full text-xl transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </section>

      <section id="Skills">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
        <WordCloud/>
      </section>

      <section id="Projects" className="relative max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <a href = {project.link}>
              <div 
                key={project}
                className="group relative bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
              >
                <div className="aspect-video">
                  <img src={`assets/${project.img}`} className="w-full h-80 object-cover"/>
                </div>
                <div className="p-6 h-40">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    <ul class="list-disc list-inside" role="list">
                      {project.description.map((bullet) => (
                        <li class="my-2">{bullet}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* Contact Section */}
      <section id="Contact" className="relative max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
        <p className="text-gray-300 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        <a 
          href="mailto:linhao.liu98@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
};

export default App;