import React, { useState, useEffect } from 'react';
import { client, urlFor } from './client';

const Gallery = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // GROQ Query: Hole alle Dokumente vom Typ "project"
    const query = '*[_type == "project"]';

    client.fetch(query)
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Fetch Fehler:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: 'white', padding: '50px' }}>Lädt Projekte...</div>;

  if (error) return (
    <div style={{ color: '#FFC15E', padding: '50px' }}>
      Fehler beim Laden: {error}. <br /> Prüfe die Projekt-ID und CORS-Einstellungen.
    </div>
  );

  return (
    <section className="work-section">
      <h2 className="work-title">Meine Arbeiten</h2>
      
      <div className="gallery-grid">
        {projects.length > 0 ? projects.map((project) => (
          <div key={project._id} className="gallery-item" style={{ 
            backgroundImage: project.mainImage ? `url(${urlFor(project.mainImage).width(400).url()})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Overlay für Details */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, 
              background: 'rgba(0,0,0,0.7)', padding: '10px', color: 'white'
            }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{project.title}</h3>
              <small>{project.category}</small>
            </div>
          </div>
        )) : (
          <p style={{ color: 'white' }}>Keine Projekte gefunden. Hast du sie im Studio veröffentlicht?</p>
        )}
      </div>
    </section>
  );
};

export default Gallery;