// Get references to both canvas
const [designCanvas, nftCanvas] = document.querySelectorAll("canvas");

const designCtx = designCanvas.getContext("2d");
const nftCtx = nftCanvas.getContext("2d");

const DESIGN_CANVAS_WIDTH = 300;
const DESIGN_CANVAS_HEIGHT = 300;

const NFT_CANVAS_WIDTH = 150;
const NFT_CANVAS_HEIGHT = 150;

function drawImageOnDesignCanvas(img) {
  designCtx.drawImage(img, 0, 0, DESIGN_CANVAS_WIDTH, DESIGN_CANVAS_HEIGHT);
}

function createNft() {
  const url = designCanvas.toDataURL("image/png");
  const img = new Image();
  img.addEventListener("load", () => {
    nftCtx.drawImage(img, 0, 0, NFT_CANVAS_WIDTH, NFT_CANVAS_HEIGHT);
  });

  img.src = url;
}

document
  .getElementById("layer_container")
  .addEventListener("click", handleChoosingLayer);

document.getElementById("create_nft").addEventListener("click", createNft);

function handleChoosingLayer(e) {
  const { target: layer } = e;

  drawImageOnDesignCanvas(layer);
}
