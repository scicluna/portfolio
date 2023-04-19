const imgs = ["./src/imgs/slimehack.webp", "./src/imgs/eventplanner.webp", "./src/imgs/gifthub.webp"]
const titles = ["Slimehack", "Eventplanner", "Gifthub"]
const bodies = [

]

export const projects = [
    {
        title: "Slimehack",
        body: "This game was built with one thing in mind. How quickly can I pick up a totally new javascript library and use it to create something cool? In just four days I was able to create a simple arcade game using the library along with some free assets from the internet. I hope you enjoy the game as much as I did making it! Use arrowkeys to move and hold spacebar to attack!",
        img: "./src/imgs/slimehack.webp",
        github: "https://github.com/scicluna/Slimehack",
        deploy: "https://slimehack.herokuapp.com/"
    },
    {
        title: "Eventplanner",
        body: "My first react project. I designed this app to be a replacement for a weekly planner app that I had created back during my first months of bootcamp. This event planner shows off my skills in animation and my ability to quickly pick up new technologies. I avoided making this a full stack application this time in favour of saving the state of events in local storage.",
        img: "./src/imgs/eventplanner.webp",
        github: "https://github.com/scicluna/eventplanner",
        deploy: "https://scicluna.github.io/eventplanner/"
    },
    {
        title: "Gifthub",
        body: "Gifthub was my second ever group project. We really had to band together and make a full-stack application using everything we had learned until that point in bootcamp. It was here where I really feel that I got a hang of express and was able to master Handlebars. This project really allowed me to appreciate SQL and Sequelize and what they can do for an application since they allowed us to make complex interactions between database items trivially easy to see and utilize. It's possible that by the time you read this the API is offline - just shoot me an email if you would like to sample it and I'll buy another month of the service.",
        img: "./src/imgs/gifthub.webp",
        github: "https://github.com/scicluna/giftlist",
        deploy: "https://gifthub.herokuapp.com/"
    }

]