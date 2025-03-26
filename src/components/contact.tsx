import { useState } from 'react'
import { lazy } from 'react'
const ContactModal = lazy(() => import('./contact-modal'))

const ContactButton = (props: Props) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<span onClick={() => setIsModalOpen(true)}>{props.children}</span>
			<ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	)
}

export default ContactButton
