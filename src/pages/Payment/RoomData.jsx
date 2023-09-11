import PropTypes from "prop-types";
import GuestInput from "../../components/GuestInput/GuestInput";
import Label from "../../components/Label/Label";

const RoomData = ({ rooms, setRooms }) => {
  // Code for Rooms, adults and child data

  // select title
  const handleTitleChange = (roomIndex, adultIndex, selectedTitle) => {
    const updatedRoomsData = [...rooms];
    updatedRoomsData[roomIndex].adult[adultIndex].title = selectedTitle;
    setRooms(updatedRoomsData);
  };

  // Adult's and Child's Input data field Change
  const handleInputChange = (
    event,
    roomIndex,
    personType,
    personIndex,
    field
  ) => {
    const updatedRoomsData = [...rooms];
    updatedRoomsData[roomIndex][personType][personIndex][field] =
      event.target.value;
    setRooms(updatedRoomsData);
  };

  return (
    <div className="border-t border-b pt-3 border rounded-lg lg:mt-8 mt-6 bg-white">
      <h1 className="tracking-widest md:text-lg font-bold pb-1 mb-3 px-5">
        ENTER BOOKING DETAILS
      </h1>

      {rooms.map((room, roomIndex) => (
        <div key={roomIndex}>
          <div
            className={`flex justify-between items-center border-b ${
              roomIndex > 0 ? "border-t-4 border-b-0" : "border-t"
            } px-5 py-3`}
          >
            <h4 className="text-lg font-bold">
              Room{" "}
              <small className="border-2 px-2.5 inline-block border-green-normal rounded-full">
                {roomIndex + 1}
              </small>
            </h4>
          </div>

          {room.adult.map((adult, adultIndex) => (
            <div key={adultIndex}>
              <div className="flex justify-between items-center px-5 py-5">
                <h3 className="text-green-normal text-lg font-bold">
                  Adult {adultIndex + 1}
                </h3>
              </div>

              {/* title */}
              <div className="my-3 px-5 flex">
                <label className="pr-1 text-lg font-bold">Title:</label>
                <button
                  className={`mr-2 rounded-md px-2 py-1 ${
                    adult.title === "Mr" && "bg-green-normal text-white"
                  }`}
                  onClick={() => handleTitleChange(roomIndex, adultIndex, "Mr")}
                >
                  Mr
                </button>
                <button
                  className={`mr-2 rounded-md px-2 py-1 ${
                    adult.title === "Mrs" && "bg-green-normal text-white"
                  }`}
                  onClick={() =>
                    handleTitleChange(roomIndex, adultIndex, "Mrs")
                  }
                >
                  Mrs
                </button>
                <button
                  className={`rounded-md px-2 py-1 ${
                    adult.title === "Ms" && "bg-green-normal text-white"
                  }`}
                  onClick={() => handleTitleChange(roomIndex, adultIndex, "Ms")}
                >
                  Ms
                </button>
              </div>
              {/* title close */}

              <div className="flex lg:flex-row flex-col gap-3 px-3 lg:pt-0 pt-3 mb-6">
                {/* first Name */}
                <div className="w-full">
                  <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                    <Label
                      htmlFor="firstName"
                      label="First Name *"
                      className="block text-[13px] text-gray-900"
                    />
                    <GuestInput
                      type="text"
                      value={adult.first_name}
                      placeholder="John"
                      required="required"
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          roomIndex,
                          "adult",
                          adultIndex,
                          "first_name"
                        )
                      }
                    />
                  </div>
                </div>

                {/* last Name */}
                <div className="w-full">
                  <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                    <Label
                      htmlFor="lastName"
                      label="Last Name *"
                      className="block text-[13px] text-gray-900"
                    />
                    <GuestInput
                      type="text"
                      value={adult.last_name}
                      placeholder="Smith"
                      required="required"
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          roomIndex,
                          "adult",
                          adultIndex,
                          "last_name"
                        )
                      }
                    />
                  </div>
                </div>

                {/* age */}
                <div className="w-full">
                  <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                    <Label
                      htmlFor="age"
                      label="Age *"
                      className="block text-[13px] text-gray-900"
                    />
                    <GuestInput
                      type="text"
                      value={adult.age}
                      placeholder="18+"
                      required="required"
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          roomIndex,
                          "adult",
                          adultIndex,
                          "age"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {room.child.map((child, childIndex) => (
            <div
              key={childIndex}
              className={`pb-6 ${childIndex === 0 ? "mt-3 border-t-4" : ""}`}
            >
              <div className="flex justify-between items-center px-5 py-5">
                <h3 className="text-lg font-bold">Child {childIndex + 1}</h3>
              </div>

              <div className="flex lg:flex-row flex-col lg:gap-3 gap-0 px-3">
                {/* first Name */}
                <div className="w-full">
                  <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                    <Label
                      htmlFor="firstName"
                      label="First Name *"
                      className="block text-[13px] text-gray-900"
                    />
                    <GuestInput
                      type="text"
                      value={child.first_name}
                      placeholder="Smith"
                      required="required"
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          roomIndex,
                          "child",
                          childIndex,
                          "first_name"
                        )
                      }
                    />
                  </div>
                </div>

                {/* last Name */}
                <div className="w-full">
                  <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                    <Label
                      htmlFor="lastName"
                      label="Last Name *"
                      className="block text-[13px] text-gray-900"
                    />
                    <GuestInput
                      type="text"
                      value={child.last_name}
                      placeholder="Junior"
                      required="required"
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          roomIndex,
                          "child",
                          childIndex,
                          "last_name"
                        )
                      }
                    />
                  </div>
                </div>

                {/* age */}
                <div className="w-full">
                  <div className="text-gray-600 w-full bg-[#f7f7f7] rounded-lg py-3 px-4">
                    <Label
                      htmlFor="age"
                      label="Age *"
                      className="block text-[13px] text-gray-900"
                    />
                    <GuestInput
                      type="text"
                      value={child.age}
                      placeholder="0 - 17"
                      required="required"
                      onChange={(e) =>
                        handleInputChange(
                          e,
                          roomIndex,
                          "child",
                          childIndex,
                          "age"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

RoomData.propTypes = {
  rooms: PropTypes.arrayOf(
    PropTypes.shape({
      adult: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
          age: PropTypes.string.isRequired,
        })
      ).isRequired,
      child: PropTypes.arrayOf(
        PropTypes.shape({
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
          age: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  setRooms: PropTypes.func.isRequired,
};

export default RoomData;
