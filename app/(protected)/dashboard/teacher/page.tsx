// import ClassesCompletionChart from "@/components/ui/teacher-dashboard/classesCompletionChart";
// import ProgressChart from "@/components/ui/teacher-dashboard/progressChart";
// import NotesList from "@/components/ui/teacher-dashboard/subjecNote";
// import TeacherCourseCard from "@/components/ui/teacher-dashboard/teacherCourseCard";
import AddLessonButton from "@/components/ui/teacher-dashboard/addLessonButton";
import dynamic from "next/dynamic";

import {
  FaHome,
  FaBook,
  FaCalendarAlt,
  FaVideo,
  FaClipboard,
  FaChalkboardTeacher,
  FaPenFancy,
  FaGraduationCap,
  FaCertificate,
  FaCog,
} from "react-icons/fa";

const ClassesCompletionChart = dynamic(
  () => import("@/components/ui/teacher-dashboard/classesCompletionChart"),
  { ssr: false }
);
const ProgressChart = dynamic(
  () => import("@/components/ui/teacher-dashboard/progressChart"),
  { ssr: false }
);
const NotesList = dynamic(
  () => import("@/components/ui/teacher-dashboard/subjecNote"),
  { ssr: false }
);
const TeacherCourseCard = dynamic(
  () => import("@/components/ui/teacher-dashboard/teacherCourseCard"),
  { ssr: false }
);

const TeacherDashboard = () => {
  const menuItems = [
    { name: "Home", icon: FaHome },
    { name: "Subject", icon: FaBook },
    { name: "Schedule", icon: FaCalendarAlt },
    { name: "Live Class", icon: FaVideo },
    { name: "Assignment", icon: FaClipboard },
    { name: "Course Teachers", icon: FaChalkboardTeacher },
    { name: "Exam", icon: FaPenFancy },
    { name: "Result", icon: FaGraduationCap },
    { name: "Certificate", icon: FaCertificate },
    { name: "Settings", icon: FaCog },
  ];

  return (
    <section className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="flex h-[90vh] max-w-[1400px] w-full mx-auto rounded-lg shadow-lg">
        {/* Left Sidebar */}
        <aside className="w-64 bg-gray-50 p-6 space-y-4 rounded-l-lg drop-shadow-lg">
          <nav>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded"
              >
                <item.icon className="mr-3" />
                {item.name}
              </a>
            ))}
          </nav>
        </aside>

        <div className="flex-1 px-8 text-black overflow-y-auto">
          {/* Headline */}
          <div className="flex justify-between bg-white py-3 px-2 rounded-lg">
            <div className="flex items-center">
              <div className="w-4 h-8 rounded-md bg-[#F8C7B0] mr-4"></div>
              <h1 className="text-xl font-bold">Design Science</h1>
            </div>
            <AddLessonButton></AddLessonButton>
          </div>

          {/* Course Card */}
          <div className="flex gap-2 mt-2">
            <TeacherCourseCard />
            <TeacherCourseCard />
            <TeacherCourseCard />
          </div>

          <div>
            <ClassesCompletionChart></ClassesCompletionChart>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-72 p-6 space-y-4 rounded-r-lg overflow-y-auto">
          <ProgressChart />

          <NotesList />
        </div>
      </div>
    </section>
  );
};

export default TeacherDashboard;
