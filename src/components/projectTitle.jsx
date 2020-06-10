import React, { useState } from "react";

export default function ProjectTitle({ Title, onMouseIn, onMouseOut }) {
  return (
    <div onMouseEnter={onMouseIn} onMouseLeave={onMouseOut}>
      <h1>{Title}</h1>
    </div>
  );
}
