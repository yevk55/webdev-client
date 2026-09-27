export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-your-1">
        I am from Sacramento, California. 
      </p>
      <p id="wd-p-your-2">
        My goal in this course is to learn the foundations for building web applications. 
      </p>
      <p id="wd-ai-p">
        Browsers apply default top and bottom margins to every &lt;p&gt; element,
        so each paragraph pushes away from the ones around it. That built-in
        margin is what creates the vertical gap, rather than any line breaks
        or spaces typed in the source text.
      </p>
    </div>
  );
}