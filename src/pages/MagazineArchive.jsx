import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import useIsInView from "../hooks/useIsInView";

const issuesCfgs = {
  7: { "bg-color": "bg-FF608C", "text-color": "text-FFFFFF" },
  6: { "bg-color": "bg-FFFFFF", "text-color": "text-FF608C" },
  5: { "bg-color": "bg-00C1B5", "text-color": "text-FFFFFF" },
  4: { "bg-color": "bg-FF6519", "text-color": "text-FFFFFF" },
  3: { "bg-color": "bg-FFBE00", "text-color": "text-FFFFFF" },
  2: { "bg-color": "bg-1D3FBB", "text-color": "text-FFFFFF" },
  1: { "bg-color": "bg-E30512", "text-color": "text-FFFFFF" },
};

const MagazineArchive = () => {
  const [curItem, setCurItem] = useState(7);
  const visibleElements = useIsInView("name");

  useEffect(() => {
    setCurItem(visibleElements || 7);
  }, [visibleElements]);

  return (
    <main
      className={`relative w-full h-full ${issuesCfgs[curItem]["bg-color"]} transition-all duration-500`}
    >
      <Element
        name="7"
        className="h-screen w-full flex flex-col items-center justify-center bg-transparent observe"
      >
        <img
          src="/img/issues/backstagetalks_cover_issue_7.png"
          alt="Issue #7"
          className="w-[420px]"
        />
        <div className="text-center flex flex-col">
          <h2 className="text-lg font-bold mb-4">Issue #7</h2>

          <span className="font-bold">
            <a
              href="#"
              className={`${issuesCfgs[curItem]["text-color"]} hover:underline`}
            >
              BUY HERE
            </a>{" "}
            (Europe)
          </span>
          <span className="font-bold">
            <a
              href="#"
              className={`${issuesCfgs[curItem]["text-color"]} hover:underline`}
            >
              BUY HERE
            </a>{" "}
            (UK & Overseas)
          </span>

          <span className="font-bold text-sm mt-4">
            or in{" "}
            <a
              href="#"
              className={`${issuesCfgs[curItem]["text-color"]} hover:underline`}
            >
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="6"
        className="h-screen w-full flex flex-col items-center justify-center bg-transparent observe"
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
            className={`py-4 -bold text-[${issuesCfgs[curItem]["text-color"]} hover:underline`}
          >
            BUY HERE
          </a>

          <span className="font-bold text-sm">
            or in{" "}
            <a
              href="#"
              className={`${issuesCfgs[curItem]["text-color"]} hover:underline`}
            >
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="5"
        className="h-screen w-full flex flex-col items-center justify-center bg-transparent observe"
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
            className={`py-4 -bold text-[${issuesCfgs[curItem]["text-color"]} hover:underline`}
          >
            BUY HERE
          </a>

          <span className="font-bold text-sm">
            or in{" "}
            <a
              href="#"
              className={`${issuesCfgs[curItem]["text-color"]} hover:underline`}
            >
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="4"
        className="h-screen w-full flex flex-col items-center justify-center bg-transparent observe"
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
            <a
              href="#"
              className={`${issuesCfgs[curItem]["text-color"]} hover:underline`}
            >
              selected stores.
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="3"
        className="h-screen w-full flex flex-col items-center justify-center bg-transparent observe"
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
            className={`py-4 -bold text-[${issuesCfgs[curItem]["text-color"]} hover:underline`}
          >
            BUY HERE
          </a>

          <span className="font-bold text-sm">
            or in{" "}
            <a
              href="#"
              className={`${issuesCfgs[curItem]["text-color"]} hover:underline`}
            >
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="2"
        className="h-screen w-full flex flex-col items-center justify-center bg-transparent observe"
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
            className={`py-4 -bold text-[${issuesCfgs[curItem]["text-color"]} hover:underline`}
          >
            BUY HERE
          </a>

          <span className="font-bold text-sm">
            or in{" "}
            <a
              href="#"
              className={`${issuesCfgs[curItem]["text-color"]} hover:underline`}
            >
              selected stores
            </a>
          </span>
        </div>
      </Element>
      <Element
        name="1"
        className="h-screen w-full flex flex-col items-center justify-center bg-transparent observe"
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
            <a
              href="#"
              className={`${issuesCfgs[curItem]["text-color"]} hover:underline`}
            >
              selected stores.
            </a>
          </span>
        </div>
      </Element>
    </main>
  );
};

export default MagazineArchive;
