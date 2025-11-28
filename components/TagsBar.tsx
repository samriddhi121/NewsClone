export default function TagsBar() {
  const tags = [
    "सीएम जयराम सुभीकरण", "SIR", "अनूठे 240", "दिल्ली कार धमाका",
    "क्रिकेट बॉल 19", "मोहम्‍मद", "आज का राशिफल", "श्रीह समाचार"
  ];

  return (
    <div className="flex flex-wrap gap-3 px-lg py-md">
      {tags.map((tag) => (
        <button
          key={tag}
          className="tag-btn"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
