import useBars from "../hooks/useBars";

const Bars = () => {
  const {isMuted, setIsMuted} = useBars();

  return (
    <div className="bars-container" onClick={() => setIsMuted(!isMuted)}>
      <span className={isMuted ? "bar wave-animation" : "bar"}></span>
      <span className={isMuted ? "bar wave-animation" : "bar"}></span>
      <span className={isMuted ? "bar wave-animation" : "bar"}></span>
      <span className={isMuted ? "bar wave-animation" : "bar"}></span>
      <span className={isMuted ? "bar wave-animation" : "bar"}></span>
      <span className={isMuted ? "bar wave-animation" : "bar"}></span>
    </div>
  );
};

export default Bars;
