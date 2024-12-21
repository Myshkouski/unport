import {
  BaseSerial,
  SerialPolyfillOptions,
  SerialPort as BaseSerialPort,
} from "@myshkouski/web-serial-polyfill/serial";

class SerialPort extends BaseSerialPort implements globalThis.SerialPort {
  onconnect: ((this: globalThis.SerialPort, ev: Event) => any) | null = null;
  ondisconnect: ((this: globalThis.SerialPort, ev: Event) => any) | null = null;
  connected: boolean = false;
  
  getSignals(): Promise<SerialInputSignals> {
    throw new Error("Method not implemented.");
  }
  
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
  
  addEventListener(
    type: "connect" | "disconnect",
    listener: (this: this, ev: Event) => any,
    useCapture?: boolean,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions,
  ): void {
    throw new Error("Method not implemented.");
  }

  removeEventListener(
    type: "connect" | "disconnect",
    callback: (this: this, ev: Event) => any,
    useCapture?: boolean,
  ): void;
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean,
  ): void {
    throw new Error("Method not implemented.");
  }
}

export class Serial extends BaseSerial<SerialPort> implements globalThis.Serial {
  onconnect: ((this: globalThis.Serial, ev: Event) => any) | null = null;
  ondisconnect: ((this: globalThis.Serial, ev: Event) => any) | null = null;
  
  protected createPort(
    device: USBDevice,
    options?: SerialPolyfillOptions
  ): SerialPort {
    return new SerialPort(device, options);
  }

  dispatchEvent(event: Event): boolean {
    throw new Error("Method should not be used from user-defined code.");
    // return this.usb.dispatchEvent(event);
  }
  
  addEventListener(
    type: "connect" | "disconnect",
    listener: (this: this, ev: Event) => any,
    useCapture?: boolean,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions,
  ): void {
    this.usb.addEventListener(type, listener, options);
  }

  removeEventListener(
    type: "connect" | "disconnect",
    callback: (this: this, ev: Event) => any,
    useCapture?: boolean,
  ): void;
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean,
  ): void {
    this.usb.removeEventListener(type, callback, options);
  }
}
