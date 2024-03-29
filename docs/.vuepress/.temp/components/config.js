import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "E:/Github/ay1928.github.io/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import Badge from "E:/Github/ay1928.github.io/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/Github/ay1928.github.io/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/Github/ay1928.github.io/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "E:/Github/ay1928.github.io/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {

  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
