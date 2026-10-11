export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
    </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This is a deliberately long sentence so that you can clearly see the box stays 120 pixels wide and 60 pixels tall no matter how much text it contains.
        </div>
        <div className="wd-dimension-portrait wd-bg-color-red">My element. This text does not change the dimensions.</div>
      </div>
    </div>
  );
}