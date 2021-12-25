import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Want to help and contribute towards this vision?"
      subtitle="Join us on simtropolis network!🎆🎉"
      button={
        <Link href="#">
          <a>
            <Button>Get Involved</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
