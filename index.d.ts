// index.d.ts
declare module 'react-native-compass-heading' {
  /**
   * Interface for compass data emitted by the HeadingUpdated event.
   */
  interface CompassData {
    /**
     * The compass heading in degrees.
     */
    heading: number;

    /**
     * The accuracy of the compass heading in degrees.
     */
    accuracy: number;
  }

  /**
   * Type for the callback function used to handle compass data updates.
   */
  type CompassCallback = (data: CompassData) => void;

  interface CompassHeading {
    /**
     * Starts the compass heading listener with a specified update filter.
     *
     * @param degreeUpdateRate - Minimum degree change to trigger an update.
     * @param callback - Callback function to handle compass data updates.
     * @returns A promise that resolves to true if the listener starts successfully.
     */
    start(degreeUpdateRate: number, callback: CompassCallback): Promise<boolean>;

    /**
     * Stops the compass heading listener.
     */
    stop(): void;

    /**
     * Checks if the device has a compass sensor.
     *
     * @returns A promise that resolves to true if a compass sensor is available, otherwise false.
     */
    hasCompass(): Promise<boolean>;
  }

  /**
   * Default export for the CompassHeading module.
   */
  const CompassHeading: CompassHeading;

  export default CompassHeading;
}
