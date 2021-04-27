import { faTags, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import ProductOtions from "./ProductOtions";

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eeeeee;
  margin: 8px 0;
`;

const ProductDetailBlock = styled.div`
  width: 100%;
  /* min-height: calc(100vh); */
`;

const ProductMargin = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

const ProductContainer = styled.div`
  width: 1240px;
  /* min-height: calc(100vh); */
  display: flex;
  position: relative;
  margin: 0 auto;
  /* border: 3px solid black; */
`;

const LeftDetail = styled.div`
  width: 880px;
  height: 2000px;
  /* border: 3px solid black; */
`;

const Category = styled.div`
  padding: 20px 40px 0 0;
`;

const ProductInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 40px 0 0;
`;

const ProductImage = styled.img`
  width: 410px;
  height: 410px;
`;

const ProductInfo = styled.div`
  padding-left: 16px;
`;

const ProductTitle = styled.div`
  font-size: 25px;
  /* border: 1px solid red; */
`;
const ProductPrice = styled.div`
  font-size: 20px;
  /* border: 1px solid red; */
`;
const ProductCoupon = styled.div`
  /* border: 1px solid red; */
`;

const InfoTitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoTitle = styled.div`
  font-weight: bold;
  margin-left: 8px;
`;

const CouponContents = styled.div`
  font-size: 16px;
  padding: 16px;
  /* border: 1px solid red; */
`;

const ProductArrivalDate = styled.div`
  /* border: 1px solid red; */
`;

const RightDetail = styled.div`
  width: 360px;
  height: calc(100vh - 155px);
  position: sticky;
  top: 0px;
  border-left: 1px solid #eee;
  /* border: 3px solid black; */

  ${(props) =>
    props.fixed &&
    css`
      height: calc(100vh - 85px);
      top: 85px;
    `}
`;

//하단 구매하기 버튼 및 최종 결과 값들을 보여주는 SC요소들
const BuyProduct = styled.div`
  width: 320px;
  position: absolute;
  bottom: 0;
  right: 16px;
  left: 16px;
  /* border: 1px solid black; */
  padding: 16px 0;
`;

const ResultPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const TotalCount = styled.div`
  color: red;
  font-size: 15px;
`;

const TotalPrice = styled.div`
  color: red;
`;

const PriceValue = styled.span`
  font-size: 26px;
  font-weight: bold;
`;

const Unit = styled.span`
  font-size: 24px;
`;

const DecisionMenu = styled.div`
  width: 100%;
  display: flex;
  padding-top: 16px;
  border-top: 1px solid #f4f4f4;
`;

const ShoppingCart = styled.button`
  flex-grow: 1;
  background-color: white;
  border: 1px solid #bac8ff;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;

const Buying = styled.button`
  flex-grow: 1;
  background-color: #bac8ff;
  background: linear-gradient(
    90deg,
    rgba(186, 205, 255, 1) 0%,
    rgba(186, 200, 255, 1) 35%,
    rgba(186, 216, 255, 1) 100%
  );
  color: white;
  border: none;
  line-height: 60px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 4px;
`;

const ProductDetail = () => {
  const [navbar, setNavbar] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const { options } = useSelector(({ product }) => ({
    options: product.productdetail.options,
  }));

  const onScrollNavbar = () => {
    if (window.scrollY > 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollNavbar);
    return () => {
      window.removeEventListener("scroll", onScrollNavbar);
    };
  }, []);

  useEffect(() => {
    let count = 0;
    let price = 0;
    options.forEach((option) => {
      count += +option.count;
      price += option.totalPrice;
    });
    setTotalCount(count);
    setTotalPrice(price);
  }, [options]);

  return (
    <ProductDetailBlock>
      <ProductMargin>
        <ProductContainer>
          <LeftDetail>
            <Category>홈 쇼핑</Category>
            <ProductInfoBlock>
              <ProductImage src="/image/2546638124_B.jpg" />
              <ProductInfo>
                <ProductTitle>
                  락브로스 스마트 자동센서 자전거 후미등 인공지능 LED S8
                </ProductTitle>
                <ProductPrice>
                  <strong style={{ fontSize: "30px" }}>
                    {numberWithCommas(21800)}
                  </strong>
                  원
                </ProductPrice>
                <Divider />

                <ProductCoupon>
                  <InfoTitleBlock>
                    <FontAwesomeIcon icon={faTags} size={20} />
                    <InfoTitle>쿠폰가</InfoTitle>
                  </InfoTitleBlock>
                  <CouponContents>
                    추가로 할인되는 쿠폰이 있습니다.
                  </CouponContents>
                </ProductCoupon>
                <Divider />
                <ProductArrivalDate>
                  <InfoTitleBlock>
                    <FontAwesomeIcon icon={faTruck} size={20} />
                    <InfoTitle>무료배송</InfoTitle>
                  </InfoTitleBlock>
                </ProductArrivalDate>
              </ProductInfo>
            </ProductInfoBlock>
          </LeftDetail>
          <RightDetail fixed={navbar ? true : false}>
            <ProductOtions />
            <BuyProduct>
              <ResultPrice>
                <TotalCount>총 {totalCount}개</TotalCount>
                <TotalPrice>
                  <PriceValue>{numberWithCommas(totalPrice)}</PriceValue>
                  <Unit>원</Unit>
                </TotalPrice>
              </ResultPrice>
              <div>
                {/* 참고사항: 쿠폰,안내사항 적을 게 있다면 적는 곳 */}
                <div></div>
                <DecisionMenu>
                  <ShoppingCart>장바구니</ShoppingCart>
                  <Buying>구매하기</Buying>
                </DecisionMenu>
              </div>
            </BuyProduct>
          </RightDetail>
        </ProductContainer>
      </ProductMargin>
    </ProductDetailBlock>
  );
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default ProductDetail;
