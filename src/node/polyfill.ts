import {
  BaseSerial,
  SerialPort as BaseSerialPort,
  SerialPolyfillOptions,
} from "@myshkouski/web-serial-polyfill/serial";

export class SerialPort extends BaseSerialPort {}

export class Serial extends BaseSerial<SerialPort> {
  protected createPort(device: USBDevice, options?: SerialPolyfillOptions): SerialPort {
    return new SerialPort(device, options)
  }
}
