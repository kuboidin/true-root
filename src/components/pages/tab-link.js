import {cn} from "@/lib/utils";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip";

function mapToHash(tab = "", section = "") {
    const t = (tab || "").toLowerCase();
    const s = (section || "").toLowerCase();

    // 1) Respect explicit tab when provided
    if (t) {
        if (t.includes("how to grow") || t.includes("grow")) return "#grow";
        if (t.includes("process") || t.includes("schedule")) return "#process";
        if (t.includes("good") || t.includes("know") || t.includes("info")) return "#info";
    }

    // 2) Infer from section keywords when tab is omitted
    if (s) {
        // Info section keywords
        if (s.includes("health") || s.includes("risk") || s.includes("ayur") || s.includes("nutrition") || s.includes("ecolog") || s.includes("good to know") || s.includes("info")) {
            return "#info";
        }
        // Process section keywords
        if (
            s.includes("schedule") ||
            s.includes("watering") ||
            s.includes("fertiliz") ||
            s.includes("pesticide") ||
            s.includes("disease") ||
            s.includes("soil mix") ||
            s.includes("germination stage") ||
            s.includes("quality") ||
            s.includes("readiness") ||
            s.includes("timeline")
        ) {
            return "#process";
        }
        // Grow section keywords
        if (
            s.includes("seed") ||
            s.includes("sprout") ||
            s.includes("day ") ||
            s.includes("step ") ||
            s.includes("germin") ||
            s.includes("seeding") ||
            s.includes("how to grow") ||
            s.includes("grow")
        ) {
            return "#grow";
        }
    }

    // 3) Sensible default
    return "#process";
}

export default function TabLink({section = "", tab = "", className = "", children}) {
    const href = mapToHash(tab, section);
    const tooltipLabel = tab || (href === "#grow" ? "How to Grow" : href === "#info" ? "Good to know" : "Growing Process & Schedule");
    // Future: if we add deep section anchors inside each block, append like `${href}-${slug(section)}`
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a href={href} className={cn("lnk", className)}>
                        {children}
                    </a>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Jump to <strong>{tooltipLabel}</strong>{section ? ` — ${section}` : ""}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}