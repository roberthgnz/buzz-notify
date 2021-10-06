/**
 * Define the color of the notifications
 */
declare type Type = "success" | "warning" | "danger";
/**
 * Requires a string with 2 keywords for vertical and horizontal postion.
 * @defaultvalue "top right"
 * @see https://github.com/eliutgon/buzz-notify#position
 */
declare type Position = "top left" | "top center" | "top right" | "bottom left" | "bottom center" | "bottom right";
/**
 * Define the build-in transition effect
 */
declare type Transition = "fade" | "bounce" | "slide-blurred";
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
}
/**
 * Show a notification
 * @param {NotifyOptions} options - Options for the notification
 * @param {Function} callback - Callback function executed when the notification is closed.
 * @example Notify({ title: "My notification", type: "success" });
 */
declare function Notify({ title, html, type, position, duration, transition, }: NotifyOptions, callback: () => void): void;
export default Notify;
