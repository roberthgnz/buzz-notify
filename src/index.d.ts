/**
 * Define the color of the notifications
 * @defaultvalue "success"
 */
export type Type = "success" | "warning" | "danger";

/**
 * Requires a string with 2 keywords for vertical and horizontal postion.
 * @defaultvalue "top right"
 * @see https://github.com/eliutgon/buzz-notify#position
 */
export type Position =
  | "top left"
  | "top center"
  | "top right"
  | "bottom left"
  | "bottom center"
  | "bottom right";

export interface NotifyOptions {
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
}
