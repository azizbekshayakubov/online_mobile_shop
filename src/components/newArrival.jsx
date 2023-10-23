/* eslint-disable react/jsx-key */
import { PRODUCTS1 } from "./products";

const NewArrival = () => {
  return (
    <>
      <div className="row my-4">
        {PRODUCTS1.slice(1, 5).map((product) => (
          <div className="col-3">
            <div key={product.id}>
              <div className="card h-100 m-auto p-2">
                <img
                  src={product.image}
                  alt=""
                  className="card-img-top img-fluid m-auto p-3"
                />
                <div className="card-details">
                  <div className="title mb-3 ">
                    <span>{product.brand}</span>
                    <h6 className="mt-2">{product.name}</h6>
                  </div>
                  <div className="card-footer text-center mb-3">
                    <p className="mb-3">{product.status}</p>

                    <p>
                      <strike className="text-danger">{product.rate}</strike>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewArrival;
