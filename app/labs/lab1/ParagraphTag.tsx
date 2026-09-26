export default function ParagraphTag() {
  return (
    <div id="wd-paragraph-tag">
      {/* Book sample: wrapping text in <p> creates vertical spacing */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
        eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.
      </p>
      <p>
        Proin viverra risus a eros volutpat tempor. In quis arcu et eros porta
        lobortis sit amet at magna.
      </p>

      {/* On your own — two personal paragraphs */}
      <p id="wd-p-your-1">
        Hi, I&apos;m KESHAV ADKAR. I&apos;m taking this course to get comfortable
        building full web applications from the browser all the way to a database.
      </p>
      <p id="wd-p-your-2">
        Outside of class I like hiking and cooking, and I&apos;m most looking
        forward to the parts of the course where the UI starts talking to a real
        server.
      </p>

      {/* With AI */}
      <p id="wd-ai-p">
        Wrapping text in a paragraph tag adds vertical space above and below the
        block because browsers give the p element default top and bottom margins,
        so each paragraph is visually separated from the next without any extra
        markup.
      </p>
    </div>
  );
}
