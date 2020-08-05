const stylesheet = new CSSStyleSheet();
const cssText = `#notify {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 10vw;
}
[data-notify] {
  position: fixed;
}
[data-notify="top left"] {
  top: 10px;
  left: 10px;
}
[data-notify="top center"] {
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
[data-notify="top right"] {
  top: 10px;
  right: 10px;
}
[data-notify="bottom left"] {
  bottom: 10px;
  left: 10px;
}
[data-notify="bottom center"] {
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
[data-notify="bottom right"] {
  bottom: 10px;
  right: 10px;
}
[data-notify~="top"] .animate {
  opacity: 0;
  margin-top: -10px;
}
[data-notify~="bottom"] .animate {
  opacity: 0;
  margin-bottom: -10px;
}
.notify {
  padding: 0.25rem 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 300ms ease 0s;
}
.notify--success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.notify--danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.notify--warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
`;

stylesheet.replaceSync(cssText);

document.adoptedStyleSheets = [stylesheet];

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
