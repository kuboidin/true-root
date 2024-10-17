import app from "@/config/app";
import ContactForm from "@/components/layout/contact-form";

export default function Page() {
    return <>
        <div className="lg:pt-25 md:pt-20 pt-13.5 pb-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="lg:w-1/2">
                        <div className="md:mb-14.5 mb-10 text-start">
                            <h2 className="xl:text-4.5xl md:text-3xl sm:text-2.5xl text-2xl mb-2">CONTACT US</h2>
                            <p className="font-normal xl:text-3xl md:text-[26px] sm:text-xxl text-xl max-w-[540px] xl:mb-14.5 md:mb-7.5 mb-3.6 font-Lufga">
                                <span className="underline">{app.name} is here to help you;</span> <br/>
                                We welcome your feedback and suggestions. <br/>
                                Or Just drop a comment.</p>
                            <div className="flex flex-wrap pt-6.1">
                                <div className="sm:mr-48">
                                    <h3 className="mb-2">Email Us</h3>
                                    <ul>
                                        <li className="font-medium md:text-lg text-2sm font-Lufga">support@trueroot.in</li>
                                        <li className="font-medium md:text-lg text-2sm font-Lufga">support@kuboid.in</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="xl:py-14.5 xl:px-[55px] sm:py-11 sm:px-9 p-3.6 ml-auto bg-secondary text-white lg:max-w-[520px] max-w-full relative z-9 shadow-sm sm:rounded-3.5xl rounded-2xl">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}