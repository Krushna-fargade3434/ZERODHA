import React from "react";
import "./Apps.css";

function Apps() {
  const apps = [
    {
      icon: "📈",
      title: "Kite",
      description:
        "Our ultra-fast trading platform with advanced charts, orders and market insights.",
      link: "#",
    },
    {
      icon: "📊",
      title: "Console",
      description:
        "Track your investments, analyse your portfolio and get detailed reports.",
      link: "#",
    },
    {
      icon: "🧠",
      title: "Varsity",
      description:
        "Learn everything about investing and trading with our comprehensive learning platform.",
      link: "#",
    },
    {
      icon: "🛠️",
      title: "Kite Connect",
      description:
        "Build powerful trading applications using our APIs and developer platform.",
      link: "#",
    },
  ];

  return (
    <section className="apps-section">
      <div className="apps-container">

        {/* Heading */}
        <div className="apps-header">
          <h2>Explore our products</h2>
          <p>
            Powerful tools designed to make investing and trading simple,
            intuitive and accessible.
          </p>
        </div>

        {/* Apps */}
        <div className="apps-grid">
          {apps.map((app, index) => (
            <div className="app-card" key={index}>
              <div className="app-icon">
                {app.icon}
              </div>

              <h3>{app.title}</h3>

              <p>{app.description}</p>

              <a href={app.link} className="app-link">
                Explore →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Apps;
