import React, { useState, useEffect } from 'react';
import { client, urlFor } from './client';
import './Gallery.css';

const Gallery = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    client.fetch('*[_type == "project"] | order(order asc, _createdAt desc)')
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="gallery-loading">Lädt...</div>;

  return (
    <>
      <section className="gallery-section">
        {categories.map((cat) => (
          <div key={cat._id} className="gallery-category">
            <h2 className="category-title">{cat.category}</h2>
            <div className="masonry-grid">
              {cat.images && cat.images.map((image) => (
                <div
                  key={image._key}
                  className="masonry-item"
                  onClick={() => setSelectedImage(urlFor(image).width(1400).url())}
                >
                  <img
                    src={urlFor(image).width(600).url()}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {categories.length === 0 && (
          <p className="gallery-empty">Wenn du hier keine Bilder siehst, schimpf ruhig mit mir. •`_´•</p>
        )}
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>✕</button>
          <img
            src={selectedImage}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;