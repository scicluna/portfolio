

export default function Modal({ image, deploy, github, title, body, modal, index }) {
    return (
        <div className={`top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 bg-indigo-200 w-3/5 sm:h-4/5 min-h-4/5 flex flex-col righteous ${modal[index] === true ? '' : 'secret'}`}>
            <img src={image} className="h-1/2 object-center"></img>
            <h5 className="pl-2 pt-2">{title}</h5>
            <p className="p-2 xl:text-base text-xs mb-7 overflow-y-scroll">
                {body}
            </p>
            <div className="absolute flex w-full justify-between bottom-0 p-2 text-indigo-400">
                <a href={deploy} target="_blank" className="hover:text-indigo-800"><small
                >App</small></a>
                <a href={github} target="_blank" className="hover:text-indigo-800"><small
                >Github</small></a>
            </div>
        </div>
    )
}