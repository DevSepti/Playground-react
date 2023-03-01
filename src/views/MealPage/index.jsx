import { useState } from 'react';

// eslint-disable-next-line import/extensions
import ApiMeal from '../ExamplePage/api.js';

import './style.scss';

function App() {
  const api = new ApiMeal();
  const [label, setLabel] = useState();
  const [receipt, setReceipt] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [area, setArea] = useState();
  const [tags, setTags] = useState();
  const [video, setVideo] = useState();

  // useEffect(() => {
  //
  // }, []);

  // eslint-disable-next-line consistent-return
  const checkTags = () => {
    if (tags === '') {
      document.getElementById('tags').style.display = 'none';
    } if (tags != null) {
      return (
        <p id="tags">
          Tags:
          {tags}
        </p>
      );
    }
  };
  return (
    <div className="container">
      <h1>Feeling hungry?</h1>
      <h3>Get a random meal by clicking bellow</h3>

      <button
        type="button"
        onClick={() => {
          api.getMeal().then((body) => {
            // eslint-disable-next-line no-unused-expressions,no-sequences
            setLabel(body.strMeal),
            setReceipt(body.strInstructions),
            setImage(body.strMealThumb),
            setCategory(body.strCategory),
            setArea(body.strArea),
            setTags(body.strTags),
            setVideo(body.strYoutube);
          });
        }}
      >
        get meal
      </button>

      <div className="meal-container">
        <div className="left-container">
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img className="meal-image" src={image} />

          <div className="meal-tags">
            <p>
              Category:
              {category}
            </p>

            <p>
              Area:
              {area}
            </p>

            <p className="tags" id="tags">
              {checkTags()}
            </p>
          </div>

          <aside className="ingredients" />
        </div>

        <div className="right-container">
          <h2 className="meal">{label}</h2>
          <div className="receipt">{receipt}</div>
        </div>
      </div>

      <div className="video-container">
        {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
        <iframe
          width="560"
          height="315"
          src={video}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
}

export default App;
