"use client";
import Link from "next/link";
import {MoveLeft} from "lucide-react";

export default function Error() {
    return <>
        <div className="py-20">
            <div className="flex flex-col error-404 not-found justify-center items-center text-center gap-4">
                <div className="thumb mt-10">
                    <svg width="267" height="225" viewBox="0 0 277 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_519_1678)">
                            <path d="M164.161 18.4633L164.218 18.4491H49.1133V197.135H198.474V52.5722L164.161 18.4633Z" fill="#25D6F2"></path>
                            <path d="M192.52 29.5497L192.577 29.5355H77.4727V208.222H226.834V63.6445L192.52 29.5497Z" fill="#FF4363"></path>
                            <g opacity="0.2">
                                <path d="M204.34 20.0774L204.397 20.0491H89.293V198.735H238.654V54.1722L204.34 20.0774Z" fill="#FF4363"></path>
                            </g>
                            <g opacity="0.2">
                                <path d="M147.708 29.5497L147.765 29.5355H32.6602V208.222H182.021V63.6445L147.708 29.5497Z" fill="#25D6F2"></path>
                            </g>
                            <path d="M177.632 23.4473L177.675 23.4189H62.5703V202.119H211.931V57.542L177.632 23.4473Z" fill="white"></path>
                            <path d="M165.471 164.796C163.748 164.796 162.338 163.394 162.338 161.681C162.338 148.329 151.399 137.455 137.967 137.455C124.535 137.455 113.595 148.329 113.595 161.681C113.595 163.394 112.2 164.796 110.462 164.796C108.724 164.796 107.328 163.394 107.328 161.681C107.328 144.889 121.073 131.225 137.967 131.225C154.86 131.225 168.605 144.889 168.605 161.681C168.605 163.394 167.209 164.796 165.471 164.796Z" fill="#252C3E"></path>
                            <path d="M123.792 102.752L110.959 89.9943L123.792 77.223L117.098 70.5824L104.264 83.3396L91.4304 70.5824L84.75 77.2371L97.5837 89.9943L84.75 102.752L91.4304 109.392L104.264 96.6349L117.098 109.392L123.792 102.752Z" fill="#252C3E"></path>
                            <path d="M191.195 102.752L178.361 89.9943L191.195 77.223L184.514 70.5824L171.666 83.3396L158.833 70.5824L152.152 77.2371L164.986 89.9943L152.152 102.752L158.833 109.392L171.666 96.6349L184.514 109.392L191.195 102.752Z" fill="#252C3E"></path>
                            <path d="M119.052 38.569H15.2852V48.5227H119.052V38.569Z" fill="white"></path>
                            <path d="M79.6658 67.524H0V77.4778H79.6658V67.524Z" fill="white"></path>
                            <path d="M261.061 121.286H200.98V131.239H261.061V121.286Z" fill="white"></path>
                            <path d="M84.7524 174.212H24.6719V184.166H84.7524V174.212Z" fill="white"></path>
                            <path d="M242.857 89.9944H200.98V99.9481H242.857V89.9944Z" fill="#FF4363"></path>
                            <path d="M247.873 159.826H189.16V169.78H247.873V159.826Z" fill="#FF4363"></path>
                            <path d="M87.1155 126.255H28.4023V136.209H87.1155V126.255Z" fill="#25D6F2"></path>
                            <path d="M111.771 21.295H39.0273V31.2488H111.771V21.295Z" fill="#25D6F2"></path>
                            <path d="M231.035 184.166H158.277V194.119H231.035V184.166Z" fill="#25D6F2"></path>
                            <path d="M93.7802 215.046H49.2539V225H93.7802V215.046Z" fill="#25D6F2"></path>
                            <path d="M198.46 0H153.934V9.95375H198.46V0Z" fill="white"></path>
                            <path d="M39.0274 99.4384H13.0039V109.392H39.0274V99.4384Z" fill="white"></path>
                            <path d="M247.941 36.5585H221.918V46.5122H247.941V36.5585Z" fill="white"></path>
                            <path d="M274.078 65.6125H248.055V75.5663H274.078V65.6125Z" fill="#FF4363"></path>
                            <path d="M26.0235 148.018H0V157.971H26.0235V148.018Z" fill="#FF4363"></path>
                            <path d="M277 143.048H250.977V153.002H277V143.048Z" fill="#25D6F2"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_519_1678">
                                <rect width="277" height="225" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <h2 className="title">
                    <span className="main-title">500</span>
                    <span className="hover-title">500</span>
                </h2>
                <h4 className="sub-title text-2xl">Oops! Something Went Wrong</h4>
                <Link className="hl-btn big-btn lh-1 btn-base fs-18 text-uppercase fw-normal" href="/"> <MoveLeft className="mr-2 inline-block"/> Go Back Home</Link>
            </div>
        </div>

    </>;
}