import { createSideBySidePostMarkups } from './horizontalSideBySide.js'
import horizontalStacked from './horizontalStacked.js'
import { Align } from 'ad-view'
import { ObjectUtils } from 'ad-utils'

const { leftPostMarkup, centerPostMarkup, rightPostMarkup } = createSideBySidePostMarkups({
	defaultArgs: {
		ctaLogoOffset: 14,
		headlineFontSize: 18,
		headlineLockupOffset: 8
	},
	yAlign: {
		type: Align.BOTTOM,
		offset: -26
	},
	layoutXAligns: {
		leftXAlign: {
			type: Align.LEFT,
			against: 69
		},
		centerXAlign: Align.CENTER,
		rightXAlign: {
			type: Align.RIGHT,
			offset: -73
		}
	}
})

function stackedPostMarkup() {
	horizontalStacked({
		brandingLockupOffset: 16,
		brandingLockupRightPadding: 30,
		headlineFontSize: 18
	})
}

export { leftPostMarkup, centerPostMarkup, rightPostMarkup, stackedPostMarkup }
