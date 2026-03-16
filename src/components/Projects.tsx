import { motion } from 'framer-motion';
import { Github, Folder } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects } from '../data/projects';

export default function Projects() {

  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#CCD0CF] mb-4">
            {t('projects_title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-[#4A5C6A]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

              <div className="relative bg-[#253745]/30 backdrop-blur-sm border border-[#4A5C6A]/30 rounded-2xl overflow-hidden hover:border-[#4A5C6A] transition-all duration-300 h-full flex flex-col">

                {/* Image */}

                <div className="relative w-full h-44 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06141B]/70 to-transparent"></div>

                </div>

                <div className="p-6 flex flex-col flex-grow">

                  <div className="flex items-start justify-between mb-4">

                    <div className="p-3 bg-[#11212D]/50 rounded-xl">
                      <Folder className="text-[#4A5C6A]" size={28} />
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-[#11212D]/50 rounded-lg transition-colors duration-200"
                    >
                      <Github className="text-[#9BA8AB] hover:text-[#CCD0CF]" size={20} />
                    </a>

                  </div>

                  <h3 className="text-xl font-bold text-[#CCD0CF] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-[#9BA8AB] mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Credenciais de demo */}

                  {project.demo?.credentials && (

                    <div className="mb-4 text-xs text-[#9BA8AB] bg-[#11212D]/40 p-3 rounded-lg">

                      <p className="font-semibold text-[#CCD0CF] mb-1">
                        🔐 {t('project1_cred')}
                      </p>

                      <p>
                        login: {project.demo.credentials.user}
                      </p>

                      <p>
                        senha: {project.demo.credentials.password}
                      </p>

                    </div>

                  )}

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-2 mb-4">

                    {project.technologies.map((tech, techIndex) => (

                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium text-[#CCD0CF] bg-[#11212D]/50 border border-[#4A5C6A]/30 rounded-full"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="flex justify-between items-center mt-auto">

                    <motion.a
                      href={project.demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center space-x-2 text-[#4A5C6A] hover:text-[#CCD0CF] transition-colors duration-200"
                    >

                      <span className="text-sm font-medium">
                        {t('projects_view')}
                      </span>

                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>

                    </motion.a>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center space-x-2 text-[#4A5C6A] hover:text-[#CCD0CF] transition-colors duration-200"
                    >

                      <span className="text-sm font-medium">
                        {t('projects_view_code')}
                      </span>

                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>

                    </motion.a>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}