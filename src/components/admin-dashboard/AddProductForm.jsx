import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus, FaTimes } from "react-icons/fa";

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data); // Replace with API call or state update
    setIsModalOpen(false);
    reset(); // Reset form after submission
  };

  return (
    <div className="p-4">
      {/* Button to Open Modal */}
      <button
        className=" bg-primaryRed text-white text-md lg:text-lg px-2 py-1.5 rounded-md font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow"
        onClick={() => setIsModalOpen(true)}
      >
        <FaPlus /> Add Product
      </button>

      {/* Modal */}
      {isModalOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-2xl bg-white rounded-lg p-6 relative">
            {/* Close Button */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute top-4 right-4 text-secondaryGray hover:text-red-500"
              onClick={() => {
                setIsModalOpen(false);
                reset();
              }}
            >
              <FaTimes />
            </button>
            <h3 className="font-bold text-xl text-secondaryGray border-b pb-2">
              Add New Product
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Product Name */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-secondaryGray">
                  Product Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter product name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-secondaryGray">
                  Category
                </label>
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  className="select select-bordered w-full mt-1"
                >
                  <option value="">Select a category</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Starter">Starter</option>
                  <option value="Beverage">Beverage</option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.category.message}
                  </p>
                )}
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-medium text-secondaryGray">
                  Type
                </label>
                <select
                  {...register("type", { required: "Type is required" })}
                  className="select select-bordered w-full mt-1"
                >
                  <option value="">Select a type</option>
                  <option value="Food">Food</option>
                  <option value="Drink">Drink</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Burget">Burget</option>
                  <option value="Biriyani">Biriyani</option>
                </select>
                {errors.type && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.type.message}
                  </p>
                )}
              </div>

              {/* Price */}
              <div className="w-full">
                <label className="block text-sm font-medium text-secondaryGray">
                  Price (TK)
                </label>
                <input
                  {...register("price", {
                    required: "Price is required",
                    min: { value: 0, message: "Price must be positive" },
                  })}
                  type="number"
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter price"
                />
                {errors.price && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Rating */}
              <div className="w-full">
                <label className="block text-sm font-medium text-secondaryGray">
                  Rating
                </label>
                <input
                  {...register("rating", {
                    required: "Rating is required",
                    min: { value: 0, message: "Rating must be at least 0" },
                    max: { value: 5, message: "Rating cannot exceed 5" },
                  })}
                  type="number"
                  step="0.1"
                  className="input input-bordered w-full mt-1"
                  placeholder="0-5"
                />
                {errors.rating && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.rating.message}
                  </p>
                )}
              </div>

              {/* Is Active */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-secondaryGray">
                  Status
                </label>
                <select
                  {...register("isActive", { required: "Status is required" })}
                  className="select select-bordered w-full mt-1"
                >
                  <option value="">Select status</option>
                  <option value="active">In Stock</option>
                  <option value="inactive">Out of Stock</option>
                </select>
                {errors.isActive && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.isActive.message}
                  </p>
                )}
              </div>

              {/* Image Link */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-secondaryGray">
                  Image Link
                </label>
                <input
                  {...register("imageLink", {
                    required: "Image link is required",
                    pattern: {
                      value: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: "Enter a valid URL",
                    },
                  })}
                  type="url"
                  className="input input-bordered w-full mt-1"
                  placeholder="Enter image URL"
                />
                {errors.imageLink && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.imageLink.message}
                  </p>
                )}
              </div>

              {/* Ingredients */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-secondaryGray">
                  Ingredients
                </label>
                <textarea
                  {...register("ingredients", {
                    required: "Ingredients are required",
                  })}
                  className="textarea textarea-bordered w-full mt-1"
                  placeholder="Enter ingredients (e.g., tomato, cheese)"
                  rows="2"
                />
                {errors.ingredients && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.ingredients.message}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-secondaryGray">
                  Description
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="textarea textarea-bordered w-full mt-1"
                  placeholder="Enter product description"
                  rows="3"
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="col-span-2 modal-action flex justify-end gap-2 mt-4">
                <button
                  type="submit"
                  className="bg-primaryRed   text-white text-md lg:text-lg px-4 py-1 rounded-md font-bold shadow-md hover:shadow-lg transition-shadow"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-outline px-6"
                  onClick={() => {
                    setIsModalOpen(false);
                    reset();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setIsModalOpen(false)}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
};

export default AddProductForm;
