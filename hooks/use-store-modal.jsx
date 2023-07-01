// Zustand library: global state managment to control whether Modals is open or not
// Modifying 'useStoreModal' in any page can trigger onOpen, onClose for this modal
// Exported to: components/modals/store-modals.jsx

import { create } from 'zustand'

export const useStoreModal = create((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}))
