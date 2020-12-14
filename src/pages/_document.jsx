/**
 * @version 1.2.0
 * @author Trejocode - Sergio
 * @description Configuración adicional de la plantilla HTML
*/

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from 'helpers/ga';

class DocumentHTML extends Document {

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
  	}

	render() {
		return (
			<Html lang="es-MX">
				<Head />
				<body>
					<Main />
					<NextScript />
					<script deffer = "true" src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" />
					<script>new WOW().init();</script>
					<script async data-account="cr2XyIS2q3" src="https://cdn.userway.org/widget.js"></script>
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
					<script
						dangerouslySetInnerHTML = {{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GA_TRACKING_ID}', {
							page_path: window.location.pathname,
							});
						`,
						}}
					/>
				</body>
			</Html>
		);
	}
}

export default DocumentHTML;