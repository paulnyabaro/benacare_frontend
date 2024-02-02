import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="border-b-2">
        <div className="container py-3">
          <div className="flex justify-between items-center">
            <img src="/img/logo.png" alt="" width="200px" />
            <ul className="flex gap-x-8">
              <li><a href="">Home</a></li>
              <li><a href="">What We Do</a></li>
              <li><a href="">Who We Are</a></li>
              <li><a href="">Work With Us</a></li>
              <li><a href="">News & Media</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="" className="bg-blue px-6 text-white uppercase text-sm py-3 border-rounded font-semibold rounded-3xl">Get In Touch</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}
