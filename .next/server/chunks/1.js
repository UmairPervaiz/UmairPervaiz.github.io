exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 7030:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9150, 23))

/***/ }),

/***/ 7424:
/***/ (() => {



/***/ }),

/***/ 1075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(6088);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(9722);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(6775);
;// CONCATENATED MODULE: ./other/projectList.js
const projectList = [
    "/projects/property",
    "/projects/superchat",
    "/webinars/nnfs",
    "/webinars/swph",
    "/webinars/cllm_bg",
    "/webinars/dp_gcp"
];
/* harmony default export */ const other_projectList = (projectList);

;// CONCATENATED MODULE: ./components/navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Navbar() {
    const [nav, setNav] = (0,react_.useState)(false);
    const [shadow, setShadow] = (0,react_.useState)(false);
    const [navBg, setNavBg] = (0,react_.useState)("#ecf0f3");
    const [linkColor, setLinkColor] = (0,react_.useState)("#1f2937");
    const path = (0,navigation.usePathname)();
    const handleBgColor = (bgColor, fontColor)=>{
        setNavBg(bgColor);
        setLinkColor(fontColor);
    };
    const handleShadow = ()=>{
        if (window.scrollY == 0) {
            setShadow(false); // defanging shadow
            handleBgColor("transparent", "#f8f8f8");
        } else {
            setShadow(true);
            handleBgColor("#ecf0f3", "#1f2937");
        }
    };
    (0,react_.useEffect)(()=>{
        if (other_projectList.includes(path)) {
            if (window.scrollY == 0) {
                handleBgColor("transparent", "#f8f8f8");
            }
            window.addEventListener("scroll", handleShadow);
        } else {
            handleBgColor("#ecf0f3", "#1f2937");
        }
    }, [
        path
    ]);
    // useEffect(() => {
    //   window.addEventListener("scroll", handleShadow);
    // }, []);
    const handleNav = ()=>{
        setNav(!nav);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            backgroundColor: `${navBg}`
        },
        className: shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between items-center w-full h-full px-2 2xl:px-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                style: {
                                    color: `${linkColor}`
                                },
                                className: "hidden md:flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#home",
                                        className: "py-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase hover:border-b",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#about",
                                        className: "py-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase hover:border-b",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#education",
                                        className: "py-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase hover:border-b",
                                            children: "Education"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#experience",
                                        className: "py-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase hover:border-b",
                                            children: "Experience"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#skills",
                                        className: "py-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase hover:border-b",
                                            children: "Skills"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#projects",
                                        className: "py-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase hover:border-b",
                                            children: "Projects"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/#contact",
                                        className: "py-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "ml-10 text-sm uppercase hover:border-b",
                                            children: "Contact"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "https://tinyurl.com/3wf5xcfj",
                                        style: {
                                            marginLeft: 20
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "bg-gradient-to-r from-[#5651e5] to-[#709dff] px-8 py-2 mr-8",
                                            children: "Resume"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:hidden hover:cursor-pointer",
                                onClick: handleNav,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineMenu */.qTj, {
                                    size: 25,
                                    color: `${linkColor}`
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: nav ? "md:hidden fixed left-0 top-0 w-full bg-black/70" : "",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex w-full items-center justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer",
                                    onClick: handleNav,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineClose */.oHP, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "border-b border-gray-300 my-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "w-[85%] md:w-[90%] py-4",
                                children: "Let's CODE"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "py-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "uppercase",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#home",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#education",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Education"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#about",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#skills",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Skills"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#experience",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Projects"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#projects",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Projects"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/#contact",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                onClick: ()=>setNav(false),
                                                className: "py-4 text-sm",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pt-20",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "uppercase tracking-widest text-[#5651e5]",
                                            children: "Let's Connect"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center justify-between my-4 w-full sm:w-[80%]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.linkedin.com/in/umairpervaizbutt/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaLinkedinIn */.BUd, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://github.com/Umairpervaiz/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaGithub */.hJX, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://www.instagram.com/umairpervaizbutt/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaInstagram */.Zf_, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    target: "_blank",
                                                    href: "https://x.com/Umairbutt30",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaTwitter */.fWC, {})
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "mailto:umairpervaizbutt@gmail.com",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineMail */.Dme, {})
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const navbar = (Navbar);


/***/ }),

/***/ 7263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7298);
/* harmony import */ var next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2817);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "Umair Pervaiz Butt",
    description: "Created With NextJS"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 3426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/mac/Desktop/Projects/portfolio/components/navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;