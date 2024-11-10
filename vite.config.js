import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  appType: 'mpa',
  base: '',
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        auth: resolve(__dirname, './auth/index.html'),
        login: resolve(__dirname, './auth/login/index.html'),
        register: resolve(__dirname, './auth/register/index.html'),
        post: resolve(__dirname, './post/index.html'),
        createPost: resolve(__dirname, './post/create/index.html'),
        editPost: resolve(__dirname, './post/edit/index.html'),
        profile: resolve(__dirname, './profile/index.html'),
        editProfile: resolve(__dirname, './profile/edit/index.html'),
        follow: resolve(__dirname, './follow/index.html'),
        search: resolve(__dirname, './follow/search.html'),
      },
    },
  },
});
