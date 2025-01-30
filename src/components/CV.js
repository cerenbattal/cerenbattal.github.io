import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import profilePicture from '../assets/profile.jpeg';
import { AnimatedText } from './AnimatedText';
import { useRef, useEffect, useState } from 'react';
import TypingText from './TypingText';

// Create a reusable text container class
const animatedTextClasses = "whitespace-break-spaces break-words inline-flex flex-wrap [word-break:break-word]";

function CV() {
  const { darkMode, setDarkMode } = useTheme();
  
  // Refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const certificationsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const [yearsOfExperience, setYearsOfExperience] = useState(0);

  useEffect(() => {
    const calculateExperience = () => {
      const startDate = new Date(2019, 9); // October 2019 (month is 0-based)
      const today = new Date();
      const yearsDiff = (today - startDate) / (1000 * 60 * 60 * 24 * 365.25); // Using 365.25 to account for leap years
      return Math.floor(yearsDiff);
    };

    setYearsOfExperience(calculateExperience());
  }, []);

  // Smooth scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navigation Bar - Make it full width with proper alignment */}
      <nav className="sticky top-0 z-50 w-screen bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Desktop navigation - Aligned to left */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(experienceRef)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection(educationRef)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection(certificationsRef)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection(skillsRef)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button - Only visible on mobile */}
            <button className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Theme Toggle - Always aligned to right */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 ml-auto md:ml-0"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-yellow-500" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        

        {/* Profile Section with CV Button */}
        <div className="text-center mb-12 relative">
          <img
            src={profilePicture}
            alt="Ceren Battal"
            className="w-20 h-20 sm:w-[100px] sm:h-[100px] rounded-full mx-auto mb-4 object-cover border-2 border-gray-200 dark:border-gray-700"
          />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            <AnimatedText text="Ceren Battal" />
          </h1>
          <TypingText />
          
          {/* CV Button */}
          <a
            href="https://drive.google.com/file/d/1-EaOU2SzIcmXZI1PK7tK1FXtqgT1HaOS/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            <span className="font-semibold">
              <AnimatedText text="View CV" />
            </span>
          </a>
        </div>

        {/* Summary Section */}
        <section ref={aboutRef} className="mb-8 p-6 sm:p-8 lg:p-10 rounded-lg transition-all duration-300 hover:bg-white/30 dark:hover:bg-gray-800/30 hover:shadow-lg group">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <AnimatedText text="About Me" />
          </h2>
          <div className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            <AnimatedText 
              text={`Frontend Developer with ${yearsOfExperience}+ years of experience specializing in React.js and modern web technologies. Proven track record in developing scalable web applications and implementing responsive user interfaces. Experienced in working with international teams in agile environments. Strong focus on clean code practices, test-driven development, and staying current with emerging technologies. Passionate about creating efficient, maintainable, and user-friendly web solutions.`}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} className="mb-8 p-6 sm:p-8 lg:p-10 rounded-lg transition-all duration-300 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:shadow-lg group">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400">
            <AnimatedText 
              text="Professional Experience"
              className={animatedTextClasses}
            />
          </h2>
          <div className="space-y-8">
            {/* Siemens */}
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 transition-all duration-300 hover:border-purple-500">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                <AnimatedText 
                  text="Software Developer"
                  className={animatedTextClasses}
                />
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                <AnimatedText 
                  text="Siemens"
                  className={animatedTextClasses}
                />
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 mb-4">
                <AnimatedText 
                  text="Dec 2021 - Present"
                  className={animatedTextClasses}
                />
              </p>
              
              <div className="text-base sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 space-y-3 ml-4">
                <p className="font-semibold">
                  <AnimatedText 
                    text="Responsibilities:"
                    className={animatedTextClasses}
                  />
                </p>
                <ul className="list-disc space-y-3 ml-4">
                  <li>
                    <AnimatedText 
                      text="Develop the product by technologies:"
                      className={animatedTextClasses}
                    />
                    <ul className="list-none ml-4 mt-2 grid grid-cols-2 gap-2">
                      {[
                        'ReactJS',
                        'TailwindCSS',
                        'Webpack',
                        'Redux Toolkit',
                        'Axios',
                        'React Router',
                        'TypeScript',
                        'i18n',
                        'Chart.js',
                        'React Testing Library & Jest',
                        'JSON & REST APIs',
                        'VSCode, TFS, Git',
                        'SonarQube'
                      ].map((tech) => (
                        <li key={tech} className="flex items-center space-x-2">
                          <span className="text-purple-500 dark:text-purple-400">•</span>
                          <AnimatedText 
                            text={tech}
                            className={animatedTextClasses}
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <AnimatedText 
                      text="Work side-by-side with UX/UI Designers."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Implement web design by UX output such as wireframes, design mock-ups, Figma, flow charts, functional specifications documents, and company style guidelines."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Provide clean and effective implementation by following coding convention guides."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Implement reusable components."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Make monthly online presentations and demonstrations about the current status of the project."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Participate in scrum meetings with an international team."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Participate in code reviews."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Develop features and fix bugs in regular sprint durations."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="View SonarQube reports and handle code smells, bugs... etc."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Get experience with linting and code formatting tools (ESLint & Prettier)."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Participate in pair programming sessions."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Write unit tests with React testing library and Jest to reach the target code coverage rate."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Stay up-to-date on popular web technologies."
                      className={animatedTextClasses}
                    />
                  </li>
                </ul>
              </div>
            </div>

            {/* Orion Innovation */}
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 transition-all duration-300 hover:border-purple-500">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                <AnimatedText 
                  text="R&D Software Design Engineer"
                  className={animatedTextClasses}
                />
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                <AnimatedText 
                  text="Orion Innovation Turkey"
                  className={animatedTextClasses}
                />
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 mb-4">
                <AnimatedText 
                  text="Oct 2019 - Dec 2021 · 2 yrs 3 mos"
                  className={animatedTextClasses}
                />
              </p>

              <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4">
                <p className="whitespace-break-spaces break-words leading-relaxed hyphens-auto" style={{ hyphens: 'auto' }}>
                  <AnimatedText 
                    text="Smart Office Client side project Cordova based (Windows, macOS, Android, IOS) which has WebRTC features such as instant messaging, voice calls, video calls."
                    className="whitespace-break-spaces break-words inline-flex flex-wrap hyphens-auto"
                    style={{ hyphens: 'auto' }}
                  />
                </p>

                <p className="font-semibold mt-4">
                  <AnimatedText 
                    text="Responsibilities:"
                    className={animatedTextClasses}
                  />
                </p>
                
                <ul className="list-disc space-y-3 ml-4">
                  <li>
                    <AnimatedText 
                      text="Worked as a Frontend Developer on both mobile and web sides of the application."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Participate in scrum meetings, sprint planning, and reviews."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Develop the product with:"
                      className={animatedTextClasses}
                    />
                    <ul className="list-none ml-4 mt-2 grid grid-cols-2 gap-2">
                      {[
                        'Javascript ES5/ES6',
                        'AngularJS',
                        'WebRTC',
                        'Redux-Saga',
                        'WebSocket',
                        'SASS',
                        'Git',
                        'Bitbucket',
                        'Jira',
                        'Grunt',
                        'Jenkins'
                      ].map((tech) => (
                        <li key={tech} className="flex items-center space-x-2">
                          <span className="text-purple-500 dark:text-purple-400">•</span>
                          <AnimatedText 
                            text={tech}
                            className={animatedTextClasses}
                          />
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <AnimatedText 
                      text="Experience with RESTful APIs."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Participate in code reviews."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Develop stories and fix bugs in regular sprint durations."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Write feature specification documents and functional guides."
                      className={animatedTextClasses}
                    />
                  </li>
                  <li>
                    <AnimatedText 
                      text="Stay up-to-date on emerging technologies."
                      className={animatedTextClasses}
                    />
                  </li>
                </ul>
              </div>
            </div>

            {/* NETAŞ */}
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 transition-all duration-300 hover:border-purple-500">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                <AnimatedText 
                  text="Software Engineer Intern"
                  className={animatedTextClasses}
                />
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                <AnimatedText 
                  text="NETAŞ"
                  className={animatedTextClasses}
                />
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 mb-2">
                <AnimatedText 
                  text="Jul 2019 - Sep 2019 · 3 months"
                  className={animatedTextClasses}
                />
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300 space-y-2">
                <li><AnimatedText 
                  text="Worked as an intern on a responsive web application."
                  className={animatedTextClasses}
                /></li>
                <li><AnimatedText 
                  text="Worked on design and functional problems on the application."
                  className={animatedTextClasses}
                /></li>
                <li><AnimatedText 
                  text="Technologies used: C#, HTML & CSS & Bootstrap, jQuery, Javascript, Angularjs, MVC."
                  className={animatedTextClasses}
                /></li>
              </ul>
            </div>

            {/* Tech Data */}
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 transition-all duration-300 hover:border-purple-500">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                <AnimatedText 
                  text="Software Engineer Intern"
                  className={animatedTextClasses}
                />
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                <AnimatedText 
                  text="Tech Data"
                  className={animatedTextClasses}
                />
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 mb-2">
                <AnimatedText 
                  text="Aug 2017 - Sep 2017 · 2 mos"
                  className={animatedTextClasses}
                />
              </p>
              <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300 space-y-2">
                <li><AnimatedText 
                  text="Worked with network devices and gained knowledge about them and their configurations."
                  className={animatedTextClasses}
                /></li>
                <li><AnimatedText 
                  text="Learned network essentials."
                  className={animatedTextClasses}
                /></li>
                <li><AnimatedText 
                  text="Learned Javascript."
                  className={animatedTextClasses}
                /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section ref={educationRef} className="mb-8 p-6 sm:p-8 lg:p-10 rounded-lg transition-all duration-300 hover:bg-white/30 dark:hover:bg-gray-800/30 hover:shadow-lg group">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400">
            <AnimatedText text="Education" />
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 transition-all duration-300 hover:border-green-500">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                <AnimatedText text="Bachelor of Science in Computer Engineering" />
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                <AnimatedText text="Marmara University" />
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                <AnimatedText text="2015 - 2020" />
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section ref={certificationsRef} className="mb-8 p-6 sm:p-8 lg:p-10 rounded-lg transition-all duration-300 hover:bg-white/30 dark:hover:bg-gray-800/30 hover:shadow-lg group">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-yellow-600 dark:group-hover:text-yellow-400">
            <AnimatedText text="Certifications" />
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 transition-all duration-300 hover:border-yellow-500">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                <AnimatedText text="iSAQB® Certified Professional for Software Architecture Foundation Level" />
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                <AnimatedText text="Future Network" />
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400">
                <AnimatedText text="Issued: Aug 2024" />
              </p>
            </div>

            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 transition-all duration-300 hover:border-yellow-500">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                <AnimatedText text="Professional Scrum Master™ I (PSM I)" />
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                <AnimatedText text="Scrum.org" />
              </p>
              <p className="text-md text-gray-500 dark:text-gray-400">
                <AnimatedText text="Issued: Dec 2022" />
              </p>
            </div>

            {/* Add more certifications as needed */}
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="mb-8 p-6 sm:p-8 lg:p-10 rounded-lg transition-all duration-300 hover:bg-white/30 dark:hover:bg-gray-800/30 hover:shadow-lg group">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400">
            <AnimatedText text="Skills" />
          </h2>
          
          {/* Technical Skills */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              <AnimatedText text="Technical Skills" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* Frontend Core */}
              <span className="px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="JavaScript" />
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="TypeScript" />
              </span>
              <span className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 hover:bg-orange-200 dark:hover:bg-orange-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="HTML" />
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="CSS" />
              </span>
              <span className="px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 hover:bg-pink-200 dark:hover:bg-pink-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="SASS" />
              </span>

              {/* Frontend Frameworks & Libraries */}
              <span className="px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 hover:bg-cyan-200 dark:hover:bg-cyan-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="ReactJS" />
              </span>
              <span className="px-4 py-2 rounded-full bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="AngularJS" />
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="React Native" />
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="ExpressJS" />
              </span>

              {/* State Management */}
              <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Redux" />
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Redux-Saga" />
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Context API" />
              </span>

              {/* React Ecosystem */}
              <span className="px-4 py-2 rounded-full bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="React Router" />
              </span>
              <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="React Testing Library" />
              </span>

              {/* Build Tools & Bundlers */}
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Webpack" />
              </span>
              <span className="px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 hover:bg-teal-200 dark:hover:bg-teal-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="TailwindCSS" />
              </span>

              {/* API & Data */}
              <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Axios" />
              </span>
              <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="RESTful APIs" />
              </span>
              <span className="px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="JSON" />
              </span>
              <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Chart.js" />
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="i18n" />
              </span>

              {/* Version Control & Collaboration */}
              <span className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 hover:bg-orange-200 dark:hover:bg-orange-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Git" />
              </span>
              <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="GitHub" />
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Bitbucket" />
              </span>
              <span className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="TFS" />
              </span>

              {/* Development Tools */}
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="VSCode" />
              </span>
              <span className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 hover:bg-orange-200 dark:hover:bg-orange-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="SonarQube" />
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Jira" />
              </span>
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              <AnimatedText text="Soft Skills" />
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-100 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Problem Solving" />
              </span>
              <span className="px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-100 hover:bg-violet-200 dark:hover:bg-violet-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Team Collaboration" />
              </span>
              <span className="px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 hover:bg-amber-200 dark:hover:bg-amber-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Communication" />
              </span>
              <span className="px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-100 hover:bg-rose-200 dark:hover:bg-rose-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Adaptability" />
              </span>
              <span className="px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100 hover:bg-cyan-200 dark:hover:bg-cyan-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Time Management" />
              </span>
              <span className="px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-100 hover:bg-sky-200 dark:hover:bg-sky-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Attention to Detail" />
              </span>
              <span className="px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-100 hover:bg-teal-200 dark:hover:bg-teal-800 transition-all duration-300 hover:scale-110 transform">
                <AnimatedText text="Agile Mindset" />
              </span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="text-center p-4 sm:p-6 lg:p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-rose-600 dark:group-hover:text-rose-400">
            <AnimatedText text="Contact" />
          </h2>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/cerenbattal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300 hover:bg-rose-100 dark:hover:bg-rose-900 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-rose-700 dark:hover:text-rose-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* LinkedIn - Updated SVG */}
            <a
              href="https://linkedin.com/in/cerenbattal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300 hover:bg-rose-100 dark:hover:bg-rose-900 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-rose-700 dark:hover:text-rose-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:cerenbattal97@gmail.com"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full transition-all duration-300 hover:bg-rose-100 dark:hover:bg-rose-900 hover:scale-110"
              aria-label="Send Email"
            >
              <svg
                className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-rose-700 dark:hover:text-rose-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default CV; 