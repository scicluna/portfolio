import { useRef } from "react"

export default function Contacts() {
    const name = useRef(null)
    const email = useRef(null)
    const message = useRef(null)

    return (
        <section className="flex flex-col items-center justify-center h-full">
            <form className="flex flex-col w-96 max-w-full">
                <label htmlFor="name" className="text-indigo-900">Name</label>
                <input type="text" id="name" ref={name} required placeholder="Name..." className="shadow-sm shadow-indigo-950 righteous" />
                <label htmlFor="email" className="text-indigo-900">Email</label>
                <input type="email" id="email" ref={email} required placeholder="email@email.com..." className="shadow-sm shadow-indigo-950 righteous" />
                <label htmlFor="message" className="text-indigo-900">Message</label>
                <textarea id="message" rows="5" ref={message} required className="shadow-sm shadow-indigo-950 righteous" />
                <button type="submit" className="text-indigo-900 bg-white w-1/2 self-center mt-2 rounded-md shadow-sm shadow-indigo-950 hover:bg-indigo-500 transition-all duration-200 ease-in">Send</button>
            </form>
            <div>
                <p className="mt-2 text-indigo-900">or give me a call at 248-331-6379</p>
                <p className="mt-2 text-indigo-900">or email me at sciclunajl@gmail.com</p>
            </div>
        </section>
    )
}