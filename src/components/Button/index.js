import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentThunk } from "../../store/modules/user/thunks";

const Button = () => {
  const [newComment, setNewComment] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <div>
      <div>
        <h1>{user.name}</h1>
        {user.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
      <input
        type="text"
        placeholder="digite seus comentários"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={() => dispatch(addCommentThunk(newComment))}>
        New Comment
      </button>
    </div>
  );
};

export default Button;
