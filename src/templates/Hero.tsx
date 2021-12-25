import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/robotory">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Get Involved</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Advancing the state of\n'}
            <span className="text-primary-500">robotics and automation</span>
            {'\nacross the world.\n'}
          </>
        }
        description="For suppose that every tool we had could perform its task, either at our bidding or itself perceiving the need, of their own accord."
        button={
          <Link href="#">
            <a>
              <Button xl>Get Involved</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
