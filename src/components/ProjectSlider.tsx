import { useRef, type PointerEvent } from 'react'
import { projects } from '../data/projects'

export function ProjectSlider() {
  const slider = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, startX: 0, startScrollLeft: 0 })
  const move = (direction: 'next' | 'previous') => {
    const element = slider.current
    if (element) element.scrollBy({ left: (direction === 'next' ? 1 : -1) * element.clientWidth * 0.78, behavior: 'smooth' })
  }
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch' || !slider.current) return
    drag.current = { active: true, startX: event.clientX, startScrollLeft: slider.current.scrollLeft }
    slider.current.setPointerCapture(event.pointerId); slider.current.classList.add('is-dragging')
  }
  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (drag.current.active && slider.current) slider.current.scrollLeft = drag.current.startScrollLeft - (event.clientX - drag.current.startX)
  }
  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!slider.current) return
    drag.current.active = false; slider.current.classList.remove('is-dragging')
    if (slider.current.hasPointerCapture(event.pointerId)) slider.current.releasePointerCapture(event.pointerId)
  }
  return <div className="project-slider-wrap">
    <div className="project-controls" aria-label="Project slider controls"><button type="button" onClick={() => move('previous')} aria-label="Previous project">←</button><button type="button" onClick={() => move('next')} aria-label="Next project">→</button></div>
    <div ref={slider} className="project-slider" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={endDrag} onPointerCancel={endDrag}>
      {projects.map((project) => <article className="project-card" key={project.title}>
        <div className="project-image" aria-label={`Placeholder visual ${project.image}`}><span>{project.image}</span></div>
        <div className="project-copy"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-meta"><ul className="tags" aria-label="Project tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><a href={project.link} aria-label={`View ${project.title}`}>View project ↗</a></div></div>
      </article>)}
    </div>
  </div>
}
