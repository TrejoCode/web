/**
 * @version 1.0.0
 * @author trejocode
 * @description Plantilla HTML inicial.
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
				</body>
			</Html>
		);
	}
}

export default MyDocument;