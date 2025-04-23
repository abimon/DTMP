import { H1 } from "@component/Typography";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
// STYLED COMPONENT
import { Wrapper } from "./styles";

export default function Section1() {
  return (
    <Wrapper>
      <H1>
        Everything you need for your
        <span style={{ display: 'block', paddingRight: '145px' }}>digital transformation</span>
      </H1>

      <div className="searchBox">
        <TextField
          fullwidth
          placeholder="Search anything you want"
          endAdornment={<Button>Search</Button>}
        />
      </div>
    </Wrapper>
  );
}
