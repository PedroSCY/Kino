import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  async redirects(){
    return [
      {
        source:"/",
        destination:"/filmes",
        permanent:true
      }
    ]
  },

  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
