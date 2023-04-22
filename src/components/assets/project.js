import socialmedia from '../../imgs/socialmediademo.png'
import slimehack from '../../imgs/slimehack.webp'
import eventplanner from '../../imgs/eventplanner.webp'
import gifthub from '../../imgs/gifthub.webp'
import rpgsheet from '../../imgs/rpgsheet.png'
import techdeck from '../../imgs/techdeck.png'
import moviemash from '../../imgs/moviemash.png'

export const projects = [
    {
        title: "Social Media Demo",
        body: "This full-stack social media demo represents my first significant project that combines a sophisticated MongoDB database with a TypeScript/React frontend. The development process provided an opportunity for me to explore recursion and fetching within a React context. Additionally, this project marked my initial experience with Tailwind CSS, pushing the boundaries of my CSS expertise. Feel free to create an account and share your thoughts by posting comments!",
        img: socialmedia,
        github: "https://github.com/scicluna/socialfullstack",
        deploy: "https://social-media-demonstration.herokuapp.com/"
    },
    {
        title: "Slimehack",
        body: "This game was developed with a singular goal: to gauge how swiftly I could master an entirely new JavaScript library and utilize it to create something captivating. Within just four days, I successfully developed a simple arcade game using the library, complemented by free assets found online. I hope you enjoy playing the game as much as I enjoyed creating it! Use the arrow keys for movement and hold the spacebar to attack.",
        img: slimehack,
        github: "https://github.com/scicluna/Slimehack",
        deploy: "https://alarice.itch.io/slimehack"
    },
    {
        title: "Eventplanner",
        body: "I developed this event planner to fulfill the practical need of organizing my events. As my first React project, this app serves as a replacement for a weekly planner app I had created during the early months of my bootcamp experience. The event planner demonstrates my skills in animation and my ability to rapidly learn new technologies. Instead of building a full-stack application, I chose to store the state of events in local storage for a more streamlined approach.",
        img: eventplanner,
        github: "https://github.com/scicluna/eventplanner",
        deploy: "https://scicluna.github.io/eventplanner/"
    },
    {
        title: "Gifthub",
        body: "Gifthub marked my second group project, where our team collaborated to develop a full-stack application, utilizing everything we had learned up to that point in our bootcamp. This project helped me gain a solid grasp of Express and master Handlebars. It also allowed me to fully appreciate the capabilities of SQL and Sequelize, as they enabled us to create intricate interactions between database items with ease. Please note that the API may be offline by the time you read this – feel free to email me if you'd like to try it out, and I'll renew the service for another month.",
        img: gifthub,
        github: "https://github.com/scicluna/giftlist",
        deploy: "https://gifthub.herokuapp.com/"
    },
    {
        title: "RPG Sheet",
        body: "RPG Sheet marked my initial venture into the world of TypeScript and React. This project showcases my proficiency in Tailwind CSS and my capability to design intricate forms that serve practical purposes. Initially, I developed RPG Sheet to streamline the creation of core D&D 5e characters for my personal use and to maintain an editable, browser-based HTML character sheet.",
        img: rpgsheet,
        github: "https://github.com/scicluna/rpgv2",
        deploy: "https://scicluna.github.io/rpgv2/"
    },
    {
        title: "Movie Mash",
        body: "Movie Mash represents my first-ever group project, developed towards the end of the initial third of my bootcamp, after gaining a solid foundation in front-end development. This experience taught me valuable lessons about teamwork in coding projects and guided me through the challenges of the Git process. It was during this project that I became adept at making API calls from the front-end and learned the importance of both relying on and supporting my teammates.",
        img: moviemash,
        github: "https://github.com/scicluna/movie-mash",
        deploy: "https://scicluna.github.io/movie-mash/"
    }

]