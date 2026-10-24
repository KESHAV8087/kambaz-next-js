import { readdirSync } from "fs";
import { arch, platform, cpus } from "os";

export default function ServerComponent() {
  let files: string[] = [];
  try {
    files = readdirSync(/*turbopackIgnore: true*/ process.cwd()).sort();
  } catch {
    files = [];
  }
  const serverInfo = {
    platform: platform(),
    arch: arch(),
    nodeVersion: process.version,
    cpuCount: cpus().length,
  };
  return (
    <div id="wd-server-component">
      <h4>Server Component</h4>
      <h5>Files on the server</h5>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
      <h5>Server Information</h5>
      <pre>{JSON.stringify(serverInfo, null, 2)}</pre>
      <hr />
    </div>
  );
}
