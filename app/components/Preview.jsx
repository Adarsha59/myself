export default function Preview({ content, file }) {
  if (!content) return null;

  return (
    <div className="mt-4 p-4 border border-dashed border-white rounded">
      {file && file.type.includes("image") ? (
        <img src={content} alt="preview" className="max-w-full rounded" />
      ) : (
        <p className="whitespace-pre-wrap text-white">{content}</p>
      )}
    </div>
  );
}
