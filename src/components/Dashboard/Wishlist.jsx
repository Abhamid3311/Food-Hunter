import { useMemo } from 'react';
import { useGetAllUsersQuery } from '../../redux/api/api';
import ReusableTable from '../utils/table/ReusableTable';

const Wishlist = () => {
  const { data: apiData, isLoading, error } = useGetAllUsersQuery();
  console.log('API Response:', { apiData, isLoading, error }); // Debug API

  const columns = useMemo(
    () => [
      { accessorKey: 'id', header: 'ID', size: 100 },
      { accessorKey: 'name', header: 'Name', size: 200, filterFn: 'contains' },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 250,
        Cell: ({ cell }) => (
          <a href={`mailto:${cell.getValue()}`} className="link link-primary">
            {cell.getValue()}
          </a>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
        Cell: ({ cell }) => (
          <span
            className={`badge ${
              cell.getValue() === 'Active' ? 'badge-success' : 'badge-error'
            }`}
          >
            {cell.getValue()}
          </span>
        ),
      },
    ],
    []
  );

  const staticData = useMemo(
    () => [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
      // Add more rows to test virtualization
      ...Array.from({ length: 20 }, (_, i) => ({
        id: i + 3,
        name: `User ${i + 3}`,
        email: `user${i + 3}@example.com`,
        status: i % 2 === 0 ? 'Active' : 'Inactive',
      })),
    ],
    []
  );

  // Transform API data to match column structure
  const tableData = useMemo(() => {
    if (apiData?.data) {
      return apiData.data.map((item) => ({
        id: item.id,
        name: item.name?.firstName
          ? `${item.name.firstName} ${item.name.lastName || ''}`
          : item.name || 'Unknown',
        email: item.email,
        status: item.status || 'Unknown',
      }));
    }
    return staticData;
  }, [apiData, staticData]);

  return (
    <div className="w-full h-screen bg-bgClr flex flex-col">
      <h1 className="text-2xl font-bold mb-4 px-4 pt-4">Wishlist</h1>
      <div className="flex-1 w-full">
        <ReusableTable
          columns={columns}
          data={tableData}
          searchPlaceholder="Search users..."
          isLoading={isLoading}
          error={error}
          onRowClick={(row) => console.log('Row clicked:', row)}
          enableExport={true}
        />
      </div>
    </div>
  );
};

export default Wishlist;