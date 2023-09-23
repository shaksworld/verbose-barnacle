import React from 'react';
import Lottie from 'react-lottie-player';
import Layout from "../components/Layout";
import Error500Animation from "../lottie/500-website-error-animation.json";

export default function Error404() {
  return (
    <Layout>
      <div className="flex justify-center h-screen items-center">
        <div className="text-center">
          <Lottie animationData={Error500Animation} loop play />
          <span className="text-lg text-primary">We cannot find your page</span>
        </div>
      </div>
    </Layout>
  );
}
