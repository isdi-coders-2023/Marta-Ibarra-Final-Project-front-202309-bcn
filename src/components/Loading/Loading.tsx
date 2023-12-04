import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <img
        src="./public/images/loading.webp"
        alt="loading page"
        width="150"
        height="150"
      />
      <span className="loading__text">Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
