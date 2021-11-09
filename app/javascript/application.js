// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import { setBasePath } from '@shoelace-style/shoelace'
// Make sure to run:
// cp -R node_modules/@shoelace-style/shoelace/dist/assets public/shoelace/
// from root
// Or make it run with assets:precompile
setBasePath("/shoelace/")
