import { Counter } from "./components/counter";
import { Text } from "./components/Text";
import "./App.css";
import { SingleLight } from "./components/SingleLight";
import { useState } from "react";
import { Grid } from "./components/Grid";

function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);


  const handleIncrementRow = () => {
    setRows(rows + 1);

  };

  const handleDecrementRows = () => {
    if (rows > 0) setRows(rows - 1);
  };

  const handleIncrementCols = () => {
    if (cols < 9) setCols(cols + 1);
  };

  const handleDecrementCols = () => {
    if (cols > 0) setCols(cols - 1);
  };
  
  let totalBulbs = rows * cols;

  const bulbs = Array.from({length: totalBulbs})

  return (
    <div>
      <nav className="nav">
        <Text>{totalBulbs} bulbs</Text>
        <Counter
          text={"rows"}
          count={rows}
          onIncrement={handleIncrementRow}
          onDecrement={handleDecrementRows}
        />
        <Counter
          text={"columns"}
          count={cols}
          onIncrement={handleIncrementCols}
          onDecrement={handleDecrementCols}
        />
      </nav>
      <Grid columns={cols}>
        {bulbs.map((value, index) => {
          return <SingleLight key={index}/>
        })}
      </Grid>
    </div>
  );
}

export default App;
