const Card = ({ name, email, id }) => {
  return (
    <div className="dib br2 ma1 pa3 grow bw2 shadow-5">
      <div>
        <img src={`https://robohash.org/${id}`} alt="robofriend" />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
