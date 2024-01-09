import "./App.css";
import Card from "./Card";
import { useEffect, useState } from "react";

function App() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2023-12-09&sortBy=publishedAt&apiKey="
        );

        const data = await response.json();

        if (!data) {
          throw new Error("No data");
        }

        setNewsList(data.articles);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      {newsList.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
}

export default App;
