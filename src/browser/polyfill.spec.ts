import { assert, describe, test } from "vitest"
import { Serial as SerialPolyfill } from "./polyfill"

describe("WebUSB", () => {
  test("navigator.usb exists", () => {
    assert("usb" in navigator)
    assert(navigator.usb instanceof USB)
  })

  test("new Serial(navigator.usb)", () => {
    const serial = new SerialPolyfill(navigator.usb)
    assert(serial instanceof SerialPolyfill)
  })
})
