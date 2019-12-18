const exif = require('exif-parser')
const fs = require('fs')
const dir = require('node-dir')

const readbuffer = (err, content, filename, next) => {

	console.log("parsing filename: " + JSON.stringify(filename))
  //const buffer = fs.readFileSync(__dirname + '/' + path)
//	parse(null, buffer, path, null)
}

const parse = (err, buffer, filename, next) => {
	
  const parser = exif.create(buffer)
  const res = parser.parse()

// console.log(JSON.stringify(res, null, 2))

  if(res.tags == undefined || res.tags.DateTimeOriginal == undefined) {
	console.log("no date: " + filename);
  } else {
	  console.log("date found: " + filename);
}
}

const func = async () => {
	try {
	await dir.readFiles('/home/jdoe/OneDrive/Pictures',{ match: /.jpg$/ }, readbuffer)
	} catch (e) {
		console.log("error: ", e)
	}
}
func()
