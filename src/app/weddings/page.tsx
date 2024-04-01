import React from "react";

interface WeddingsPageProps {
  brideName: string;
  groomName: string;
  weddingDate: string;
  venue: string;
}

const WeddingsPage: React.FC<WeddingsPageProps> = ({
  brideName,
  groomName,
  weddingDate,
  venue,
}) => {
  return (
    <div className="wedding-page">
      <h1>
        Welcome to {brideName} and {groomName}'s Wedding Page
      </h1>
      <p>Save the Date: {weddingDate}</p>
      <p>We are pleased to announce our wedding will take place at {venue}.</p>
      <p>Please join us in celebrating this special occasion.</p>
      <p>For more details, visit our wedding website.</p>
    </div>
  );
};

export default WeddingsPage;
