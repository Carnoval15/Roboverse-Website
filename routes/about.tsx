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
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <img
            src="/roboverse.svg"
            class="max-w-full h-auto place-items-center"
            alt="Roboverse logo"
          />
          <div class="font-medium text-gray-500 sm:text-lg">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">We are Roboverse</h2>
            <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
          </div>
        </div>
        {/* <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"> */}
            <div class=" gap-4 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">
              <img class="w-full rounded-lg col-span-2" src="/group_image.jpg" alt="Group Image" />
              <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/cup.jpg" alt="office content 2" />
            </div>

      </section>
    </>
  );
}
