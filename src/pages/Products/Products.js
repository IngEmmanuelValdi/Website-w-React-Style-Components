import React from 'react';
import { InfoSection } from '../../components';
import { homeObjTwo } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Products;