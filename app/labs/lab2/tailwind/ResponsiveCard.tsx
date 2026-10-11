export default function ResponsiveCard() {
  return (
    <div id="wd-tw-card">
      <h3>Responsive card</h3>
      <div className="max-w-sm md:max-w-md rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="bg-blue-600 h-24" />
        <div className="p-4">
          <h4 className="text-lg font-bold">Card title</h4>
          <p className="text-gray-600 text-sm">
            A simple responsive card using rounded corners, shadow, and padding.
          </p>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Action
          </button>
        </div>
      </div>
    </div>
  );
}
