export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="400px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      A NASA image of Earth from space:
      <br />
      <img
        id="wd-ai-image"
        src="https://apod.nasa.gov/apod/image/earth_a17.gif"
        alt="Earth photographed from Apollo 17"
        width="200px"
      />

    <br />
    A Monet painting I like very much:
    <br />
    
      <img
        id="wd-your-image"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"
        alt="Monet Painting"
        height="400px"
        />

    </div>
  );
}