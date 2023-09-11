import PropTypes from "prop-types";
import { Carousel } from "react-carousel-minimal";
import noPhoto from "../../assets/images/error-img.jpg";
const HotelOverviewCarousel = ({ PrimaryPhoto, photos }) => {
  const photo = photos?.map((photo) => photo.url) || [];

  const data = [
    {
      image: PrimaryPhoto || noPhoto,
    },
    {
      image: photo[1] || noPhoto,
    },
    {
      image: photo[2] || noPhoto,
    },
    {
      image: photo[3] || noPhoto,
    },
    {
      image: photo[4] || noPhoto,
    },
    {
      image: photo[5] || noPhoto,
    },
    {
      image: photo[6] || noPhoto,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          padding: "0 0 0 0",
        }}
      >
        <Carousel
          data={data}
          time={2000}
          width="850px"
          height="470px"
          radius="16px"
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={true}
          style={{
            textAlign: "center",
            maxWidth: "850px",
            margin: "10px auto",
          }}
        />
      </div>
    </div>
  );
};

HotelOverviewCarousel.propTypes = {
  PrimaryPhoto: PropTypes.string,
  photos: PropTypes.array,
};

export default HotelOverviewCarousel;
