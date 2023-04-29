import PictureFan from "../components/PictureFan"
import me3 from "../imgs/me3.webp"

export default function About() {
    return (
        <section className="h-full flex justify-start sm:items-center items-start" >
            <div className="flex flex-col sm:flex-row items-center sm:justify-between sm:p-5 relative w-screen bg-indigo-50 dark:bg-indigo-500" >
                <div className="flex items-center justify-center shadow-sm shadow-indigo-950 bg-white dark:bg-indigo-400 rounded-full h-96 w-screen sm:w-4/12 sm:h-4/6 overflow-hidden">
                    <img src={me3} alt="A picture of myself!" className="sm:h-5/6 sm:w-5/6 h-full w-screen" />
                </div>
                <div className="lg:absolute lg:mt-0 mt-10 lg:top-auto lg:left-1/2 lg:-translate-x-1/2 lg:h-auto lg:w-auto top-40">
                    <PictureFan />
                </div>
                <p className="text-indigo-800 dark:text-indigo-300 ml:text-sm ml:p sm:pb-0 sm:w-4/12 w-9/12 mb-10 mt-10 min-h-max pb-10 m-5 text-sm sm:text-xl lg:text-1xl">Hi, I'm John Lucas Scicluna, but you can call me Luke! As a passionate software developer with a love for gaming and an enthusiasm for soft drinks, I thrive in the world of coding and creative problem solving. My portfolio showcases a range of projects that demonstrate my dedication to innovation and continuous learning.

                    Whether it's discussing my work, collaborating on new ideas, or simply connecting with like-minded individuals, I'm always eager to engage in conversation. If you have any suggestions for improving my projects, are interested in working together, or just want to chat, please don't hesitate to get in touch.

                    I look forward to hearing from you and exploring the exciting opportunities that lie ahead!</p>
            </div>
        </section>
    )
}