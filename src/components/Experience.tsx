import { useState } from 'react';
import { experiences } from '../data/experiences';

export function Experience() {
  const [openExperiences, setOpenExperiences] = useState<Set<number>>(
    () => new Set(),
  );

  const toggleExperience = (index: number) => {
    setOpenExperiences((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="experience-list">
      {experiences.map((experience, index) => {
        const isOpen = openExperiences.has(index);
        const contentId = `experience-content-${index}`;
        const triggerId = `experience-trigger-${index}`;

        return (
          <article
            className={`experience-item${isOpen ? ' is-open' : ''}`}
            key={experience.company}
          >
            <button
              id={triggerId}
              className="experience-trigger"
              type="button"
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleExperience(index)}
            >
              <span className="experience-title">
                <strong>{experience.role}</strong>
                <span>{experience.company}</span>
              </span>
              <span className="experience-date">{experience.dateRange}</span>
              <svg
                className="experience-chevron"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  d="m3 5 5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <div
              id={contentId}
              className="experience-panel"
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!isOpen}
            >
              <div className="experience-panel-inner">
                <div className="experience-details">
                  <p className="experience-location">{experience.location}</p>
                  <ul className="experience-bullets">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <ul
                    className="tags experience-tags"
                    aria-label={`${experience.role} skills`}
                  >
                    {experience.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
