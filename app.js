
window.onload = function () {
  const input = document.getElementById("imageInput");
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  input.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // Här skulle LUT/grain appliceras
    };
    img.src = URL.createObjectURL(file);
  });
};
