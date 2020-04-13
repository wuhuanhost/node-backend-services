const path = require("path");
const imagemin = require("imagemin");
const uuid = require("uuid");
// jpg 压缩
const imageminMozjpeg = require("imagemin-mozjpeg");
// const imageminJpegtran = require("imagemin-jpegtran");
// png 压缩
const imageminPngquant = require("imagemin-pngquant");
// const imageminOptipng = require("imagemin-optipng");

//图片输入目录（只能使用相对路径）
const imgResourceDir = "../public/images/img-upload/";
//图片输出目录
const imgDistDir = path.resolve(
	__dirname,
	"../",
	"public",
	"images",
	"img-process-dir"
);

/**
 * 生成输入图片的路径
 * @param Array fileNames
 */
function genImgPath(fileNames) {
	let filePaths = [];
	for (let index = 0; index < fileNames.length; index++) {
		// let filePath = path.join(imgResourceDir, fileNames[index]);
		filePath = imgResourceDir + fileNames[index];
		// filePath = path.normalize(filePath);
		filePaths.push(filePath);
		// console.log(filePath);
	}

	return filePaths;
}
/**
 * 图片处理工具类
 */
class ImgProcesson {
	/**
	 * 压缩jpg,jpeg
	 * @fileNames Array 图片名称数组
	 */
	async imageminJpg(fileNames) {
		console.log(genImgPath(fileNames));
		const files = await imagemin(genImgPath(fileNames), {
			destination: imgDistDir,
			plugins: [
				imageminMozjpeg({
					quality: 20,
				}),
			],
		});
		console.log(files);
		// console.log("图片输出目录>" + imgDistDir);
	}
	/**
	 * 压缩png
	 * @fileNames Array 图片名称数组
	 */
	async imageminPng(fileNames) {
		const files = await imagemin(genImgPath(fileNames), {
			destination: imgDistDir,
			plugins: [
				imageminPngquant({
					speed: 11,
					quality: [0.8, 0.9],
				}),
			],
		});
		console.log(files);
	}
	/**
	 * 通用压缩方法
	 */
	async imagemin() {
		const files = await imagemin(["./*.{jpg,png}"], {
			destination: "./dist",
			plugins: [
				imageminMozjpeg({
					quality: 20,
				}),
				imageminPngquant({
					speed: 11,
					quality: [0.8, 0.9],
				}),
			],
		});
		console.log(files);
	}
}

(async () => {
	//生成的uuid，上传时候当做图片的名称
	console.log(uuid.v1());

	var imgArr = [];
	//路径只能使用相对路径
	imgArr.push("test.jpg");
	// console.log(imgArr);
	await new ImgProcesson().imageminJpg(imgArr);

	var imgArr = [];
	//路径只能使用相对路径
	imgArr.push("test-png.png");
	// console.log(imgArr);
	try {
		await new ImgProcesson().imageminPng(imgArr);
	} catch (error) {
		console.error(error);
	}
})();

module.exports = ImgProcesson;
