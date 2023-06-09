export default function Contacts() {
    return (
        <section className="flex flex-col items-center justify-center h-full" >
            <form className="flex flex-col w-2/6 max-w-full" action="https://formsubmit.co/sciclunajl@gmail.com" method='POST' >
                <input type="hidden" name="_next" value="https://scicluna.github.io/portfolio/" />
                <label htmlFor="name" className="text-indigo-900">Name</label>
                <input name="name" type="text" id="name" required placeholder="Name..." className="p-1 shadow-sm shadow-indigo-950 righteous" />
                <label htmlFor="email" className="text-indigo-900">Email</label>
                <input name="email" type="email" id="email" required placeholder="email@email.com..." className="p-1 shadow-sm shadow-indigo-950 righteous" />
                <label htmlFor="message" className="text-indigo-900">Message</label>
                <textarea name="message" id="message" rows="5" required className="p-1 shadow-sm shadow-indigo-950 righteous" />
                <button type="submit" className="text-indigo-900 bg-white w-1/2 self-center mt-2 rounded-md shadow-sm shadow-indigo-950 hover:bg-indigo-500 transition-all duration-200 ease-in dark:hover:bg-indigo-300 ">Send</button>
            </form>
            <div>
                <p className="mt-2 text-indigo-900">or give me a call at 248-331-6379</p>
            </div>
        </section>
    )
}