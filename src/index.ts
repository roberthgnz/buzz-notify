/**
 * Define the color of the notifications
 */
type Type = 'success' | 'warning' | 'danger' | 'info'

/**
 * Requires a string with 2 keywords for vertical and horizontal postion.
 * @defaultvalue "top right"
 * @see https://github.com/eliutgon/buzz-notify#position
 */
type Position = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

/**
 * Define the build-in transition effect
 */
type Transition = 'fade' | 'bounce' | 'slide-blurred'

/**
 * Icon definitions
 */
type Icons = Record<Type, string>

interface NotifyOptions {
  /**
   * Title of the notification
   */
  title: string
  /**
   * Sets the HTML markup contained within the notification.
   */
  html?: string
  /**
   * Sets the type of the notification.
   * @defaultvalue "success"
   */
  type?: Type
  /**
   * Sets the position of the notification.
   * @defaultvalue "top-right"
   */
  position?: Position
  /**
   * Auto close notification. Set in ms (milliseconds). If the duration is a negative number, the notification will not be removed.
   * @defaultvalue 3000
   */
  duration?: number
  /**
   * Sets the transition effect.
   * @defaultvalue "fade"
   */
  transition?: Transition
  /**
   * Sets the configuration of the notification.
   */
  config?: {
    /**
     * Override the default icons.
     */
    icons: Icons
  } | null
}

interface NotifyElementOptions {
  type: Type
  position: Position
  duration: number
  transition: Transition
}

const icons: Icons = {
  success:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" /></svg>',
  warning:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>',
  danger:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><path d="M12 9v2m0 4v.01" /><path d="M5.07 19H19a2 2 0 0 0 1.75 -2.75L13.75 4a2 2 0 0 0 -3.5 0L3.25 16.25a2 2 0 0 0 1.75 2.75" /></svg>',
  info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
}

const TRANSITION_DURATION = 400

const getOptions = (element: Element): NotifyElementOptions => {
  const options = {
    type: (element.getAttribute('data-notify-type') || 'success') as Type,
    position: (element.getAttribute('data-notify-position') || 'top-right') as Position,
    duration: (element.getAttribute('data-notify-duration') || 3000) as number,
    transition: (element.getAttribute('data-notify-transition') || 'fade') as Transition,
  }
  return options
}

/**
 * Show a notification
 * @param {NotifyOptions} options - Options for the notification
 * @param {Function} callback - Callback function executed when the notification is closed.
 * @example Notify({ title: "My notification", type: "success" });
 */
export const Notify = (options: NotifyOptions, callback?: () => void) => {
  const notify = document.querySelector('[data-notify]') as Element

  if (!notify) {
    throw new Error('No notification element found')
  }

  const NotifyEvent = new CustomEvent('notifyclose')

  const { title, html, type, position, duration, transition, config } = { ...getOptions(notify), ...options }

  if (!['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].includes(position)) {
    throw new Error('Position is not valid')
  }

  if (!notify.querySelector(`[data-notify-wrapper-position='${position}']`)) {
    const notifyWrapper = document.createElement('div')

    notifyWrapper.setAttribute('data-notify-wrapper-position', position)

    notify.appendChild(notifyWrapper)
  }

  const notifyWrapper = notify.querySelector(`[data-notify-wrapper-position='${position}']`)!

  const notifyContent = document.createElement('div')

  notifyContent.setAttribute('class', `notify notify--${type}`)

  // Accesibility attributes
  notifyContent.setAttribute('role', 'alert')
  notifyContent.setAttribute('aria-live', 'assertive')
  notifyContent.setAttribute('aria-atomic', 'true')

  // Grid style
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

  notifyContent.insertAdjacentHTML(
    'afterbegin',
    `<span class="notify__icon" style="color: var(--bzn-color-${type})">${_icons[type]}</span>`,
  )

  const [vertical] = position.split('-')

  if (vertical === 'top') {
    notifyWrapper.insertAdjacentElement('afterbegin', notifyContent)
  }

  if (vertical === 'bottom') {
    notifyWrapper.insertAdjacentElement('beforeend', notifyContent)
  }

  // Check if duration is positive
  if (+duration * 1 > 0) {
    setTimeout(() => {
      notifyContent.classList.add(`${transition}-leave`)
    }, +duration - TRANSITION_DURATION / 2)

    setTimeout(() => {
      // If callback exists - execute it
      if (typeof callback === 'function') {
        callback()
      }

      notifyContent.dispatchEvent(NotifyEvent)
      notifyContent.remove()
    }, +duration)
  }

  notifyContent.addEventListener('click', function () {
    notifyContent.classList.add(`${transition}-leave`)
    setTimeout(() => {
      this.remove()
      notifyContent.dispatchEvent(NotifyEvent)
    }, TRANSITION_DURATION / 2)
  })

  return notifyContent
}

export const NotifyAsync = (options: NotifyOptions) => {
  const notifyContent = Notify(options)
  return new Promise<void>((resolve) => {
    const timer = setTimeout(resolve, options?.duration || 3000)
    notifyContent.addEventListener('notifyclose', () => {
      resolve()
      clearTimeout(timer)
    })
  })
}
