"use client"

import Breadcrumb from "@/components/Common/Breadcrumb";
import axios from "axios";
import {  USER_DATA } from "@/config";

import { useEffect, useState } from "react";
import SingleUser from "@/components/Blog/SingleUser";


type User = {
  firstName: String,
  lastName: String,
  age: Number,
  email: String,
  phone: String,
  image: String,
  address: {
    city: String,
    state: String,
    country: String,
  },
}

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(USER_DATA)
    .then((res) => {
      setData(res.data.users);
    })
  },[])

  console.log(data);

  let count =0;
  return (
    <>
      <Breadcrumb
        pageName="Organizations"
        description="More than 1 Million startups are registered every year, where more than 50,000 startups are funded. You can use your skills to partner with these organization and with the existing ones to bring up a win-win status for all."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">


          {data.map((d) => (
              <div
                key={count++}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleUser org={d} />
              </div>
            ))}


            {/* {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))} */}


          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4 text-right">
              <p> Data fetched from <a href="https://www.crunchbase.com/" className="text-blue-400">Crunchbase</a> </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
