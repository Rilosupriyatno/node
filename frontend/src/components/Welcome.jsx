import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">Welcome</h2>
    </div>
  );
};

export default Welcome;
