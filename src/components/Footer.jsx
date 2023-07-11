const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full p-4 flex items-center justify-between">
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

      <section className="pt-12">
        <ul className="text-lg">
          <li className="hover:underline">Issue #7</li>
          <li className="hover:underline">Issue #6</li>
          <li className="hover:underline">Issue #5</li>
          <li className="hover:underline">Issue #4</li>
          <li className="hover:underline">Issue #3</li>
          <li className="hover:underline">Issue #2</li>
          <li className="hover:underline">Issue #1</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
