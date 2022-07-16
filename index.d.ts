/**
 * Define the color of the notifications
 */
declare type Type = 'success' | 'warning' | 'danger' | 'info';
/**
 * Requires a string with 2 keywords for vertical and horizontal postion.
 * @defaultvalue "top right"
 * @see https://github.com/eliutgon/buzz-notify#position
 */
declare type Position = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
/**
 * Define the build-in transition effect
 */
declare type Transition = 'fade' | 'bounce' | 'slide-blurred';
/**
 * Icon definitions
 */
declare type Icons = Record<Type, string>;
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
     * @defaultvalue "top-right"
     */
    position?: Position;
    /**
     * Auto close notification. Set in ms (milliseconds). If the duration is a negative number, the notification will not be removed.
     * @defaultvalue 3000
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
/**
 * Show a notification
 * @param {NotifyOptions} options - Options for the notification
 * @param {Function} callback - Callback function executed when the notification is closed.
 * @example Notify({ title: "My notification", type: "success" });
 */
export declare const Notify: (options: NotifyOptions, callback?: () => void) => HTMLDivElement;
export declare const NotifyAsync: (options: NotifyOptions) => Promise<void>;
export {};
