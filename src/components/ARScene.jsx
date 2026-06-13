import { useEffect } from "react";

export default function ARScene() {
  useEffect(() => {
    const aframe = document.createElement("script");
    aframe.src = "https://aframe.io/releases/1.5.0/aframe.min.js";
    aframe.async = true;
    document.body.appendChild(aframe);

    const arjs = document.createElement("script");
    arjs.src =
      "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js";
    arjs.async = true;
    document.body.appendChild(arjs);

    return () => {
      document.body.removeChild(aframe);
      document.body.removeChild(arjs);
    };
  }, []);

  return (
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" color="red"></a-box>
      </a-marker>

      <a-entity camera></a-entity>
    </a-scene>
  );
}