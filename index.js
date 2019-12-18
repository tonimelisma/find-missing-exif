const exif = require('exif-parser')
const fs = require('fs')
const dir = require('recursive-readdir-async')

const readbuffer = (filename) => {

	// console.log("parsing filename: " + filename)
  const buffer = fs.readFileSync(filename)
	parse(buffer, filename)
}

const parse = (buffer, filename) => {
	
  const parser = exif.create(buffer)
  const res = parser.parse()

// console.log(JSON.stringify(res, null, 2))

  if(res.tags == undefined || res.tags.DateTimeOriginal == undefined) {
	console.log(filename);
  } else {
	  //console.log("date found: " + filename);
}
}

const options = {
	recursive: true,
	stats: false,
	ignoreFolders: true,
	include: [ "jpg", "jpeg", "JPG", "JPEG" ]
}

const func = async () => {
	try {
		const list = await dir.list("./Pictures", options, function(obj, index, total) {
			readbuffer(obj.fullname)
			//console.log(`${index} of ${total} ${obj.fullname}`)
		})
		if(list.error)
			    console.error(list.error)
		else
			    console.log(list)
	} catch (e) {
		console.log("error: ", e)
	}
}
func()
