import clsx from "clsx";
import CategoryFiveSingle from "../../components/category/CategoryFiveSingle";
import categoryData from "../../data/category/category-five.json";

const CategoryFiveGrid = ({ spaceBottomClass }) => {
  return (
    <div className={clsx("category-grid-area", spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {categoryData?.map((single, key) => (
            <div className="col-lg-4 col-md-6 mb-30" key={key}>
              <CategoryFiveSingle data={single} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFiveGrid;
