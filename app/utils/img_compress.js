const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");

async function pngImgcompress() {
	await imagemin(["C:\\Users\\admin\\Desktop\\demo\\*"], "C:\\Users\\admin\\Desktop\\build", {
		plugins: [
			imageminJpegtran(),
			imageminPngquant({
				quality: [0.5, 0.5]
			})
		]
	});

	console.log("Images optimized");
}

pngImgcompress();
