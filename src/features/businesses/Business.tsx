import React from "react";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import useWindowSize from "../../helpers/windowDimesions";
import {
  BusinessContainer,
  BusinessEstates,
  BusinessEthanol,
  BusinessTemplateDescription,
  BusinessTemplateImage,
  BusinessWrapper,
} from "../../styles/Home/businesses/Business.styles";

export const Business: React.FunctionComponent = () => {
  const { width } = useWindowSize();
  return (
    <>
      <BusinessContainer>
        <Title
          heading="Our Businesses"
          subHeading="All Chuks-Darls Nigerian Businesses"
        />

        <BusinessWrapper>
          <BusinessEthanol>
            <BusinessTemplateImage
              src="\assets\Chuks darls ethanols.png"
              alt="ethanols"
            />
            <BusinessTemplateDescription>
              <h3 className="business-name">Chuks Darls Ethanols</h3>
              <p className="business-subtitle">
                Major distributor of Ethanol in Nigeria
              </p>

              <Button text="Learn More" />
            </BusinessTemplateDescription>
          </BusinessEthanol>

          <BusinessEstates>
            {(width as number) > 791 ? (
              <>
                <BusinessTemplateDescription>
                  <h3 className="business-name">Chuks Darls Estates</h3>
                  <p className="business-subtitle">
                    Estates in the city of Aba
                  </p>

                  <Button text="Learn More" />
                </BusinessTemplateDescription>
                <BusinessTemplateImage
                  src="\assets\Chuks Darls Estates.png"
                  alt="estates"
                />
              </>
            ) : (
              <>
                <BusinessTemplateImage
                  src="\assets\Chuks Darls Estates.png"
                  alt="estates"
                />

                <BusinessTemplateDescription>
                  <h3 className="business-name">Chuks Darls Estates</h3>
                  <p className="business-subtitle">
                    Estates in the city of Aba
                  </p>

                  <Button text="Learn More" />
                </BusinessTemplateDescription>
              </>
            )}
          </BusinessEstates>
        </BusinessWrapper>
      </BusinessContainer>
    </>
  );
};
