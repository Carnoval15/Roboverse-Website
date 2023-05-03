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

      <div class="w-screen h-screen bg-gray-900">
      <Navbar />

          <p class="my-10 text(center 3xl white)">
            
            <Counter start={3} />
          </p>

          <img
            src="/logo.svg"
            class="w-32 h-32"
            alt="the fresh logo: a sliced lemon dripping with juice"
          />

      </div>
    </>
  );
}
