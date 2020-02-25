/**
 * @version 1.0.0
 * @author Sergio - Trejocode
 * @description Plantilla HTML inicial
*/
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
  	}

	render() {
		return (
			<Html lang="es">
				<Head />
				<body>
					<Main />
					<NextScript />
					<script deffer = "true" src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
					<script>new WOW().init();</script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;