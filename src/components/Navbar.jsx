export default function Navbar({ page, handlePage }) {
    return (
        <nav className=" bg-indigo-100 pt-2 pb-2 fixed w-screen z-20 dark:bg-indigo-900">
            <ul className="flex justify-around items-center">
                <button className={`${page === 'about' ? 'text-indigo-300' : 'text-indigo-600'} hover:text-indigo-900 dark:hover:text-indigo-200 sm:text-lg text-sm`}
                    onClick={e => handlePage(e, 'about')}>About</button>
                <button className={`${page === 'projects' ? 'text-indigo-300' : 'text-indigo-600'} hover:text-indigo-900 dark:hover:text-indigo-200 sm:text-lg text-sm`}
                    onClick={e => handlePage(e, 'projects')}>Projects</button>
                <button className={`${page === 'contact' ? 'text-indigo-300' : 'text-indigo-600'} hover:text-indigo-900 dark:hover:text-indigo-200 sm:text-lg text-sm`}
                    onClick={e => handlePage(e, 'contact')}>Contact</button>
                <button className={`${page === 'resume' ? 'text-indigo-300' : 'text-indigo-600'} hover:text-indigo-900 dark:hover:text-indigo-200 sm:text-lg text-sm`}
                    onClick={e => handlePage(e, 'resume')}>Resume</button>
            </ul>
        </nav>
    )
}