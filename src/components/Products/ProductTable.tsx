import React from "react";
import { useFetchProductsQuery } from "../../rtk/backendApi";
import { Table, TableProps } from "antd";
import { ProductType } from "./ProductType";
import { useIsBadToken } from "../../hooks/useIsBadToken";

function ProductTable() {
  const { data: products, error, isError, isLoading } = useFetchProductsQuery();
  useIsBadToken(isLoading, isError, error);
  return (
    <div>
      <Table columns={productColumns} dataSource={products} />
    </div>
  );
}

export default ProductTable;

const productColumns: TableProps<ProductType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Material",
    dataIndex: "material",
    key: "material",
  },
  {
    title: "Size",
    dataIndex: "size",
    key: "size",
  },
];
