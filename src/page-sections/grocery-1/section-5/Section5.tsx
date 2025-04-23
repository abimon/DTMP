import Link from "next/link";
import { Button } from "@component/buttons";
import { H1, Paragraph } from "components/Typography";
export default function Section5() {
  return (
    <div style={{ marginBottom: "40px", padding: "50px", backgroundColor: "#F2F3F4", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ flex: 3 }}>
        <Paragraph fontSize={40} fontWeight={600} mb={27}>Ready to Accelerate Your Digital Transformation?</Paragraph>
        <Paragraph fontSize={18} fontWeight={400} mb={40}>
          DTMP accelerates your digital transformation with personalized blueprints, hands-on services, and insightful analytics—driving efficiency, agility, and long-term success for your organization.
        </Paragraph>
      </div>

      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <Link href="/grocery-2">
          <Button color="primary" variant="contained">
            Go to marketplace
          </Button>
        </Link>
      </div>
    </div>
  );
}
