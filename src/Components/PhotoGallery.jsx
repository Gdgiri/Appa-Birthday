import React from "react";

function PhotoGallery() {
  const photos = [
    "https://github.com/user-attachments/assets/d1a59380-9e30-4a13-8718-1249fb18987b",
    "https://github.com/user-attachments/assets/3fb4a782-b2f5-4b1c-915a-dd77214807e2",
    "https://github.com/user-attachments/assets/51725e45-2949-455e-9612-ddad5e8bd4a2",
    "https://github.com/user-attachments/assets/68baf38b-554c-412b-bcac-a358d811b76d",
  ];

  return (
    <div className="my-4">
      <h2 className="h4">Memories:</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Memory ${index + 1}`}
            className="rounded shadow-lg"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
