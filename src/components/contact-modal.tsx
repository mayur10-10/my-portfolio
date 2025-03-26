import React, { useCallback, useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
interface IContactModal {
	isOpen: boolean
	onClose: () => void
}

const ContactModal = ({ isOpen, onClose }: IContactModal) => {
	const handleBackdropClick = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			if ((e.target as HTMLElement).id === 'modal-backdrop') {
				onClose()
			}
		},
		[onClose]
	)

	const initFormData = {
		email: { error: false, value: '' },
		message: { error: false, value: '' },
	}

	const [formData, setFormData] = useState(initFormData)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const validateEmail = (email: string) => {
		return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			email
		)
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		const error = false

		setFormData((prev) => ({
			...prev,
			[name]: { error, value },
		}))
	}

	const handleSubmit = async () => {
		const { email, message } = formData
		let hasError = false

		if (!email.value.trim()) {
			setFormData((prev) => ({ ...prev, email: { ...prev.email, error: true } }))
			hasError = true
		} else {
			hasError = !validateEmail(email.value.trim().toLowerCase())
			setFormData((prev) => ({ ...prev, email: { ...prev.email, error: hasError } }))
		}
		if (!message.value.trim()) {
			setFormData((prev) => ({ ...prev, message: { ...prev.message, error: true } }))
			hasError = true
		}

		if (hasError) return

		const templateParams = {
			name: email.value,
			message: message.value,
		}

		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
				templateParams,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
			)
			alert('Message sent successfully!')
			setFormData({ email: { error: false, value: '' }, message: { error: false, value: '' } })
		} catch (error) {
			console.error('EmailJS Error:', error)
			alert('Failed to send message. Please try again.')
		} finally {
			setIsSubmitting(false)
			onClose()
		}
	}

	useEffect(() => {
		if (!isOpen) {
			setFormData(initFormData)
			setIsSubmitting(false)
		}
	}, [isOpen])

	return (
		<div
			id="modal-backdrop"
			className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 bg-black/40 backdrop-blur-sm pointer-events-auto' : 'opacity-0 bg-black/0 pointer-events-none'}`}
			onClick={handleBackdropClick}
		>
			<div
				className={`text-center bg-[#2d2d2d] text-white p-6 rounded-lg shadow-lg w-[90%] max-w-md transform transition-transform duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
			>
				<h2 className="text-2xl font-bold mb-4">Contact Me</h2>
				<p className="mb-4">Feel free to reach out for collaborations or job opportunities!</p>
				<input
					type="text"
					name="email"
					placeholder="Your Email"
					value={formData.email.value}
					onChange={handleChange}
					className={`w-full p-3 ${formData.email.error ? 'mb-1' : 'mb-3'} bg-gray-800 text-white rounded-md border ${formData.email.error ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
				/>
				{formData.email.error && (
					<p className="text-red-500 text-sm mb-3">Valid Email is required.</p>
				)}
				<textarea
					name="message"
					placeholder="Your Message"
					value={formData.message.value}
					onChange={handleChange}
					className={`w-full p-3 ${formData.message.error ? '' : 'mb-3'} bg-gray-800 text-white rounded-md border ${formData.message.error ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32`}
				></textarea>
				{formData.message.error && (
					<p className="text-red-500 text-sm mb-3">Message is required.</p>
				)}
				<div className="flex justify-end space-x-2">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-gray-900 rounded-md hover:bg-gray-700 transition cursor-pointer"
					>
						Cancel
					</button>
					<button
						onClick={handleSubmit}
						disabled={isSubmitting}
						className="px-4 py-2 bg-gray-900 rounded-md hover:bg-gray-800 transition flex items-center gap-2 cursor-pointer"
					>
						{isSubmitting ? (
							<span className="loader border-t-2 border-white w-4 h-4 rounded-full animate-spin"></span>
						) : (
							'Send'
						)}
					</button>
				</div>
			</div>
		</div>
	)
}

export default ContactModal
