// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkBtn = ({ to, label, btnBox, size }) => {
  return (
    <Link to={to} className={`${btnBox} text-white normal-case`}>
      <Button
        style={{ textTransform: "none" }}
        variant="success"
        className={`w-full text-sm ${size}`}
      >
        {label}
      </Button>
    </Link>
  );
};

LinkBtn.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  btnBox: PropTypes.string,
  size: PropTypes.string,
};

export default LinkBtn;
