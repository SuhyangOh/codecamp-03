import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const MyYoutube = styled(ReactPlayer)`
  border: 3px solid yellow;
`;

export default function LibraryYoutubePage() {
  return (
    <MyYoutube
      url="https://www.youtube.com/watch?v=P6ogXHC6zYI"
      width={800}
      height={600}
      playing={true}
      muted={true}
    />
  );
}
