import styled from "styled-components";

export const ListingContainer = styled.div`
  padding: 1rem;
`;

export const ListingWrapper = styled.div`
  padding: 0 20%;

  @media (max-width: 1250px) {
    padding: 0 10%;
  }
  @media (max-width: 991px) {
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    padding: 0;
  }
`;

export const OrderFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
`;

export const OrderFormWrapperTitle = styled.h1`
  font-size: 1.6rem;
  color: #0f1daa;
  margin: 0;
  padding: 0;
`;

export const OrderFormTemplate = styled.form``;

export const OrderFormImputContainer = styled.div`
  margin: 1rem 0;
`;

export const OrderFormImput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: 1px solid rgb(150, 150, 150);
  outline: none;
`;

export const OrderFormEstateBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const OrderFormEstateBoxGroup = styled.div`
  padding: 0;
`;

export const OrderFormEstateBox = styled.div`
  width: 100%;
  height: 250px;
  border: 1px solid rgb(150, 150, 150); ;
`;

export const OrderFormEstateBoxTextarea = styled.textarea`
  width: 100%;
  padding: 1rem 1.5rem;
  outline: none;
  border: 1px solid rgb(150, 150, 150);
`;

export const OrderFormSubmit = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  text-align: center;
  background: #0f1daa;
  color: #fff;
  border: none;
`;

export const ListingGalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 85vh;
  scrollbar-width: 1px;
  scrollbar-color: ##0f1daa;

  /* Chrome, Edge, and Safari */

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ##0f1daa;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

  gap: 2rem;
  padding: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const ListingGalleryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  .image-container {
    height: 250px;
    margin: 0;
    padding: 0;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const ListingGalleryCardDetails = styled.div`
  p {
    margin: 0.5rem 0 0.5rem 1rem;
    font-size: 0.8rem;
  }
  .listing-type {
    color: #333;
    text-transform: uppercase;
    font-weight: 700;
  };

  .listing-price {
    font-size: 1.3rem;
    font-weight: 400;
  }

  .listing-description {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-top: 0.5px solid rgb(209, 213, 219);
    border-bottom: 0.5px solid rgb(209, 213, 219);

    .count-title {
        font-size: 0.8rem;

        @media (max-width: 420px) {
            margin-left: 0.2rem;
        }
    }
    span {
        font-weight: 700;
        color: #111;
    }
    .bedroom-count,
    .bathroom-count {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .svg {
        width: 20px;
        height: 20px
        object-fit: contain;
      }
    }
  }

`;

export const ListingRealtor = styled.div`
  padding: 0 1rem;

  .realtor-title {
    color: #333;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
  }
  .realtor-name {
    color: #111;
    font-weight: bold;
    font-size: 0.8rem;
  }

  .realtor-cell {
    color: #333;
    font-weight: 400;
    font-size: 0.8rem;
  }

  span {
    font-size: 0.7rem;
    color: #333;
    font-style: italic;
  }

  .btngrp {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    a {
      padding: 0.7rem 1rem;
      background-color: #ffc107;
      width: 100%;
      font-size: 1rem;
      line-height: 1.3;
      cursor: pointer;
      transition: all 0.33s ease;
      text-align: center;
      text-decoration: none;
      color: #fff;
      border: none;
      &:hover {
        background-color: #fff8eb;
        border: 0.5px solid #ffc107;
        color: #333;
      }
      @media (max-width: 768px) {
        font-size: 0.9rem;
      }
      @media (max-width: 500px) {
        font-size: 0.8rem;
        padding: 0.5rem;
      }
    }
  }
`;
