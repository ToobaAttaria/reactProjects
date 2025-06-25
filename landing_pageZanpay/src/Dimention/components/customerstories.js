import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";


const reviews = [
    {
        name: "John Doe",
        pic: "https://randomuser.me/api/portraits/men/1.jpg",
        review: "Great service and support! The team was very helpful and quick to respond. I highly recommend their services.",
        status: "Verified Customer"
    },
    {
        name: "Jane Smith",
        pic: "https://randomuser.me/api/portraits/women/2.jpg",
        review: "Excellent quality and fast delivery. Everything arrived just as described. A wonderful shopping experience!",
        status: "Frequent Buyer"
    },
    {
        name: "Mike Johnson",
        pic: "https://randomuser.me/api/portraits/men/3.jpg",
        review: "Highly recommend! Amazing experience from start to finish. Their attention to detail is truly impressive.",
        status: "Satisfied Customer"
    },
    {
        name: "Emily Brown",
        pic: "https://randomuser.me/api/portraits/women/4.jpg",
        review: "Very professional and responsive. They made sure all my questions were answered. Will definitely shop again!",
        status: "Loyal Client"
    },
    {
        name: "Chris Wilson",
        pic: "https://randomuser.me/api/portraits/men/5.jpg",
        review: "Top-notch quality and great prices! I was impressed with the variety of products. Excellent value for money.",
        status: "Happy Buyer"
    },
    {
        name: "Sarah Taylor",
        pic: "https://randomuser.me/api/portraits/women/6.jpg",
        review: "Quick response and friendly staff. The customer service exceeded my expectations. A truly pleasant experience.",
        status: "Returning Customer"
    },
    {
        name: "David Martinez",
        pic: "https://randomuser.me/api/portraits/men/7.jpg",
        review: "Amazing experience, will buy again. The product quality was fantastic. I am extremely happy with my purchase.",
        status: "First-time Buyer"
    },
    {
        name: "Olivia Anderson",
        pic: "https://randomuser.me/api/portraits/women/8.jpg",
        review: "Five stars! Very satisfied. I couldn’t have asked for a better experience. Everything was perfect and seamless.",
        status: "Verified Buyer"
    },
    {
        name: "Daniel White",
        pic: "https://randomuser.me/api/portraits/men/9.jpg",
        review: "Customer service was exceptional. They went above and beyond to help me. Truly a company that cares about customers.",
        status: "Happy Customer"
    },
    {
        name: "Sophia Harris",
        pic: "https://randomuser.me/api/portraits/women/10.jpg",
        review: "Great experience overall. The process was smooth from start to finish. Highly recommend their products and services!",
        status: "Frequent Shopper"
    }
];

// function handleReview(arrowBtn){

//     const [btn,setBtn] = useState("");



// }



export default function CustomerStories() {


    const [next, setNext] = useState(0);
    function handleStyle(btn) {
        if(btn==="prev")
        {
            setNext(next-1)
        }
        else{
            setNext(next+1)
        }
    }




    return (
        <>
            <div className="CustomerStoriesContainer">
                <div className="StoriesHeader">
                    <h1>Customer Stories</h1>
                    <div className="ArrowBtnContainer">
                        <button  disabled={next === 0}               onClick={() =>handleStyle("prev")} ><IoMdArrowRoundBack /></button>
                        <button  disabled={next === reviews.length-1}  onClick={() =>handleStyle("next")} ><IoMdArrowRoundForward /></button>
                    </div>
                
                </div>

                <div className="Reviews-Stat">
                    <div className="slider">
                        {reviews.map((rev, index) => (
                            <div className="sliderOuterBox" >

                                <div className="sliderRiviews" style={{ transform: `translateX(${next * -104}%)` }} >
                                    <div className="customerReviews">
                                        <p>{rev.review}</p>

                                    </div>
                                    <div className="customerinfo">
                                        <img src={rev.pic} className="reviewPic" />
                                        <div>
                                            <h3>{rev.name}</h3>
                                            <p>{rev.status}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="ReviewsStat">
                        <div>
                            <span>100%</span>
                            <p>of users, like Hiroshi Bennett, find our solution secure and efficient.</p>

                            <span>98%</span>
                            <p>of users appreciate seamless integration with their financial tools.</p>



                        </div>
                    </div>


                </div>


            </div>
        </>
    );
}