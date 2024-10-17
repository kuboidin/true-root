import Link from "next/link";
import app from "@/config/app";
import {MoveRight} from "lucide-react";

export const metadata = {
    title: `Terms of Service - ${app.name}`,
    description: `These Terms of Service govern your access to and use of ${app.name}'s product. By accessing or using the Service, you agree to be bound by these Terms.`,
    keywords: [...app.meta.keywords, 'terms of service', 'tos', 'terms', 'service', 'agreement', 'privacy', 'policy', 'legal', 'terms and conditions'],
    openGraph: {
        title: `Terms of Service - ${app.name}`,
        description: `These Terms of Service govern your access to and use of ${app.name}'s product. By accessing or using the Service, you agree to be bound by these Terms.`,
        images: [
            {
                url: app.og.image,
                width: 1517,
                height: 727,
                alt: app.name,
            },
        ],
        url: `${app.url}/terms-of-service`,
        type: 'website',
    },
    twitter: {
        title: `Terms of Service - ${app.name}`,
        description: `These Terms of Service govern your access to and use of ${app.name}'s product. By accessing or using the Service, you agree to be bound by these Terms.`,
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
        canonical: `${app.url}/terms-of-service`,
    }
};

export default function Privacy() {
    return <>
        <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <h3 className="text-3xl leading-normal font-semibold">Terms of Service</h3>
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
                            <h5 className="text-xl font-semibold mb-4">Terms of Service</h5>
                            <p className="text-slate-400 text-pretty">
                                These Terms of Service (&quot;Terms&quot;) govern your access to and use of {app.name}&apos;s product (the &quot;Service&quot;). By accessing or using the Service, you agree to be bound by these Terms.
                            </p>

                            <h5 className="text-xl font-semibold my-4">Use of the Service</h5>

                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Access: You may access and use the Service in accordance with these Terms.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Account: You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Restrictions: You may not use the Service for any illegal, unauthorized, or prohibited purposes. You may not modify, adapt, or hack the Service.
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">Data and Privacy</h5>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Data Ownership: You retain ownership of all data and content that you upload or input into the Service.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Data Security: We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Privacy: Our Privacy Policy outlines how we collect, use, and safeguard your personal information. By using the Service, you consent to the collection and use of your information as described in the Privacy Policy.
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">Intellectual Property</h5>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Ownership: {app.name} retains all rights, title, and interest in and to the Service, including all intellectual property rights.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    License: We grant you a limited, non-exclusive, non-transferable license to use the Service in accordance with these Terms.
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">Disclaimer of Warranties</h5>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    As Is: The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied.
                                </li>
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    No Guarantees: We do not guarantee that the Service will be error-free, uninterrupted, or secure.
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">Limitation of Liability</h5>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Exclusion: In no event shall [Your Company Name] be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, lost profits, data loss, or business interruption.
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">Indemnification</h5>
                            <p className="text-slate-400 text-pretty">
                            </p>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Your Responsibility: You agree to indemnify and hold {app.name} harmless from any claims, damages, losses, liabilities, costs, and expenses arising out of or in connection with your use of the Service.
                                </li>
                            </ul>


                            <h5 className="text-xl font-semibold my-4">Termination</h5>
                            <ul className="list-none text-slate-400 mt-3">
                                <li className="flex flex-row mt-2 text-pretty"><MoveRight className="text-indigo-600 mr-4" size={20}/>
                                    Termination: We reserve the right to suspend or terminate your access to the Service at any time for any reason without notice.
                                </li>
                            </ul>

                            <h5 className="text-xl font-semibold my-4">Changes to Terms</h5>
                            <p className="text-slate-400 text-pretty">
                                We may update or modify these Terms from time to time. Any changes will be effective upon posting of the revised Terms on the Service. Your continued use of the Service following the posting of the revised Terms constitutes your acceptance of the changes.
                            </p>

                            <br/>
                            <p className="text-slate-400 text-pretty">
                                By using the Service, you agree to be bound by these Terms.
                                <br/>
                                If you have any questions or concerns about these Terms, please <Link href="/support"><u>contact us</u></Link>.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
        ;
}
