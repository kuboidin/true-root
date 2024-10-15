import {cn} from "@/lib/utils";

export default function Step({ step, heading, is_last = false, className = "", children }) {

    return <>
        <div className="flex">
            <div className="flex flex-col items-center mr-4">
                <div>
                    <div className="flex items-center justify-center w-12 h-12 border rounded-full bg-lightGreen">{step}.</div>
                </div>
                { !is_last && <div className="w-px h-full bg-lightGreen"/> }
            </div>
            <div className={cn("pt-1 pb-8", className)}>
                <p className="mb-2 text-lg font-bold">{heading}</p>
                {children}
            </div>
        </div>
    </>;
}