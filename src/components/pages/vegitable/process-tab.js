import {Separator} from "@/components/ui/separator";
import {Asterisk, Bean, Droplets, MoveRight, Shrub, Sprout} from "lucide-react";
import Nutrition from "@/components/pages/vegitable/nutrition";
import {GiFertilizerBag} from "react-icons/gi";
import {FaBacteria} from "react-icons/fa";
import {PiPlantFill} from "react-icons/pi";

export default function ProcessTab({ plant }) {

    return <>
        <div className="container flex flex-col gap-2">
            <div>
                {plant?.plural && (
                    <div className="mb-10 max-md:mb-5">
                        <h2 className="mb-2">Process & Schedule (Grow {plant.plural})</h2>
                        {plant?.tabs?.process?.quick_info && (
                            <p className="mb-4">
                                {plant.tabs.process.quick_info}
                            </p>
                        )}
                    </div>
                )}

                <Separator className="mt-4 mb-2"/>
                {plant?.tabs?.process?.quick_points && plant.tabs.process.quick_points.length > 0 && (
                    <p className="my-4" id="process-quick-points">
                        {plant.tabs.process.quick_points.map((pt, i) => <span key={i}><MoveRight size={18} className="-mt-2 mr-2"/> {pt} { i !== plant.tabs.process.quick_points.length - 1 && <br/>} </span>)}
                    </p>
                )}
                <Separator className="my-4"/>
                {plant?.tabs?.process?.nutritional_requirements && (
                    <div id="process-nutritional-requirements">
                        <Nutrition heading="Nutritional Requirements" items={plant.tabs.process.nutritional_requirements}/>
                    </div>
                )}
                <Separator className="my-4"/>

                {plant?.tabs?.process?.seeding_process && plant?.plural && (
                    <div className="xl:mb-6 md:mb-3.5 mb-2.5" id="process-seeding-process">
                        <h4 className="font-bold text-xl max-md:text-lg"><Bean size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Seeding Process of {plant.plural}</h4>
                        <p>{plant.tabs.process.seeding_process}</p>
                        <Separator className="my-4"/>
                        {plant?.tabs?.process?.more_info && plant.tabs.process.more_info.length > 0 && (
                            <ul className="specification-list mb-10">
                                {plant.tabs.process.more_info.map((list, i) => <li key={i} className="flex border-b border-border py-[7px] text-body gap-2">
                                    <strong>{list.heading}:</strong> <span> {list.info}</span>
                                </li>)}
                            </ul>
                        )}
                    </div>
                )}
                {plant?.tabs?.process?.germination_stage && plant.tabs.process.germination_stage.length > 0 && (
                    <div className="product-info">
                        <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                            <h4 className="font-bold text-xl max-md:text-lg mb-2"><Sprout size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Germination Stages and Conditions</h4>
                            <ul className="flex flex-col gap-4">
                                {plant.tabs.process.germination_stage.map((list, i) => <li key={i}><h6>{list.heading}: <span className="font-normal">{list.info}</span></h6></li>)}
                            </ul>
                        </div>
                    </div>
                )}

                <Separator className="my-4"/>

                {plant?.tabs?.process?.what_affect_quality && plant.tabs.process.what_affect_quality.length > 0 && (
                    <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="watering">
                        <h4 className="font-bold text-xl max-md:text-lg mb-2"><Droplets size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> What Affects Taste and Quality of Fruit</h4>
                        <ul className="flex flex-col gap-4">
                            {plant.tabs.process.what_affect_quality.map((list, i) => <li key={i}><h6>{list.heading}: <span className="font-normal">{list.info}</span></h6></li>)}
                        </ul>
                    </div>
                )}

                <Separator className="my-4"/>
                {plant?.tabs?.process?.fertilizer_requirements && (
                    <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="fertilizer">
                        <h4 className="font-bold text-xl max-md:text-lg mb-2"><GiFertilizerBag size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Fertilizer Requirements</h4>
                        <ul className="flex flex-col gap-4">
                            {plant?.tabs?.process?.fertilizer_requirements?.organic && plant.tabs.process.fertilizer_requirements.organic.length > 0 && (
                                <li>
                                    <h6>Organic Fertilizer: </h6>
                                    <div className="font-normal">
                                        {plant.tabs.process.fertilizer_requirements.organic.map((list, i) => <p key={i}>- {list}</p>)}
                                    </div>
                                </li>
                            )}
                            {plant?.tabs?.process?.fertilizer_requirements?.chemical && plant.tabs.process.fertilizer_requirements.chemical.length > 0 && (
                                <li>
                                    <h6>Chemical Fertilizer: </h6>
                                    <div className="font-normal">
                                        {plant.tabs.process.fertilizer_requirements.chemical.map((list, i) => <p key={i}>- {list}</p>)}
                                    </div>
                                </li>
                            )}
                            {plant?.tabs?.process?.fertilizer_requirements?.how_to && plant.tabs.process.fertilizer_requirements.how_to.length > 0 && (
                                <li>
                                    <h6>How to fertilize: </h6>
                                    <div className="font-normal">
                                        {plant.tabs.process.fertilizer_requirements.how_to.map((list, i) => <p key={i}>- {list}</p>)}
                                    </div>
                                </li>
                            )}
                            {plant?.tabs?.process?.fertilizer_requirements?.tips && plant.tabs.process.fertilizer_requirements.tips.length > 0 && (
                                plant.tabs.process.fertilizer_requirements.tips.map((list, i) => <li key={i}><h6>Tip: <span className="font-normal">{list}</span></h6></li>)
                            )}
                        </ul>
                    </div>
                )}

                <Separator className="my-4"/>

                {plant?.tabs?.process?.watering_schedule && plant.tabs.process.watering_schedule.length > 0 && (
                    <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="watering">
                        <h4 className="font-bold text-xl max-md:text-lg mb-2"><Droplets size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Watering Schedule</h4>
                        <ul className="flex flex-col gap-4">
                            {plant.tabs.process.watering_schedule.map((item, i) => <li key={i}><h6>{item.heading}: <span className="font-normal">{item.info}</span></h6></li>)}
                        </ul>
                    </div>
                )}

                <Separator className="my-4"/>

                {plant?.tabs?.process?.diseases && plant.tabs.process.diseases.length > 0 && (
                    <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="diseases">
                        <h4 className="font-bold text-xl max-md:text-lg mb-2"><FaBacteria size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Diseases - Know & Treat</h4>

                        {plant.tabs.process.diseases.map((item, i) => (
                            <div key={i}>
                                <h6 className="font-bold text-base">{item.heading}</h6>
                                {item.info && item.info.length > 0 && (
                                    <ul className="flex flex-col gap-1">
                                        {item.info.map((info, j) => <li key={j}><h6>{info.label}: <span className="font-normal">{info.detail}</span></h6></li>)}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <Separator className="my-4"/>

                {plant?.tabs?.process?.weeding_caring && plant.tabs.process.weeding_caring.length > 0 && (
                    <div className="md:mb-10 sm:mb-3.6 mb-2.5" id="weeding">
                        <h4 className="font-bold text-xl max-md:text-lg mb-2"><PiPlantFill size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Weeding & Caring</h4>

                        {plant.tabs.process.weeding_caring.map((item, i) => (
                            <div key={i}>
                                <h6 className="font-bold text-base mt-3">{item.heading}</h6>
                                {item.info && (
                                    <ul className="flex flex-col gap-1">
                                        <li>{item.info}</li>
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <Separator className="my-4"/>

                {plant?.tabs?.process?.good_for_cultivation && plant.tabs.process.good_for_cultivation.length > 0 && (
                    <div className="mb-10 max-md:mb-5">
                        <h4 className="font-bold text-xl max-md:text-lg mb-2"><Shrub size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> When to Know it&#39;s Good for Cultivation</h4>

                        {plant.tabs.process.good_for_cultivation.map((item, i) => <p key={i} className="mb-4">{item}</p>)}
                    </div>
                )}

                <Separator className="my-4"/>

                {plant?.tabs?.process?.tips && plant.tabs.process.tips.length > 0 && (
                    <div className="md:mb-10 sm:mb-3.6 mb-2.5">
                        <h4 className="font-bold text-xl max-md:text-lg mb-2"><Asterisk size={20} strokeWidth={2.5} className="-mt-2 mr-2"/> Important Reminders/Tips at Each Stage to grow {plant?.plural || 'plants'}</h4>
                        <ul className="flex flex-col gap-4">
                            {plant.tabs.process.tips.map((item, i) => <li key={i}>- {item}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </>;
}
