import PageNotFoundStyled from "./PageNotFoundStyled";

const PageNotFound = (): React.ReactElement => {
  return (
    <PageNotFoundStyled>
      <h2 className="page__title">Page not found</h2>
      <img
        src="/images/pageNotFound.png"
        alt="page not found"
        width="200"
        height="200"
      />
    </PageNotFoundStyled>
  );
};

export default PageNotFound;
