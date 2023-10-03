import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card/card";
import { Container } from "@mui/material";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

export default function HomePage() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const cityFilter = (city) => {
    dispatch({ type: "RESET_MODULE" });
    dispatch({ type: "CITY_FILTER", payload: city });
  };

  const moduleHandler = () => {
    dispatch({ type: "SHOW_MORE" });
  };

  const data = state?.data
    ?.filter((item) => item.city === state.city)
    .slice(0, state.module);

  return (
    <Container maxWidth="xl">
      <div className="cities">
        {["London", "Miami", "New York", "Denver"].map((item) => (
          <p
            key={item}
            className={
              state.city === item ? "city-name city-active" : "city-name"
            }
            onClick={() => cityFilter(item)}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="home">
        {data?.map((item, index) => (
          <Card key={index} index={index} item={item} />
        ))}
      </div>
      <div className="show-more">
        {state.module > data.length ? (
          <p>More content not available</p>
        ) : (
          <button onClick={moduleHandler}>
            <HourglassTopIcon />
            Show More
          </button>
        )}
      </div>
    </Container>
  );
}
