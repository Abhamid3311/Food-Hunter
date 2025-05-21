import Swal from "sweetalert2";

export const successAlert = (message = "Operation successful!") => {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: message,
    timer: 2000,
    showConfirmButton: false,
  });
};

export const errorAlert = (message = "Something went wrong!") => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};

export const confirmAlert = async (message = "Are you sure?") => {
  const result = await Swal.fire({
    title: message,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
  });

  return result.isConfirmed;
};
