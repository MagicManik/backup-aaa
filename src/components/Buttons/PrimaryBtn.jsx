import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const PrimaryBtn = ({ onClick, label, btnBox, size }) => {
  return (
    <Box className={`${btnBox} text-white normal-case`}>
      <Button
        onClick={onClick}
        style={{ textTransform: "none" }}
        variant="success"
        // size="small"
        className={`text-sm ${size}`}
      >
        {label}
      </Button>
    </Box>
  );
};

PrimaryBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  btnBox: PropTypes.string,
  size: PropTypes.string,
};

export default PrimaryBtn;
