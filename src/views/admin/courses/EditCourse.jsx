import React, { useEffect, useState } from "react";
import {
  useGetCourseDetailsQuery,
  useUpdateCourseMutation,
} from "../../../redux/api/CoursesApiSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "components/Loader";

const EditCourseForm = () => {
  const params = useParams();
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
  const { data, refetch, isLoading, isError } = useGetCourseDetailsQuery(
    params.id
  );
  const [updateCourse] = useUpdateCourseMutation();

  const sampleData = {
    name: "Sample Course",
    school: "Sample School",
    term: "1",
    class: "Grade 1",
    content: [
      {
        week: 1,
        type: "video",
        lessons: [
          {
            number: "1",
            title: "Introduction",
            content: "Introduction to the course",
          },
          { number: "2", title: "Lesson 1", content: "Content of lesson 1" },
        ],
        questions: [
          {
            text: "Question 1",
            options: ["Option 1", "Option 2"],
            correctOption: 0,
          },
          {
            text: "Question 2",
            options: ["Option A", "Option B", "Option C"],
            correctOption: 1,
          },
        ],
      },
      {
        week: 2,
        type: "text",
        lessons: [
          { number: "1", title: "Lesson 2", content: "Content of lesson 2" },
          { number: "2", title: "Lesson 3", content: "Content of lesson 3" },
        ],
        questions: [
          {
            text: "Question 3",
            options: ["Option X", "Option Y"],
            correctOption: 0,
          },
        ],
      },
    ],
  };

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
  useEffect(() => {
    // Check if data exists and is not empty
    if (data) {
      console.log("rtkdata", data.data);
      // Deep copy of the data received from the database
      const newData = JSON.parse(JSON.stringify(data.data));
      // Assuming data has a structure similar to courseData
      // You might need to adjust this based on the actual structure of your data
      setCourseData(newData);
    }
  }, [data]);

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

    // Deep copy of content array
    const newData = [...courseData.content];

    if (field === "class" || field === "term") {
      // If field is class or term, directly update courseData
      setCourseData({ ...courseData, [field]: value });
    } else {
      if (nestedField === null) {
        // If no nested field, directly update the field
        newData[index][field] = value;
      } else if (nestedIndex === null) {
        // If no nested index, update the nested field
        newData[index][field][nestedField] = value;
      } else {
        if (nestedField === "options") {
          // If nested field is options, update options array
          newData[index][field][nestedIndex][nestedField][nestedindex1] = value;
        } else {
          // Update other nested fields
          newData[index][field][nestedField][nestedIndex] = value;
        }
      }
      // Update courseData with new content array
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
          type: "video",
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

  const handleUpdateCourse = async (event) => {
    event.preventDefault();
    try {
      if (!courseData) {
        throw new Error("No data provided.");
      }
      // Update existing teacher
      await updateCourse({
        id: params.id,
        data: courseData,
      });
      refetch(); // Assuming refetch is a function to refetch the course data
      toast.success("Course updated successfully");
    } catch (err) {
      console.error("Error:", err);
      toast.error(err.message || err?.data?.message);
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return toast.error(isError);
  }
  return (
    <div className="mt-20 rounded-lg border bg-white p-8 shadow-md ">
      <h2 className="mb-4 text-xl font-bold">Create Course</h2>
      <form>
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
                      <textarea
                        className="mx-2 mt-1 rounded-md border border-orange-300 p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500"
                        required
                        type="text"
                        placeholder="Question text"
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
          className="hover:bg-gold-600 mt-4 mr-2 rounded bg-gold py-2 px-4 font-semibold text-white"
        >
          Add Week
        </button>
        <button
          type="submit"
          onClick={handleUpdateCourse}
          className="hover:bg-gold-600 mt-4 rounded bg-green-400 py-2 px-4 font-semibold text-white"
        >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourseForm;
