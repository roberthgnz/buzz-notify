/**
 * Show a notification
 * @param {Object} options - Here are the keys that you can use if you pass an object.
 * @param {String} options.title - Title of the notification
 * @param {DOMString} [options.html] - Sets the HTML markup contained within the notification.
 * @param {String} [options.type] - Can be 'success', 'danger', 'warning'
 * @param {String} [options.position] - Notification position, can be  'top left', 'top right', 'top center', 'center start', 'center', 'center end', 'bottom left', 'bottom center', or 'bottom right'.
 * @param {Number} [options.duration] - Auto close notification. Set in ms (milliseconds).
 */
function Notify({
  title,
  html = null,
  type = "success",
  position = "top right",
  duration = 2000,
}) {
  // Create HTML element
  const notity = document.getElementById("notify");

  if (!document.querySelector(`[data-notify='${position}']`)) {
    const notifyWrapper = document.createElement("div");
    notifyWrapper.setAttribute("data-notify", position);
    notity.appendChild(notifyWrapper);
  }

  const notifyWrapper = document.querySelector(`[data-notify='${position}']`);

  const notifyContent = document.createElement("div");
  notifyContent.setAttribute("class", `notify notify--${type}`);

  notifyContent.classList.add("animate");
  setTimeout(() => notifyContent.classList.remove("animate"), 300);

  notifyContent.innerHTML = `
        <div style="font-weight: 700;color: #0b2e13;">${title}</div>
        ${html !== null ? html : ""}
    `;

  if (position.split(" ")[0] === "top") {
    notifyWrapper.insertAdjacentElement("afterbegin", notifyContent);
  }

  if (position.split(" ")[0] === "bottom") {
    notifyWrapper.insertAdjacentElement("beforeend", notifyContent);
  }

  // Remove notification
  setTimeout(() => notifyContent.remove(), duration);
}
