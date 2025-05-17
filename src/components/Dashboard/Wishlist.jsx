import { useMemo } from "react";
import { useGetAllUsersQuery } from "../../redux/api/api";
import ReusableTable from "../utils/table/ReusableTable";

const Wishlist = () => {
  const { data: apiData, isLoading, error } = useGetAllUsersQuery();
  // console.log("API Response:", { apiData, isLoading, error }); // Debug API

  const userColumns = useMemo(
    () => [
      { accessorKey: "id", header: "No.", size: 100 },
      { accessorKey: "name", header: "Name", size: 200, filterFn: "contains" },
      {
        accessorKey: "designation",
        header: "Designation",
        size: 200,
        filterFn: "contains",
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 250,
        Cell: ({ cell }) => (
          <a href={`mailto:${cell.getValue()}`} className="link link-primary">
            {cell.getValue()}
          </a>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
        Cell: ({ cell }) => (
          <span
            className={`badge ${
              cell.getValue() === "active" ? "badge-success" : "badge-error"
            }`}
          >
            {cell.getValue()}
          </span>
        ),
      },
    ],
    []
  );

  // Transform API data to match column structure
  const tableData = useMemo(() => {
    if (apiData?.data) {
      return apiData.data.map((item, index) => ({
        id: index + 1,
        name: item.name?.firstName
          ? `${item.name.firstName} ${item.name.lastName || ""}`
          : item.name || "Unknown",
        email: item.email,
        designation: item.designation,
        status: item.isActive || "Unknown",
      }));
    }
  }, [apiData]);

  return (
    <div className="w-full h-full bg-bgClr flex flex-col">
      <h1 className="text-2xl font-bold mb-4 px-4 pt-4">Wishlist</h1>
      <div className="flex-1 w-full">
        <ReusableTable
          columns={userColumns}
          data={tableData}
          searchPlaceholder="Search users..."
          isLoading={isLoading}
          error={error}
          // onRowClick={(row) => console.log("Row clicked:", row)}
          // enableExport={true}
        />
      </div>
    </div>
  );
};

export default Wishlist;
