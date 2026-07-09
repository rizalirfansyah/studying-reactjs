import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getDetailProduct } from "../services/product.service";

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);

  console.log(product);
  return (
    <div>
      {/* <div>detail: {id}</div> */}
      {Object.keys(product).length > 0 && (
        <div>
          <div class="bg-white">
            <div class="pt-6">
              {/* <!-- Image gallery --> */}
              <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                <img
                  src={product.image}
                  alt="Model wearing plain white basic tee."
                  class="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
                />
              </div>

              {/* <!-- Product info --> */}
              <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.title}
                  </h1>
                </div>

                {/* <!-- Options --> */}
                <div class="mt-4 lg:row-span-3 lg:mt-0">
                  {/* <h2 class="sr-only">Product information</h2> */}
                  <p class="text-3xl tracking-tight text-gray-900">
                    $ {product.price}
                  </p>

                  {/* <!-- Reviews --> */}
                  {/* <div class="mt-6">
                  <h3 class="sr-only">Reviews</h3>
                  <div class="flex items-center">
                    <div class="flex items-center">Reviews</div>
                    <a
                      href="#"
                      class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      {product.rating.rate}
                    </a>
                    <p className="text-black">
                      {" "}
                      and {product.rating.count} reviewed
                    </p>
                  </div>
                </div> */}

                  <form class="mt-10">
                    {/* <!-- Colors --> */}
                    <div>
                      <h3 class="text-sm font-medium text-gray-900">Color</h3>

                      <fieldset aria-label="Choose a color" class="mt-4">
                        <div class="flex items-center gap-x-3">
                          <div class="flex rounded-full outline -outline-offset-1 outline-black/10">
                            <input
                              type="radio"
                              name="color"
                              value="white"
                              checked
                              aria-label="White"
                              class="size-8 appearance-none rounded-full bg-white forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3"
                            />
                          </div>
                          <div class="flex rounded-full outline -outline-offset-1 outline-black/10">
                            <input
                              type="radio"
                              name="color"
                              value="gray"
                              aria-label="Gray"
                              class="size-8 appearance-none rounded-full bg-gray-200 forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-400 focus-visible:outline-3 focus-visible:outline-offset-3"
                            />
                          </div>
                          <div class="flex rounded-full outline -outline-offset-1 outline-black/10">
                            <input
                              type="radio"
                              name="color"
                              value="black"
                              aria-label="Black"
                              class="size-8 appearance-none rounded-full bg-gray-900 forced-color-adjust-none checked:outline-2 checked:outline-offset-2 checked:outline-gray-900 focus-visible:outline-3 focus-visible:outline-offset-3"
                            />
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    {/* <!-- Sizes --> */}
                    <div class="mt-10">
                      <div class="flex items-center justify-between">
                        <h3 class="text-sm font-medium text-gray-900">Size</h3>
                        <a
                          href="#"
                          class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Size guide
                        </a>
                      </div>

                      <fieldset aria-label="Choose a size" class="mt-4">
                        <div class="grid grid-cols-4 gap-3">
                          <label
                            aria-label="XXS"
                            class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              type="radio"
                              name="size"
                              disabled
                              class="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span class="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                              XXS
                            </span>
                          </label>
                          <label
                            aria-label="XS"
                            class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              type="radio"
                              name="size"
                              class="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span class="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                              XS
                            </span>
                          </label>
                          <label
                            aria-label="S"
                            class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              type="radio"
                              name="size"
                              checked
                              class="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span class="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                              S
                            </span>
                          </label>
                          <label
                            aria-label="M"
                            class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              type="radio"
                              name="size"
                              class="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span class="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                              M
                            </span>
                          </label>
                          <label
                            aria-label="L"
                            class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              type="radio"
                              name="size"
                              class="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span class="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                              L
                            </span>
                          </label>
                          <label
                            aria-label="XL"
                            class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              type="radio"
                              name="size"
                              class="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span class="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                              XL
                            </span>
                          </label>
                          <label
                            aria-label="2XL"
                            class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              type="radio"
                              name="size"
                              class="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span class="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                              2XL
                            </span>
                          </label>
                          <label
                            aria-label="3XL"
                            class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                          >
                            <input
                              type="radio"
                              name="size"
                              class="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                            />
                            <span class="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                              3XL
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>

                    <button
                      type="submit"
                      class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                    >
                      Add to bag
                    </button>
                  </form>
                </div>

                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                  {/* <!-- Description and details --> */}

                  <div class="mt-10">
                    <h2 class="text-sm font-medium text-gray-900">Details</h2>

                    <div class="mt-4 space-y-6">
                      <p class="text-sm text-gray-600">{product.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProductPage;
