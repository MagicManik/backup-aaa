import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Region = ({ region }) => {
    const { name, des } = region;

    return (
        <div className="mt-[14px]">
            <Link to="#" className="text-[#0e9749] hover:text-[#085127] leading-tight tracking-tight">
                <strong className="block">{name}</strong>
                <span className="opacity-50 hover:opacity-100 block">{des}</span>
            </Link>
        </div>
    );
};

Region.propTypes = {
    region: PropTypes.shape({
        name: PropTypes.string.isRequired,
        des: PropTypes.string.isRequired,
    }).isRequired,
};

export default Region;
