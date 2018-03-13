# Codaisseur Evaluation Tool

###### *app that monitors daily performance of the students*

### Features
- Add classes with number of the batch, start date and end date
- Add students to a class with name and photo 
- Add evaluation for student from inside student page (date, color and remark)
- Button to ask questions to random students, based on a algorithm (for the moment is based on the seed file)
	- Students with status RED have 49% of chance to be asked
	- Students with status YELLOW have 33% of chance to be asked
	- Students with status GREEN have 18% of chance to be asked


### Screenshots
##### Classes
![Classes](http://res.cloudinary.com/tania-dm/image/upload/v1520960137/class_overview_t1zxyp.png "Classes")

##### Class Overview
![Class](http://res.cloudinary.com/tania-dm/image/upload/v1520960137/class_mgzkfw.png "Class")

##### Student Page + Evaluation form
![Student](http://res.cloudinary.com/tania-dm/image/upload/v1520960128/student_v5mm1e.png "Student")

##### Ask random Question
![Question](http://res.cloudinary.com/tania-dm/image/upload/v1520960144/question_jotoae.png "Question")

##### How to run it:
1. you need to have MongoDB running
2. start the back-end server [evaluation-backend](https://github.com/tania-dm/evaluation-backend "evaluation-backend")
3. run the seed file with **yarn run seed**
4. run **yarn start** from a terminal inside the project root folder
