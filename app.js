
window.onload = function () {
  const input = document.getElementById("imageInput");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const grainSlider = document.getElementById("grainSlider");
  const isoSlider = document.getElementById("isoSlider");
  const savePngBtn = document.getElementById("savePngBtn");
  const saveJpegBtn = document.getElementById("saveJpegBtn");
  const jpegQuality = document.getElementById("jpegQuality");
  const lutSelect = document.getElementById("lutSelect");

  let baseImage = null;

  input.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      baseImage = img;
      applyAllEffects();
    };
    img.src = URL.createObjectURL(file);
  });

  function applyAllEffects() {
    if (!baseImage) return;

    ctx.drawImage(baseImage, 0, 0);

    applyISOEffect();
    applyHalation();
    applyGrain();
    // applyLUT(lutSelect.value); // Placeholder för framtida LUT
  }

  function applyGrain() {
    const grain = new Image();
    grain.src = "grain.png";
    grain.onload = () => {
      ctx.globalAlpha = parseFloat(grainSlider.value);
      ctx.drawImage(grain, 0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1.0;
    };
  }

  function applyISOEffect() {
    const iso = parseInt(isoSlider.value);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const contrast = 1 + (iso - 100) / 800; // Ökar med ISO

    for (let i = 0; i < data.length; i += 4) {
      for (let j = 0; j < 3; j++) {
        let value = data[i + j];
        value = ((value - 128) * contrast + 128) + (Math.random() - 0.5) * (iso / 200);
        data[i + j] = Math.max(0, Math.min(255, value));
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  function applyHalation() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const brightness = (data[i] + data[i+1] + data[i+2]) / 3;
      if (brightness > 220) {
        data[i] = Math.min(255, data[i] + 30);   // Röd boost
        data[i+1] = Math.max(0, data[i+1] - 10); // Mindre grön
        data[i+2] = Math.max(0, data[i+2] - 10); // Mindre blå
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  savePngBtn.onclick = () => {
    const link = document.createElement("a");
    link.download = "grainalog.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  saveJpegBtn.onclick = () => {
    const link = document.createElement("a");
    link.download = "grainalog.jpg";
    link.href = canvas.toDataURL("image/jpeg", parseFloat(jpegQuality.value));
    link.click();
  };

  grainSlider.oninput = applyAllEffects;
  isoSlider.oninput = applyAllEffects;
  lutSelect.onchange = applyAllEffects;
};
