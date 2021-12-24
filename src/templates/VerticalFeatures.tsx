import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeaturesOne = () => (
  <Section
    title="Factory in a Box (FIAB)"
    description="A rapidly deployable, remotely managed, modular manufacturing supply chain network enabled by industrial digital technologies. Using recent advances in 2D Materials, 3D Printing, Manufacturing Technologies and Robotics.. "
  >
    <VerticalFeatureRow
      description="FIAB manufacture is a rapid route to market for products with a faster return on investment on its manufacturing innovation and new disruptive business models for the supply chain. FIAB allows automated, autonomous, intelligent manufacturing processes to be accessed at an affordable cost to SMEs and has the potential to revolutionise the innovation pipe line, where the transition to scale up and manufacture has often been a pinch point."
      image="/assets/images/coditor.svg"
      imageAlt="Coditor"
    />

    <VerticalFeatureRow
      description="Robotory proof of concept unit built and installed in a standard shipping container, includes all the equipment necessary to manufacture modular AMR robots. An autonomous mobile robot (AMR) is a type of robot that can understand and move through its environment without being overseen directly by an operator or limited to a fixed, predetermined path."
      image="/assets/images/simtropolis.svg"
      imageAlt="Second feature alt text"
      reverse
    />

    <VerticalFeatureRow
      description="Beyond rapid new product introduction, there a number of potential use cases for its factory-in-a-box concept. It could help established manufacturers to rapidly restart production after a disruptive event such as a fire or natural disaster. Or it could allow manufacturers to meet country-of-origin requirements, shifting their production footprint temporarily and producing sufficient volume to meet local market requirements"
      image="/assets/images/simtropolis.svg"
      imageAlt="Second feature alt text"
      reverse
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
