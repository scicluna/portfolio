import { useState } from "react";


export default function PictureFan() {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="w-40 h-28 flex relative">
            <button className="text-2xl h-28 w-40 absolute z-10 text-indigo-500 hover:text-indigo-800"
                onClick={(e) => setHidden(hidden ? false : true)}>My Stack</button>
            <div className={`${hidden ? 'opacity-0' : 'opacity-100'} transition-all ease-out duration-500`}>
                <FanImage img={"./src/imgs/JS.svg.png"} position={1} hidden={hidden} />
                <FanImage img={"./src/imgs/css2.png"} position={2} hidden={hidden} />
                <FanImage img={"./src/imgs/HTML.svg.png"} position={3} hidden={hidden} />
                <FanImage img={"./src/imgs/Node.svg.png"} position={4} hidden={hidden} />
                <FanImage img={"./src/imgs/TS.svg"} position={5} hidden={hidden} />
                <FanImage img={"./src/imgs/React.svg.png"} position={6} hidden={hidden} />
                <FanImage img={"./src/imgs/mongodb.svg"} position={7} hidden={hidden} />
                <FanImage img={"./src/imgs/mysql-logo.svg"} position={8} hidden={hidden} />
                <FanImage img={"./src/imgs/Tailwind_CSS_Logo.svg.png"} position={9} hidden={hidden} />
            </div>
        </div>
    )
}

function FanImage({ img, position, hidden }) {
    function fanPosition() {
        switch (position) {
            case 1:
                return 'sm:-translate-x-40 -translate-x-20 translate-y-0';
            case 2:
                return 'sm:-translate-x-32 -translate-x-12 -translate-y-24 ';
            case 3:
                return 'sm:-translate-x-20 -translate-x-8 -translate-y-12 ';
            case 4:
                return '-translate-x-12 translate-y-20 ';
            case 5:
                return 'translate-x-12 -translate-y-24';
            case 6:
                return 'translate-x-20 translate-y-24';
            case 7:
                return 'sm:translate-x-40 translate-x-28 sm:-translate-y-20 -translate-y-12';
            case 8:
                return 'sm:translate-x-44 translate-x-28 translate-y-12 ';
            case 9:
                return '-translate-x-2 translate-y-36';

            default:
                return '';
        }
    }

    return <img src={img} className={`w-28 opacity-70 sm:opacity-90 h-28 aspect-square absolute top-0 transform
    transition-all ease-out duration-500 ${hidden ? '' : fanPosition()}`} />
}