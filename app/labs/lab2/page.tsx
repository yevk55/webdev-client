export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        This paragraph also uses the style attribute to set its background
        and text colors directly on the element.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow"}}>
        This is the second paragraph.
      </p>
    </div>
  );
}