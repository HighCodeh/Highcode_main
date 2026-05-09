"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"

declare global {
  interface Window {
    ShopifyBuy: any
  }
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(loadShopify,[]);

  function loadShopify() {
    // Check if it isn't already loaded and/or with children
    let component: any
    let cancelled = false

    const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const destructor = () => {
        const node = document.getElementById("product-component-1778201070460")
        cancelled = true
        component?.destroy()
        if (node)
          node.innerHTML = ""
    }

    function initShopifyUI() {
        const client = window.ShopifyBuy.buildClient({
          domain: 'ytvgjc-zv.myshopify.com',
          storefrontAccessToken: '3d0b97483f5c4a431c4e1b87b4d6261a',
        });
        window.ShopifyBuy.UI.onReady(client).then((ui : any) => {
          if (cancelled) return
          component = ui.createComponent('product', {
              id: '8198471450698',
              node: document.getElementById('product-component-1778201070460'),
              moneyFormat: 'R%24%20%7B%7Bamount_with_comma_separator%7D%7D',
              options: {
                "product": {
                    "styles": {
                      "product": {
                          "@media (min-width: 601px)": {
                            "max-width": "100%",
                            "margin-left": "0",
                            "margin-bottom": "20px"
                          }
                      },
                      "title": {
                          "font-family": "Inter, sans-serif",
                          "color": "#fff"
                      },
                      "button": {
                          "font-family": "Inter, sans-serif",
                          "font-weight": "bold",
                          "font-size": "16px",
                          "padding-top": "16px",
                          "padding-bottom": "16px",
                          ":hover": {
                            "background-color": "#209600"
                          },
                            "background-color": "#24a700",
                          ":focus": {
                            "background-color": "#209600"
                          },
                          "border-radius": "8px"
                      },
                      "quantityInput": {
                          "font-size": "16px",
                          "padding-top": "16px",
                          "padding-bottom": "16px"
                      }
                    },
                    "text": {
                      "button": "Add to cart"
                    },
                    "googleFonts": [
                      "Inter"
                    ]
                },
                "productSet": {
                    "styles": {
                      "products": {
                          "@media (min-width: 601px)": {
                            "margin-left": "-20px"
                          }
                      }
                    }
                },
                "modalProduct": {
                    "contents": {
                      "img": false,
                      "imgWithCarousel": true,
                      "button": false,
                      "buttonWithQuantity": true
                    },
                    "styles": {
                      "product": {
                          "@media (min-width: 601px)": {
                          "max-width": "100%",
                          "margin-left": "0px",
                          "margin-bottom": "0px"
                          }
                      },
                      "button": {
                          "font-family": "Inter, sans-serif",
                          "font-weight": "bold",
                          "font-size": "16px",
                          "padding-top": "16px",
                          "padding-bottom": "16px",
                          ":hover": {
                            "background-color": "#209600"
                          },
                          "background-color": "#24a700",
                          ":focus": {
                            "background-color": "#209600"
                          },
                          "border-radius": "8px"
                      },
                      "quantityInput": {
                          "font-size": "16px",
                          "padding-top": "16px",
                          "padding-bottom": "16px"
                      },
                      "title": {
                          "font-family": "Inter, sans-serif",
                          "font-weight": "bold",
                          "font-size": "26px",
                          "color": "#fff"
                      }
                    },
                    "googleFonts": [
                      "Inter"
                    ],
                    "text": {
                      "button": "Add to cart"
                    }
                },
                "option": {},
                "cart": {
                    "styles": {
                      "button": {
                          "font-family": "Inter, sans-serif",
                          "font-weight": "bold",
                          "font-size": "16px",
                          "padding-top": "16px",
                          "padding-bottom": "16px",
                          ":hover": {
                            "background-color": "#209600"
                          },
                          "background-color": "#24a700",
                          ":focus": {
                            "background-color": "#209600"
                          },
                          "border-radius": "8px"
                      },
                      "title": {
                          "color": "#fff"
                      },
                      "header": {
                          "color": "#fff"
                      },
                      "lineItems": {
                          "color": "#fff"
                      },
                      "subtotalText": {
                          "color": "#fff"
                      },
                      "subtotal": {
                          "color": "#fff"
                      },
                      "notice": {
                          "color": "#fff"
                      },
                      "currency": {
                          "color": "#fff"
                      },
                      "close": {
                          "color": "#fff",
                          ":hover": {
                            "color": "#fff"
                          }
                      },
                      "empty": {
                          "color": "#fff"
                      },
                      "noteDescription": {
                          "color": "#fff"
                      },
                      "discountText": {
                          "color": "#fff"
                      },
                      "discountIcon": {
                          "fill": "#fff"
                      },
                      "discountAmount": {
                          "color": "#fff"
                      },
                      "cart": {
                          "background-color": "#140027"
                      },
                      "footer": {
                          "background-color": "#140027"
                      }
                    },
                    "text": {
                      "total": "Subtotal",
                      "button": "Checkout"
                    },
                    "googleFonts": [
                      "Inter"
                    ]
                },
                "toggle": {
                    "styles": {
                      "toggle": {
                          "font-family": "Inter, sans-serif",
                          "font-weight": "bold",
                          "background-color": "#24a700",
                          ":hover": {
                          "background-color": "#209600"
                          },
                          ":focus": {
                          "background-color": "#209600"
                          }
                      },
                      "count": {
                          "font-size": "16px"
                      }
                    },
                    "googleFonts": [
                      "Inter"
                    ]
                },
                "lineItem": {
                    "styles": {
                      "variantTitle": {
                          "color": "#fff"
                      },
                      "title": {
                          "color": "#fff"
                      },
                      "price": {
                          "color": "#fff"
                      },
                      "fullPrice": {
                          "color": "#fff"
                      },
                      "discount": {
                          "color": "#fff"
                      },
                      "discountIcon": {
                          "fill": "#fff"
                      },
                      "quantity": {
                          "color": "#fff"
                      },
                      "quantityIncrement": {
                          "color": "#fff",
                          "border-color": "#fff"
                      },
                      "quantityDecrement": {
                          "color": "#fff",
                          "border-color": "#fff"
                      },
                      "quantityInput": {
                          "color": "#fff",
                          "border-color": "#fff"
                      }
                    }
                }
              },
          });
        });
    }

    // Init directly if the script is already set up
    if (window.ShopifyBuy?.UI) {
      initShopifyUI()
      return destructor
    }

    // Otherwise, load the script and then init
    const script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    script.onload = initShopifyUI;
    document.head.appendChild(script);
    return destructor
  }


  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
      <main className="pt-32 px-4 flex justify-center">
        <div id='product-component-1778201070460' className="w-full max-w-md"/>
      </main>
    </div>
  )
}
