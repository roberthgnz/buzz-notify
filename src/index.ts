/**
 * Define the color of the notifications
 */
type Type = 'success' | 'warning' | 'danger';

/**
 * Requires a string with 2 keywords for vertical and horizontal postion.
 * @defaultvalue "top right"
 * @see https://github.com/eliutgon/buzz-notify#position
 */
type Position = 'top left' | 'top center' | 'top right' | 'bottom left' | 'bottom center' | 'bottom right';

/**
 * Define the build-in transition effect
 */
type Transition = 'fade' | 'bounce' | 'slide-blurred';

/**
 * Icon definitions
 */
type Icons = {
  [key in Type]: string;
};

interface NotifyOptions {
  /**
   * Title of the notification
   */
  title: string;
  /**
   * Sets the HTML markup contained within the notification.
   */
  html?: string;
  /**
   * Sets the type of the notification.
   * @defaultvalue "success"
   */
  type?: Type;
  /**
   * Sets the position of the notification.
   */
  position?: Position;
  /**
   * Auto close notification. Set in ms (milliseconds). If the duration is a negative number, the notification will not be removed.
   */
  duration?: number;
  /**
   * Sets the transition effect.
   * @defaultvalue "fade"
   */
  transition?: Transition;
  /**
   * Sets the configuration of the notification.
   */
  config?: {
    /**
     * Override the default icons.
     */
    icons: Icons;
  } | null;
}

const icons: Icons = {
  success: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#155724" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" /></svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#856404" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>`,
  danger: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#721c24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><path d="M12 9v2m0 4v.01" /><path d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75" /></svg>`,
};

const TRANSITION_DURATION = 400; // ms

/**
 * Show a notification
 * @param {NotifyOptions} options - Options for the notification
 * @param {Function} callback - Callback function executed when the notification is closed.
 * @example Notify({ title: "My notification", type: "success" });
 */
function Notify(
  {
    title,
    html,
    type = 'success',
    position = 'top right',
    duration = 3000,
    transition = 'fade',
    config = {
      icons,
    },
  }: NotifyOptions,
  callback: () => void,
) {
  const notify = document.querySelector('#notify')!;

  if (!notify.querySelector(`[data-notify='${position}']`)) {
    const notifyWrapper = document.createElement('div');

    notifyWrapper.setAttribute('data-notify', position);

    notify.appendChild(notifyWrapper);
  }

  const notifyWrapper = notify.querySelector(`[data-notify='${position}']`)!;

  const notifyContent = document.createElement('div');

  notifyContent.setAttribute('class', `notify notify--${type}`);

  // Accesibility attributes
  notifyContent.setAttribute('role', 'alert');
  notifyContent.setAttribute('aria-live', 'assertive');
  notifyContent.setAttribute('aria-atomic', 'true');

  notifyContent.classList.add(`${transition}-active`);

  setTimeout(() => {
    notifyContent.classList.remove(`${transition}-active`);
  }, TRANSITION_DURATION);

  notifyContent.innerHTML = `
          <div class="notify__title">${title}</div>
          ${html ?? ''}
      `;

  const notifyTitle = notifyContent.querySelector('.notify__title')!;

  // If has custom icons
  const _icons = { ...icons, ...config?.icons };

  notifyTitle.insertAdjacentHTML('afterbegin', `<span class="notify__icon">${_icons[type]}</span>`);

  if (position.split(' ')[0] === 'top') {
    notifyWrapper.insertAdjacentElement('afterbegin', notifyContent);
  }

  if (position.split(' ')[0] === 'bottom') {
    notifyWrapper.insertAdjacentElement('beforeend', notifyContent);
  }

  // Check if duration is positive
  if (duration * 1 > 0) {
    setTimeout(() => {
      notifyContent.classList.add(`${transition}-leave`);
    }, duration - TRANSITION_DURATION / 2);
    setTimeout(() => {
      // If callback it is defined, executed it
      if (typeof callback === 'function') callback();
      notifyContent.remove();
    }, duration);
  }

  notifyContent.addEventListener('click', function () {
    notifyContent.classList.add(`${transition}-leave`);
    setTimeout(() => {
      this.remove();
    }, TRANSITION_DURATION / 2);
  });
}

export default Notify;
