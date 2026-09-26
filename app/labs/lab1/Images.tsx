export default function Images() {
  return (
    <div id="wd-images">
      {/* Book sample: remote Starship image */}
      <h4>Remote image (SpaceX Starship)</h4>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/Starship_SN15_landing.jpg"
        alt="SpaceX Starship"
        width={300}
      />

      {/* Book sample: local image from /public/images */}
      <h4>Local image (Tesla bot)</h4>
      <img src="/images/teslabot.png" alt="Tesla bot" width={300} />

      {/* On your own */}
      <h4>An image I chose</h4>
      <img
        id="wd-your-image"
        src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg"
        alt="My chosen image"
        width={300}
      />

      {/* With AI — an extra sample image from a public URL */}
      <h4>AI sample image</h4>
      <img
        id="wd-ai-image"
        src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
        alt="Sample public image"
        width={300}
      />
    </div>
  );
}
