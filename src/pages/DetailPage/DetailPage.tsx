import { useParams } from "react-router-dom";
import { useEffect } from "react";
import usePaintingsApi from "../../hooks/usePaintingsApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import DetailPageStyled from "./DetailPageStyled";
import { loadSelectedPaintingActionCreator } from "../../store/paintings/features/paintings/paintingsSlice";
import { PaintingStructure } from "../../store/paintings/features/paintings/types";

const DetailPage = (): React.ReactElement => {
  const { paintingId } = useParams();
  const dispatch = useAppDispatch();
  const { loadSelectedPainting } = usePaintingsApi();
  const selectedPainting = useAppSelector(
    (state) => state.paintingsState.selectedPainting,
  );

  useEffect(() => {
    (async () => {
      scrollTo(0, 0);

      const painting = await loadSelectedPainting(paintingId as string);

      dispatch(
        loadSelectedPaintingActionCreator(painting as PaintingStructure),
      );
    })();
  }, [dispatch, paintingId, loadSelectedPainting]);

  return (
    <DetailPageStyled className="detail">
      <div className="detail__component">
        <h2 className="detail__name">{selectedPainting.name}</h2>
        <img
          className="detail__image"
          src={selectedPainting.image}
          alt={selectedPainting.title}
          width="280"
          height="345"
        />
        <div className="detail__painting">
          <h3 className="detail__title detail__year">
            {selectedPainting.title}, {selectedPainting.year}
          </h3>
          <p className="detail__image-description">
            {selectedPainting.imageDescription}
          </p>
        </div>
        <span className="detail__price">Price:{selectedPainting.price}€</span>
        <div className="detail__author">
          <h4 className="detail__author-about">About the author</h4>
          <p className="detail__author-description">
            {selectedPainting.authorInfo}
          </p>
        </div>
      </div>
    </DetailPageStyled>
  );
};

export default DetailPage;
