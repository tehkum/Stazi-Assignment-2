import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/card/card";

export default function HotelPage() {
  const { index } = useParams();
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <p
        style={{
          alignSelf: "flex-start",
          justifySelf: "flex-Start",
          backgroundColor: "rgb(229, 228, 247)",
          fontWeigh: "bold",
          borderRadius: "20px",
          padding: ".5rem 1rem",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        back
      </p>
      <Card item={state.data[index]} index={index} />
    </div>
  );
}

