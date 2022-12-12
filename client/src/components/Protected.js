import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();
  const fetchData = async (token) => {
    try {
      const response = await fetch("http://localhost:8000/protected", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const json = await response.json();
      console.log("json", json);
      if (json.success) {
        navigate("/");
      }
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchData(token);
  }, []);

  return <div>Protected</div>;
};

export default Protected;
