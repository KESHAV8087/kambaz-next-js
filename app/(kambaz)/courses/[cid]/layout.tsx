import db from "../../database";
import Breadcrumb from "./Breadcrumb";
import CourseNavigation from "./CourseNavigation";

export default async function CoursesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const course = db.courses.find((c) => c._id === cid);
  return (
    <div id="wd-courses">
      <Breadcrumb courseName={course ? course.name : "Course not found"} />
      <hr className="my-3" />
      <div className="flex gap-6">
        <CourseNavigation cid={cid} />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
