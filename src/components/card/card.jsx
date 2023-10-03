import "./card.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import KingBedIcon from "@mui/icons-material/KingBed";
import HotTubIcon from "@mui/icons-material/HotTub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { useNavigate } from "react-router";

// eslint-disable-next-line react/prop-types
export default function Card({ item, index }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/hotel/${index}`)}>
      <div className="card-img-sec">
        <img src="https://picsum.photos/200/300" alt="hotel" />
        <span>
          <p>For Rent</p>
          <FavoriteBorderIcon
            sx={{
              backgroundColor: "white",
              color: "rgba(80, 82, 230, 1)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              padding: ".5rem",
            }}
          />
        </span>
      </div>
      <span className="card-loc-sec">
        <LocationOnIcon sx={{ color: "orange", fontSize: "17px" }} />
        {/* eslint-disable-next-line react/prop-types */}
        {item.road}
      </span>
      {/* eslint-disable-next-line react/prop-types */}
      <h2 style={{ marginLeft: "10px", color: "#666" }}>{item.hotelName}</h2>
      <div className="card-icon-sec">
        <span>
          <LocationCityIcon sx={{ fontSize: "15px" }} />
          {/* eslint-disable-next-line react/prop-types */}
          {item.totalRoom} room
        </span>
        <span>
          <KingBedIcon sx={{ fontSize: "15px" }} />
          {/* eslint-disable-next-line react/prop-types */}
          {item.totalBeds} bed
        </span>
        <span>
          <HotTubIcon sx={{ fontSize: "15px" }} />
          {/* eslint-disable-next-line react/prop-types */}
          {item.totalBath} bath
        </span>
        <span>
          <SquareFootIcon sx={{ fontSize: "15px" }} />
          {/* eslint-disable-next-line react/prop-types */}
          {item.roomSize} sqft
        </span>
      </div>
      <div className="card-btn-sec">
        <span>
          <h3>$440</h3>/ month
        </span>
        <button>Read More</button>
      </div>
      {/* eslint-disable-next-line react/prop-types */}
      {item.popular ? (
        <>
          <div className="badge-popular">Popular</div>
          <div className="badge-curve"></div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
