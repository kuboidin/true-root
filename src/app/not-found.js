import Link from "next/link";
import {MoveLeft} from "lucide-react";
import Image from "next/image";

export default function NotFound() {
    return <>
        <div className="py-20 bg-white">
            <div className="flex flex-col error-404 not-found justify-center items-center text-center gap-4">
                <div className="thumb mt-10">
                    <div className="image mb-[76px]">
                        <Image width={640} height={420} className="img-fluid inline" src="/assets/theme/images/404-error-page.gif" alt="404 Not found"/>
                    </div>
                </div>
                <h2 className="title">
                    <span className="main-title">404</span>
                    <span className="hover-title">404</span>
                </h2>
                <h4 className="sub-title text-2xl">Oops! PAGE NOT FOUND</h4>
                <Link className="hl-btn big-btn lh-1 btn-base fs-18 text-uppercase fw-normal" href="/"> <MoveLeft className="mr-2 inline-block"/> Go Back Home</Link>
            </div>
        </div>

    </>;
}