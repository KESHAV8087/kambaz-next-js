import Modules from "./Modules";

export default async function ModulesPage({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  return (
    <div id="wd-modules-screen">
      <h3 className="text-xl font-semibold mb-3">Modules</h3>
      <Modules cid={cid} />
    </div>
  );
}
