

export default function Resume() {
    return (
        <section className="flex h-full w-full justify-center items-center">
            <object data="./src/imgs/jlsresume.pdf" type="application/pdf" className="h-4/5 w-4/5">
                <p>It appears you don't have a PDF plugin for this browser. You can <a
                    href="./src/assets/jlsresume.pdf">download
                    the PDF file</a> instead.</p>
            </object>
        </section>
    )
}