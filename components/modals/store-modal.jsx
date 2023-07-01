// Exported to: providers/modal-provider.jsx

'use client'

import { useStoreModal } from '@/hooks/use-store-modal'
import { Modal } from '../ui/modal'

export const StoreModal = () => {
	const storeModal = useStoreModal()

	return (
		<Modal
			title="Create store"
			description="Add a new stpore to amange prdcts and categories"
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}
		>
			Future Create Store Form
		</Modal>
	)
}
