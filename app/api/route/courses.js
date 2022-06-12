const express = require('express')
const router = express.Router()
const courseController = require('../contoller/courses')

// Create
router.post('/create',courseController.createCourse)
// Read
router.get('/getAllCourse',courseController.readAllCourse)
// Read By Id
router.get('/getCourseById/:id',courseController.readCourseById)
// Update By Id
router.put('/updateCourseById/:id',courseController.updateCourseById)
// Delete By Id
router.delete('/deleteCourseById/:id',courseController.deleteCourseById)

module.exports = router