import { useEffect } from "react";
import "aframe";

export default function ARScene() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <a-scene>
      <a-assets>
        <a-asset-item id="model" src="/model.glb"></a-asset-item>
      </a-assets>

      {/* IMAGE TARGET */}
      <a-nft
        type="nft"
        url="/nft/mi-imagen"
        smooth="true"
        smoothCount="10"
        smoothTolerance="0.01"
        smoothThreshold="5"
      >
        <a-entity
          gltf-model="#model"
          scale="50 50 50"
          position="0 0 0"
        />
      </a-nft>

      <a-entity camera></a-entity>
    </a-scene>
  );
}