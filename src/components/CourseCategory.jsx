import { PiStudentDuotone } from "react-icons/pi";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const Categories = ({ categories }) => {
  const categoryIcons = {
    "Credit Courses": (
      <FaFileInvoiceDollar className="text-4xl text-blue-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
    Tutoring: (
      <PiStudentDuotone className="text-4xl text-purple-500 transition-transform duration-300 ease-in-out group-hover:scale-110" />
    ),
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/beautiful-young-woman-studying-using-laptop.jpg')",
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 clip-path-polygon"></div>

      <section className="relative container mx-auto py-12 px-10 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white bg-opacity-90 hover:bg-opacity-100 text-black"
            >
              <div className="mb-4">{categoryIcons[category.name]}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
