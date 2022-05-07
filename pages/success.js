import React from "react";
import Link from "next/link";

function Success() {
  return (
    <div className="success">
      <h1>Congratulations!</h1>
      <br />
      <p>Your new gear is on the way...</p>
      <Link href="/">
        <button type="button" className="btn">
          Return to store
        </button>
      </Link>
    </div>
  );
}

export default Success;
