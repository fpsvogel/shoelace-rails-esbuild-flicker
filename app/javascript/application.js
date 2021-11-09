// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import { setBasePath } from '@shoelace-style/shoelace'
// icons don't appear if set to "../../public/shoelace/dist/"
// setBasePath("../../public/shoelace/dist/")
// icons do appear if set to CDN.
setBasePath("https://unpkg.com/@shoelace-style/shoelace@2.0.0-beta.57/dist/")


// // app/javascript/packs/application.js
// document.addEventListener('turbolinks:before-cache', () => {
//   application.controllers.forEach(controller => {
//     if (typeof controller.teardown === 'function') {
//       controller.teardown()
//     }
//   })
// })


// const tagsUsed = ['sl-icon', 'sl-alert', 'sl-tab-panel', 'sl-tab-group', 'sl-tab'];

// Promise.all(tagsUsed.map(tag => customElements.whenDefined(tag))).then(() => {
//   // all components have loaded now, transition in and show the UI here.
//   document.querySelector("sl-tab-group").style.visibility = "visible"
//   console.log("Done loading.");
// });
