import { useState } from "react";

const Section = ({ title, desc, x, y }) => {
  return (
    <div className="border p-2 m-2 border-black">
      <h1 className="font-bold text-lg">{title}</h1>
      {x ? (
        <button
          className="cursor-pointer p-2 m-2 underline"
          onClick={() => {
            y();
          }}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer p-2 m-2 underline"
          onClick={() => {
            y();
          }}
        >
          Show
        </button>
      )}
      {x && <p>{desc}</p>}
    </div>
  );
};

const Grocery = () => {
  const [visibleSec, setVisibleSec] = useState("about");
  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2 ">Grocery</h1>
      <Section
        title={"About"}
        desc={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        x={visibleSec === "about"}
        y={() => {
          setVisibleSec(visibleSec === "about" ? "" : "about");
        }}
      />
      <Section
        title={"Team"}
        desc={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        x={visibleSec === "team"}
        y={() => {
          setVisibleSec(visibleSec === "team" ? "" : "team");
        }}
      />
      <Section
        title={"Career"}
        desc={
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
        }
        x={visibleSec === "careers"}
        y={() => {
          setVisibleSec(visibleSec === "careers" ? "" : "careers");
        }}
      />
    </div>
  );
};

export default Grocery;
