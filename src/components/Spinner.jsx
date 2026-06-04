import { BarLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto 50px auto',
};

const Spinner = ({ color = 'purple', size = '160' }) => {
  return (
    <div>
      <BarLoader
        color={color}
        size={size}
        cssOverride={override}
        aria-label="Loading..."
      />
    </div>
  );
};

export default Spinner;
