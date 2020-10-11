import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  //called only once at the inital render
  useEffect(() => {
    console.log("I only run once");
  }, []);
  //call every time when the component rerender
  useEffect(() => {
    console.log("I only run once");
  });
  //call every time when the compoent rerender and eaither of the state chagne
  useEffect(() => {
    console.log("I only run once");
  }, [ere, term2, tem3]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
