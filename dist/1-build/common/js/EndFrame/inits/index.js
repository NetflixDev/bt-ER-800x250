import { Styles, Markup, Align, Effects } from 'ad-view'
import { ImageManager } from 'ad-control'
import { Animation } from '@common/js/Animation.js'
import { Control } from '@common/js/Control.js'
import CanvasIris from '@common/js/CanvasIris.js'
import { UIComponent, UIBorder, UIButton, UIImage, TextFormat, UITextField, UISvg } from 'ad-ui'
import { ObjectUtils } from 'ad-utils'

export { mainInit }

function mainInit(T) {
	baseInit(T, { ctaLogoInit: mainCtaLogoInit })
}

function baseInit(T, { ctaLogoInit = mainCtaLogoInit }) {
	T.keyart = document.createElement('netflix-img')
	T.keyart.setAttribute('data-dynamic-key', 'Keyart')
	T.keyart.setAttribute('width', adParams.adWidth)
	T.appendChild(T.keyart)

	T.pedigree = new UITextField({
		target: T,
		id: 'pedigree',
		css: {
			width: 200,
			height: 50
		},
		fontSize: 16,
		fontFamily: 'Netflix Sans',
		format: TextFormat.INLINE_FIT_CLAMP,
		alignText: Align.CENTER,
		spacing: -0.2,
		text: ''
	})

	// title treatment
	T.tt = document.createElement('netflix-img')
	T.tt.setAttribute('data-dynamic-key', 'Title_Treatment')
	T.tt.setAttribute('height', adParams.adHeight)
	T.appendChild(T.tt)

	// free trial messaging
	T.ftm = document.createElement('netflix-text')
	T.ftm.setAttribute('data-dynamic-key', 'FTM')
	T.appendChild(T.ftm)

	// tune-in
	T.tuneIn = document.createElement('netflix-text')
	T.tuneIn.setAttribute('data-dynamic-key', 'Tune_In')
	T.appendChild(T.tuneIn)

	// init CTA and logo
	ctaLogoInit(T)

	// ratings bug
	T.ratingsBug = document.createElement('netflix-img')
	T.ratingsBug.setAttribute('data-dynamic-key', 'Ratings_Bug_20x20')
	T.ratingsBug.setAttribute('id', 'ratings_bug')
	T.ratingsBug.setAttribute('width', 20)
	T.appendChild(T.ratingsBug)

	T.iris =
		window.Creative &&
		Creative.usesCanvasIris &&
		new CanvasIris({
			target: T,
			irisColor: Creative.irisColor
		})
}

function mainCtaLogoInit(T) {
	// logo
	T.netflixLogo = document.createElement('netflix-brand-logo')
	T.netflixLogo.setAttribute('width', 110)
	T.appendChild(T.netflixLogo)

	// cta
	T.cta = document.createElement('netflix-cta')
	T.cta.setAttribute('data-dynamic-key', 'CTA')
	T.cta.setAttribute('arrow', '')
	T.cta.setAttribute('border', '')
	T.cta.setAttribute('width', 107)
	T.cta.setAttribute('max-width', 130)
	T.cta.setAttribute('height', 28)
	T.appendChild(T.cta)
}
