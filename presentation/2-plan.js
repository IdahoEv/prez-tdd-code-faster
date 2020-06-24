import React from "react";
import {
    Heading,
    Text,
    Appear,
    Link,
    Image,
    Code,
    List,
    ListItem,
    CodePane
} from "spectacle";
import ShortList from "../src/short-list.js";

import preloader from "spectacle/lib/utils/preloader";

const images = {
    engineers: require("../assets/images/engineers.jpg"),
    doctors: require("../assets/images/doctors.jpg"),
};

// preloader([images.dna, images.groningen]);

export const Title = {
    bgColor: "titlecard",
    slide: () =>
        <div>
        <Heading size={1} textColor="white" textFont="tertiary">
          2.Planning
        </Heading>
        </div>
};

export const Smart = {
  slide: () =>
  <div>
    <Heading size={1} >
       Programmers are Smart
    </Heading>
    <Appear>
      <Heading size={2} textFont="secondary" margin="1em auto" textColor="secondary">
         But Smart isnt Enough
      </Heading>
    </Appear>
  </div>
}

export const Professionals = {
  slide: () =>
  <div>
  <Heading size={1} fit>
     The Professional Process:
  </Heading>
    <Heading size={2}>
    1. Plan
    </Heading>
    <Heading size={2}>
    2. Execute
    </Heading>
    <Heading size={2}>
    3. Validate
    </Heading>
  </div>
}

// export const Engineers = {
//   slide: () =>
//   <Image src={images.engineers.replace("/", "")} margin="0" width="100%"></Image>
// };
// export const Doctors = {
//   slide: () =>
//   <Image src={images.doctors.replace("/", "")} margin="0" width="100%"></Image>
// };
//
//
// export const Engineers2 = {
//   slide: () =>
//     <div>
//       <Heading size={1} >
//          Engineers:
//       </Heading>
//       <Heading size={2}>
//         1. Blueprint
//       </Heading>
//       <Heading size={2}>
//         2. Construction
//       </Heading>
//       <Heading size={2}>
//         3. Inspection
//       </Heading>
//     </div>
// };
//
// export const Doctors2 = {
//   slide: () =>
//     <div>
//       <Heading size={1} >
//         Doctors
//       </Heading>
//       <Heading size={2}>
//         1. Surgical Plan
//       </Heading>
//       <Heading size={2}>
//         2. Surgery
//       </Heading>
//       <Heading size={2}>
//         3. Post-Op
//       </Heading>
//     </div>
// };



export const Why0 = {
  slide: () =>
  <div>
    <Heading size={1} >
      Why does this process work?
    </Heading>
  </div>
};


export const Why1 = {
  slide: () =>
  <div>
    <Heading size={1} >
      Separate cognitive work into stages
    </Heading>
    <Heading size={2} >
      To reduce errors and speed execution
    </Heading>
  </div>
};

export const Why2 = {
  slide: () =>
  <div>
    <Heading size={1} >
      1. Plan
    </Heading>
    <Appear>
      <Heading size={2} >
        What am I doing, and how will I do it?
      </Heading>
    </Appear>
    <Appear>
      <Heading size={3} >
        ... and document it!
      </Heading>
    </Appear>
  </div>
};

export const Why3 = {
  slide: () =>
  <div>
    <Heading size={1}>
      2. Execute
    </Heading>
    <Appear>
      <Heading size={2}>
        This part is easy now!
      </Heading>
    </Appear>
    <Appear>
      <Heading size={3}>
        You're just following the plan
      </Heading>
    </Appear>
  </div>
};

export const Why4 = {
  slide: () =>
  <div>
    <Heading size={1} >
      3. Validate
    </Heading>
    <Appear>
      <Heading size={2} >
        Check that execution went to plan
      </Heading>
    </Appear>
  </div>
};

export const Plan2 = {
  slide: () =>
    <table>
      <thead>
        <tr>
          <td></td>
          <td><Heading size={4}>Plan</Heading></td>
          <td><Heading size={4}>&nbsp;Execute&nbsp;</Heading></td>
          <td><Heading size={4}>Validate</Heading></td>
        </tr>
      </thead>
      <tbody>
      <Appear>
      <tr>
        <td>Engineering&nbsp;&nbsp;</td>
        <td>Blueprint</td>
        <td>Construct</td>
        <td>Inspect</td>
      </tr>
      </Appear>
      <Appear>
      <tr>
        <td>Surgery&nbsp;&nbsp;</td>
        <td>Surgical Plan</td>
        <td>Operation</td>
        <td>PostOp</td>
      </tr>
      </Appear>
      </tbody>
    </table>
};

export const Programmers = {
  slide: () =>
    <div>
      <Heading size={1} >
        So What About Programming?
      </Heading>
    </div>
};

export const Programmers3 = {
  slide: () =>
    <div>
      <Heading size={1} >
        But writing tests <em>beforehand</em>
      </Heading>
      <Appear>
      <Heading size={2} >
        Is also <em>making a plan before coding</em>
      </Heading>
      </Appear>
    </div>
};

export const Validation = {
  slide: () =>
    <div>
      <Heading size={1} >
        Tests obviously provide
      </Heading>
      <Appear><Heading size={2} >Validation</Heading></Appear>
      <Appear><Heading size={2} textColor="black">But what&#39;s the plan...?</Heading></Appear>
    </div>
};

export const TDDDefined = {
  slide: () =>
    <div>
      <Heading size={1}>
        TDD Defined:
      </Heading>
      <List ordered>
        <Appear><ListItem>Describe correct behavior in a test</ListItem></Appear>
        <Appear><ListItem>Run the test, observe that it fails</ListItem></Appear>
        <Appear><ListItem>Write code</ListItem></Appear>
        <Appear><ListItem>Run the test, observe that it passes</ListItem></Appear>
        <Appear><ListItem>Refactor code</ListItem></Appear>
        <Appear><ListItem>Run the test, observe that it passes</ListItem></Appear>
      </List>
    </div>
};


export const TDDDefined2 = {
  slide: () =>
    <div>
      <Heading size={1}>
        TDD Defined:
      </Heading>
      <Appear><Heading size={2} textColor="red">Red</Heading></Appear>
      <Appear><Heading size={2}>Green</Heading></Appear>
      <Appear><Heading size={2} textColor="black">Refactor</Heading></Appear>
    </div>
};
