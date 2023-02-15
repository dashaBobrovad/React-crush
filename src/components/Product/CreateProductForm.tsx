import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../../types/IProduct";
import {Error} from "../index";

interface CreateProductFormProps {
  onCreate: (product: IProduct) => void;
}

const testProduct: IProduct = {
  id: 99999999,
  title: "",
  price: 22.3,
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  category: "men's clothing",
  image:
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  rating: {
    rate: 4.1,
    count: 259,
  },
};

function CreateProductForm({ onCreate }: CreateProductFormProps) {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("not valid");
      return false;
    }

    testProduct.title = value;

    await axios
      .post<IProduct>("https://fakestoreapi.com/carts", testProduct)
      .then((response) => {
        onCreate(testProduct);
      })
      .catch((e: unknown) => {
        const error = e as AxiosError;
        console.log(error);
      });
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <React.Fragment>
      {error && <Error error={error} />}
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={onChangeInput}
          className="border py-2 px-4 mb-2"
          placeholder="Enter tour shit..."
        />

        <button type="submit" className="py-2 px-4 border bg-yellow-400 ">
          add
        </button>
      </form>
    </React.Fragment>
  );
}

export default CreateProductForm;
