import React from "react";

import { ContainerEducation } from "./Education.Styled";
import Typography from "@mui/material/Typography";
import VerticalT from "./VerticalT";
import { Box } from "@mui/system";

export default function Education() {
  return (
    <ContainerEducation>
      <Box>
        <Typography>Education</Typography>
      </Box>
      <Box>
        <VerticalT />
      </Box>
    </ContainerEducation>
  );
}
