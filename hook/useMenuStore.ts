import create from "zustand";

interface MenuStore {
  menuOpen: boolean;
  toggleMenu: () => void;
  setMenuOpen: (value: boolean) => void;
}

const useMenuStore = create<MenuStore>((set) => ({
  menuOpen: false,
  toggleMenu: () => set((state) => ({ menuOpen: !state.menuOpen })),
  setMenuOpen: (value: boolean) => set({ menuOpen: value }),
}));

export default useMenuStore;
