const fs = require('fs')
const path = require('path')

const getAllFiles = function (dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
    } else {
      arrayOfFiles.push('./' + path.join(dirPath, '/', file))
    }
  })

  return arrayOfFiles
}

const getRoutes = function (dir, routePathPrefix) {
  return getAllFiles(dir).map(
    file =>
      routePathPrefix + file.substring(2 + dir.length).replace(/\.[^/.]+$/, '')
  )
}

module.exports = {
  getAllFiles,
  getRoutes
}
