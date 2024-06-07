/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {hostname: "marvelous-starfish-987.convex.cloud"},
            { hostname: "oaidalleapiprodscus.blob.core.windows.net" },
        ]
    }
};

export default nextConfig;
