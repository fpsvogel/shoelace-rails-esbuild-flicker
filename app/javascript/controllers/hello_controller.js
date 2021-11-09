import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    document.querySelector("sl-tab-group").style.visibility = "visible"
    console.log("connected")
  }

  disconnect() {
    document.querySelector("sl-tab-group").style.visibility = "hidden"
    console.log("disconnected")
  }

  // does not work. see application.js
  teardown() {
    document.querySelector("sl-tab-group").style.visibility = "hidden"
    console.log("torn down")
  }
}
