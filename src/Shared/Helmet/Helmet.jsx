import { Helmet } from "react-helmet-async";

const HelmetChanger = ({ title }) => {
  return (
    <Helmet>
      <title>Kettle River Inn & Suite - {title}</title>
    </Helmet>
  );
};

export default HelmetChanger;
