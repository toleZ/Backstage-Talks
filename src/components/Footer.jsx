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

      <section>
        <ul>
          <li>Issue #1</li>
          <li>Issue #2</li>
          <li>Issue #3</li>
          <li>Issue #4</li>
          <li>Issue #5</li>
          <li>Issue #6</li>
          <li>Issue #7</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
