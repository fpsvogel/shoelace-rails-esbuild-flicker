import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // // commented this out after moving the hide into 'turbo:before-cache', and now it works (*•̀ᴗ•́*)و ̑̑
    // document.querySelector("sl-tab-group").style.visibility = "visible"
    console.log("connected")
  }

  // // this really does hide component, but somehow it is still visible in the cached preview.
  // disconnect() {
  //   document.querySelector("sl-tab-group").style.visibility = "hidden"
  //   console.log("disconnected")
  // }

  // // error when I try to call this. see application.js
  // teardown() {
  //   document.querySelector("sl-tab-group").style.visibility = "hidden"
  //   console.log("torn down")
  // }
}
