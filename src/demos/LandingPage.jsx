import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";


export default () => {
    return (
        <AnimationRevealPage>
            <Hero />
            <Features />
            <Footer />
        </AnimationRevealPage>
    );
}
