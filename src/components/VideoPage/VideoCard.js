import Typography from "@mui/material/Typography";

import "./VideoCard.css";

const VideoCard = ({ channelName, image, vidName, url }) => {
  return (
    <div className="mainCard">
      <iframe
        src={url}
        frameBorder="0"
        width="700px"
        height="400px"
        className="mainVid"
      />
      <div className="videoInformation">
        <Typography
          variant="h6"
          sx={{ width: "700px", mt: "10px", mb: "20px" }}
        >
          {vidName}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: "#AAAAAA", mb: "20px" }}>
          333,352 views · Sep 11, 2019
        </Typography>
        <div className="channelDetails">
          <img srcSet={image} alt="" />
          <div className="channelInformation">
            <div className="channelName">
              <Typography variant="subtitle1">{channelName}</Typography>
              <Typography variant="subtitle2" sx={{ color: "#AAAAAA" }}>
                52K subscribers
              </Typography>
              <div className="vidDescription">
                <Typography variant="subtitle2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quibusdam delectus illum, exercitationem odio maiores quaerat
                  perspiciatis ex alias sunt harum facere, est optio labore sed
                  quam? Expedita, animi. Deserunt accusamus dignissimos itaque.
                  <br />
                  <br />
                  Assumenda vero quibusdam aliquam omnis corrupti impedit
                  deserunt iste repellendus quaerat error perferendis
                  blanditiis, temporibus deleniti autem quis ratione eos
                  accusantium minima reprehenderit magnam.
                  <br />
                  <br />
                  Consequuntur dicta praesentium culpa, neque alias qui
                  inventore quam iusto assumenda amet commodi vero obcaecati.
                  <br />
                  <br />
                  fugiat eum libero tempora distinctio expedita, numquam
                  dignissimos doloremque itaque magni aliquam est eveniet!
                  Tempora blanditiis eius quibusdam.
                </Typography>
              </div>
            </div>
            <div className="subscribeBtn">
              <Typography variant="subtitle1">SUBSCRIBE</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
