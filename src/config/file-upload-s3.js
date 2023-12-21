const multer = require( "multer");
const multerS3 = require ("multer-s3");
const aws = require( "aws-sdk");



aws.config.update({
    region:"us-east-1",
    secretAccessKey: "yCGT34nZw6AXXKdwvG2sfddvhG4n9ybmYQDu87XO",
    accessKeyId: "AKIAUOKS4THPL6Y4YNWQ"
})

 const s3 = new aws.S3()
const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'twitterbucketfarid',
      acl:'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })

module.exports ={upload};