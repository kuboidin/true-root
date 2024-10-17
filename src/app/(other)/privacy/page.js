import Link from "next/link";
import app from "@/config/app";
import {MoveRight} from "lucide-react";

export const metadata = {
    title: `Privacy Policy - ${app.name}`,
    description: `At ${app.name}, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our product.`,
    keywords: [...app.meta.keywords, 'privacy', 'policy', 'data', 'protection', 'security', 'personal', 'information', 'privacy policy'],
    openGraph: {
        title: `Privacy Policy - ${app.name}`,
        description: `At ${app.name}, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our product.`,
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: app.name,
            },
        ],
        url: `${app.url}/privacy`,
        type: 'website',
    },
    twitter: {
        title: `Privacy Policy - ${app.name}`,
        description: `At ${app.name}, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when using our product.`,
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: app.name,
            },
        ],
    },
    alternates: {
        canonical: `${app.url}/privacy`,
    }
};

export default function Privacy() {
    return <>
        <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-semibold">Privacy Policy</h3>
                </div>
            </div>
        </section>

        <div className="relative">
            <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="md:flex justify-center">
                    <div className="md:w-3/4">
                        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                            <h5 className="text-xl font-semibold mb-4">Privacy Policy</h5>
                            <p className="text-slate-400 text-pretty">
                                At {app.name}, your privacy is important to us. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.
                            </p>

                            <h5 className="text-xl font-semibold my-4">Information We Collect</h5>
                            <p className="text-slate-400 text-pretty">We collect the following types of information:</p>

                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    <strong>Email Address:</strong> If you sign up for our email subscription, we collect your email to send you updates, gardening tips, and relevant content.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    <strong>Usage Data:</strong> We use Google Analytics and other tracking technologies to collect non-personally identifiable information. See Google Analytics privacy policy for more information.
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">How We Use Your Information</h5>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Send newsletters and updates (only if you opt in).
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Analyze website traffic and improve user experience using tools like Google Analytics.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Monitor website performance and troubleshoot technical issues.
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">Data Sharing and Disclosure</h5>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Third-party Services: We may engage third-party service providers to assist us in delivering our services. These providers are contractually obligated to maintain the confidentiality and security of your data.
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">Analytics Services Usage</h5>
                            <p className="text-slate-400 text-pretty">
                                Our website/application uses analytics services to gather information about how users interact with our platform. These analytics services may include, but are not limited to, tools provided by third-party providers such as Google Analytics, Mixpanel, and Adobe Analytics.
                            </p>

                            <p className="text-slate-400 text-pretty">
                                A web analytics service uses &quot;cookies&quot;, which are text files placed on your computer/device, to help us analyze how users interact with our website/application.
                                <br/>
                                The information generated by the cookie about your use of the website/application (including your IP address) will be transmitted to and stored on their servers.
                                <br/>
                                These analytics services collect various types of data, including:
                            </p>

                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Usage Information: Information about how you interact with our website/application, such as pages visited, time spent on each page, and features used.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Device Information: Information about the device you use to access our website/application, such as device type, operating system, and browser type.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    IP Address: Your IP address, which may be used to approximate your location.
                                </li>
                            </ul>
                            <p className="text-slate-400 text-pretty">
                                We use this information to analyze trends, track user activity, and improve the overall user experience of our website/application.
                                <br/>
                                The data collected by these analytics services may be stored on servers located within or outside your country of residence. By using our website/application, you consent to the processing of data about you by these analytics services in the manner and for the purposes set out above.
                                <br/>
                                You may opt-out of data collection by adjusting your browser/device settings or by using opt-out mechanisms provided by the respective analytics services.
                                <br/>
                                For more information about how these analytics services collect and process data, please refer to their respective privacy policies.
                                <br/>
                            </p>

                            <h5 className="text-xl font-semibold my-4">Your Rights and Choices</h5>

                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Access and Correction: You have the right to access, correct, or update your personal information at any time through your account settings.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Data Retention: We will retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law.
                                </li>
                            </ul>


                            <h5 className="text-xl font-semibold my-4">Contact Us</h5>
                            <p className="text-slate-400 text-pretty">
                                If you have any questions or concerns about our Privacy Policy or data practices, please <Link href="/support"><u>contact us</u></Link>.
                            </p>


                            <h5 className="text-xl font-semibold my-4">Changes to This Privacy Policy</h5>
                            <p className="text-slate-400 text-pretty">
                                We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and we encourage you to review this Privacy Policy periodically for updates.
                                <br/>
                                By using our services, you consent to the collection and use of your information as outlined in this Privacy Policy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
        ;
}
