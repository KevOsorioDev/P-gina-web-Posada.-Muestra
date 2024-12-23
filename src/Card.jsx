const Card = ({ imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="Card Image" />
      <div className="card__content">
        <p className="card__title">Card Title</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Card;