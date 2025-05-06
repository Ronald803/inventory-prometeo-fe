import { Row } from "antd";
import ProductsHeader from "../Products/ProductsHeader";
import ProductTable from "../Products/ProductTable";
import { useIsLogged } from "../../hooks/useIsLogged";

function ProductView() {
  useIsLogged();
  return (
    <div>
      <Row>
        <ProductsHeader />
      </Row>
      <Row>
        <ProductTable />
      </Row>
    </div>
  );
}

export default ProductView;
