import PictureFan from "./PictureFan"

export default function About() {
    return (
        <section className="h-full flex flex-col sm:flex-row items-center sm:justify-between sm:m-5 m-1 relative" >
            <div className=" shadow-sm shadow-indigo-950 bg-white dark:bg-indigo-400 rounded-full h-96 sm:w-4/12 sm:h-4/6 overflow-hidden">
                <img src="./src/imgs/me3.webp" alt="A picture of myself!" className="h-full w-full m-5" />
            </div>
            <div className="lg:absolute lg:mt-0 mt-10 lg:top-auto lg:left-1/2 lg:-translate-x-1/2 lg:h-auto lg:w-auto top-40">
                <PictureFan />
            </div>
            <p className="text-indigo-800 dark:text-indigo-300 ml:text-sm ml:p sm:w-4/12 sm:pb-0 w-full pb-10 m-5 text-sm sm:text-xl lg:text-3xl">Hello, my name is John Lucas Scicluna, but those who know me call me Luke. Other than my career
                aspirations, I'm an avid gamer and enthusiast of softdrinks. I'm always interested in conversations
                regarding coding, especially as it pertains to my projects displayed here. If you are interested in
                how I constructed these projects or have good ideas for how to improve them, don't hesitate to reach
                out to me! All opportunities and inquiries are welcome! Hope to hear from
                you soon!</p>
        </section>
    )
}