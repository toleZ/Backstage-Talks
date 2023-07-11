const Navbar = () => {
  return (
    <nav className="z-10 fixed top-0 w-full p-4 flex items-center justify-between">
      <img src="/img/logo.png" alt="Backstage Talks logo" className="w-64" />
      <a href="#" className="hidden lg:block font-bold text-lg hover:underline">
        info@backstagetalks.com
      </a>
    </nav>
  );
};

export default Navbar;
