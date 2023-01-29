import { defineClientConfig } from "@vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper";
import HomePage from "@theme-hope/components/HomePage";
import NormalPage from "@theme-hope/components/NormalPage";
import Navbar from "@theme-hope/modules/navbar/components/Navbar";
import Sidebar from "@theme-hope/modules/sidebar/components/Sidebar";
import Layout from "/Users/ngkinchung/Documents/GitHub/ay1928.github.io/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js";
import NotFound from "/Users/ngkinchung/Documents/GitHub/ay1928.github.io/node_modules/vuepress-theme-hope/lib/client/layouts/NotFound.js";

import { useScrollPromise } from "@theme-hope/composables/index";
import { injectDarkmode, setupDarkmode } from "@theme-hope/modules/outlook/composables/index";
import { setupSidebarItems } from "@theme-hope/modules/sidebar/composables/index";

import "/Users/ngkinchung/Documents/GitHub/ay1928.github.io/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";



export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    
  },
  layouts: {
    Layout,
    NotFound,
    
  }
});