import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";
import ListTags from "./ListTags";
import Tables from "./Tables";
import Images from "./Images";
import HighlightedParagraph from "./HighlightedParagraph";
import HighlightedBox from "./HighlightedBox";
import AnchorTag from "./AnchorTag";
import Forms from "./forms/Forms";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Lab 1 — HTML</h1>

      <HeadingTags />
      <hr />
      <ParagraphTag />
      <hr />
      <ListTags />
      <hr />
      <Tables />
      <hr />
      <Images />
      <hr />

      <h2>Highlighted Paragraph</h2>
      {/* Lab component — the checker looks for id wd-highlighted-paragraph */}
      <HighlightedParagraph id="wd-highlighted-paragraph">
        Default highlight (yellow).
      </HighlightedParagraph>
      <HighlightedParagraph color="white" backgroundColor="red">
        White on red.
      </HighlightedParagraph>
      {/* On your own */}
      <HighlightedParagraph color="black" backgroundColor="lightgreen">
        KESHAV ADKAR — my own highlighted sentence.
      </HighlightedParagraph>
      {/* With AI */}
      <HighlightedParagraph color="white" backgroundColor="purple">
        Sample: purple background with white text.
      </HighlightedParagraph>
      <hr />

      <h2>Highlighted Box</h2>
      {/* Lab component — the checker looks for id wd-highlighted-box */}
      <HighlightedBox id="wd-highlighted-box" backgroundColor="lightyellow">
        <h4>My goals</h4>
        <ul>
          <li>Ship A1 on time</li>
          <li>Understand the App Router</li>
          <li>Get Vercel deploys working</li>
        </ul>
      </HighlightedBox>
      {/* With AI */}
      <HighlightedBox backgroundColor="lavender">
        <h4>Sample nested content</h4>
        <p>
          A box can wrap <strong>any</strong> children, including{" "}
          <em>lists</em> and <a href="https://github.com">links</a>.
        </p>
      </HighlightedBox>
      <hr />

      <AnchorTag />
      <hr />
      <Forms />
    </div>
  );
}
