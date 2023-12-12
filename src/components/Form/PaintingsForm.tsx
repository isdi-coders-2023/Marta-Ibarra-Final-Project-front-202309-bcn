import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  PaintingStructure,
  PaintingWithoutId,
} from "../../store/paintings/features/paintings/types";
import Button from "../Button/Button";
import PaintingsFormStyled from "./PaintingsFormStyled";

interface PaintingFormProps {
  submitAction: (newPainting: PaintingStructure) => void;
  selectedPainting?: PaintingStructure;
  buttonText: string;
}

const PaintingsForm = ({
  submitAction,
  selectedPainting,
  buttonText,
}: PaintingFormProps): React.ReactElement => {
  let blankPainting: PaintingWithoutId = {
    name: "",
    image: "",
    title: "",
    year: 0,
    imageDescription: "",
    price: 0,
    authorInfo: "",
  };

  if (selectedPainting) {
    blankPainting = selectedPainting;
  }
  const [newPainting, setNewPainting] =
    useState<PaintingWithoutId>(blankPainting);

  const navigate = useNavigate();

  const onChangeEditPainting = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setNewPainting((currentNewPainting) => ({
      ...currentNewPainting,
      [event.target.id]: event.target.value,
    }));
  };

  useEffect(() => {
    const newPaintingValues = Object.values(newPainting);

    newPaintingValues.every((value) => value !== "");
  }, [newPainting]);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitAction(newPainting as PaintingStructure);
    navigate("/home");
    scrollTo(0, 0);
  };

  return (
    <PaintingsFormStyled
      onSubmit={onFormSubmit}
      className="form"
      autoComplete="off"
    >
      <div>
        <select
          className="dropdown"
          name="artist"
          id="name"
          onChange={onChangeEditPainting}
          value={newPainting.name}
        >
          <option value="">Select an artist</option>
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
        <input
          className="form__input"
          type="text"
          id="title"
          onChange={onChangeEditPainting}
          value={newPainting.title}
          required
        />
      </div>
      <div>
        <label className="form__label" htmlFor="year">
          Year
        </label>
        <input
          className="form__input"
          type="number"
          id="year"
          min={0}
          max={2024}
          onChange={onChangeEditPainting}
          value={newPainting.year}
          required
        />
      </div>
      <div>
        <label className="form__label" htmlFor="price">
          Price in €
        </label>
        <input
          className="form__input"
          type="number"
          id="price"
          min={0}
          onChange={onChangeEditPainting}
          value={newPainting.price}
          required
        />
      </div>
      <div>
        <label className="form__label" htmlFor="image">
          Image URL
        </label>
        <input
          className="form__input"
          type="url"
          id="image"
          onChange={onChangeEditPainting}
          value={newPainting.image}
          required
        />
      </div>
      <div>
        <label className="form__label" htmlFor="imageDescription">
          Image description
        </label>
        <textarea
          className="form__input form__textarea"
          id="imageDescription"
          rows={10}
          cols={10}
          onChange={onChangeEditPainting}
          value={newPainting.imageDescription}
          required
        />
      </div>
      <div>
        <label className="form__label" htmlFor="authorInfo">
          About the author
        </label>
        <textarea
          className="form__input form__textarea"
          id="authorInfo"
          rows={10}
          cols={10}
          onChange={onChangeEditPainting}
          value={newPainting.authorInfo}
          required
        />
      </div>
      <div className="button__container">
        <Button text={buttonText} className="button__big" type="submit" />
      </div>
    </PaintingsFormStyled>
  );
};

export default PaintingsForm;
