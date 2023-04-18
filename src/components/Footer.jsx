import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    return (
        <footer className="fixed bg-indigo-200 bottom-0 h-10 w-full flex items-center justify-around">
            <a className="flex items-center text-indigo-600  hover:text-indigo-900"
                href="https://github.com/scicluna" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a className="flex items-center text-indigo-600  hover:text-indigo-900"
                href="mailto:sciclunajl@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a className="flex items-center text-indigo-600  hover:text-indigo-900"
                href="https://www.linkedin.com/in/john-scicluna-472291bb/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </footer>
    )
}