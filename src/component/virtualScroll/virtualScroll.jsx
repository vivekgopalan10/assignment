import React, { useRef, useState, useEffect, useCallback } from "react";
import './virtualScroll.css'



const useScroll = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const refWrapper = useRef(null);

  const onScroll = useCallback((element)=>
    setScrollTop(element.target.scrollTop),
    [setScrollTop]
  )


  useEffect(() => {
    const scrollContainer = refWrapper.current;
    scrollContainer.addEventListener('scroll', onScroll);
    return () => scrollContainer.removeEventListener('scroll', onScroll);
  }, [])
  return [scrollTop, refWrapper];
}



const setInitialState = settings => {
  const {
    itemHeight,
    amount,
    tolerance,
    minIndex,
    maxIndex,
    startIndex
  } = settings;
  const viewportHeight = amount * itemHeight;
  const totalHeight = (maxIndex - minIndex + 1) * itemHeight;
  const toleranceHeight = tolerance * itemHeight;
  const bufferHeight = viewportHeight + 2 * toleranceHeight;
  const bufferedItems = amount + 2 * tolerance;
  const itemsAbove = startIndex - tolerance - minIndex;
  const topPaddingHeight = itemsAbove * itemHeight;
  const bottomPaddingHeight = totalHeight - topPaddingHeight;
  const initialPosition = topPaddingHeight + toleranceHeight;
  return {
    settings,
    viewportHeight,
    totalHeight,
    toleranceHeight,
    bufferHeight,
    bufferedItems,
    topPaddingHeight,
    bottomPaddingHeight,
    initialPosition,
    data: []
  };
};


const VirtualScroll = ({ getData, settings, row }) => {

  const virtualData = setInitialState(settings)
  const [scrollTop, refWrapper] = useScroll();
  const topSpacing = 65;
  const { totalHeight, toleranceHeight, bufferedItems, settings: { itemHeight, minIndex } } = virtualData;
  const index = minIndex + Math.floor((scrollTop - toleranceHeight) / itemHeight);
  const data = getData(index, bufferedItems);
  const topPaddingHeight = Math.max((index - minIndex) * itemHeight, 0);
  const bottomPaddingHeight = Math.max(totalHeight - topPaddingHeight - data.length * itemHeight, 0);

  let virtualContainerHeight = (window.innerHeight - topSpacing);


  return (
    <div ref={refWrapper} className="virtual-scroll-container" style={{ height: virtualContainerHeight, 'top': topSpacing }} >
      <div style={{ height: topPaddingHeight }} />
      {data.map(row)}
      <div style={{ height: bottomPaddingHeight }} />
    </div>
  );
}

export default VirtualScroll;
