// components/ProductUpdate.jsx
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useGetProductsByIdQuery,
  useUpdateProductOnDBMutation,
} from "../../redux/api/api";
import { errorAlert, successAlert } from "../utils/alerts";

const ProductUpdate = () => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useGetProductsByIdQuery(id);
  const [updateProduct, { isLoading: isUpdating }] =
    useUpdateProductOnDBMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product?.data || {}, // Pre-fill with existing data
  });

  // handel Update Product Form
  const onSubmit = async (data) => {
    try {
      const updatedData = {
        ...data,
        price: Number(data.price) || 0,
        rating: Number(data.rating) || 0,
      };

      await updateProduct({
        productID: id,
        product: updatedData,
      }).unwrap();

      successAlert("Product updated successfully!");
    } catch (err) {
      console.log(err);
      errorAlert(`Failed to update product`);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            defaultValue={product?.data?.name}
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block">Category</label>
          <input
            {...register("category", { required: "Category is required" })}
            defaultValue={product?.data?.category}
            className="input input-bordered w-full"
          />
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>

        <div>
          <label className="block">Type</label>
          <input
            {...register("type", { required: "Type is required" })}
            defaultValue={product?.data?.type}
            className="input input-bordered w-full"
          />
          {errors.type && <p className="text-red-500">{errors.type.message}</p>}
        </div>

        <div>
          <label className="block">Price</label>
          <input
            {...register("price", { required: "Price is required" })}
            type="number"
            step="0.01"
            defaultValue={product?.data?.price}
            className="input input-bordered w-full"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block">Rating</label>
          <input
            {...register("rating", { min: 0, max: 5 })}
            type="number"
            step="0.1"
            defaultValue={product?.data?.rating}
            className="input input-bordered w-full"
          />
          {errors.rating && (
            <p className="text-red-500">{errors.rating.message}</p>
          )}
        </div>

        <div>
          <label className="block">Description</label>
          <input
            {...register("description")}
            defaultValue={product?.data?.description}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block">Image URL</label>
          <input
            {...register("image", { required: "Image URL is required" })}
            defaultValue={product?.data?.image}
            className="input input-bordered w-full"
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        <div>
          <label className="block">Ingredients</label>
          <input
            {...register("ingredients")}
            defaultValue={product?.data?.ingredients}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block">Status</label>
          <select
            {...register("isActive")}
            defaultValue={product?.data?.isActive}
            className="select select-bordered w-full"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-primaryRed text-white text-md lg:text-lg px-2 py-1.5 rounded-md font-bold shadow-md hover:shadow-lg transition-shadow"
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdate;
