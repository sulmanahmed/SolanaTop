// import React from "react";
// import styled from "styled-components";
// import Header from "./header";
// import AirdropCard from "./airdrop-card";
// import ProjectDetails from "./project-details";

// const HomeContainer = styled.div`
//   background: #0d0d1d;
//   min-height: 100vh;
//   color: white;
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   padding: 20px;
//   gap: 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     padding: 20px;
//   }
// `;

// const Home: React.FC = () => {
//   return (
//     <HomeContainer>
//       <Header />
//       <ContentWrapper>
//         <AirdropCard />
//         <ProjectDetails />
//       </ContentWrapper>
//     </HomeContainer>
//   );
// };

// export default Home;

import React from "react";
import styled from "styled-components";
import Header from "./header";
import AirdropCard from "./airdrop-card";
import ProjectDetails from "./project-details";

const HomeContainer = styled.div`
  background: #0d0d1d;
  min-height: 100vh;
  color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start; /* Prevents height stretch between children */
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Header />
      <ContentWrapper>
        <AirdropCard />
        <ProjectDetails />
      </ContentWrapper>
    </HomeContainer>
  );
};

export default Home;
