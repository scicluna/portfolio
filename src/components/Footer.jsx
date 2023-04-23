import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer({ dark, handleDark }) {
    return (
        <footer className="fixed bg-indigo-200 dark:bg-indigo-900 bottom-0 h-10 w-screen flex items-center justify-around">
            <button onClick={handleDark} className="flex justify-center items-center text-indigo-600  hover:text-indigo-900 dark:hover:text-indigo-300 w-1/4 ">
                <FontAwesomeIcon icon={dark ? faSun : faMoon} size="2x" />
            </button>
            <a className="flex items-center justify-center text-indigo-600  hover:text-indigo-900 dark:hover:text-indigo-300 w-1/4"
                href="https://github.com/scicluna" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a className="flex items-center justify-center text-indigo-600  hover:text-indigo-900 dark:hover:text-indigo-300 w-1/4"
                href="mailto:sciclunajl@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a className="flex items-center justify-center text-indigo-600  hover:text-indigo-900 dark:hover:text-indigo-300 w-1/4"
                href="https://www.linkedin.com/in/john-scicluna-472291bb/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </footer>
    )
}