const blueMarker = () => {
  return <div className="w-4 h-4 rounded-full bg-linear-blue"></div>;
};
const redMarker = () => {
  return <div className="w-4 h-4 rounded-full bg-linear-red"></div>;
};
const purpleMarker = () => {
  return <div className="w-4 h-4 rounded-full bg-linear-purple"></div>;
};
const greenMarker = () => {
  return <div className="w-4 h-4 rounded-full bg-linear-green"></div>;
};

const LeafletMarker = {
  blueMarker,
  redMarker,
  purpleMarker,
  greenMarker,
};

export default LeafletMarker;
