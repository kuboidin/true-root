import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export default function EcoBadge({ score = 3, information = null }) {
    let info = {
        heading: "Fully Eco-Friendly",
        description: "This crop is cultivated using 100% organic and sustainable methods, ensuring minimal environmental impact and promoting long-term ecological balance."
    };

    if (score === 1) {
        info = {
            heading: "Non Eco-Friendly",
            description: "This crop is grown using harmful practices, including heavy pesticide use, synthetic fertilizers, and other methods that damage the environment."
        }
    } else if (score === 2) {
        info = {
            heading: "Partially Eco-Friendly",
            description: "While this crop is grown with some sustainable practices, it still relies on methods that can negatively affect the environment, such as limited pesticide use or non-organic fertilizers."
        }
    } else if (score === 3) {
        info = {
            heading: "Moderately Eco-Friendly",
            description: "This crop uses a mix of sustainable and traditional farming methods, minimizing its environmental impact, but there is room for improvement in practices."
        }
    } else if (score === 4) {
        info = {
            heading: "Mostly Eco-Friendly",
            description: "This crop is grown using organic or sustainable methods that promote soil health, reduce water use, and limit the use of harmful chemicals."
        }
    }

    if (information) {
        info.description = information;
    }

    return <>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Image src={`/assets/eco/eco-${score}.png`} alt={info.description} width={64} height={64} className="w-14 h-14 mr-2" />
                </TooltipTrigger>
                <TooltipContent className="w-1/2">
                    <p><strong>{info.heading}:</strong> {info.description}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </>;
}
