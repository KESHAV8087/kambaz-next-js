export default function ListTags() {
  return (
    <div id="wd-lists">
      {/* Book sample: pancake ordered list */}
      <h4>How to make pancakes</h4>
      <ol id="wd-pancakes">
        <li>Mix the dry ingredients</li>
        <li>Add the wet ingredients</li>
        <li>Whisk until smooth</li>
        <li>Pour onto a hot griddle</li>
        <li>Flip when bubbles form</li>
      </ol>

      {/* Book sample: unordered list */}
      <h4>Grocery list</h4>
      <ul>
        <li>Flour</li>
        <li>Eggs</li>
        <li>Milk</li>
        <li>Butter</li>
      </ul>

      {/* On your own */}
      <h4>My favorite recipe</h4>
      <ol id="wd-your-favorite-recipe">
        <li>Boil the pasta</li>
        <li>Sauté garlic in olive oil</li>
        <li>Toss pasta with the garlic oil</li>
        <li>Finish with parmesan and pepper</li>
      </ol>

      <h4>My favorite books</h4>
      <ul id="wd-your-books">
        <li>The Pragmatic Programmer</li>
        <li>Dune</li>
        <li>Educated</li>
      </ul>

      {/* With AI */}
      <h4>HTML tags from this chapter</h4>
      <ul id="wd-ai-html-tags">
        <li>&lt;h1&gt;–&lt;h6&gt; — headings</li>
        <li>&lt;p&gt; — paragraph</li>
        <li>&lt;ol&gt; / &lt;ul&gt; / &lt;li&gt; — lists</li>
        <li>&lt;table&gt; — tabular data</li>
        <li>&lt;img&gt; — images</li>
        <li>&lt;a&gt; — anchors / links</li>
      </ul>
    </div>
  );
}
