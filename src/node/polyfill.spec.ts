import { assert, describe, test } from "vitest"
import { Serial as SerialPolyfill } from "../browser/polyfill"
import { WebUSB } from "usb"

describe("WebUSB", () => {
  const usb = new WebUSB()

  test("new Serial(navigator.usb)", () => {
    const serial = new SerialPolyfill(usb)
    assert(serial instanceof SerialPolyfill)
  })
})
