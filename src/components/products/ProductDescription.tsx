import Box from "@component/Box";
import FlexBox from "@component/FlexBox";
import Grid from "@component/grid/Grid";
import Icon from "@component/icon/Icon";
import Typography, { H3, H4 } from "@component/Typography";
import { StaticImageData } from "next/image";

type Props = {
  // shops: Shop[];
  description: String;
};

export default function ProductDescription({description}: Props) {
  return (
    <div>
      <Typography color="#4B566B" fontSize="16px" p="20px 100px 0px 30px">
        {description}
      </Typography>
      
    </div>
  );
}
