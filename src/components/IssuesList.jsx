import { Element } from "react-scroll";

const IssuesList = () => {
  return (
    <main className="relative w-full h-screen snap-y snap-mandatory snap-always">
      <Element
        name="issue#7"
        className="h-full w-full flex flex-col items-center justify-center snap-center"
      >
        Issue #7
      </Element>
      <Element
        name="issue#6"
        className="h-full w-full flex flex-col items-center justify-center snap-center"
      >
        Issue #6
      </Element>
      <Element
        name="issue#5"
        className="h-full w-full flex flex-col items-center justify-center snap-center"
      >
        Issue #5
      </Element>
      <Element
        name="issue#4"
        className="h-full w-full flex flex-col items-center justify-center snap-center"
      >
        Issue #4
      </Element>
      <Element
        name="issue#3"
        className="h-full w-full flex flex-col items-center justify-center snap-center"
      >
        Issue #3
      </Element>
      <Element
        name="issue#2"
        className="h-full w-full flex flex-col items-center justify-center snap-center"
      >
        Issue #2
      </Element>
      <Element
        name="issue#1"
        className="h-full w-full flex flex-col items-center justify-center snap-center"
      >
        Issue #1
      </Element>
    </main>
  );
};

export default IssuesList;
