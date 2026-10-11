export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>

      <div id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        <h3>Sample background and foreground</h3>
        <p>
          This sample block uses a yellow background with black text.
        </p>
      </div>

      <p className="wd-bg-color-blue wd-fg-color-black">
        This background of this paragraph is blue but{" "}
        <span className="wd-bg-color-yellow wd-fg-color-black">
          the background of this text is yellow and the foreground black
        </span>
      </p>

    </div>
  );
}