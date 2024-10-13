"use client";

import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    PocketIcon,
    PocketShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TumblrIcon,
    TumblrShareButton,
    TwitterShareButton,
    VKIcon,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    WorkplaceIcon,
    WorkplaceShareButton,
    XIcon,
} from "react-share";
import {cn} from "@/lib/utils";
import app from "@/config/app";

export default function Share({ url, text, subject, tags, img_url, btnClassName, size = 32, showFew = false }) {
    return <>
        <div className={cn("flex flex-row flex-wrap justify-center md:justify-start items-center gap-2")}>
            <FacebookShareButton quote={text} url={url} className={cn(btnClassName)} hashtag={tags} aria-label="Share on Facebook">
                <FacebookIcon size={size} round/>
            </FacebookShareButton>

            <TwitterShareButton url={url} title={text} className={cn(btnClassName)} aria-label="Share on Twitter">
                <XIcon size={size} round/>
            </TwitterShareButton>

            <TelegramShareButton url={url} title={text} className={cn(btnClassName)} aria-label="Share on telegram">
                <TelegramIcon size={size} round />
            </TelegramShareButton>

            <WhatsappShareButton url={url} title={text} separator=":: " className={cn(btnClassName)} aria-label="Share on whatsapp">
                <WhatsappIcon size={size} round />
            </WhatsappShareButton>

            <LinkedinShareButton url={url} title={text} source={app.seo_title} className={cn(btnClassName)} aria-label="Share on linkedin">
                <LinkedinIcon size={size} round />
            </LinkedinShareButton>

            <PinterestShareButton url={url} media={img_url} description={text} className={cn(btnClassName)} aria-label="Share on Pinterest">
                <PinterestIcon size={size} round />
            </PinterestShareButton>

            { !showFew && <VKShareButton url={url} image={img_url} title={text} className={cn(btnClassName)} aria-label="Share on VK">
                <VKIcon size={size} round />
            </VKShareButton> }

            <RedditShareButton url={url} title={text} windowWidth={660} windowHeight={460} className={cn(btnClassName)} aria-label="Share on Reddit">
                <RedditIcon size={size} round />
            </RedditShareButton>

            { !showFew && <TumblrShareButton url={url} title={text} className={cn(btnClassName)} aria-label="Share on Tumblr">
                <TumblrIcon size={size} round />
            </TumblrShareButton> }

            { !showFew && <EmailShareButton url={url} subject={subject} body={text} className={cn(btnClassName)} aria-label="Share on Email">
                <EmailIcon size={size} round />
            </EmailShareButton> }

            { !showFew && <WorkplaceShareButton url={url} quote={text} className={cn(btnClassName)} aria-label="Share on Workplace">
                <WorkplaceIcon size={size} round />
            </WorkplaceShareButton> }

            { !showFew && <PocketShareButton url={url} title={text} className={cn(btnClassName)} aria-label="Share on Pocket">
                <PocketIcon size={size} round />
            </PocketShareButton> }
        </div>
    </>;
}