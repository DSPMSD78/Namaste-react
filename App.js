import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

const JsxHeading = () => {
  return <h1>Namaste React from JSX</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
      {100 + 200}
      {JsxHeading()}
      <h1>Namaste React from Heading Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
