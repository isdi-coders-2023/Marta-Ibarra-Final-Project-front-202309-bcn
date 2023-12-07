import Button from "../Button/Button";
import PaintingsFormStyled from "./PaintingsFormStyled";

const PaintingsForm = (): React.ReactElement => {
  return (
    <PaintingsFormStyled className="form">
      <div>
        <label className="form__label" htmlFor="name">
          Artist
        </label>
        <input className="form__input" type="text" id="name" required />
      </div>
      <div>
        <label className="form__label" htmlFor="name">
          Select an artist
        </label>
        <select className="dropdown" name="artist" id="name">
          <option value="lou">Dapper Lou</option>
          <option value="armand">Jamel Armand</option>
          <option value="bowling">Frank Bowling</option>
          <option value="okolo">Oliver Okolo</option>
          <option value="maluleke">Terence Maluleke</option>
          <option value="oliver">Tariq Oliver</option>
          <option value="basquiat">Jean-Michel Basquiat</option>
          <option value="hoque">Asif Hoque</option>
          <option value="chanel">Nina Chanel</option>
        </select>
      </div>
      <div>
        <label className="form__label" htmlFor="title">
          Title
        </label>
        <input className="form__input" type="text" id="title" required />
      </div>
      <div>
        <label className="form__label" htmlFor="year">
          Year
        </label>
        <input className="form__input" type="number" id="year" required />
      </div>
      <div>
        <label className="form__label" htmlFor="price">
          Price in €
        </label>
        <input className="form__input" type="number" id="price" required />
      </div>
      <div>
        <label className="form__label" htmlFor="image">
          Image URL
        </label>
        <input className="form__input" type="url" id="image" required />
      </div>
      <div>
        <label className="form__label" htmlFor="description">
          Image description
        </label>
        <textarea className="form__input" id="description"></textarea>
      </div>
      <div>
        <label className="form__label" htmlFor="about">
          About the author
        </label>
        <textarea className="form__input" id="description"></textarea>
      </div>
      <Button
        text={"Add"}
        size={"button__big"}
        type={"submit"}
        className={"form__button"}
      />
    </PaintingsFormStyled>
  );
};

export default PaintingsForm;
