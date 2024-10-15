import {cn} from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TabLink({ section = "", tab = "Growing Process & Schedule", className = "", children }) {
    return <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <span className={cn("lnk", className)}>{children}</span>
            </TooltipTrigger>
            <TooltipContent>
                <p>Switch to <strong>{tab}</strong> tab at the top and visit <strong>{section}</strong> section.</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>;
}