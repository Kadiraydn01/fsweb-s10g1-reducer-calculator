import React, { useReducer } from "react";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import reducer, { initialState } from "./reducers";
import {
  addOne,
  applyNumber,
  changeOperation,
  reset,
  memory,
  resetMemory,
  addMemory,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleApply = (e) => {
    dispatch(applyNumber(parseInt(e.target.value)));
  };

  const handleChange = (e) => {
    dispatch(changeOperation(e.target.value));
  };

  const handleReset = () => {
    dispatch(reset());
  };
  const handleMemory = () => {
    dispatch(memory());
  };
  const handleResetMemory = () => {
    dispatch(resetMemory());
  };
  const handleAddMemory = () => {
    dispatch(addMemory());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={handleMemory} value={"M+"} />
              <CalcButton onClick={addMemory} value={"MR"} />
              <CalcButton onClick={resetMemory} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={handleApply} value={1} />
              <CalcButton onClick={handleApply} value={2} />
              <CalcButton onClick={handleApply} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={handleApply} value={4} />
              <CalcButton onClick={handleApply} value={5} />
              <CalcButton onClick={handleApply} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={handleApply} value={7} />
              <CalcButton onClick={handleApply} value={8} />
              <CalcButton onClick={handleApply} value={9} />
            </div>

            <div className="row">
              <CalcButton onClick={handleChange} value={"+"} />
              <CalcButton onClick={handleChange} value={"*"} />
              <CalcButton onClick={handleChange} value={"-"} />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleReset} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
