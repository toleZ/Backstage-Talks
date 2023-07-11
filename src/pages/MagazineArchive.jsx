import IssuesList from "../components/IssuesList";

const MagazineArchive = () => {
  return (
    <IssuesList
      issues={[
        "Issue #7",
        "Issue #6",
        "Issue #5",
        "Issue #4",
        "Issue #3",
        "Issue #2",
        "Issue #1",
      ]}
    />
  );
};

export default MagazineArchive;
