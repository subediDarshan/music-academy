import { Meteors } from "@/components/ui/meteors";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased">
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Contact Us
          </h1>
          <h1 className="text-slate-400 w-1/3 mx-auto mt-5">
            We're here to help with any questions about our courses, programs,
            or events. Reach out and let us know how we can assist you in your
            musical journey.
          </h1>
          <div className="mx-auto mt-8">
            <form className="flex flex-col gap-3 mx-auto w-3/4">
              <input
                type="text"
                placeholder="Your email address"
                className="bg-transparent text-slate-400 p-2 border rounded-xl w-1/2 mx-auto"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="bg-transparent text-slate-400 p-2 border rounded-xl w-1/2 mx-auto"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="px-2 py-1 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200 mt-3 w-1/6 mx-auto"
              />
            </form>
          </div>
        </div>
      </div>
      <Meteors number={20} />
    </main>
  );
}

export default page;
