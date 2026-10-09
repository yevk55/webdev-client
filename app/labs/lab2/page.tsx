import "./index.css";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr">
        This paragraph also uses the style attribute to set its background
        and text colors directly on the element.
      </p>
      <p>
        This is the second paragraph.
      </p>
    
    <div id="wd-css-id-selectors">
      <h3>ID selectors</h3>
      <p id="wd-id-selector-1">
        Instead of changing the look and feel of all the
        elements of the same name, e.g., P, we can refer to a
        specific element by its ID
      </p>
      <p id="wd-id-selector-2">
        Here&apos;s another paragraph using a different ID and a
        different look and feel
      </p>
      <p id="wd-ai-id-selector">
        This paragraph uses its own ID, so it gets its own purple
        background and white text without affecting the other IDs.
      </p>
      <p id="wd-id-selector-3">
        This is my own paragraph.
      </p>
    </div>

    <div id="wd-css-class-selectors">
      <h3>Class selectors</h3>
      <p className="wd-class-selector">
        Instead of using IDs to refer to elements, you can use an
        element&apos;s CLASS attribute
      </p>
      <h4 className="wd-class-selector">
        This heading has same style as paragraph above
      </h4>
      <p className="wd-ai-class-selector">
        This paragraph uses its own class, so it gets a teal background
        and white text.
      </p>
      <h4 className="wd-ai-class-selector">
        This heading shares the same class, and the same style, as the
        paragraph above
      </h4>
    </div>
      <p className="wd-your-class">
        This is my styled class.
      </p>
      <h4 className="wd-your-class">
        This heading has same style as paragraph above.
      </h4>
    </div>
  );
}