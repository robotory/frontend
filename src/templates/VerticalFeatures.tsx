import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeaturesOne = () => (
  <Section
    title="Factory in a Box (FiaB)"
    description="A rapidly deployable, remotely managed, modular manufacturing supply chain network enabled by industrial digital technologies. Using recent advances in 2D Materials, 3D Printing, Manufacturing Technologies and Robotics.. "
  >
    <VerticalFeatureRow
      description="Creating robots that can be taught by anyone requires tackling some of the hardest challenges in the field of robotics. The Everyday Robot Project is developing a general-purpose learning robot that can operate autonomously in unstructured environments"
      image="/assets/images/coditor.svg"
      imageAlt="Coditor"
    />
  </Section>
);

const VerticalFeaturesTwo = () => (
  <Section
    title="A DIY small scale self-driving car"
    description="Roborg is a Self Driving Car Platform for hobby remote control cars. The Roborg Car is made up of several components as describe below..."
  >
    <VerticalFeatureRow
      description=" It is a high level self driving library written in Python. It was developed with a focus on enabling fast experimentation and easy contribution. It has a simulator that enables you to train the car without hardware"
      image="/assets/images/coditor.svg"
      imageAlt="Coditor"
    />
    <VerticalFeatureRow
      description=" It is an Open Source Hardware design that makes it easy for you to build your own car"
      image="/assets/images/simtropolis.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      description="It is a community of enthusiasts, students, developers and data scientists that enjoy racing, coding and discussing the future of ML, Cars and who will win the next race."
      image="/assets/images/robotory.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

const VerticalFeaturesThree = () => (
  <Section
    title="The Everyday Robot Project "
    description="The Everyday Robot Project is developing a general-purpose learning robot that can operate autonomously in unstructured environments."
  >
    <VerticalFeatureRow
      description="Creating robots that can be taught by anyone requires tackling some of the hardest challenges in the field of robotics. The Everyday Robot Project is developing a general-purpose learning robot that can operate autonomously in unstructured environments"
      image="/assets/images/coditor.svg"
      imageAlt="Coditor"
    />
    <VerticalFeatureRow
      description="Today, robots are expensive and perform highly specialized tasks. But what if a robot could be affordable and taught by just about anyone? They could help people with whatever they needed, doing tasks we haven't even dreamed up yet."
      image="/assets/images/simtropolis.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      description="Building robots that can operate autonomously in unstructured human environments and all terrains, like our homes, offices and outdoors, is a complex, unsolved problem. It requires tackling and integrating some of the hardest hardware and software challenges in the field of robotics today. The Everyday Robot Project is building a new type of learning robot — one that can eventually learn to help everyone, every day."
      image="/assets/images/robotory.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeaturesOne, VerticalFeaturesTwo, VerticalFeaturesThree };
