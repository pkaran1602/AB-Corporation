import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@abcorporations.in";

const Email = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(GMAIL_COMPOSE_URL, "_blank", "noopener,noreferrer");
    navigate(-1);
  }, [navigate]);

  return (
    <main style={{ padding: "24px", fontFamily: "Segoe UI, sans-serif" }}>
      <h2>Opening Gmail...</h2>
      <p>
        If Gmail did not open, click here:{" "}
        <a href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer">
          Compose Email to info@abcorporations.in
        </a>
      </p>
    </main>
  );
};

export default Email;
