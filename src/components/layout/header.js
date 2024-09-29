import Link from "next/link";
import app from "@/config/app";
import Image from "next/image";
import {Search} from "lucide-react";

export default function Header({}) {
    return <>
        <header className="site-header mo-left header style-2">
            <div className="bg-light2 relative z-99 max-lg:hidden">
                <div className="container relative">
                    <div className="flex align-middle float-left items-center relative py-3">
                        <Link href="/" className="mr-6 flex flex-row items-center gap-2 w-fit">
                            <Image src={app.logo.default} alt={app.name} title={app.name} width={64} height={64}/>
                            <div className="flex flex-col gap-1">
                                <span className="hidden font-bold sm:inline-block text-3xl">{app.name}</span>
                                <span className="text-xs text-primary">A Kuboid Product</span>
                            </div>
                        </Link>
                    </div>

                    <div className="flex">
                        <form className="h-[90px] w-full ml-[120px] max-xl:ml-14.5 items-center flex relative">
                            <div className="relative flex flex-wrap items-center bg-white rounded-xl py-1.1 w-full">
                                <div className="relative px-4">
                                    How to grow
                                </div>
                                <input type="text" className="py-2.5 px-5 text-2sm text-title outline-none flex-auto w-[1%] h-[45px]" aria-label="Search input" placeholder="Tamato (Search for any plants like vegitables, fruits, ornamental plants etc.)"/>
                                <button className="absolute right-0 size-12 justify-center inline-flex items-center" type="button">
                                    <Search className="text-secondary"/>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="sticky-header main-bar-wraper navbar-expand-lg">
                <div className="main-bar relative after:block after:content-[''] after:clear-both">
                    <div className="container after:block after:content-[''] after:clear-both lg:flex block">
                        <button className="navbar-toggler navicon justify-end" type="button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <div className="header-nav w3menu navbar-collapse justify-start" id="navbarNavDropdown">
                            <ul className="nav navbar-nav">
                                <li className="has-mega-menu sub-menu-down">
                                    <Link href="/"><span>Home</span><i className="fas fa-chevron-down tabindex"></i></Link>
                                </li>
                                <li className="has-mega-menu sub-menu-down">
                                    <a href="#"><span>How to Grow</span><i className="fas fa-chevron-down tabindex"></i></a>
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
                                    href="#"><span>DIY Natural Products</span><i
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
                                <li className="has-mega-menu sub-menu-down">
                                    <Link href="/"><span>Do you know?</span><i className="fas fa-chevron-down tabindex"></i></Link>
                                </li>
                                <li className="has-mega-menu sub-menu-down">
                                    <Link href="/"><span>Wiki</span><i className="fas fa-chevron-down tabindex"></i></Link>
                                </li>
                                <li className="has-mega-menu sub-menu-down">
                                    <Link href="/"><span>Blog</span><i className="fas fa-chevron-down tabindex"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>;
}