export const mouseMoveAnimation = () => {
  const body = document.body;
  document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.setAttribute("class", `trail`);
    trail.setAttribute(
      "style",
      `left: ${e.clientX - 10}px; top: ${e.clientY - 10}px`
    );

    trail.onanimationend = () => {
      trail.remove();
    };

    body.insertAdjacentElement("beforeend", trail);
  });
};
