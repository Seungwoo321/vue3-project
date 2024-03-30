import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => ({
    posts: [],
    isMenuOverlay: false,
    isLogoutOverlay: false
  }),

  actions: {
    async getAllPosts() {
      let res = await $fetch('/api/get-all-posts');
      this.posts = res;
      return res;
    }
  }
})