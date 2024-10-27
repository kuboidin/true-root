import Link from "next/link";
import app from "@/config/app";

export default function Social() {
    return <div className="absolute z-1 right-6.1 top-[250px] xl:block hidden">
        <ul className="flex items-center flex-col">
            <li className="py-5 [writing-mode:tb-rl]">
                <Link className="text-sm font-semibold uppercase tracking-widest" href={app.social.insta.url} target="_blank">Instagram</Link>
            </li>
            <li className="py-5 [writing-mode:tb-rl]">
                <Link className="text-sm font-semibold uppercase tracking-widest" href={app.social.fb.url} target="_blank">Facebook</Link>
            </li>
            <li className="py-5 [writing-mode:tb-rl]">
                <Link className="text-sm font-semibold uppercase tracking-widest" href={app.social.twitter.url} target="_blank">twitter</Link>
            </li>
        </ul>
    </div>;
}