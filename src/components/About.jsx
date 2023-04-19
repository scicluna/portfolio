import PictureFan from "./PictureFan"

export default function About() {
    return (
        <section className="h-full flex flex-col md:flex-row items-center sm:justify-around sm:m-5 m-1" >
            <div className=" bg-indigo-200 rounded-full overflow-hidden">
                <img src="./src/imgs/me.webp" alt="A picture of myself!" className="sm:w-96 w-full m-5" />
            </div>
            <div>
                <PictureFan />
            </div>
            <p className="sm:w-96 sm:pb-0 sm:text-xl w-full pb-10 m-5 ">Hello, my name is John Lucas Scicluna, but those who know me call me Luke. Other than my career
                aspirations, I'm an avid gamer and enthusiast of softdrinks. I'm always interested in conversations
                regarding coding, especially as it pertains to my projects displayed here. If you are interested in
                how I constructed these projects or have good ideas for how to improve them, don't hesitate to reach
                out to me! All opportunities and inquiries are welcome! Hope to hear from
                you soon!</p>
        </section>
    )
}