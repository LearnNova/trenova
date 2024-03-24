import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function Upload() {
  const docs = [
    { uri: "https://trenova.nyc3.digitaloceanspaces.com/all.doc" }, // Remote file
    { uri: "https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf" }, // Local File
  ];

  return <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />;
}
export default Upload;
