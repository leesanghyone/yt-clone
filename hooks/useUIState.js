import { create } from "zustand";

const useUIState = create((set) => ({
  homeCategory: "",
  headerImageSrc:
    "https://images.unsplash.com/photo-1707833558984-3293e794031c",
  setHomeCategory: (value) => set({ homeCategory: value }),
  setheaderImageSrc: (src) => set({ headerImageSrc: src }),
}));

export default useUIState;
