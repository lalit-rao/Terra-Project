"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Cards/Card";
import SearchAlsoCountryCard from "./Cards/SearchAlsoCountryCard";
import FilterCard from "./Cards/FilterCard";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import {bestSeller2, tree3, tree4, tree1, tree2, tree5} from "../../../public/images";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [countryCode, setCountryCode] = useState("IN");
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [rate, setRate] = useState(false);
  const [noOfRating, setNoOfRating] = useState(false);
  const [amazonChoice, setAmazonChoice] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const options = {
        method: "GET",
        url: "https://real-time-amazon-data.p.rapidapi.com/search",
        params: {
          query: "Sustainable",
          page: "1",
          country: countryCode,
          sort_by: "RELEVANCE",
          product_condition: "ALL",
        },
        headers: {
          "x-rapidapi-key":
            "b2d970b427msh5a871a7f09227b1p1f2b36jsn9b3414e03464",
          "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setProducts(response.data.data.products);
        console.log(response.data.data.products);
      } catch (error) {
        setError(error);
      }
    };

    fetchProducts();
  }, [countryCode]);

  useEffect(() => {
    const filterData = () => {
      let filtered = products;

      if (rate) {
        filtered = filtered.filter((item) => item.product_star_rating >= 3.5);
      }

      if (noOfRating) {
        filtered = filtered.filter((item) => item.product_num_ratings > 10);
      }

      setFilteredData(filtered);
    };

    filterData();
  }, [products, rate, noOfRating]);

  if (error) return <div>Error fetching data: {error.message}</div>;

  const filteredProducts = filteredData.filter((product) =>
    product.product_title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div className=" text-center bg-[#F3F3F3]">
      <div className="fixed w-full flex justify-center bg-[#F3F3F3] bg-opacity-85 p-2 md:p-3 z-30">
        <div className="flex justify-center mb-1 md:mb-4">
          <SearchAlsoCountryCard setCountryCode={setCountryCode} />
          <input
            type="text"
            className=" border ml-2 p-1 md:px-2 text-[10px] md:text-xl rounded-lg bg-[#D9D9D9] text-[#191A23] focus:outline-none"
            placeholder="Search Item..."
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </div>
      </div>

      <div className="pt-15 relative h-[100vh] flex items-center place-content-center flex-col gap-10">
        <h1 className="text-3xl md:text-5xl  lg:text-8xl text-[#191A23] font-bold z-10">
          Marketplace
        </h1>
        <p className=" text-xl lg:text-4xl text-[#8A868C] z-10 ">
          Explore a curated selection of sustainable products
        </p>
        <div className="">
          <Image
            src={tree1}
            alt=""
            className="absolute top-0 left-0 h-40 md:h-80 "
          />
          <Image
            src={tree2}
            alt=""
            className="absolute left-0 bottom-0 h-20 md:h-80"
          />
          <Image
            src={tree3}
            alt=""
            className="absolute right-0 bottom-0 h-10  lg:h-52"
          />
          <Image
            src={tree4}
            alt=""
            className="absolute right-0 top-0 h-18 md:h-full"
          />
          <Image
            src={tree5}
            alt=""
            className="absolute bottom-0 right-1/2 h-20 md:h-52"
          />
        </div>
      </div>

      <div className="flex justify-center text-center h-[90vh] place-content-center">
        <div className="w-[45vw] text-left flex flex-col place-content-center gap-2 md:gap-5">
          <h1 className="text-sm md:text-4xl font-bold text-[#191A23]">
            Why choose us?
          </h1>
          <div className="h-1 w-28 md:h-2 bg-[#78b829] rounded-md"></div>
          <div className="text-[10px] md:text-2xl text-[#8A868C] flex flex-col gap-3">
            <Fade>
              <p>
                🌱<b>Global Selection:</b> Access a diverse range of sustainable
                products sourced from 22 countries, ensuring quality and variety
                for every eco-conscious shopper.
              </p>
            </Fade>
            <Fade>
              <p>
                🌵
                <b>Informed Shopping:</b>
                Make confident purchasing decisions with comprehensive product
                details highlighting eco-friendly features and benefits.
              </p>
            </Fade>
            <Fade>
              <p>
                ☘️<b>Convenient Experience:</b> Enjoy seamless shopping with
                easy navigation and direct links, making sustainable choices
                hassle-free and accessible.
              </p>
            </Fade>
          </div>
        </div>
      </div>

      {searchItem && (
        <div className="mb-10 border-b-2 border-[#D9D9D9] pb-3 md:pb-12 mx-7">
          <h1 className="text-xl md:text-4xl font-bold  text-[#191A23] my-2 md:my-5 ">
            Search Results:
          </h1>
          <div className="w-full flex justify-center mb-3 md:mb-10">
            <div className="h-[4px] md:h-2 w-20 bg-[#78b829] rounded-md"></div>
          </div>
          <div className="flex flex-wrap  justify-center md:my-6 ">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Fade>
                  <div
                    className="flex flex-wrap justify-around m-2 md:m-7 relative gap-2 md:gap-4"
                    key={product.product_url}
                  >
                    <Card
                      title={product.product_title}
                      product_photo={product.product_photo}
                      star_rating={product.product_star_rating}
                      price={product.product_price}
                      delivery={product.delivery}
                      product_url={product.product_url}
                      num_ratings={product.product_num_ratings}
                    />
                  </div>
                </Fade>
              ))
            ) : (
              <div className="text-[#191A23]">No products found</div>
            )}
          </div>
        </div>
      )}

      <div>
        <h1 className="text-xl md:text-4xl font-bold  text-[#191A23] my-2 md:my-5 ">
          All Products:
        </h1>
        <div className="w-full flex justify-center mb-3 md:mb-10">
          <div className="h-[4px] md:h-2 w-20 bg-[#78b829] rounded-md"></div>
        </div>

        <div className=" flex justify-center gap-4">
          <div className="bg-[#191A23] md:px-5 border md:text-lg text-[10px] px-2 py-[1px] rounded-lg border-black text-[#F3F3F3] md:rounded-2xl max-w-max md:py-2">
            Filter🔎
          </div>
          <FilterCard
            variableFunc={setRate}
            Name="rate"
            variable={rate}
            label="Rating 3.5+"
          />

          <FilterCard
            variableFunc={setNoOfRating}
            Name="rating no"
            variable={noOfRating}
            label="10+ reviews"
          />
        </div>

        <div className="flex flex-wrap  justify-center my-6">
          {filteredData.length > 0 ? (
            filteredData.map((product) => (
              <Fade>
                <div
                  className="flex flex-wrap justify-around m-2 md:m-7 relative gap-2 md:gap-4"
                  key={product.product_url}
                >
                  {product.is_prime && (
                    <div className="">
                      <Image
                        src={bestSeller2}
                        className="absolute top-0 right-0 h-6 w-6 md:h-14 md:w-14  z-20"
                      />
                    </div>
                  )}
                  <Card
                    title={product.product_title}
                    product_photo={product.product_photo}
                    star_rating={product.product_star_rating}
                    price={product.product_price}
                    delivery={product.delivery}
                    product_url={product.product_url}
                    num_ratings={product.product_num_ratings}
                  />
                </div>
              </Fade>
            ))
          ) : (
            <div>No products found</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
