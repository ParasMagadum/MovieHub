import { FaStar } from "react-icons/fa";

function ReviewCard({ review }) {
  return (
    <div className="bg-[#1b1b1b] rounded-xl p-6 hover:bg-[#252525] transition">

      <div className="flex justify-between items-center">

        <h3 className="text-xl font-semibold">
          {review.name}
        </h3>

        <div className="flex items-center gap-2 text-yellow-400">

          <FaStar />

          <span>{review.rating}</span>

        </div>

      </div>

      <p className="text-gray-300 mt-5 leading-7">
        {review.comment}
      </p>

    </div>
  );
}

export default ReviewCard;