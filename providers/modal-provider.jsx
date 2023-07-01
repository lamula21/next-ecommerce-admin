'use client'

import { useEffect, useState } from 'react'
import { StoreModal } from '../components/modals/store-modal'

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	// Either return null or Dialog Modal for fixing hidration error (client-side rendering vs server-side rendering)
	if (!isMounted) {
		// if in server-side rendering, return null
		return null
	}

	// But in client, render modal
	return (
		<>
			<StoreModal />
		</>
	)
}
