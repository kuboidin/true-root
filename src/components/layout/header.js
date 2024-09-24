export default function Header({}) {
    return <>
    <header className="site-header mo-left header style-2">
        <div className="bg-light2 relative z-99 max-lg:hidden">
            <div className="container relative">
                <div className="logo-header !h-[90px]">
                    <a href="/"><img src="/assets/theme/images/logo.svg" alt="logo" className="!h-[90px] !max-w-48"/></a>
                </div>

                <div className="extra-nav !h-[90px] md:flex hidden ml-3.6">
                    <div className="extra-cell">
                        <ul className="navbar-nav header-right !m-0">
                            <li className="nav-item">
                                <div className="flex gap-2.5 items-center py-2">
                                    <div className="size-13.5 flex items-center justify-center">
                                    {/*    svg */}
                                    </div>
                                    <div>
                                        <span className="text-2xs font-semibold">24/7 SUPPORT</span>
                                        <h6>+123 456 789</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex">
                    <form className="h-[90px] w-full ml-[120px] max-xl:ml-14.5 items-center flex relative">
                        <div className="relative flex flex-wrap items-center bg-white rounded-xl py-1.1 w-full">
                            <div
                                className="relative after:content-[''] after:absolute after:-translate-y-1/2 after:top-1/2 after:right-0 after:w-[1px] after:h-[22px] max-sm:after:h-6.1 after:bg-[#bbbbbbad]">
                                <select className="nice-select style-1 border-0 leading-[45px] text-2sm pl-5 pr-16">
                                    <option>All Categories</option>
                                    <option>Photography</option>
                                    <option>Arts</option>
                                    <option>Adventure</option>
                                    <option>Action</option>
                                    <option>Games</option>
                                    <option>Movies</option>
                                    <option>Comics</option>
                                    <option>Biographies</option>
                                    <option>Children’s Books</option>
                                    <option>Historical</option>
                                    <option>Contemporary</option>
                                    <option>Classics</option>
                                    <option>Education</option>
                                </select>
                            </div>
                            <input type="text"
                                   className="py-2.5 px-5 text-2sm text-title outline-none flex-auto w-[1%] h-[45px]"
                                   aria-label="Text input with dropdown button" placeholder="Search for products"/>
                            <button className="absolute right-0 size-12 justify-center inline-flex items-center"
                                    type="button">
                                <i className="iconly-Light-Search text-secondary"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="sticky-header main-bar-wraper navbar-expand-lg">
            <div className="main-bar relative after:block after:content-[''] after:clear-both">
                <div className="container after:block after:content-[''] after:clear-both lg:flex block">

                    <div className="logo-header logo-dark lg:hidden">
                        <a href="index.html"><img src="/assets/theme/images/logo.svg" alt="logo"/></a>
                    </div>

                    <button className="navbar-toggler navicon justify-end" type="button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="header-nav w3menu navbar-collapse justify-start" id="navbarNavDropdown">
                        <div className="logo-header lg:hidden">
                            <a href="index.html"><img src="/assets/theme/images/logo.svg" alt=""/></a>
                        </div>
                        <div className="mr-2.5 browse-category-menu max-xl:hidden">
                            <a href="#" className="category-btn !h-13.5 rounded-xl !bg-lightdark">
                                <div className="category-menu mr-4">
                                    <span className="!bg-secondary"></span>
                                    <span className="!bg-secondary"></span>
                                    <span className="!bg-secondary"></span>
                                </div>
                                <span className="font-semibold category-btn-title">
                                Browse Categories
                            </span>
                                <span className="toggle-arrow ms-auto">
                                <i className="icon feather icon-chevron-down"></i>
                            </span>
                            </a>
                            <div className="category-menu-items" style={{display: "none"}}>
                                <ul className="nav navbar-nav">
                                    <li className="has-mega-menu cate-drop">
                                        <a href="#">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>Clothes</span>
                                            <span className="menu-icon">
                                            <i className="icon feather icon-chevron-right"></i>
                                        </span>
                                        </a>
                                        <div className="mega-menu">
                                            <div className="row">
                                                <div className="md:w-1/4 sm:w-1/3 w-1/2"><a href="#"
                                                                                            className="menu-title">Smart
                                                    Home
                                                    Products</a>
                                                    <ul>
                                                        <li><a href="shop-standard.html">Thermostats</a></li>
                                                        <li><a href="shop-standard.html">Lighting</a></li>
                                                        <li><a href="shop-standard.html">Security Systems</a></li>
                                                        <li><a href="shop-standard.html">Locks</a></li>
                                                        <li><a href="shop-standard.html">Home Assistants</a></li>
                                                        <li><a href="shop-standard.html">Home Entertainment Systems</a>
                                                        </li>
                                                        <li><a href="shop-standard.html">Blinds And Shades</a></li>
                                                        <li><a href="shop-standard.html">Water Monitors</a></li>
                                                    </ul>
                                                </div>
                                                <div className="md:w-1/4 sm:w-1/3 w-1/2"><a href="shop-standard.html"
                                                                                            className="menu-title">Smart
                                                    Home
                                                    Products</a>
                                                    <ul>
                                                        <li><a href="shop-standard.html">Thermostats</a></li>
                                                        <li><a href="shop-standard.html">Lighting</a></li>
                                                        <li><a href="shop-standard.html">Security Systems</a></li>
                                                        <li><a href="shop-standard.html">Locks</a></li>
                                                        <li><a href="shop-standard.html">Home Assistants</a></li>
                                                        <li><a href="shop-standard.html">Home Entertainment Systems</a>
                                                        </li>
                                                        <li><a href="shop-standard.html">Blinds And Shades</a></li>
                                                        <li><a href="shop-standard.html">Water Monitors</a></li>
                                                    </ul>
                                                </div>
                                                <div className="md:w-1/4 sm:w-1/3 w-1/2"><a href="shop-standard.html"
                                                                                            className="menu-title">Smart
                                                    Home
                                                    Products</a>
                                                    <ul>
                                                        <li><a href="shop-standard.html">Thermostats</a></li>
                                                        <li><a href="shop-standard.html">Lighting</a></li>
                                                        <li><a href="shop-standard.html">Security Systems</a></li>
                                                        <li><a href="shop-standard.html">Locks</a></li>
                                                        <li><a href="shop-standard.html">Home Assistants</a></li>
                                                        <li><a href="shop-standard.html">Home Entertainment Systems</a>
                                                        </li>
                                                        <li><a href="shop-standard.html">Blinds And Shades</a></li>
                                                        <li><a href="shop-standard.html">Water Monitors<span
                                                            className="inline-block py-1 px-1.1 max-sm:py-0.5 max-sm:px-2 text-[11px] font-Lufga leading-[1] uppercase text-center font-medium rounded-md text-white ml-1 bg-red">Offer</span></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="md:w-1/4 sm:w-1/3 w-1/2"><a href="shop-standard.html"
                                                                                            className="menu-title">Smart
                                                    Home
                                                    Products</a>
                                                    <ul>
                                                        <li><a href="shop-standard.html">Thermostats</a></li>
                                                        <li><a href="shop-standard.html">Lighting<span
                                                            className="inline-block py-1 px-1.1 max-sm:py-0.5 max-sm:px-2 text-[11px] font-Lufga leading-[1] uppercase text-center font-medium rounded-md text-white ml-1 bg-secondary">Exclusive</span></a>
                                                        </li>
                                                        <li><a href="shop-standard.html">Security Systems</a></li>
                                                        <li><a href="shop-standard.html">Locks</a></li>
                                                        <li><a href="shop-standard.html">Home Assistants</a></li>
                                                        <li><a href="shop-standard.html">Home Entertainment Systems</a>
                                                        </li>
                                                        <li><a href="shop-standard.html">Blinds And Shades</a></li>
                                                        <li><a href="shop-standard.html">Water Monitors</a></li>
                                                    </ul>
                                                </div>
                                                <div className="md:w-1/4 sm:w-1/3 w-1/2"><a href="shop-standard.html"
                                                                                            className="menu-title">Smart
                                                    Home
                                                    Products</a>
                                                    <ul>
                                                        <li><a href="shop-standard.html">Thermostats</a></li>
                                                        <li><a href="shop-standard.html">Lighting<span
                                                            className="inline-block py-1 px-1.1 max-sm:py-0.5 max-sm:px-2 text-[11px] font-Lufga leading-[1] uppercase text-center font-medium rounded-md text-white ml-1 bg-orange">Feture</span></a>
                                                        </li>
                                                        <li><a href="shop-standard.html">Security Systems</a></li>
                                                        <li><a href="shop-standard.html">Locks</a></li>
                                                        <li><a href="shop-standard.html">Home Assistants</a></li>
                                                    </ul>
                                                </div>
                                                <div className="md:w-1/4 sm:w-1/3 w-1/2"><a href="shop-standard.html"
                                                                                            className="menu-title">Smart
                                                    Home
                                                    Products</a>
                                                    <ul>
                                                        <li><a href="shop-standard.html">Thermostats</a></li>
                                                        <li><a href="shop-standard.html">Lighting</a></li>
                                                        <li><a href="shop-standard.html">Security Systems</a></li>
                                                        <li><a href="shop-standard.html">Locks<span
                                                            className="inline-block py-1 px-1.1 max-sm:py-0.5 max-sm:px-2 text-[11px] font-Lufga leading-[1] uppercase text-center font-medium rounded-md text-white ml-1 bg-purple">SALE</span></a>
                                                        </li>
                                                        <li><a href="shop-standard.html">Home Assistants</a></li>
                                                        <li><a href="shop-standard.html">Home Entertainment Systems</a>
                                                        </li>
                                                        <li><a href="shop-standard.html">Blinds And Shades</a></li>
                                                    </ul>
                                                </div>
                                                <div className="md:w-1/4 sm:w-1/3 w-1/2"><a href="shop-standard.html"
                                                                                            className="menu-title">Smart
                                                    Home
                                                    Products</a>
                                                    <ul>
                                                        <li><a href="shop-standard.html">Thermostats</a></li>
                                                        <li><a href="shop-standard.html">Lighting</a></li>
                                                        <li><a href="shop-standard.html">Security Systems</a></li>
                                                        <li><a href="shop-standard.html">Locks</a></li>
                                                        <li><a href="shop-standard.html">Home Assistants</a></li>
                                                        <li><a href="shop-standard.html">Home Entertainment Systems</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="md:w-1/4 sm:w-1/3 w-1/2"><a href="shop-standard.html"
                                                                                            className="menu-title">Smart
                                                    Home
                                                    Products</a>
                                                    <ul>
                                                        <li><a href="shop-standard.html">Thermostats</a></li>
                                                        <li><a href="shop-standard.html">Lighting</a></li>
                                                        <li><a href="shop-standard.html">Security Systems</a></li>
                                                        <li><a href="shop-standard.html">Locks</a></li>
                                                        <li><a href="shop-standard.html">Home Assistants</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="cate-drop">
                                        <a href="#">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>UrbanSkirt</span>
                                            <span className="menu-icon">
                                            <i className="icon feather icon-chevron-right"></i>
                                        </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-standard.html">Thermostats</a></li>
                                            <li><a href="shop-standard.html">Lighting</a></li>
                                            <li><a href="shop-standard.html">Security Systems</a></li>
                                            <li><a href="shop-standard.html">Locks</a></li>
                                            <li><a href="shop-standard.html">Home Assistants</a></li>
                                            <li><a href="shop-standard.html">Entertainment Systems</a></li>
                                            <li><a href="shop-standard.html">Blinds And Shades</a></li>
                                            <li><a href="shop-standard.html">Appliances</a></li>
                                            <li><a href="shop-standard.html">Water Monitors</a></li>
                                            <li><a href="shop-standard.html">Gardening Systems</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="shop-standard.html">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>VelvetGown</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-standard.html">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>LushShorts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-standard.html">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>Vintage</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-standard.html">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>Wedding </span>
                                            <span
                                                className="inline-block py-1 px-1.1 max-sm:py-0.5 max-sm:px-2 text-[11px] font-Lufga leading-[1] uppercase text-center font-medium rounded-md text-white ml-1 bg-purple">SALE</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-standard.html">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>Cotton</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-standard.html">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>Linen</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-standard.html">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>Navy</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-standard.html">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>Urban</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="shop-standard.html">
                                            <i className="icon feather icon-arrow-right"></i>
                                            <span>Business Meeting</span>
                                        </a>
                                    </li>
                                    <li className="menu-items">
                                        <a href="#">
                                            <i className="flaticon-blocks mr-4"></i>
                                            <span>More</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="has-mega-menu sub-menu-down">
                                <a href="#"><span>Home</span><i
                                    className="fas fa-chevron-down tabindex"></i></a>
                                <div className="mega-menu demo-menu">
                                    <div className="row">
                                        <div className="md:w-1/3 w-1/2"><a href="index.html"><img
                                            src="/assets/theme/images/demo/demo-1.png" alt="/"/> <span className="menu-title">01 Home Page</span></a>
                                        </div>
                                        <div className="md:w-1/3 w-1/2"><a href="index-2.html"><img
                                            src="/assets/theme/images/demo/demo-2.png" alt="/"/> <span className="menu-title">02 Home Page</span></a>
                                        </div>
                                        <div className="md:w-1/3 w-1/2"><a href="index-3.html"><img
                                            src="/assets/theme/images/demo/demo-3.png" alt="/"/> <span className="menu-title">03 Home Page</span></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="has-mega-menu sub-menu-down">
                                <a href="#"><span>Shop</span><i
                                    className="fas fa-chevron-down tabindex"></i></a>
                                <div className="mega-menu shop-menu">
                                    <div className="row">
                                        <div className="lg:w-2/3 w-full">
                                            <div className="row">
                                                <div className="md:w-1/3 w-1/2">
                                                    <a href="#" className="menu-title">Shop
                                                        Structure</a>
                                                    <ul>
                                                        <li><a href="shop-standard.html">Shop Standard</a></li>
                                                        <li><a href="shop-list.html">Shop List</a></li>
                                                        <li><a href="shop-with-category.html">Shop With Category</a>
                                                        </li>
                                                        <li><a href="shop-filters-top-bar.html">Shop Filters Top Bar</a>
                                                        </li>
                                                        <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                                                        <li><a href="shop-style-1.html">Shop Style 1</a></li>
                                                        <li><a href="shop-style-2.html">Shop Style 2</a></li>
                                                    </ul>
                                                </div>
                                                <div className="md:w-1/3 w-1/2">
                                                    <a href="#" className="menu-title">Product
                                                        Structure</a>
                                                    <ul>
                                                        <li><a href="product-default.html">Default</a></li>
                                                        <li><a href="product-thumbnail.html">Thumbnail</a></li>
                                                        <li><a href="product-grid-media.html">Grid Media</a></li>
                                                        <li><a href="product-carousel.html">Carousel</a></li>
                                                        <li><a href="product-full-width.html">Full Width</a></li>

                                                    </ul>
                                                </div>
                                                <div className="md:w-1/3 w-1/2">
                                                    <a href="#" className="menu-title">Shop Pages</a>
                                                    <ul>
                                                        <li><a href="shop-wishlist.html">Wishlist</a></li>
                                                        <li><a href="shop-cart.html">Cart</a></li>
                                                        <li><a href="shop-checkout.html">Checkout</a></li>
                                                        <li><a href="shop-compare.html">Compare</a></li>
                                                        <li><a href="shop-order-tracking.html">Order Tracking</a></li>
                                                        <li><a href="shop-my-account.html">My Account</a></li>
                                                        <li><a href="shop-registration.html">Registration</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="w-full">
                                                    <div className="month-deal">
                                                        <div>
                                                            <h3>Deal of the month</h3>
                                                            <p className="mb-0">Yes! Send me exclusive offers,
                                                                personalised,
                                                                and unique gift ideas, tips for shopping on Pixio <a
                                                                    href="shop-standard.html" className="dz-link-2">View
                                                                    All Products</a></p>
                                                        </div>
                                                        <div className="sale-countdown">
                                                            <div className="countdown text-center">
                                                                <div className="date"><span
                                                                    className="time days text-primary"></span>
                                                                    <span className="work-time">Days</span>
                                                                </div>
                                                                <div className="date"><span
                                                                    className="time hours text-primary"></span>
                                                                    <span className="work-time">Hours</span>
                                                                </div>
                                                                <div className="date"><span
                                                                    className="time mins text-primary"></span>
                                                                    <span className="work-time">Minutess</span>
                                                                </div>
                                                                <div className="date"><span
                                                                    className="time secs text-primary"></span>
                                                                    <span className="work-time">Second</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 hidden lg:block">
                                            <div className="adv-media"><img src="/assets/theme/images/adv-1.png" alt="/"/></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="has-mega-menu sub-menu-down"><a
                                href="#"><span>Blog</span><i
                                className="fas fa-chevron-down tabindex"></i></a>
                                <div className="mega-menu">
                                    <div className="row">
                                        <div className="md:w-1/4 w-1/2">
                                            <a href="#" className="menu-title">Blog Dark Style</a>
                                            <ul>
                                                <li><a href="blog-dark-2-column.html">Blog 2 Column</a></li>
                                                <li><a href="blog-dark-2-column-sidebar.html">Blog 2 Column Sidebar</a>
                                                </li>
                                                <li><a href="blog-dark-3-column.html">Blog 3 Column</a></li>
                                                <li><a href="blog-dark-half-image.html">Blog Half Image</a></li>
                                            </ul>
                                            <a href="#" className="menu-title">Blog Light Style</a>
                                            <ul>
                                                <li><a href="blog-light-2-column.html">Blog 2 Column</a></li>
                                                <li><a href="blog-light-2-column-sidebar.html">Blog 2 Column Sidebar</a>
                                                </li>
                                                <li><a href="blog-light-half-image.html">Blog Half Image</a></li>
                                                <li><a href="blog-exclusive.html">Blog Exclusive</a></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-1/4 w-1/2">
                                            <a href="#" className="menu-title">Blog Sidebar</a>
                                            <ul>
                                                <li><a href="blog-left-sidebar.html">Blog left Sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                <li><a href="blog-both-sidebar.html">Blog Both Sidebar</a></li>
                                                <li><a href="blog-wide-sidebar.html">Blog Wide Sidebar</a></li>
                                            </ul>
                                            <a href="#" className="menu-title">Blog Page</a>
                                            <ul>
                                                <li><a href="blog-archive.html">Blog Archive</a></li>
                                                <li><a href="blog-author.html">Author</a></li>
                                                <li><a href="blog-category.html">Blog Category</a></li>
                                                <li><a href="blog-tag.html">Blog Tag</a></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-1/4 w-1/2">
                                            <a href="#" className="menu-title">Blog Details</a>
                                            <ul>
                                                <li><a href="post-standard.html">Post Standard</a></li>
                                                <li><a href="post-left-sidebar.html">Post Left Sidebar</a></li>
                                                <li><a href="post-header-image.html">Post Header Image</a></li>
                                                <li><a href="post-slide-show.html">Post Slide Show</a></li>
                                                <li><a href="post-side-image.html">Post Side Image</a></li>
                                                <li><a href="post-gallery.html">Post Gallery</a></li>
                                                <li><a href="post-gallery-alternative.html">Post Gallery Alternative</a>
                                                </li>
                                                <li><a href="post-open-gutenberg.html">Post Open Gutenberg</a></li>
                                                <li><a href="post-link.html">Post Link</a></li>
                                                <li><a href="post-audio.html">Post Audio</a></li>
                                                <li><a href="post-video.html">Post Video</a></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-1/4 sm:w-1/2 w-full">
                                            <a href="#" className="menu-title">Recent Posts</a>
                                            <div className="widget widget_post pt-2">
                                                <ul>
                                                    <li>
                                                        <div className="dz-media">
                                                            <img src="/assets/theme/images/shop/product/small/1.png" alt=""/>
                                                        </div>
                                                        <div className="dz-content">
                                                            <h6 className="name"><a href="post-standard.html">Cozy Knit
                                                                Cardigan Sweater</a></h6>
                                                            <span className="time">July 23, 2024</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dz-media">
                                                            <img src="/assets/theme/images/shop/product/small/2.png" alt=""/>
                                                        </div>
                                                        <div className="dz-content">
                                                            <h6 className="name"><a href="post-standard.html">Sophisticated
                                                                Swagger Suit</a></h6>
                                                            <span className="time">July 23, 2024</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dz-media">
                                                            <img src="/assets/theme/images/shop/product/small/3.png" alt=""/>
                                                        </div>
                                                        <div className="dz-content">
                                                            <h6 className="name"><a href="post-standard.html">Athletic
                                                                Mesh
                                                                Sports Leggings</a></h6>
                                                            <span className="time">July 23, 2024</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dz-media">
                                                            <img src="/assets/theme/images/shop/product/small/4.png" alt=""/>
                                                        </div>
                                                        <div className="dz-content">
                                                            <h6 className="name"><a href="post-standard.html">Satin Wrap
                                                                Party Blouse</a></h6>
                                                            <span className="time">July 23, 2024</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="has-mega-menu sub-menu-down"><a
                                href="#"><span>Portfolio</span><i
                                className="fas fa-chevron-down tabindex"></i></a>
                                <div className="mega-menu portfolio-menu">
                                    <div className="row">
                                        <div className="xl:w-5/6 lg:w-3/4 md:w-3/4 pe-xl-5 pe-md-3 sm:w-2/3 ">
                                            <ul className="row portfolio-nav-link">
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/portfolio-tiles.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/portfolio-tiles.svg"
                                                    alt="/"/><span>Portfolio Tiles</span></a></li>
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/collage-style-1.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/collage-style-1.svg"
                                                    alt="/"/><span>Collage Style 1</span></a></li>
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/collage-style-2.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/collage-style-2.svg"
                                                    alt="/"/><span>Collage Style 2</span></a></li>
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/masonry-grid.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/masonry-grid.svg"
                                                    alt="/"/><span>Masonry Grid</span></a></li>
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/cobble-style-1.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/cobble-style-1.svg"
                                                    alt="/"/><span>Cobble Style 1</span></a></li>
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/cobble-style-2.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/cobble-style-2.svg"
                                                    alt="/"/><span>Cobble Style 2</span></a></li>
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/portfolio-thumbs-slider.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/portfolio-thumbs-slider.svg"
                                                    alt="/"/><span>Portfolio Thumbs Slider</span></a></li>
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/portfolio-film-strip.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/portfolio-film-strip.svg"
                                                    alt="/"/><span>Portfolio Film Strip</span></a></li>
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/carousel-showcase.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/carousel-showcase.svg"
                                                    alt="/"/><span>Carousel Showcase</span></a></li>
                                                <li className="col"><a
                                                    href="https://pixio.dexignzone.com/tailwind/demo/portfolio-split-slider.html"><img
                                                    src="https://pixio.dexignzone.com/tailwind/demo/assets/images/portfolio/icons/portfolio-split-slider.svg"
                                                    alt="/"/><span>Portfolio Split Slider</span></a></li>
                                            </ul>
                                        </div>
                                        <div className="xl:w-1/6 lg:w-1/4 md:w-1/4 line-left ps-3 pe-0 sm:w-1/3">
                                            <a href="#" className="menu-title">Portfolio Details</a>
                                            <ul>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/portfolio-details-1.html">Portfolio
                                                        Details 1</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/portfolio-details-2.html">Portfolio
                                                        Details 2</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/portfolio-details-3.html">Portfolio
                                                        Details 3</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/portfolio-details-4.html">Portfolio
                                                        Details 4</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/portfolio-details-5.html">Portfolio
                                                        Details 5</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="has-mega-menu sub-menu-down"><a href="#"><span>Pages</span><i
                                className="fas fa-chevron-down tabindex"></i></a>
                                <div className="mega-menu">
                                    <div className="row md:justify-between">
                                        <div className="md:w-1/6 sm:w-1/3 w-1/2">
                                            <a href="#" className="menu-title">Pages</a>
                                            <ul>
                                                <li><a href="https://pixio.dexignzone.com/tailwind/demo/about-us.html">About
                                                    Us</a></li>
                                                <li><a href="https://pixio.dexignzone.com/tailwind/demo/about-me.html">About
                                                    Me</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/pricing-table.html">Pricing
                                                        Table</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/our-gift-vouchers.html">Our
                                                        Gift Vouchers</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/what-we-do.html">What
                                                        We Do</a></li>
                                                <li><a href="https://pixio.dexignzone.com/tailwind/demo/faqs-1.html">Faqs
                                                    1</a></li>
                                                <li><a href="https://pixio.dexignzone.com/tailwind/demo/faqs-2.html">Faqs
                                                    2</a></li>
                                                <li><a href="https://pixio.dexignzone.com/tailwind/demo/our-team.html">Our
                                                    Team</a></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-1/6 sm:w-1/3 w-1/2">
                                            <a href="#" className="menu-title">Contact Us</a>
                                            <ul>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/contact-us-1.html">Contact
                                                        Us 1</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/contact-us-2.html">Contact
                                                        Us 2</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/contact-us-3.html">Contact
                                                        Us 3</a></li>
                                            </ul>
                                            <a href="#" className="menu-title">Web Pages</a>
                                            <ul>
                                                <li><a href="https://pixio.dexignzone.com/tailwind/demo/error-1.html">Error
                                                    404 1</a></li>
                                                <li><a href="https://pixio.dexignzone.com/tailwind/demo/error-2.html">Error
                                                    404 2</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/coming-soon.html">Coming
                                                        Soon</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/under-construction.html">Under
                                                        Construction</a></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-1/6 sm:w-1/3 w-1/2">
                                            <a href="#" className="menu-title">Banner Style</a>
                                            <ul>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/banner-with-bg-color.html">Banner
                                                        with BG Color</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/banner-with-image.html">Banner
                                                        with Image</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/banner-with-video.html">Banner
                                                        with Video</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/banner-with-kanbern.html">Banner
                                                        with Kanbern</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/banner-small.html">Banner
                                                        Small</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/banner-medium.html">Banner
                                                        Medium</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/banner-large.html">Banner
                                                        Large</a></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-1/6 sm:w-1/3 w-1/2">
                                            <a href="#" className="menu-title">Header Style</a>
                                            <ul>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/header-style-1.html">Header
                                                        Style 1</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/header-style-2.html">Header
                                                        Style 2</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/header-style-3.html">Header
                                                        Style 3</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/header-style-4.html">Header
                                                        Style 4</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/header-style-5.html">Header
                                                        Style 5</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/header-style-6.html">Header
                                                        Style 6</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/header-style-7.html">Header
                                                        Style 7</a></li>
                                            </ul>
                                        </div>
                                        <div className="md:w-1/6 sm:w-1/3 w-1/2">
                                            <a href="#" className="menu-title">Footer Style</a>
                                            <ul>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/footer-style-1.html">Footer
                                                        Style 1</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/footer-style-2.html">Footer
                                                        Style 2</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/footer-style-3.html">Footer
                                                        Style 3</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/footer-style-4.html">Footer
                                                        Style 4</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/footer-style-5.html">Footer
                                                        Style 5</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/footer-style-6.html">Footer
                                                        Style 6</a></li>
                                                <li>
                                                    <a href="https://pixio.dexignzone.com/tailwind/demo/footer-style-7.html">Footer
                                                        Style 7</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="sub-menu-down">
                                <a href="#" className="after-remover">My Account
                                    <i className="fas fa-chevron-down tabindex"></i>
                                </a>
                                <ul className="sub-menu">
                                    <li><a
                                        href="https://pixio.dexignzone.com/tailwind/demo/account-dashboard.html">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-orders.html">Orders</a>
                                    </li>
                                    <li><a href="https://pixio.dexignzone.com/tailwind/demo/account-order-details.html">Orders
                                        Details</a></li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-order-confirmation.html">Orders
                                            Confirmation</a></li>
                                    <li><a
                                        href="https://pixio.dexignzone.com/tailwind/demo/account-downloads.html">Downloads</a>
                                    </li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-return-request.html">Return
                                            Request</a></li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-return-request-detail.html">Return
                                            Request Detail</a></li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-refund-requests-confirmed.html">Return
                                            Request Confirmed</a></li>
                                    <li><a
                                        href="https://pixio.dexignzone.com/tailwind/demo/account-profile.html">Profile</a>
                                    </li>
                                    <li><a
                                        href="https://pixio.dexignzone.com/tailwind/demo/account-address.html">Address</a>
                                    </li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-shipping-methods.html">Shipping
                                            methods</a></li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-payment-methods.html">Payment
                                            Methods</a></li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-review.html">Review</a>
                                    </li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-billing-address.html">Billing
                                            address</a></li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-shipping-address.html">Shipping
                                            address</a></li>
                                    <li>
                                        <a href="https://pixio.dexignzone.com/tailwind/demo/account-cancellation-requests.html">Cancellation
                                            Requests</a></li>

                                </ul>
                            </li>
                        </ul>
                        <div className="dz-social-icon">
                            <ul>
                                <li><a className="fab fa-facebook-f" target="_blank"
                                       href="https://www.facebook.com/dexignzone"></a></li>
                                <li><a className="fab fa-twitter" target="_blank"
                                       href="https://twitter.com/dexignzones"></a></li>
                                <li><a className="fab fa-linkedin-in" target="_blank"
                                       href="https://www.linkedin.com/showcase/3686700/admin/"></a></li>
                                <li><a className="fab fa-instagram" target="_blank"
                                       href="https://www.instagram.com/dexignzone/"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="extra-nav" x-data="{ tab: 'shoppingcart' }">
                        <div className="extra-cell">
                            <ul className="header-right">
                                <li className="nav-item login-link">
                                    <a className="nav-link border-b border-[#0000005c]" href="shop-my-account.html">
                                        Login / Register
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="offcanvas-btn" data-target="offcanvasTop">
                                        <i className="iconly-Light-Search"></i>
                                    </a>
                                </li>
                                <li><i className="iconly-Light-Heart2"></i>
                            </li>
                            <li>
                                <i className="iconly-Broken-Buy"></i>
                                <span
                                    className="absolute -top-1 right-0.5 text-[11px] flex items-center justify-center min-h-4.5 min-w-4.5 font-bold rounded-full bg-primary text-white">5</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
    </div>
    <div
        className="h-[580px] max-md:h-[470px] max-sm:!h-[440px] pt-13.5 max-md:pt-7.5 fixed z-[1045] flex flex-col duration-500 top-0 left-0 right-0 bg-light overflow-auto offcanvas offcanvas-top is-closed"
        tabIndex="-1" id="offcanvasTop">
        <button type="button"
                className="size-10 flex items-center justify-center absolute top-1.5 right-5 opacity-50 text-4.5xl offcanvas-close">
            &times;
        </button>
        <div className="container">
            <form className="block w-full mb-13.5 relative">
                <div className="relative flex flex-wrap items-center border-b-2 border-secondary pb-2">
                    <div
                        className="relative after:content-[''] after:absolute after:-translate-y-1/2 after:top-1/2 after:right-0 after:w-[1px] after:h-[35px] max-sm:after:h-6.1 after:bg-[#bbbbbbad]">
                        <select
                            className="nice-select bg-transparent border-0 float-none px-0 text-xl min-w-[270px] font-Lufga h-[45px] leading-[48px]">
                            <option>All Categories</option>
                            <option>Clothes</option>
                            <option>UrbanSkirt</option>
                            <option>VelvetGown</option>
                            <option>LushShorts</option>
                            <option>Vintage</option>
                            <option>Wedding</option>
                            <option>Cotton</option>
                            <option>Linen</option>
                            <option>Navy</option>
                            <option>Urban</option>
                            <option>Business Meeting</option>
                            <option>Formal</option>
                        </select>
                    </div>
                    <input type="search"
                           className="py-2.5 px-3.6 text-xl font-Lufga text-title outline-none flex-auto w-[1%] h-[45px] bg-light"
                           placeholder="Search Product"/>
                        <button className="btn" type="button">
                            <i className="iconly-Light-Search"></i>
                        </button>
                </div>
                <ul className="flex items-center flex-wrap py-2.5">
                    <li className="text-2sm py-1.1"><span>Quick Search :</span></li>
                    <li className="text-2sm py-1.1 px-3.6 "><a href="shop-list.html">Clothes</a></li>
                    <li className="text-2sm py-1.1 px-3.6 "><a href="shop-list.html">UrbanSkirt</a></li>
                    <li className="text-2sm py-1.1 px-3.6 "><a href="shop-list.html">VelvetGown</a></li>
                    <li className="text-2sm py-1.1 px-3.6 "><a href="shop-list.html">LushShorts</a></li>
                </ul>
            </form>
            <div className="row">
                <div className="w-full">
                    <h5 className="mb-4">You May Also Like</h5>
                    <div className="swiper category-swiper2">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="relative z-[1] h-full">
                                    <div className="rounded-3xl overflow-hidden relative">
                                        <img
                                            src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product/1.png"
                                            alt="image"/>
                                    </div>
                                    <div className="flex justify-between font-Lufga py-3">
                                        <h6><a href="shop-list.html">SilkBliss Dress</a></h6>
                                        <h6>$40.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="relative z-[1] h-full">
                                    <div className="rounded-3xl overflow-hidden relative">
                                        <img
                                            src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product/3.png"
                                            alt="image"/>
                                    </div>
                                    <div className="flex justify-between font-Lufga py-3">
                                        <h6><a href="shop-list.html">GlamPants</a></h6>
                                        <h6>$30.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="relative z-[1] h-full">
                                    <div className="rounded-3xl overflow-hidden relative">
                                        <img
                                            src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product/4.png"
                                            alt="image"/>
                                    </div>
                                    <div className="flex justify-between font-Lufga py-3">
                                        <h6><a href="shop-list.html">ComfyLeggings</a></h6>
                                        <h6>$35.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="relative z-[1] h-full">
                                    <div className="rounded-3xl overflow-hidden relative">
                                        <img
                                            src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product/2.png"
                                            alt="image"/>
                                    </div>
                                    <div className="flex justify-between font-Lufga py-3">
                                        <h6><a href="shop-list.html">ClassicCapri</a></h6>
                                        <h6>$20.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="relative z-[1] h-full">
                                    <div className="rounded-3xl overflow-hidden relative">
                                        <img
                                            src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product/5.png"
                                            alt="image"/>
                                    </div>
                                    <div className="flex justify-between font-Lufga py-3">
                                        <h6><a href="shop-list.html">DapperCoat</a></h6>
                                        <h6>$70.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="relative z-[1] h-full">
                                    <div className="rounded-3xl overflow-hidden relative">
                                        <img
                                            src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product/6.png"
                                            alt="image"/>
                                    </div>
                                    <div className="flex justify-between font-Lufga py-3">
                                        <h6><a href="shop-list.html">ComfyLeggings</a></h6>
                                        <h6>$45.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="relative z-[1] h-full">
                                    <div className="rounded-3xl overflow-hidden relative">
                                        <img
                                            src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product/7.png"
                                            alt="image"/>
                                    </div>
                                    <div className="flex justify-between font-Lufga py-3">
                                        <h6><a href="shop-list.html">DenimDream Jeans</a></h6>
                                        <h6>$40.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="relative z-[1] h-full">
                                    <div className="rounded-3xl overflow-hidden relative">
                                        <img
                                            src="https://pixio.dexignzone.com/tailwind/demo/assets/images/shop/product/4.png"
                                            alt="image"/>
                                    </div>
                                    <div className="flex justify-between font-Lufga py-3">
                                        <h6><a href="shop-list.html">SilkBliss Dress</a></h6>
                                        <h6>$60.00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        className="w-[485px] fixed z-[1045] flex flex-col max-full duration-500 top-0 bottom-0 right-0 bg-light right offcanvas is-closed"
        id="offcanvasLeft">
        <button type="button"
                className="size-10 flex items-center justify-center absolute top-1.5 right-5 opacity-50 text-4.5xl offcanvas-close">
            &times;
        </button>
        <div className="flex-grow overflow-y-auto py-14.5 px-[75px] max-sm:py-13.5 max-sm:px-3.6">
            <div className="product-description">
                <div className="mb-[45px] max-lg:mb-10 widget_search">
                    <div className="mb-10">
                        <div className="relative flex flex-wrap items-stretch w-full mb-5">
                            <input name="dzSearch" required="required" type="search"
                                   className="py-2.5 px-3.6 text-2sm text-title outline-none flex-auto w-[1%] rounded-xl border border-secondary bg-light"
                                   placeholder="Search Product"/>
                                <div className="absolute top-1/2 -translate-y-1/2 right-3.6 z-9">
                                    <button name="submit" value="Submit" type="submit">
                                        <i className="icon feather icon-search text-xl text-title"></i>
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="mb-[45px] max-lg:mb-10">
                    <h6 className="relative mb-6.1 font-medium">Price</h6>
                    <div className="price-slide range-slider">
                        <div className="price">
                            <div className="range-slider style-1">
                                <div id="slider-tooltips" className="mb-4"></div>
                                <span className="mr-7.5 text-sm" id="slider-margin-value-min"></span>
                                <span className="mr-7.5 text-sm" id="slider-margin-value-max"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-[45px] max-lg:mb-10">
                    <h6 className="relative mb-6.1 font-medium">Color</h6>
                    <div className="flex items-center flex-wrap color-filter ps-2">
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabel110" value="#000000"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabel210" value="#9BD1FF"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabel310" value="#21B290"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabel410" value="#FEC4C4"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabel510" value="#FF7354"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabel610" value="#51EDC8"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabel710" value="#B77CF3"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabel810" value="#FF4A76"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabel910" value="#3E68FF"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                        <div className="form-check">
                            <input
                                className="opacity-0 relative z-[2] cursor-pointer float-left mr-1 mb-1 form-check-input"
                                type="radio" name="radioNoLabel" id="radioNoLabe201" value="#7BEF68"
                                aria-label="..."/>
                                <span className="mr-3.6 size-4 block relative rounded-full z-1"></span>
                        </div>
                    </div>
                </div>

                <div className="mb-[45px] max-lg:mb-10">
                    <h6 className="relative mb-6.1 font-medium">Size</h6>
                    <div className="flex flex-wrap relative product-size">
                        <input type="radio" className="opacity-0 absolute pointer-events-none btn-check"
                               name="btnradio1" id="btnradio11"/>
                            <label form="btnradio11"
                                   className="size-[34px] leading-[34px] rounded-full text-center border border-secondary mr-2.5 mb-1.1">4</label>

                            <input type="radio" className="opacity-0 absolute pointer-events-none btn-check"
                                   name="btnradio1" id="btnradio21"/>
                                <label form="btnradio21"
                                       className="size-[34px] leading-[34px] rounded-full text-center border border-secondary mr-2.5 mb-1.1">6</label>

                                <input type="radio" className="opacity-0 absolute pointer-events-none btn-check"
                                       name="btnradio1" id="btnradio31"/>
                                    <label form="btnradio31"
                                           className="size-[34px] leading-[34px] rounded-full text-center border border-secondary mr-2.5 mb-1.1">8</label>

                                    <input type="radio" className="opacity-0 absolute pointer-events-none btn-check"
                                           name="btnradio1" id="btnradio41"/>
                                        <label form="btnradio41"
                                               className="size-[34px] leading-[34px] rounded-full text-center border border-secondary mr-2.5 mb-1.1">10</label>

                                        <input type="radio" className="opacity-0 absolute pointer-events-none btn-check"
                                               name="btnradio1" id="btnradio51"/>
                                            <label form="btnradio51"
                                                   className="size-[34px] leading-[34px] rounded-full text-center border border-secondary mr-2.5 mb-1.1">12</label>

                                            <input type="radio"
                                                   className="opacity-0 absolute pointer-events-none btn-check"
                                                   name="btnradio1" id="btnradio61"/>
                                                <label form="btnradio61"
                                                       className="size-[34px] leading-[34px] rounded-full text-center border border-secondary mr-2.5 mb-1.1">14</label>

                                                <input type="radio"
                                                       className="opacity-0 absolute pointer-events-none btn-check"
                                                       name="btnradio1" id="btnradio71"/>
                                                    <label form="btnradio71"
                                                           className="size-[34px] leading-[34px] rounded-full text-center border border-secondary mr-2.5 mb-1.1">16</label>

                                                    <input type="radio"
                                                           className="opacity-0 absolute pointer-events-none btn-check"
                                                           name="btnradio1" id="btnradio81"/>
                                                        <label form="btnradio81"
                                                               className="size-[34px] leading-[34px] rounded-full text-center border border-secondary mr-2.5 mb-1.1">18</label>

                                                        <input type="radio"
                                                               className="opacity-0 absolute pointer-events-none btn-check"
                                                               name="btnradio1" id="btnradio91"/>
                                                            <label form="btnradio91"
                                                                   className="size-[34px] leading-[34px] rounded-full text-center border border-secondary mr-2.5 mb-1.1">20</label>
                    </div>
                </div>
                <div className="mb-[45px] max-lg:mb-10 widget_categories">
                    <h6 className="relative mb-6.1 font-medium">Category</h6>
                    <ul>
                        <li className="py-2 text-right w-full text-2sm font-medium"><a
                            className="inline-block float-left duration-500 hover:text-primary"
                            href="blog-category.html">Dresses</a> (10)
                        </li>
                        <li className="py-2 text-right w-full text-2sm font-medium"><a
                            className="inline-block float-left duration-500 hover:text-primary"
                            href="blog-category.html">Top &amp; Blouses</a> (5)
                        </li>
                        <li className="py-2 text-right w-full text-2sm font-medium"><a
                            className="inline-block float-left duration-500 hover:text-primary"
                            href="blog-category.html">Boots</a> (17)
                        </li>
                        <li className="py-2 text-right w-full text-2sm font-medium"><a
                            className="inline-block float-left duration-500 hover:text-primary"
                            href="blog-category.html">Jewelry</a> (13)
                        </li>
                        <li className="py-2 text-right w-full text-2sm font-medium"><a
                            className="inline-block float-left duration-500 hover:text-primary"
                            href="blog-category.html">Makeup</a> (06)
                        </li>
                        <li className="py-2 text-right w-full text-2sm font-medium"><a
                            className="inline-block float-left duration-500 hover:text-primary"
                            href="blog-category.html">Fragrances</a> (17)
                        </li>
                        <li className="py-2 text-right w-full text-2sm font-medium"><a
                            className="inline-block float-left duration-500 hover:text-primary"
                            href="blog-category.html">Shaving &amp; Grooming</a> (13)
                        </li>
                        <li className="py-2 text-right w-full text-2sm font-medium"><a
                            className="inline-block float-left duration-500 hover:text-primary"
                            href="blog-category.html">Jacket</a> (06)
                        </li>
                        <li className="py-2 text-right w-full text-2sm font-medium"><a
                            className="inline-block float-left duration-500 hover:text-primary"
                            href="blog-category.html">Coat</a> (22)
                        </li>
                    </ul>
                </div>

                <div className="mb-[45px] max-lg:mb-10 widget_tag_cloud">
                    <h6 className="relative mb-6.1 font-medium">Tags</h6>
                    <div className="tagcloud">
                        <a className="relative border border-secondary py-2 px-3.6 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                           href="blog-tag.html">Vintage </a>
                        <a className="relative border border-secondary py-2 px-3.6 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                           href="blog-tag.html">Wedding</a>
                        <a className="relative border border-secondary py-2 px-3.6 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                           href="blog-tag.html">Cotton</a>
                        <a className="relative border border-secondary py-2 px-3.6 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                           href="blog-tag.html">Linen</a>
                        <a className="relative border border-secondary py-2 px-3.6 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                           href="blog-tag.html">Navy</a>
                        <a className="relative border border-secondary py-2 px-3.6 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                           href="blog-tag.html">Urban</a>
                        <a className="relative border border-secondary py-2 px-3.6 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                           href="blog-tag.html">Business Meeting</a>
                        <a className="relative border border-secondary py-2 px-3.6 inline-block mr-2.5 mb-2.5 text-sm leading-[1.4] rounded-xl duration-500 hover:bg-secondary hover:text-white"
                           href="blog-tag.html">Formal</a>
                    </div>
                </div>
                <a href="#"
                   className="btn py-2.5 px-3.6 text-2xs font-Lufga inline-block font-medium leading-[1.2] border border-secondary bg-secondary text-white rounded-xl duration-700 relative overflow-hidden ">RESET</a>
            </div>
        </div>
    </div>

</header>
</>;
}