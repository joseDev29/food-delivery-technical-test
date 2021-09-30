import { HeadlineContainer } from "./styles";

export const Headline = () => {
  return (
    <HeadlineContainer>
      <img className="headline-image" src="/images/head_image.png" alt="" />

      <div className="headline-text">
        <h3>
          $0 delivery for 30 days! <span></span>
        </h3>
        <h5>$0 delivery fee for orders over 10$ for 30 days!</h5>
      </div>

      <span className="headline-link">
        Learn more
        <span className="material-icons-round">arrow_forward</span>
      </span>
    </HeadlineContainer>
  );
};
