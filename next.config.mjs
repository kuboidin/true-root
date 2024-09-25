import path from "path";
import { fileURLToPath } from "url";
/** @type {import('next').NextConfig} */

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wbppindsgvprdldvrrti.supabase.co',
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com'
            },
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'style')],
    },
};

export default nextConfig;
