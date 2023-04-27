import { Box, useMediaQuery } from "@mui/material"
import { Nav } from "../../component/Nav"
import UserWidget from "../../component/UserWidget";
import { useSelector } from "react-redux";
import MyPostWidget from "../../component/MyPostWidget";
import PostsWidget from "../../component/PostsWidget";
import AdvertWidget from "../../component/AdvertWidget";
import FriendListWidget  from "../../component/FriendListWidget";
// import { Nav } from "../../component/Nav"

export const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picture } = useSelector((state) => state.user);
  return (
    <Box>
      <Nav/>
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picture={picture} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picture} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
    </Box>
    </Box>
  )
}
