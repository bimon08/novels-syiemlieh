import InvestmentFeaturesAndAwards from "@/components/InvestmentFeaturesAndAwards";
import InvestmentLanding from "@/components/InvestmentLanding";
import InvestmentTheProcess from "@/components/InvestmentTheProcess";
import React from "react";
import InvestmentQuestionsAndAnswers from "@/components/InvestmentQuestionsAndAnswers";
import InvestmentHappyCouples from "@/components/InvestmentHappyCouples";
import InvestmentDestinationWeddings from "@/components/InvestmentDestinationWeddings";
import InvestmentWeddingAndElopement from "@/components/InvestmentWeddingAndElopement";

const Investment = () => {
  return (
    <>
      <InvestmentLanding />
      <InvestmentFeaturesAndAwards />
      <InvestmentQuestionsAndAnswers />
      <InvestmentTheProcess />
      <InvestmentHappyCouples />
      <InvestmentDestinationWeddings/>
      {/* <InvestmentWeddingAndElopement /> */}
    </>
  );
};

export default Investment;
