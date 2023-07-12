import { Element } from "react-scroll";

const IssuesList = () => {
  return (
    <main className="relative w-full h-screen">
      <Element
        name="issue#7"
        className="h-full w-full flex flex-col items-center justify-center bg-[#FF608C]"
      >
        <img
          src="/img/issues/backstagetalks_cover_issue_7.png"
          alt="Issue #7"
          className="w-[420px]"
        />
        <div className="text-center flex flex-col">
          <h2 className="text-lg font-bold mb-4">Issue #7</h2>

          <span className="font-bold">
            <a href="#" className="text-white hover:underline">
              BUY HERE
            </a>{" "}
            (Europe)
          </span>
          <span className="font-bold">
            <a href="#" className="text-white hover:underline">
              BUY HERE
            </a>{" "}
            (UK & Overseas)
          </span>

          <span className="font-bold text-sm mt-4">
            or in{" "}
            <a href="#" className="text-white hover:underline">
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="issue#6"
        className="h-full w-full flex flex-col items-center justify-center bg-[#ffffff]"
      >
        <img
          src="/img/issues/backstagetalks_cover_issue_6.png"
          alt="Issue #6"
          className="w-[420px]"
        />
        <div className="text-center flex flex-col">
          <h2 className="text-lg font-bold">Issue #6</h2>

          <a
            href="#"
            className="py-4 block font-bold text-[#FF608C] hover:underline"
          >
            BUY HERE
          </a>

          <span className="font-bold text-sm">
            or in{" "}
            <a href="#" className="text-[#FF608C] hover:underline">
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="issue#5"
        className="h-full w-full flex flex-col items-center justify-center bg-[#00C1B5]"
      >
        <img
          src="/img/issues/backstagetalks_cover_issue_5.png"
          alt="Issue #5"
          className="w-[420px]"
        />

        <div className="text-center flex flex-col">
          <h2 className="text-lg font-bold">Issue #5</h2>

          <a
            href="#"
            className="py-4 block font-bold text-white hover:underline"
          >
            BUY HERE
          </a>

          <span className="font-bold text-sm">
            or in{" "}
            <a href="#" className="text-white hover:underline">
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="issue#4"
        className="h-full w-full flex flex-col items-center justify-center bg-[#FF6519]"
      >
        <img
          src="/img/issues/backstagetalks_cover_issue_4.png"
          alt="Issue #4"
          className="w-[420px]"
        />
        <div className="text-center flex flex-col">
          <h2 className="text-lg font-bold">Issue #4 is sold out.</h2>

          <span className="font-bold text-sm pt-4">
            If you are lucky, you may get the last pieces in{" "}
            <a href="#" className="text-white hover:underline">
              selected stores.
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="issue#3"
        className="h-full w-full flex flex-col items-center justify-center bg-[#FFBE00] "
      >
        <img
          src="/img/issues/backstagetalks_cover_issue_3.png"
          alt="Issue #3"
          className="w-[420px]"
        />
        <div className="text-center flex flex-col">
          <h2 className="text-lg font-bold">Issue #3</h2>

          <a
            href="#"
            className="py-4 block font-bold text-white hover:underline"
          >
            BUY HERE
          </a>

          <span className="font-bold text-sm">
            or in{" "}
            <a href="#" className="text-white hover:underline">
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="issue#2"
        className="h-full w-full flex flex-col items-center justify-center bg-[#1D3FBB]"
      >
        <img
          src="/img/issues/backstagetalks_cover2017.png"
          alt="Issue #2"
          className="w-[420px]"
        />
        <div className="text-center flex flex-col">
          <h2 className="text-lg font-bold">Issue #2</h2>

          <a
            href="#"
            className="py-4 block font-bold text-white hover:underline"
          >
            BUY HERE
          </a>

          <span className="font-bold text-sm">
            or in{" "}
            <a href="#" className="text-white hover:underline">
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="issue#1"
        className="h-full w-full flex flex-col items-center justify-center bg-[#E30512]"
      >
        <img
          src="/img/issues/backstagetalks_cover2016_n.png"
          alt="Issue #1"
          className="w-[420px]"
        />
        <div className="text-center flex flex-col">
          <h2 className="text-lg font-bold">Issue #1 is sold out.</h2>

          <span className="font-bold text-sm pt-4">
            If you are lucky, you may get the last pieces in{" "}
            <a href="#" className="text-white hover:underline">
              selected stores.
            </a>
          </span>
        </div>
      </Element>
    </main>
  );
};

export default IssuesList;
