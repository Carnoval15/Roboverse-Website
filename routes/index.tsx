import { Head } from "$fresh/runtime.ts";
import Navbar from "../components/Navbar.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roboverse</title>
      </Head>

      <div class="w-screen h-screen bg-gray-900">
        <Navbar />

        <div class="my-10 text(center 3xl white)">
          {
            /* <img
          src="/roboverse.svg"
          class="w-100 h-100 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
          alt="The Roboverse"
        /> */
          }
        </div>

        <div class="w-screen h-screen bg-gray-900">
          {
            /* <header class="absolute inset-x-0 top-0 z-50">

          </header> */
          }

          <div class="relative isolate px-1 pt-1 lg:px-1">
            <div
              class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              >
              </div>
            </div>
            <div class="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
              <img
                src="/roboverse.svg"
                class="w-50 h-50 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
                alt="The Roboverse"
              />
              <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Who are We?.{" "}
                  <a href="#" class="font-semibold text-indigo-600">
                    <span class="absolute inset-0" aria-hidden="true">
                    </span>Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div class="text-center">
                <h1 class="text-2xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                  A Robatic team started back in 2022, <br /> we are intrested in AI, and rescue Robots, We have participated in Robocup Iran Open (Junior) 2022 and 2023 and achieved the first place in both events, We've also participated in Robocup 2022 Thailand and achieved 2nd international place
                </h1>

                {/* <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Know more about us
                  </a>
                </div> */}
              </div>
            </div>
            <div
              class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
