import React from "react";

const reviewCard = ({ course_id, body }) => {
    // const { name, email } = props;
    return (

        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            {/* <img alt='robots' src={`http://robohash.org/${id}?200x200`} /> */}
            <div>

                <h2>{course_id}</h2>
                <p>{body}</p>


            </div>





        </div>
    );
}

export default reviewCard;