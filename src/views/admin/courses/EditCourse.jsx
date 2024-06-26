import React, { useEffect, useState } from "react";
import {
  useGetCourseDetailsQuery,
  useUpdateCourseMutation,
} from "../../../redux/api/CoursesApiSlice";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "components/Loader";
import { deleteFileFromS3 } from "utils/aws";
import { useGetUserDetailsQuery } from "../../../redux/api/usersApiSlice";
import { useSelector } from "react-redux";
import { uploadFileToS3 } from "utils/aws";
import { MdPlayCircle } from "react-icons/md";

const EditCourseForm = () => {
  const params = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  const { data: user, isError: isUsererror } = useGetUserDetailsQuery(
    userInfo._id
  );
  const [uploadProgress, setUploadProgress] = useState(0);

  const [totalUploadSize, setTotalUploadSize] = useState(0);

  const [courseData, setCourseData] = useState({
    name: "",
    school: "65d8862c07e5e34e0477d8d4",
    term: "",
    class: "",
    type: "video",
    uploadSize: "",
    content: [
      {
        week: 1,
        lessons: [{ number: "", title: "", content: "" }],
        questions: [{ text: "", options: ["", ""], correctOption: 0 }],
      },
    ],
  });
  const [deletedSize, setDeletedsize] = useState(0);
  const [uploadSize, setUploadsize] = useState(0);

  const { data, refetch, isLoading, isError } = useGetCourseDetailsQuery(
    params.id
  );
  const [updateCourse] = useUpdateCourseMutation();
  const [videoUrl, setVideoUrl] = useState(null);
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

  const handleRemoveField = async (index, field) => {
    const newData = [...courseData.content];
    const fieldName = field.split("[")[0]; // Extract the field name (e.g., "lessons")
    const lessonIndex = parseInt(field.match(/\[(\d+)\]/)[1], 10); // Extract the lesson index
    const fieldToDelete = newData[index][fieldName].slice(
      lessonIndex,
      lessonIndex + 1
    )[0].content;
    if (fieldToDelete.includes("https://")) {
      const urlParts = fieldToDelete.split("/");
      // The last part contains the file key
      const fileKey = decodeURIComponent(urlParts[urlParts.length - 1]);
      console.log("fieldToDelete", fieldToDelete);
      const IsDeleted = await deleteFileFromS3(fileKey);
      if (IsDeleted) {
        newData[index][fieldName].splice(lessonIndex, 1); // Remove the specified lesson
        setDeletedsize(deletedSize + IsDeleted.size);
        setCourseData({ ...courseData, content: newData });
      }
    } else {
      newData[index][fieldName].splice(lessonIndex, 1); // Remove the specified lesson
      setCourseData({ ...courseData, content: newData });
    }
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
  const handleUpload = async () => {
    const result = handleSizecheck();
    console.log("upload size", result);

    // Upload files before submitting course data
    if (
      user &&
      user.data.user.usedSpace + result < user.data.user.availableSpace
    ) {
      const UploadingToast = toast.loading("uploading data");
      const updatedContent = await Promise.all(
        courseData.content.map(async (week) => {
          const updatedLessons = await Promise.all(
            week.lessons.map(async (lesson) => {
              if (lesson.content instanceof File) {
                const fileUrl = await uploadFileToS3(
                  lesson.content,
                  (progress) => {
                    setUploadProgress((progress.loaded / progress.total) * 100);
                  }
                );

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
      setUploadsize(result);
      setCourseData({
        ...courseData,
        content: updatedContent,
      });
    } else {
      toast.error(
        `Strorage Quota Limit Exceeded. contact LearnNova admin ${result}MB`
      );
    }
  };
  const handleSizecheck = () => {
    let cumulativeSizeMB = 0; // Initialize with zero for size check

    // Iterate through course data to calculate file sizes
    courseData.content.forEach((week) => {
      week.lessons.forEach((lesson) => {
        if (lesson.content instanceof File) {
          // Calculate file size in MB and add it to the cumulative size
          const fileSizeMB = lesson.content.size / (1024 * 1024); // Convert bytes to megabytes
          cumulativeSizeMB += fileSizeMB;
        }
      });

      week.questions.forEach((question) => {
        if (question.isFile && question.text instanceof File) {
          // Calculate file size in MB and add it to the cumulative size
          const fileSizeMB = question.text.size / (1024 * 1024); // Convert bytes to megabytes
          cumulativeSizeMB += fileSizeMB;
        }
      });
    });

    // Update totalUploadSize state with the cumulative size in MB (optional)
    setTotalUploadSize(cumulativeSizeMB);
    // setCourseData({ ...courseData, uploadSize: cumulativeSizeMB });

    // Return the cumulative size in MB
    return cumulativeSizeMB;
  };
  const handleUpdateCourse = async (event) => {
    event.preventDefault();
    try {
      if (!courseData) {
        throw new Error("No data provided.");
      }

      const updatedCourseData = {
        ...courseData,
        uploadSize: uploadSize - deletedSize,
      };

      // Now you can use updatedCourseData in your updateCourse function
      const result = await updateCourse({
        id: params.id,
        data: updatedCourseData,
      });

      console.log("result", result);
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
  const handleplay = (url) => {
    setVideoUrl(url);
  };
  return (
    <div className="mt-20 rounded-lg border bg-white p-8 shadow-md ">
      <h2 className="mb-4 text-xl font-bold">Edit Course</h2>
      {videoUrl ? (
        videoUrl.includes(".mp4") ? (
          <video
            controls
            controlsList="nodownload"
            className="rounded-lg sm:max-h-64 sm:w-1/3"
            preload="metadata"
            src={videoUrl}
          />
        ) : (
          <embed src={videoUrl} />
        )
      ) : null}
      <form onSubmit={handleUpdateCourse}>
        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
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
              required
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
                  <div
                    key={lessonIndex}
                    className="mb-4 flex flex-col items-center sm:flex-row"
                  >
                    <input
                      className="mt-1 rounded-md border border-orange-300 p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500 sm:mx-2"
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
                      className="mt-1 rounded-md border border-orange-300 p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500 sm:mx-2"
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
                    <MdPlayCircle
                      size={32}
                      className="m-2 cursor-pointer text-gold"
                      onClick={() => handleplay(lesson.content)}
                    />
                    {/* <input
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
                    /> */}
                    <input
                      className=" w-full sm:w-auto"
                      type="file"
                      accept={
                        userInfo.role == "admin"
                          ? ".pdf,.doc,.docx,.txt,.mp4"
                          : ".pdf,.doc,.docx,.txt"
                      }
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
                  <div className="mb-2">
                    <div
                      key={questionIndex}
                      className="mb-4 flex flex-col sm:flex-row"
                    >
                      {question.isFile && userInfo.role === "admin" ? (
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
                          className="rounded-lg border-2 border-gold p-2"
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
                        className=" p-2 text-gold"
                        onClick={() => toggleQuestionType(index, questionIndex)}
                      >
                        {userInfo.role === "admin"
                          ? question.isFile
                            ? "Text"
                            : "File"
                          : null}
                      </button>
                      <div>
                        {question.options.map((option, optionIndex) => (
                          <div key={optionIndex}>
                            <input
                              className="mt-1 rounded-md border border-orange-300 p-2 focus:border-gold focus:outline-none focus:ring focus:ring-yellow-500 sm:mx-2"
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
                      className="mb-2 rounded-lg bg-green-300 p-2 text-white"
                      type="button"
                      onClick={() => handleAddOption(index, questionIndex)}
                    >
                      + Add Option
                    </button>
                    <span className="p-2 text-green-700">Correct Option</span>
                    <input
                      max={10}
                      min={1}
                      type="number"
                      required
                      placeholder="Correct Option"
                      className="rounded-lg border-2 border-gold"
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
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveQuestion(index, questionIndex)
                        }
                        className="text-sm rounded-lg bg-red-500 p-2 text-white"
                      >
                        Remove Question
                      </button>
                    </div>
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
          Upload files{" "}
          {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
        </button>
        <button
          type="submit"
          className="hover:bg-gold-600 mt-4 rounded bg-green-400 py-2 px-4 font-semibold text-white"
        >
          Update Course
        </button>
      </form>
    </div>
  );
};

export default EditCourseForm;
