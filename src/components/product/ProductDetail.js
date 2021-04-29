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
  /* height: 2000px; */
  height: 100%;
  /* border: 3px solid black; */
  margin-right: 20px;
  border: 1px solid red;
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

const DateInfo = styled.div`
  font-size: 20px;
`;

const ProductInfoMain = styled.div`
  width: 100%;
  border: 1px solid blue;
`;
const InfoMainMenuBlock = styled.div`
  display: flex;
  border: 1px solid green;
`;
const InfoMainMenu = styled.div`
  flex: 1;
  /* border: 1px solid red; */
`;

const InfoContents = styled.div`
  margin-top: 50px;
  border-top: 1px solid #bbbbbb;
`;

const InfoRow = styled.div`
  display: flex;
  flex: 1;
  border-bottom: 1px solid #eeeeee;
`;

const InfoRowCol = styled.div`
  display: flex;
  flex: 1;
`;

const InfoRowTitle = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  padding: 16px;
  background-color: #fafafa;
  font-size: 13px;

  /* border: 1px solid blue; */
`;

const InfoRowContents = styled.div`
  flex: 1;
  font-size: 13px;
  padding: 16px;
`;

const Review = styled.div``;
const QNA = styled.div``;
const SellerInfo = styled.div``;

//오른쪽 디테일
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

  const getTodayDate = () => {
    const DAY = ["일", "월", "화", "수", "목", "금", "토"];
    const today = new Date();
    const arrivalDate = new Date(today.setDate(today.getDate() + 2));

    const month = arrivalDate.getMonth() + 1; // 월
    const date = arrivalDate.getDate(); // 날짜
    const day = today.getDay(); // 요일
    return `${month}/${date}(${DAY[day]}) 도착 예정`;
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
                    추가로 할인되는 쿠폰이 없습니다.
                  </CouponContents>
                </ProductCoupon>
                <Divider />
                <ProductArrivalDate>
                  <InfoTitleBlock>
                    <FontAwesomeIcon icon={faTruck} size={20} />
                    <InfoTitle>무료배송</InfoTitle>
                  </InfoTitleBlock>
                  <DateInfo>{getTodayDate()}</DateInfo>
                </ProductArrivalDate>
              </ProductInfo>
            </ProductInfoBlock>
            <ProductInfoMain>
              <InfoMainMenuBlock>
                <InfoMainMenu>상품정보</InfoMainMenu>
                <InfoMainMenu>리뷰</InfoMainMenu>
                <InfoMainMenu>{"Q&A"}</InfoMainMenu>
                <InfoMainMenu>판매자정보</InfoMainMenu>
              </InfoMainMenuBlock>
              <InfoContents>
                <InfoRow>
                  <InfoRowCol>
                    <InfoRowTitle>상품상태</InfoRowTitle>
                    <InfoRowContents>새상품</InfoRowContents>
                  </InfoRowCol>
                  <InfoRowCol>
                    <InfoRowTitle>상품번호</InfoRowTitle>
                    <InfoRowContents>2546638124</InfoRowContents>
                  </InfoRowCol>
                </InfoRow>
                <InfoRow>
                  <InfoRowCol>
                    <InfoRowTitle>배송방법</InfoRowTitle>
                    <InfoRowContents>택배</InfoRowContents>
                  </InfoRowCol>
                  <InfoRowCol>
                    <InfoRowTitle>배송가능지역</InfoRowTitle>
                    <InfoRowContents>전국</InfoRowContents>
                  </InfoRowCol>
                </InfoRow>
                <InfoRow>
                  <InfoRowCol>
                    <InfoRowTitle>영수증발행</InfoRowTitle>
                    <InfoRowContents>온라인 현금영수증 발급</InfoRowContents>
                  </InfoRowCol>
                  <InfoRowCol>
                    <InfoRowTitle>원산지</InfoRowTitle>
                    <InfoRowContents>중국</InfoRowContents>
                  </InfoRowCol>
                </InfoRow>
                <InfoRow>
                  <InfoRowTitle>제조일자/유효기간</InfoRowTitle>
                  <InfoRowContents>판매자에게 문의</InfoRowContents>
                </InfoRow>
                <InfoRow>
                  <InfoRowTitle>A/S안내</InfoRowTitle>
                  <InfoRowContents>2546638124</InfoRowContents>
                </InfoRow>
                <InfoRow>
                  <InfoRowTitle>상품무게</InfoRowTitle>
                  <InfoRowContents>
                    <div> 1,000g(예상 기본무게)</div>
                    <div>
                      * 옵션 및 추가 구성상품은 제외된 무게이며, 실제 측정 시
                      달라질 수 있습니다. 또한 해외배송비는 실제무게기준으로
                      청구됩니다.
                    </div>
                  </InfoRowContents>
                </InfoRow>
                <InfoRow>
                  <InfoRowTitle>브랜드</InfoRowTitle>
                  <InfoRowContents>락브로스</InfoRowContents>
                </InfoRow>
              </InfoContents>
              <Review>리뷰</Review>
              <QNA></QNA>
              <SellerInfo>판매자정보</SellerInfo>
            </ProductInfoMain>
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
