import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";

function LoaderSkeleton() {
  return (
    <Grid>
      <Skeleton variant="rectangular" height={266} className="rounded-2xl" />
      <div className="w-full flex justify-between my-1.5">
        <Skeleton height={30} className="w-[100px]" />
        <Skeleton height={30} className="w-12" />
      </div>
      <Skeleton />
      <Skeleton height={50} />
      <Skeleton />
      <Skeleton />
      <Skeleton width="50%" height={65} />
    </Grid>
  );
}

LoaderSkeleton.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <LoaderSkeleton loading />
    </Box>
  );
}
