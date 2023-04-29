import { useState } from "react";
import { imgstack } from "../assets/imgstack";


export default function PictureFan() {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="w-40 h-28 flex relative">
            <button className="text-2xl p-5 absolute z-10 text-indigo-900 bg-white mt-2 rounded-lg shadow-sm shadow-indigo-950 hover:bg-indigo-500 dark:hover:bg-indigo-300 transition-all duration-200 ease-in"
                onClick={(e) => setHidden(hidden ? false : true)}>My Stack</button>
            <div className={`${hidden ? 'opacity-0' : 'opacity-100'} transition-all ease-out duration-1000`}>
                {imgstack.map((item, index) => { return <FanImage key={index} img={item} position={index} hidden={hidden} /> })}
            </div>
        </div>
    )
}

function FanImage({ img, position, hidden }) {
    function fanPosition() {
        switch (position) {
            case 0:
                return 'sm:-translate-x-40 -translate-x-20 translate-y-0';
            case 1:
                return 'sm:-translate-x-32 -translate-x-12 -translate-y-24 ';
            case 2:
                return 'sm:-translate-x-20 -translate-x-8 -translate-y-12 ';
            case 3:
                return '-translate-x-16 translate-y-12 ';
            case 4:
                return 'translate-x-8 -translate-y-28';
            case 5:
                return 'translate-x-8 translate-y-28';
            case 6:
                return 'sm:translate-x-40 translate-x-28 -translate-y-12';
            case 7:
                return 'sm:translate-x-48 translate-x-28 translate-y-12 ';
            case 8:
                return '-translate-x-32 translate-y-28';
            case 9:
                return '-translate-x-12 -translate-y-44';
            case 10:
                return 'translate-x-12 translate-y-8';
            case 11:
                return 'translate-x-40 translate-y-28';
            case 12:
                return 'translate-x-44 -translate-y-44';
            case 13:
                return '-translate-x-12 translate-y-36';
            case 14:
                return 'translate-x-28 -translate-y-36';
            case 15:
                return 'translate-x-28 translate-y-6';
            case 16:
                return 'translate-x-28 translate-y-36';
            case 17:
                return '-translate-x-28 translate-y-36';
            default:
                return '';
        }
    }

    return <img src={img} className={`w-28 opacity-70 sm:opacity-90 h-28 md:h-40 aspect-square absolute top-0 transform
    transition-all ease-out duration-1000 ${hidden ? '' : fanPosition()}`} />
}