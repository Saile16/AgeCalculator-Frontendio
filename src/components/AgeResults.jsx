const AgeResults = ({ result }) => {
  return (
    <div className="container-result">
      <div className="container-result-age">
        <p className="number">{result.year}</p>
        <p className="label-result">years</p>
      </div>
      <div className="container-result-age">
        <p className="number">{result.month}</p>
        <p className="label-result">months</p>
      </div>
      <div className="container-result-age">
        <p className="number">{result.days}</p>
        <p className="label-result">days</p>
      </div>
    </div>
  );
};

export default AgeResults;
