import React from 'react';
import TabBar from './TabBar';

function ProductDetail() {
  const tabList = ['버튼', '리뷰', 'Q&A', '반품/교환정보'];
  return (
    <div>
      <TabBar tabList={tabList} />
    </div>
  );
}

export default ProductDetail;
