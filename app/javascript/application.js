// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import { setBasePath } from '@shoelace-style/shoelace'
// icons don't appear if set to "../../public/shoelace/dist/"
setBasePath("../../public/shoelace/dist/")
// icons do appear if set to CDN.
// setBasePath("https://unpkg.com/@shoelace-style/shoelace@2.0.0-beta.57/dist/")