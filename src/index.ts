/**
 * Define the color of the notifications
 */
type NotificationVariant = 'success' | 'warning' | 'danger';

/**
 * Requires a string with 2 keywords for vertical and horizontal postion.
 * @defaultvalue "top right"
 * @see https://github.com/eliutgon/buzz-notify#position
 */
type Position = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

/**
 * Define the build-in transition effect
 */
type Transition = 'fade' | 'bounce' | 'slide-blurred';

/**
 * Icon definitions
 */
type Icons = Record<NotificationVariant, string>;

type NotifyProps = {
  /**
   * Sets the configuration of the notification.
   */
  config?: {
    /**
     * Override the default icons.
     */
    icons: Icons;
  } | null;
  /**
   * Auto close notification. Set in ms (milliseconds). If the duration is a negative number, the notification will not be removed.
   */
  duration?: number;
  /**
   * Sets the HTML markup contained within the notification.
   */
  html?: string;
  /**
   * Callback that fires, when the notification removes
   * */
  onClose?: () => void;
  /**
   * Sets the position of the notification.
   */
  position?: Position;
  /**
   * Title of the notification
   */
  title: string;
  /**
   * Sets the transition effect.
   * @defaultvalue "fade"
   */
  transition?: Transition;
  /**
   * Sets the type of the notification.
   * @defaultvalue "success"
   */
  variant?: NotificationVariant;
}

const icons: Icons = {
  success:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#155724" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" /></svg>',
  warning:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#856404" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>',
  danger:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#721c24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><path d="M12 9v2m0 4v.01" /><path d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75" /></svg>'
}

const TRANSITION_DURATION = 0.4

/**
 * Show a notification
 * @param {NotifyProps} - notification props
 * @example Notify({ title: "My notification" });
 */
export const Notify = (
  {
    config = {
      icons
    },
    duration = 3,
    html,
    onClose,
    position: { vertical, horizontal } = { vertical: 'top', horizontal: 'right' },
    title,
    transition = 'fade',
    variant = 'success'
  }: NotifyProps
) => {
  const notify = document.querySelector('#notify')!
  const dataNotifyAttribute = [vertical, horizontal].join('-')

  if (!notify.querySelector(`[data-notify='${dataNotifyAttribute}']`)) {
    const notifyWrapper = document.createElement('div')

    notifyWrapper.setAttribute('data-notify', dataNotifyAttribute)

    notify.appendChild(notifyWrapper)
  }

  const notifyWrapper = notify.querySelector(`[data-notify='${dataNotifyAttribute}']`)!

  const notifyContent = document.createElement('div')

  notifyContent.setAttribute('class', `notify notify--${variant}`)

  notifyContent.setAttribute('role', 'alert')
  notifyContent.setAttribute('aria-live', 'assertive')
  notifyContent.setAttribute('aria-atomic', 'true')

  notifyContent.setAttribute('style', "---area: 'icon title'")

  notifyContent.classList.add(`${transition}-active`)
  notifyContent.classList.add(`${transition}-active`)

  setTimeout(() => {
    notifyContent.classList.remove(`${transition}-active`)
  }, TRANSITION_DURATION)

  notifyContent.innerHTML = `<div class="notify__title">${title}</div>`

  if (html) {
    notifyContent.setAttribute('style', "---area: 'icon title' 'icon content'")
    notifyContent.innerHTML += `<div class="notify__content">${html}</div>`
  }

  // If has custom icons
  const _icons = { ...icons, ...config?.icons }

  notifyContent.insertAdjacentHTML('afterbegin', `<span class="notify__icon">${_icons[variant]}</span>`)

  if (vertical === 'top') {
    notifyWrapper.insertAdjacentElement('afterbegin', notifyContent)
  } else {
    notifyWrapper.insertAdjacentElement('beforeend', notifyContent)
  }

  if (duration > 0) {
    setTimeout(() => {
      notifyContent.classList.add(`${transition}-leave`)
    }, duration - TRANSITION_DURATION / 2)

    setTimeout(() => {
      onClose && onClose()
      notifyContent.remove()
    }, Number(`${duration}000`))
  }

  notifyContent.addEventListener('click', function () {
    notifyContent.classList.add(`${transition}-leave`)

    setTimeout(() => {
      notifyContent.remove()
    }, TRANSITION_DURATION / 2)
  })
}
