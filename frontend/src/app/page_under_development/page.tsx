import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page under development",
  description: "this page is under development",
  // other metadata
};

const page_under_development = () => {
  return (
    <section className=" p-40 bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">this page is under developent</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, this app is under production and all the pages are not Developed </p>
          <a href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
        </div>   
      </div>
    </section>
  );
};

export default page_under_development;
