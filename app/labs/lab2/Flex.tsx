export default function Flex() {
  return (
<div>
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
    
      </div>
    </div>

    <div id="wd-ai-flex">
      <h2>AI Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3 (stretches)
        </div>
      </div>
    </div>

    <div id="wd-css-flex">
      <h2>My Flex row</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-blue wd-width-110px">Column 1</div>
        <div className="wd-bg-color-red wd-fg-color-black wd-flex-grow-1">
          Column 2
        </div>
    
      </div>
    </div>
</div>
  );
}