import { useState, useRef } from "react"

export default function Projects() {
    return (
        <section className="h-full flex items-center justify-center">
            <div className="h-full w-full bg-indigo-400 p-20">
                <Carousel />
            </div>
        </section>
    )
}

function Carousel() {
    const [slide, setSlide] = useState(0)
    const wrapper = useRef(null)

    function slideLeft() {
        if (slide > 0) setSlide(slide - 1)
        else setSlide(imgs.length - 1)
    }
    function slideRight() {
        if (slide < imgs.length - 1) setSlide(slide + 1)
        else setSlide(0)
    }
    const imgs = ["./src/imgs/slimehack.webp", "./src/imgs/eventplanner.webp", "./src/imgs/gifthub.webp"]
    //, "./src/imgs/eventplanner.webp", "./src/imgs/gifthub.webp"]

    return (
        <div className="w-full h-full relative">
            <button className="absolute bottom-1/2 translate-y-1/2 w-8 h-full bg-indigo-200 opacity-10 z-10" onClick={slideLeft}></button>
            <div ref={wrapper} className="flex h-full overflow-hidden relative">
                {imgs.map((image, i) => {
                    const active = i === slide
                    const translateX = active ? "translate-x-0" : i < slide ? "-translate-x-full" : "translate-x-full"
                    return (
                        <div key={i} className={`absolute inset-0 flex items-center justify-center transform ${translateX} transition-transform duration-500 ease-in-out`}>
                            <Slide image={image} />
                        </div>
                    )
                })}
            </div>
            <button className="absolute bottom-1/2 right-0 translate-y-1/2 w-8 h-full bg-indigo-200 opacity-10 z-10" onClick={slideRight}></button>
        </div>
    )
}


function Slide({ image }) {
    return (
        <img src={image} className="w-full h-full object-cover object-center" alt={image} />
    )
}