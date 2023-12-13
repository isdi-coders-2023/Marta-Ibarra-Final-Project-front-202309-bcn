import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
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
  const blankPainting: PaintingWithoutId = {
    name: "",
    image: "",
    title: "",
    year: 0,
    imageDescription: "",
    price: 0,
    authorInfo: "",
  };

  const navigate = useNavigate();

  const initialState = selectedPainting ?? blankPainting;

  const [newPainting, setNewPainting] =
    useState<PaintingWithoutId>(initialState);

  useEffect(() => {
    if (selectedPainting) {
      setNewPainting({ ...selectedPainting });
    }
  }, [selectedPainting]);

  const onChangeEditPainting = useCallback(
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.ChangeEvent<HTMLSelectElement>,
    ) => {
      setNewPainting((newPainting) => ({
        ...newPainting,
        [event.target.id]: event.target.value,
      }));
    },
    [],
  );

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
          <option value="Dapper Lou">Dapper Lou</option>
          <option value="Jamel Armand">Jamel Armand</option>
          <option value="Frank Bowling">Frank Bowling</option>
          <option value="Oliver Okolo">Oliver Okolo</option>
          <option value="Terence Maluleke">Terence Maluleke</option>
          <option value="Tariq Oliver">Tariq Oliver</option>
          <option value="Jean-Michel Basquiat">Jean-Michel Basquiat</option>
          <option value="Asif Hoqueue">Asif Hoque</option>
          <option value="Nina Chanel">Nina Chanel</option>
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
          defaultValue={newPainting.title}
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
          min={1000}
          max={2024}
          onChange={onChangeEditPainting}
          defaultValue={newPainting.year}
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
          defaultValue={newPainting.price}
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
          defaultValue={newPainting.image}
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
          defaultValue={newPainting.imageDescription}
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
          defaultValue={newPainting.authorInfo}
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
