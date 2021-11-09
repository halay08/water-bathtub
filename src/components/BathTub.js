const BathTub = (props) => {
  const { isAnimating, waterLevel } = props;
  return (
    <div className="bath-container">
      <div className="boat">
        {/* If the animation effect when filling water is not necessary, remove `slide-in-up` */}
        {Array(waterLevel).fill(1).map((val, i) => <div key={i} className="water-level slide-in-up"></div>)}
      </div>
      <div className="legs">
        <div className="leg"></div>
        <div className="leg"></div>
      </div>
      <div className="taps">
        <div className="pipe1"></div>
        <div className="pipe2"></div>
        <div className="pipe3"></div>
        <div className="pipe4"></div>
        {isAnimating && <div className="tap-water" />}
      </div>
    </div>
  );
};

export default BathTub;
