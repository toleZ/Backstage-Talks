import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="z-10 hidden fixed bottom-0 w-full p-4 lg:flex items-center justify-between">
      <section className="w-80">
        <p className="font-bold text-lg">
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </p>

        <span className="text-xs">
          &copy; 2023{" "}
          <a href="#" className="underline hover:no-underline">
            Published by Büro Milk
          </a>
        </span>

        <a
          href="#"
          className="block mt-6 font-bold text-lg underline hover:no-underline"
        >
          Privacy Policy
        </a>
      </section>

      <section className="pt-12 flex flex-col text-xl">
        <Link to="issue#7" className="hover:underline hover:cursor-pointer">
          Issue #7
        </Link>
        <Link to="issue#6" className="hover:underline hover:cursor-pointer">
          Issue #6
        </Link>
        <Link to="issue#5" className="hover:underline hover:cursor-pointer">
          Issue #5
        </Link>
        <Link to="issue#4" className="hover:underline hover:cursor-pointer">
          Issue #4
        </Link>
        <Link to="issue#3" className="hover:underline hover:cursor-pointer">
          Issue #3
        </Link>
        <Link to="issue#2" className="hover:underline hover:cursor-pointer">
          Issue #2
        </Link>
        <Link to="issue#1" className="hover:underline hover:cursor-pointer">
          Issue #1
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
