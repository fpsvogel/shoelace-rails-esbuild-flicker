import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  teardown() {
    document.querySelector("sl-tab-group").style.visibility = "hidden"
  }
}
