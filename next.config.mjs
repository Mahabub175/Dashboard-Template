/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["zos.alipayobjects.com", "cdn.britannica.com"],
  },
};

export default nextConfig;
