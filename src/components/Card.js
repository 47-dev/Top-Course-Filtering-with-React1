import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-hot-toast';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(courseId) {
        console.log(courseId);
        //logic
        if(likedCourses.includes(courseId)) {
            //pehle se like hua pada hai toh usse like hata do
            var newLikedCourses = likedCourses.filter((cid) => (cid !== courseId));
            setLikedCourses(newLikedCourses);
            toast.error("Removed from liked courses");
        }
        else{
            // pehle se like nahi hua hai toh usse like kar do
            var newLikedCourses = [...likedCourses, courseId];
            setLikedCourses(newLikedCourses);
            toast.success("Added to liked courses");
        }

    }
    
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}/>

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={() => clickHandler(course.id)}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>
        

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
            <p className='mt-2 text-white'>
                    {
                        course.description.length >100 ? 
                        (course.description.substr(0,100)) + "..." :
                        (course.description)
                    }
            </p>
        </div>
    </div>
  )
}

export default Card
