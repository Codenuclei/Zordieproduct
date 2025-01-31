import { useEffect } from "react";

const EmbeddedForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://forms.app/static/embed.js";
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      new (window as any).formsapp(
        "679d1b43db711600025e60cd",
        "standard",
        { width: "100vw", height: "600px", opacity: 0 },
        "https://w3njgo8m.forms.app"
      );
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Script-based embed */}
      <div formsapp-id="679d1b43db711600025e60cd"></div>

      {/* Iframe embed */}
      <iframe
        allowTransparency={true}
        allowFullScreen={true}
        allow="geolocation; microphone; camera"
        src="https://w3njgo8m.forms.app/form/679d1b43db711600025e60cd"
        frameBorder="0"
        style={{
          width: "100vw",
          minWidth: "100%",
          height: "680px",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default EmbeddedForm;
