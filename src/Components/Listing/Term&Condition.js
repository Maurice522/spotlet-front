import React from "react";
import { useSelector } from "react-redux";
import {
  selectLocationData,
  selectLocationId,
} from "../../redux/slices/locationSlice";
import { createLocation } from "../../services/api";
import { toast } from "react-toastify";
export default function TermCondition() {
  const location_id = useSelector(selectLocationId);
  const data = useSelector(selectLocationData);
  return (
    <div style={{ marginTop: "10%", marginLeft: "22%", width: "50%" }}>
      <h1>Term and Condition</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose injected humour and the
        like.
      </p>
      <div className="row1">
        <div className="coll1">
          <button
            className="continue"
            onClick={async () => {
              const locData = {
                data,
                location_id,
              };
              try {
                const response = await createLocation(locData);
                toast.success(response.data);
                window.location = "/";
              } catch (error) {
                toast.success(error.response.data);
              }
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
