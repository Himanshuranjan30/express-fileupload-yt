const express=require('express')
const formparser=require('express-fileupload')


const app=express();
app.use(formparser());

app.get('/home',(req,res)=>{
    res.send("Image upload tutorial")
})

app.post('/uploadimage',(req,res)=>{
    if(req.files)
    {
        console.log(req.files);
        res.send('file upload working!!')
    //     var params = {
    //         Bucket: "imagestoreopenforum",
    //         Key:
    //           "postimages/" +
    //           Math.random().toString(36).substring(7) +
    //           path.extname(req.files["photo"].name),
    //         Body: req.files["photo"].data,
    //         ACL: "public-read",
    //       };
    //       s3.upload(params, function (perr, pres) {
    //         if (perr) {
    //           console.log("Error uploading data: ", perr);
    //         } else {
    //           post.photo = pres.Location;
    //           post.save((err, result) => {
    //             if (err) res.json(err);
    //             else res.json(result);
    //           });
    //         }
    // })}
}}
    
)

app.listen(8000);