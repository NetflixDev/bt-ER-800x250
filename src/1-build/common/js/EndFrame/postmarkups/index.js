import sideBySidePostMarkup from './sideBySidePostMarkup.js'
import stackedPostMarkup from './stackedPostMarkup.js'
import { Align } from 'ad-view'

export { leftPostMarkup, centerPostMarkup, rightPostMarkup, stackedPostMarkup }

function leftPostMarkup(T) {
	sideBySidePostMarkup({
		ctaLogoPostMarkup: T => {
			Align.set(T.ctaLogoLockup, {
				x: {
					type: Align.LEFT,
					against: 70
				},
				y: {
					type: Align.TOP,
					offset: 195
				}
			})
		}
	})
}

function centerPostMarkup(T) {
	sideBySidePostMarkup({
		ctaLogoPostMarkup: T => {
			Align.set(T.ctaLogoLockup, {
				x: Align.CENTER,
				y: {
					type: Align.TOP,
					offset: 195
				}
			})
		}
	})
}

function rightPostMarkup(T) {
	sideBySidePostMarkup({
		ctaLogoPostMarkup: T => {
			Align.set(T.ctaLogoLockup, {
				x: {
					type: Align.RIGHT,
					offset: -73
				},
				y: {
					type: Align.TOP,
					offset: 195
				}
			})
		}
	})
}
