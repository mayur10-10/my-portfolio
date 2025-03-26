import { SOCIAL_FOOTER } from '../../utils/constants'
import SocialMediaTile from './utils/SocialMediaTile'

const SocialMedia = () => {
	return (
		// wrapper
		<div className="overflow-hidden h-fit">
			{/* Social */}
			<div
				className="flex flex-col gap-6 mt-16 mb-12
                px-3
                xxsm:px-6
                sm:px-9
                xmmd:px-24 
                2xl:px-[14rem]"
			>
				{/* greetings */}
				<div>
					<div className="text-4xl font-bold">Follow me on the internet</div>
					<div className="text-xl font-bold">Let&apos;s be friend!</div>
				</div>

				{/* social medias */}
				<div className="flex flex-col gap-3">
					{SOCIAL_FOOTER.map((social) => {
						return (
							<div key={social.id}>
								<SocialMediaTile social={social} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default SocialMedia
