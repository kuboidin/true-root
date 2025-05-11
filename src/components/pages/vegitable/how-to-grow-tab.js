import Step from "@/components/pages/vegitable/step";
import {MoveRight} from "lucide-react";

export default function HowToGrowTab({ plant }) {
    return <>
        <div className="container flex flex-col gap-2">
            <div className="m-lg-b0 m-md-b30">
                <div className="mb-10 max-md:mb-5">
                    <h2 className="mb-2">How to grow {plant?.plural || 'plants'} at Home (In Pots or Grow Bags)</h2>
                    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="grid gap-6 row-gap-10 grid-cols-2">
                            <div className="lg:py-6 lg:pr-16 col-span-full">
                                {plant?.tabs?.how_to_grow && plant.tabs.how_to_grow.length > 0 && plant.tabs.how_to_grow.map((step, i) => <Step key={i} step={i + 1} heading={step.heading} is_last={i === plant.tabs.how_to_grow.length - 1}>
                                    {step.title && <p className="text-gray-700">{step.title}</p>}
                                    <ul className="flex flex-col gap-2 text-gray-700">
                                        {step.steps && step.steps.length > 0 && step.steps.map((s, j) => <li key={j}><MoveRight size={18} className="-mt-2 mr-2"/>{s}</li>)}
                                    </ul>
                                </Step>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
