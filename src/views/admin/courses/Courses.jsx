import React, { useEffect, useState } from "react";
import { useCreateCourseMutation } from "../../../redux/api/CoursesApiSlice";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { uploadFileToS3 } from "utils/aws";

const CourseForm = () => {
  const [courseData, setCourseData] = useState({
    name: "",
    school: "65d8862c07e5e34e0477d8d4",
    term: "",
    class: "",
    type: "video",

    content: [
      {
        week: 1,
        lessons: [{ number: "", title: "", content: "" }],
        questions: [{ text: "", options: ["", ""], correctOption: 0 }],
      },
    ],
  });
  const classOptions = [
    "KG 1",
    "KG 2",
    "Nursery 1",
    "Nursery 2",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "JSS 1",
    "JSS 2",
    "JSS 3",
    "SSS 1",
    "SSS 2",
    "SSS 3",
  ];

  const termOptions = ["1", "2", "3"];

  const [courseCreate, { isLoading }] = useCreateCourseMutation();
  const handleInputChange = (
    index,
    field,
    value,
    nestedField = null,
    nestedIndex = null,
    nestedindex1 = null
  ) => {
    console.log("Index:", index);
    console.log("Field:", field);
    console.log("Nested Field:", nestedField);
    console.log("Nested Index:", nestedIndex);
    const newData = [...courseData.content];
    if (field === "class" || field === "term") {
      setCourseData({ ...courseData, [field]: value });
    } else {
      if (nestedField === null) {
        newData[index][field] = value;
      } else if (nestedIndex === null) {
        newData[index][field][nestedField] = value;
      } else {
        if (nestedField === "options") {
          newData[index][field][nestedIndex][nestedField][nestedindex1] = value;
        } else {
          newData[index][field][nestedField][nestedIndex] = value;
        }
      }
      setCourseData({ ...courseData, content: newData });
    }
    console.log(courseData);
  };

  const handleAddOption = (index, questionIndex) => {
    console.log(courseData);

    const newData = [...courseData.content];
    newData[index].questions[questionIndex].options.push("");
    // Add an empty option
    setCourseData({ ...courseData, content: newData });
  };
  const handleRemoveOption = (weekIndex, questionIndex, optionIndex) => {
    const newData = [...courseData.content];
    newData[weekIndex].questions[questionIndex].options.splice(optionIndex, 1);
    setCourseData({ ...courseData, content: newData });
  };

  const handleAddWeek = () => {
    setCourseData((prevState) => ({
      ...prevState,
      content: [
        ...prevState.content,
        {
          week: prevState.content.length + 1,

          lessons: [{ number: "", title: "", content: "" }],
          questions: [{ text: "", options: ["", ""], correctOption: 0 }],
        },
      ],
    }));
  };

  const handleAddLesson = (index) => {
    const newData = [...courseData.content];
    newData[index].lessons.push({ number: "", title: "", content: "" });
    setCourseData({ ...courseData, content: newData });
  };

  const handleAddQuestion = (index) => {
    const newData = [...courseData.content];
    newData[index].questions.push({
      text: "",
      options: ["", ""], // Ensure options array is initialized
      correctOption: 0,
    });
    setCourseData({ ...courseData, content: newData });
  };

  const [expandedWeeks, setExpandedWeeks] = useState({});

  const handleToggleWeek = (index) => {
    setExpandedWeeks((prevExpandedWeeks) => ({
      ...prevExpandedWeeks,
      [index]: !prevExpandedWeeks[index],
    }));
  };

  const handleRemoveField = (index, field) => {
    const newData = [...courseData.content];
    newData[index][field.split("[")[0]].splice(index, 1);
    setCourseData({ ...courseData, content: newData });
  };
  const handleRemoveWeek = (index) => {
    const newData = [...courseData.content];
    newData.splice(index, 1);
    setCourseData({ ...courseData, content: newData });
  };
  const handleRemoveQuestion = (weekIndex, questionIndex) => {
    const newData = [...courseData.content];
    newData[weekIndex].questions.splice(questionIndex, 1);
    setCourseData({ ...courseData, content: newData });
  };
  const toggleQuestionType = (weekIndex, questionIndex) => {
    const updatedContent = [...courseData.content];
    updatedContent[weekIndex].questions[questionIndex].isFile =
      !updatedContent[weekIndex].questions[questionIndex].isFile;
    setCourseData({ ...courseData, content: updatedContent });
  };

  const handleFileChange = (event, weekIndex, questionIndex) => {
    const file = event.target.files[0];
    const updatedContent = [...courseData.content];
    updatedContent[weekIndex].questions[questionIndex].file = file;
    setCourseData({ ...courseData, content: updatedContent });
  };
  useEffect(() => {
    console.log("courseData upload", courseData);
  }, [courseData]);
  const handleUpload = async () => {
    // Upload files before submitting course data
    const UploadingToast = toast.loading("uploading data");
    const updatedContent = await Promise.all(
      courseData.content.map(async (week) => {
        const updatedLessons = await Promise.all(
          week.lessons.map(async (lesson) => {
            if (lesson.content instanceof File) {
              const fileUrl = await uploadFileToS3(lesson.content);

              return { ...lesson, content: fileUrl };
            }
            return lesson;
          })
        );

        const updatedQuestions = await Promise.all(
          week.questions.map(async (question) => {
            if (question.isFile && question.text) {
              const fileUrl = await uploadFileToS3(question.text);
              return {
                ...question,
                text: fileUrl,
              };
            }
            return question;
          })
        );
        toast.dismiss(UploadingToast);

        return {
          ...week,
          lessons: updatedLessons,
          questions: updatedQuestions,
        };
      })
    );
    toast.success("uploaded successfully kindly create course");
    // Update courseData with uploaded file URLs
    setCourseData({ ...courseData, content: updatedContent });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Now submit the updated courseData

    try {
      const res = await courseCreate(courseData).unwrap();
      toast.success("Course created successfully");
    } catch (err) {
      toast.error(err.message || err?.data?.message);
      console.error("Error:", err);
    }
  };
  return (
    <div className="rounded-lg border bg-white p-8 shadow-md ">
      <h2 className="mb-4 text-xl font-bold">Create Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex gap-3">
          <div>
            <label
              htmlFor="name"
              className="text-sm block font-medium text-gray-700"
            >
              Course Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={courseData.name}
              onChange={(e) =>
                setCourseData({ ...courseData, name: e.target.value })
              }
              className="mt-1 w-full rounded-md border p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-sm block font-medium text-gray-700"
            >
              Term
            </label>
            <select
              id="term"
              name="term"
              value={courseData.term}
              onChange={(e) => handleInputChange(null, "term", e.target.value)}
              className="mt-1 w-full rounded-md border p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
            >
              <option value="">Select Term</option>
              {termOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-sm block font-medium text-gray-700"
            >
              Class
            </label>
            <select
              id="class"
              name="class"
              value={courseData.class}
              onChange={(e) => handleInputChange(null, "class", e.target.value)}
              className="mt-1 w-full rounded-md border p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
            >
              <option value="">Select Class</option>
              {classOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        {courseData.content.map((week, index) => (
          <div key={index} className="mb-6">
            <h3
              className="mb-2 cursor-pointer text-lg font-bold"
              onClick={() => handleToggleWeek(index)}
            >
              Week {week.week}
            </h3>
            {expandedWeeks[index] && (
              <>
                {" "}
                {week.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="mb-4">
                    <input
                      className="mx-2 mt-1 rounded-md border border-orange-300 p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
                      required
                      type="text"
                      placeholder="Lesson number"
                      value={lesson.number}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "lessons",
                          e.target.value,
                          lessonIndex,
                          "number"
                        )
                      }
                    />
                    <input
                      className="mx-2 mt-1 rounded-md border border-orange-300 p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
                      required
                      type="text"
                      placeholder="Lesson title"
                      value={lesson.title}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "lessons",
                          e.target.value,
                          lessonIndex,
                          "title"
                        )
                      }
                    />
                    <input
                      className="mx-2 mt-1 rounded-md border border-orange-300 p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
                      required
                      type="text"
                      placeholder="Lesson content"
                      value={lesson.content}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "lessons",
                          e.target.value,
                          lessonIndex,
                          "content"
                        )
                      }
                    />{" "}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,.txt,.mp4"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        // Update the lesson content with the selected file
                        const updatedContent = [...courseData.content];
                        updatedContent[index].lessons[lessonIndex].content =
                          file;
                        setCourseData({
                          ...courseData,
                          content: updatedContent,
                        });
                      }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleRemoveField(index, `lessons[${lessonIndex}]`)
                      }
                      className="text-sm text-red-600"
                    >
                      Remove Lesson
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddLesson(index)}
                  className="text-sm text-blue-600"
                >
                  + Add Lesson
                </button>
                <hr className="my-2 w-full border-solid border-gold" />
                {week.questions.map((question, questionIndex) => (
                  <div>
                    <div key={questionIndex} className="mb-4 flex">
                      {question.isFile ? (
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.mp4"
                          // onChange={(e) =>
                          //   handleFileChange(e, index, questionIndex)
                          // }
                          onChange={(e) => {
                            const file = e.target.files[0];
                            // Update the lesson content with the selected file
                            const updatedContent = [...courseData.content];
                            updatedContent[index].questions[
                              questionIndex
                            ].text = file;

                            setCourseData({
                              ...courseData,
                              content: updatedContent,
                            });
                          }}
                        />
                      ) : (
                        <textarea
                          placeholder="Enter question text"
                          value={question.text}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "questions",
                              e.target.value,
                              questionIndex,
                              "text"
                            )
                          }
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => toggleQuestionType(index, questionIndex)}
                      >
                        {question.isFile ? "Switch to text" : "Switch to file"}
                      </button>
                      <div>
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex}>
                            <input
                              className="mx-2 mt-1 rounded-md border border-orange-300 p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
                              required
                              type="text"
                              placeholder={`Option ${optionIndex + 1}`}
                              value={option}
                              onChange={(e) =>
                                handleInputChange(
                                  index,
                                  "questions",
                                  e.target.value,
                                  "options",
                                  questionIndex,
                                  optionIndex
                                )
                              }
                            />
                            <button
                              type="button"
                              onClick={() =>
                                handleRemoveOption(
                                  index,
                                  questionIndex,
                                  optionIndex
                                )
                              }
                              className="text-sm text-red-600"
                            >
                              Remove Option
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Other question fields */}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAddOption(index, questionIndex)}
                    >
                      + Add Option
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveQuestion(index, questionIndex)}
                      className="text-sm  mx-2 text-red-600"
                    >
                      Remove Question
                    </button>

                    <input
                      max={10}
                      min={1}
                      type="number"
                      placeholder="Correct Option"
                      value={question.correctOption}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "questions",
                          parseInt(e.target.value),
                          questionIndex,
                          "correctOption"
                        )
                      }
                    />
                  </div>
                ))}
                <button
                  onClick={() => handleAddQuestion(index)}
                  className="text-sm rounded-lg bg-blue p-2 text-white"
                >
                  + Add Question
                </button>
              </>
            )}
            <hr className="my-2 w-full border-solid border-gold" />

            <button
              type="button"
              onClick={() => handleRemoveWeek(index)}
              className="text-sm text-red-600"
            >
              Remove Week
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddWeek}
          className="mt-4 mr-2 rounded bg-gold py-2 px-4 font-semibold text-white hover:bg-gold"
        >
          Add Week
        </button>{" "}
        <button
          type="button"
          onClick={handleUpload}
          className="mr-2 mt-4 rounded bg-cyan-400 py-2 px-4 font-semibold text-white hover:bg-gold"
        >
          Upload files
        </button>
        <button
          type="submit"
          className="hover:bg-gold-600 mt-4 rounded bg-green-400 py-2 px-4 font-semibold text-white"
        >
          Create Course
        </button>
      </form>
    </div>
  );
};

export default CourseForm;
