export default function Navbar({ page, handlePage }) {
    return (
        <nav className=" bg-indigo-100 p-2 fixed w-full">
            <ul className="flex justify-around items-center">
                <button className={`${page === 'about' ? 'text-indigo-300' : 'text-indigo-600'} hover:text-indigo-900 sm:text-lg text-sm`}
                    onClick={e => handlePage(e, 'about')}>About</button>
                <button className={`${page === 'projects' ? 'text-indigo-300' : 'text-indigo-600'} hover:text-indigo-900 sm:text-lg text-sm`}
                    onClick={e => handlePage(e, 'projects')}>Projects</button>
                <button className={`${page === 'contact' ? 'text-indigo-300' : 'text-indigo-600'} hover:text-indigo-900 sm:text-lg text-sm`}
                    onClick={e => handlePage(e, 'contact')}>Contact</button>
                <button className={`${page === 'resume' ? 'text-indigo-300' : 'text-indigo-600'} hover:text-indigo-900 sm:text-lg text-sm`}
                    onClick={e => handlePage(e, 'resume')}>Resume</button>
            </ul>
        </nav>
    )
}