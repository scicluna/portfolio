import resume from '../imgs/jlsprofessionalresume.pdf'

export default function Resume() {
    return (
        <section className="flex h-full w-full justify-center items-center">
            <object data={resume} type="application/pdf" className="h-4/5 w-4/5 shadow-sm shadow-indigo-950">
                <p>It appears you don't have a PDF plugin for this browser. You can <a
                    href="./src/assets/jlsresume.pdf">download
                    the PDF file</a> instead.</p>
            </object>
        </section>
    )
}