import type { About } from '@/types';
import Image from 'next/image';

interface AboutSectionProps {
  about: About;
}

export default function AboutSection({ about }: AboutSectionProps) {
  const stats = [
    {
      value: about.stats.availability,
      label: 'Ready to Support',
    },
    {
      value: about.stats.projects,
      label: 'Completed Projects',
    },
    {
      value: about.stats.satisfaction,
      label: 'Satisfied Clients',
    },
  ];

  return (
    <section id="about" className="px-3 md:px-0 py-20 bg-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-badge bg-dark rounded-lg border border-primary text-center text-gray-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-2">
              Levana <span className="text-primary-light ">Technology</span>
            </h1>
            <p className="text-primary-light mb-2">
              Levana Technology is a digital agency that helps businesses and
              SMEs establish a strong online presence through strategic and
              professionally crafted websites.
            </p>
            <p className="text-primary-light mb-8">
              By combining thoughtful design, clear structure, and modern web
              technology, we ensure that every website we build becomes a
              valuable digital asset for your businesses.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-lighter p-4 rounded-lg border border-dark-lighter text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          {/* Right Image */}
          <div className="relative w-full">
            <div className="relative rounded-2xl w-full">
              <Image
                src="/images/levana.png"
                alt="Levana pic"
                width={319}
                height={319}
                className="w-full h-auto object-cover object-center rounded-2xl lg:w-[319px] lg:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
