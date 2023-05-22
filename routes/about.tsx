// routes/about.tsx
import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";
import Counter from "../islands/Counter.tsx";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Roboverse-About Us</title>
      </Head>
      <Navbar />

      <section class="bg-white">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-1 lg:py-16 lg:px-6">
          {/* <img
            src="/roboverse.svg"
            class="max-w-full h-auto place-items-center"
            alt="Roboverse logo"
          /> */}
          <div class=" gap-4 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">

            <div class="font-medium text-gray-500 col-span-2 sm:text-lg">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">We are Roboverse</h2>
              <p class="mb-4">
                Innovative and thrilling robots are our specialty, thanks to our incredible team of passionate and talented C/C++ programmers. Our origins trace back to 2021 when we became proficient in C language and Arduino programming. From there, we utilized our skills to program rescue maze simulation robots in the Webots' simulation program. In Iran Open RoboCup Junior 2022, we emerged victorious, and in RoboCup Junior 2022 Thailand, we secured second place. Our success continued when we participated in RoboCup Junior Iran Open 2023, where we again finished in first place. As we gear up for RoboCup Junior 2023 France, we anticipate exceeding the judges' expectations with our impressive robots.
              </p>
              <p>
                In the future, we are looking forward to more opportunities and challenges as we pride ourselves on our achievements in improving our skills through learning new things. Our belief is that the skillful art of C/C++ programming can be used to create some truly amazing things.
              </p>
            </div>
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://pbxjlmbnkupvbnhwclgc.supabase.co/storage/v1/object/public/Site-Media/cup.jpg" alt="office content 2" />
          </div>
          {/* <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"> */}
          <div class=" gap-4 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">
            <img class="w-full rounded-lg col-span-2" src="https://pbxjlmbnkupvbnhwclgc.supabase.co/storage/v1/object/public/Site-Media/group_image.jpg" alt="Group Image" />
            <img class="w-full rounded-lg" src="https://pbxjlmbnkupvbnhwclgc.supabase.co/storage/v1/object/public/Site-Media/Technical%20Challenge%20Certificate.png" alt="Technical-Challeng Certificate 2023" />
          </div>
        </div>

      </section>
    </>
  );
}
