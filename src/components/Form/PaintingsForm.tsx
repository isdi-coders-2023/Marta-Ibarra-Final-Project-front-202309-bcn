import { useEffect, useState } from "react";
import {
  PaintingStructure,
  PaintingWithoutId,
} from "../../store/paintings/features/paintings/types";
import Button from "../Button/Button";
import PaintingsFormStyled from "./PaintingsFormStyled";

interface PaintingFormProps {
  submitAction: (newPainting: PaintingStructure) => void;
}

const PaintingsForm = ({
  submitAction,
}: PaintingFormProps): React.ReactElement => {
  const blankPainting: PaintingWithoutId = {
    authorInfo: "",
    image: "",
    imageDescription: "",
    name: "",
    price: 0,
    title: "",
    year: 0,
  };

  const [newPainting, setNewPainting] =
    useState<PaintingWithoutId>(blankPainting);

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
  };

  return (
    <PaintingsFormStyled
      onSubmit={onFormSubmit}
      className="form"
      autoComplete="off"
    >
      <div>
        <label className="form__label" htmlFor="name">
          Select an artist
        </label>
        <select
          className="dropdown"
          name="artist"
          id="name"
          onChange={onChangeEditPainting}
          required
        >
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
          onChange={onChangeEditPainting}
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
          onChange={onChangeEditPainting}
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
          required
        />
      </div>
      <div>
        <label className="form__label" htmlFor="image-description">
          Image description
        </label>
        <textarea
          className="form__input"
          id="image-description"
          onChange={onChangeEditPainting}
          required
        />
      </div>
      <div>
        <label className="form__label" htmlFor="artist-description">
          About the author
        </label>
        <textarea
          className="form__input"
          id="artist-description"
          onChange={onChangeEditPainting}
          required
        />
      </div>
      <Button text={"Add"} className={"button__big"} type={"submit"} />
    </PaintingsFormStyled>
  );
};

export default PaintingsForm;
