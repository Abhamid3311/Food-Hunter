import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { MaterialReactTable } from "material-react-table";

const defaultInitialState = {
  pagination: { pageSize: 10, pageIndex: 0 },
  sorting: [],
  globalFilter: "",
  columnFilters: [],
  grouping: [],
};

const tableStyles = {
  paper: " shadow-xl bg-bgClr w-full h-full p-0", // Reduced padding
  headCell: "bg-primary text-primary-content font-bold text-sm uppercase",
  bodyCell: "border-b border-base-200 text-base-content",
  bodyRow: "hover:bg-base-200 transition-colors",
  searchInput: "input input-bordered w-full max-w-xs mb-2",
  pagination: "join mt-2",
  exportButton: "btn btn-success btn-sm",
  tableContainer: "w-full h-[calc(100vh-200px)] overflow-auto", // Adjusted for navbar/sidebar
};

function ReusableTable({
  columns,
  data,
  initialState = defaultInitialState,
  searchPlaceholder = "Search...",
  isLoading = false,
  error = null,
  onRowClick = null,
  enableExport = true,
}) {
  const memoizedColumns = useMemo(() => columns, [columns]);
  console.log("Table Data:", data); // Debug data

  if (error) {
    return (
      <div className="alert alert-error shadow-lg p-4 w-full h-screen flex items-center justify-center">
        <span>Error: {error.message || "Failed to load data"}</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-4 w-full h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (!memoizedColumns?.length || !data?.length) {
    return (
      <div className="alert alert-info shadow-lg p-4 w-full h-screen flex items-center justify-center">
        <span>No data available</span>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-base-100 p-0">
      <MaterialReactTable
        columns={memoizedColumns}
        data={data}
        enableGlobalFilter
        enableSorting
        enablePagination
        enableColumnResizing
        enableRowSelection
        enableColumnFilters
        enableGrouping
        enableStickyHeader
        enableStickyFooter
        enableVirtualization
        initialState={{
          ...defaultInitialState,
          ...initialState,
        }}
        muiTablePaperProps={{ className: tableStyles.paper }}
        muiTableHeadCellProps={{ className: tableStyles.headCell }}
        muiTableBodyCellProps={{ className: tableStyles.bodyCell }}
        muiTableBodyRowProps={({ row }) => ({
          className: tableStyles.bodyRow,
          onClick: onRowClick ? () => onRowClick(row.original) : undefined,
          style: { cursor: onRowClick ? "pointer" : "default" },
        })}
        muiSearchTextFieldProps={{
          className: tableStyles.searchInput,
          placeholder: searchPlaceholder,
        }}
        muiTableContainerProps={{ className: tableStyles.tableContainer }}
        muiPaginationProps={{
          className: tableStyles.pagination,
          renderItem: (item) => {
            if (item.type === "page") {
              return (
                <button
                  className={`join-item btn ${
                    item.selected ? "btn-primary" : "btn-ghost"
                  } ${item.disabled ? "btn-disabled" : ""}`}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  aria-label={`Page ${item.page}`}
                >
                  {item.page}
                </button>
              );
            }
            if (item.type === "previous" || item.type === "next") {
              return (
                <button
                  className={`join-item btn btn-ghost ${
                    item.disabled ? "btn-disabled" : ""
                  }`}
                  onClick={item.onClick}
                  disabled={item.disabled}
                  aria-label={
                    item.type === "previous" ? "Previous page" : "Next page"
                  }
                >
                  {item.type === "previous" ? "«" : "»"}
                </button>
              );
            }
            return (
              <button
                className={`join-item btn btn-ghost ${
                  item.disabled ? "btn-disabled" : ""
                }`}
                onClick={item.onClick}
                disabled={item.disabled}
                aria-label={item.type}
              >
                {item.type}
              </button>
            );
          },
        }}
        renderTopToolbarCustomActions={
          enableExport
            ? ({ table }) => (
                <button
                  className={tableStyles.exportButton}
                  onClick={() => table.exportData()}
                  aria-label="Export to CSV"
                >
                  Export to CSV
                </button>
              )
            : undefined
        }
      />
    </div>
  );
}

ReusableTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialState: PropTypes.object,
  searchPlaceholder: PropTypes.string,
  isLoading: PropTypes.bool,
  error: PropTypes.instanceOf(Error),
  onRowClick: PropTypes.func,
  enableExport: PropTypes.bool,
};

export default memo(ReusableTable);
