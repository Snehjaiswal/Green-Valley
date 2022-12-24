import React from "react";
import ItemCard from "./ItemCard";
import data from "./data";
const Home = () => {
  // console.warn(data.productData);

  return (
    <>
      {/* <h1 className="text-center mt-3">Green Vally</h1><hr /> */}

      {/* <div className="eight">
        <h1 className='GrocerHeading'>Green Vally</h1>
      </div> */}
      <section className="py-4 container">
        <div className="row justify-content-center orductsCard">
          {data.productData.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
