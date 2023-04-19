import React from "react"
import { useState, useRef } from "react"
import Modal from "./Modal"
import { projects } from "./assets/project"

export default function Projects() {
    return (
        <section className="h-full flex items-center justify-center">
            <div className="h-full w-full p-20">
                <Carousel />
            </div>
        </section>
    )
}

function Carousel() {
    const [slide, setSlide] = useState(0)
    const [modal, setModal] = useState([false, false, false])
    const wrapper = useRef(null)

    function slideLeft() {
        if (slide > 0) setSlide(slide - 1)
        else setSlide(projects.length - 1)
    }
    function slideRight() {
        if (slide < projects.length - 1) setSlide(slide + 1)
        else setSlide(0)
    }

    function showModal(i) {
        const newModals = [...modal]
        newModals[i] ? newModals[i] = false : newModals[i] = true
        setModal(newModals)
    }

    return (
        <div className="w-full h-full relative">
            <button className="absolute bottom-1/2 translate-y-1/2 w-8 h-full bg-indigo-200 opacity-10 z-10" onClick={e => {
                slideLeft(e)
                setModal([false, false, false])
            }}></button>
            <div ref={wrapper} className="flex h-full overflow-hidden relative">
                {projects.map((project, i) => {
                    const active = i === slide
                    const translateX = active ? "translate-x-0" : i < slide ? "-translate-x-full" : "translate-x-full"
                    return (
                        <div key={i} className={`absolute inset-0 flex items-center justify-center transform ${translateX} transition-transform duration-500 ease-in-out`}>
                            <Slide image={project.img} index={i} showModal={showModal} />
                        </div>
                    )
                })}
            </div>
            {projects.map((project, i) => {
                return <Modal key={project.title} image={project.img} title={project.title} body={project.body} github={project.github} deploy={project.deploy} modal={modal} index={i} setModal={setModal} />
            })}
            <button className="absolute bottom-1/2 right-0 translate-y-1/2 w-8 h-full bg-indigo-200 opacity-10 z-10" onClick={e => {
                slideRight(e)
                setModal([false, false, false])
            }}></button>
        </div>
    )
}


function Slide({ image, index, showModal }) {
    return (
        <img src={image} className="w-full h-full object-cover object-center" alt={image} onClick={(e) => showModal(index)} />
    )
}