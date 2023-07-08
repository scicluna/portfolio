import socialmedia from '../imgs/socialmediademo.png'
import eventplanner from '../imgs/eventplanner.webp'
import gifthub from '../imgs/gifthub.webp'
import rpgsheet from '../imgs/rpgsheet.png'
import moviemash from '../imgs/moviemash.png'
import voidchat from '../imgs/voidchat2.png'
import trailblazer from '../imgs/trailblazer.webp'
import proxichat from '../imgs/proxichat5.webp'

export const projects = [
    {
        title: "Proxichat",
        body: "Proxichat is a real-time, serverless chat application that uses geolocation technology to create dynamic chatrooms. This application scales according to user's preferred geographic ranges, bringing a unique and localized chatting experience to its users. Real-time communication: Messages are relayed in real-time, ensuring seamless and instantaneous communication. Geo-contextual chatrooms: Proxichat uses geolocation to create dynamic chatrooms. The range of these chatrooms scales according to the user's preferred geographic ranges. Serverless Architecture: Proxichat is built on a serverless architecture that ensures high availability, automatic scaling, and cost-effective deployment and operation.",
        img: proxichat,
        github: "https://github.com/scicluna/proxichat",
        deploy: "https://proxichat.vercel.app"
    },
    {
        title: "Trailblazer",
        body: "Our culminating project for the Michigan State University Full-stack Bootcamp, presented via EdX, integrates our passion for nature with sophisticated web technologies, such as React, GraphQL, JWTs, MongoDB, and the National Park Service API. Our objective was to create an intuitive and robust application tailored to the requirements of national park aficionados and trip organizers. This capstone project symbolizes the significant strides we've made in the realm of web development. We trust that this application will enhance your appreciation of the diverse natural wonders our nation has to offer.",
        img: trailblazer,
        github: "https://github.com/scicluna/trailblazer",
        deploy: "https://nps-trailblazer.herokuapp.com/"
    },
    {
        title: "Void Chat",
        body: "Void Chat is a custom-built chat application that facilitates real-time communication between users, utilizing Google and GitHub authentication for seamless and secure access. This project marked my initial experience with OAuth authentication, web sockets, and the intricacies of client-server interactions during deployment. By employing TypeScript for the backend and a React/TypeScript combination for the frontend, I successfully created a cohesive and interactive chat room as a demonstrative showcase.",
        img: voidchat,
        github: "https://github.com/scicluna/chatroomdemo",
        deploy: "https://voidchat.herokuapp.com/"
    },
    {
        title: "Social Media Demo",
        body: "This full-stack social media demo represents my first significant project that combines a sophisticated MongoDB database with a TypeScript/React frontend. The development process provided an opportunity for me to explore recursion and fetching within a React context. Additionally, this project marked my initial experience with Tailwind CSS, pushing the boundaries of my CSS expertise. Feel free to create an account and share your thoughts by posting comments!",
        img: socialmedia,
        github: "https://github.com/scicluna/socialfullstack",
        deploy: "https://social-media-demonstration.herokuapp.com/"
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