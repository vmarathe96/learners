const CourseModel = require('../module/courses')


// Create
const createCourse = async (req,res,next) => {
    let {course_id,course_name,course_description} = req.body
    await CourseModel.create({
        course_id,
        course_name,
        course_description
       
    }, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Added Course Successfully",
            data: result
        })
    })
}

// Read
const readAllCourse = (req,res,next) => {
    CourseModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved all the Course",
            data:{
                course: result
            }
        })
    })
} 

// Read By Id
const readCourseById = (req,res,next) => {
    CourseModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved Course By ID",
            data:{
                course: result
            }
        })
    })
} 


// Update By Id
const updateCourseById = (req,res,next) => {
    CourseModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated course By ID",
            data:{
                course: result
            }
        })
    })
} 

// Delete Movie By Id
const deleteCourseById = (req,res,next) => {
  CourseModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted course By ID",
            data:{
                course: result
            }
        })
    })
} 

module.exports = {createCourse, readAllCourse, readCourseById, updateCourseById, deleteCourseById}