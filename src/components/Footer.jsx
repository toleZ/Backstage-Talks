import { Link } from "react-scroll";
import useIsInView from "../hooks/useIsInView";

const Footer = () => {
  const visibleElements = useIsInView("name");

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
        <Link
          to="7"
          className={`hover:underline hover:cursor-pointer ${
            visibleElements === "7" && "font-bold"
          }`}
        >
          Issue #7
        </Link>
        <Link
          to="6"
          className={`hover:underline hover:cursor-pointer ${
            visibleElements === "6" && "font-bold"
          }`}
        >
          Issue #6
        </Link>
        <Link
          to="5"
          className={`hover:underline hover:cursor-pointer ${
            visibleElements === "5" && "font-bold"
          }`}
        >
          Issue #5
        </Link>
        <Link
          to="4"
          className={`hover:underline hover:cursor-pointer ${
            visibleElements === "4" && "font-bold"
          }`}
        >
          Issue #4
        </Link>
        <Link
          to="3"
          className={`hover:underline hover:cursor-pointer ${
            visibleElements === "3" && "font-bold"
          }`}
        >
          Issue #3
        </Link>
        <Link
          to="2"
          className={`hover:underline hover:cursor-pointer ${
            visibleElements === "2" && "font-bold"
          }`}
        >
          Issue #2
        </Link>
        <Link
          to="1"
          className={`hover:underline hover:cursor-pointer ${
            visibleElements === "1" && "font-bold"
          }`}
        >
          Issue #1
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
