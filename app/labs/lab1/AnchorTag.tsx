export default function AnchorTag() {
  return (
    <div id="wd-anchor-tag">
      {/* Book sample: lipsum + GitHub anchors */}
      <h4>Anchor tags</h4>
      <p>
        Visit{" "}
        <a href="https://www.lipsum.com" target="_blank" rel="noreferrer">
          Lorem Ipsum
        </a>{" "}
        for placeholder text, or browse code on{" "}
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>

      {/* On your own — personal link + personal GitHub */}
      <p>
        <a id="wd-your-link" href="https://www.northeastern.edu" target="_blank" rel="noreferrer">
          A site I like
        </a>
      </p>
      <p>
        <a id="wd-your-github" href="https://github.com/KESHAV8087" target="_blank" rel="noreferrer">
          My GitHub
        </a>
      </p>

      {/* With AI — a docs link */}
      <p>
        <a
          id="wd-ai-link"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
          target="_blank"
          rel="noreferrer"
        >
          MDN: the &lt;table&gt; element
        </a>
      </p>
    </div>
  );
}
