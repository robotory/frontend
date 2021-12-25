import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeaturesOne = () => (
  <Section
    title="Factory in a Box (FIAB)"
    description="Revolutionizing the way companies manufacture, improve and distribute their products. A rapidly deployable, remotely managed, modular manufacturing supply chain network enabled by industrial digital technologies. Using recent advances in 2D Materials, 3D Printing, Manufacturing Technologies and Robotics.. "
  >
    <VerticalFeatureRow
      title="FIAB Manufacture"
      description="A rapid route to market for products with a faster return on investment on its manufacturing innovation and new disruptive business models for the supply chain. Allows automated, autonomous, intelligent manufacturing processes to be accessed at an affordable cost to SMEs and has the potential to revolutionise the innovation pipe line."
      image="/assets/images/FIAB-3DMetal-Printer.svg"
      imageAlt="Robotory"
    />
  </Section>
);

const VerticalFeaturesTwo = () => (
  <Section
    title="A DIY small scale self-driving car"
    description="A Self Driving Car Platform for hobby remote control cars. The Roborg Car is made up of several components as describe below. It is a community of enthusiasts, students, developers and data scientists that enjoy racing, coding and discussing the future of ML, Cars and who will win the next race."
  >
    <VerticalFeatureRow
      title="Open source software and hardware platform"
      description="It involves a high level self driving library written in Python. It was developed with a focus on enabling fast experimentation and easy contribution. It has a simulator that enables you to train the car without hardware. A hardware design that makes it easy for you to build and customise your own car."
      image="/assets/images/Pi-Axial-SCX10.svg"
      imageAlt="Robopilot"
    />
  </Section>
);

const VerticalFeaturesThree = () => (
  <Section
    title="Robotic systems for an unstructured world"
    description="Creating robots that can be taught by anyone requires tackling some of the hardest challenges in the field of robotics. The Everday Robot Project is developing a general-purpose learning robot that can operate autonomously in unstructured environments. Today, robots are expensive and perform highly specialized tasks. But what if a robot could be affordable, built and taught by just about anyone? They could help people with whatever they needed, doing tasks we haven't even dreamed up yet."
  >
    <VerticalFeatureRow
      title="Perception, Manipulation and Navigation "
      description="Cameras and sophisticated machine learning models help robots see and understand the world. The robot is designed to grasp, move, and interact with all kinds of everyday objects. Using data from its sensors to create an understanding of what it is seeing, hearing, and where it is in the world, allowing it to safely perform useful tasks among people in everyday environments."
      image="/assets/images/TERP-feature.svg"
      imageAlt="Roborg"
    />
  </Section>
);

export { VerticalFeaturesOne, VerticalFeaturesTwo, VerticalFeaturesThree };
