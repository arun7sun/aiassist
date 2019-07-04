import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { add, remove } from 'eventlistener';
import parentScroll from './utils/parentScroll';
import inViewport from './utils/inViewport';

 class LazyLoad extends Component {
  static defaultProps = {
    elementType: 'div',
    debounce: true,
    offset: 0,
    offsetBottom: 0,
    offsetHorizontal: 0,
    offsetLeft: 0,
    offsetRight: 0,
    offsetTop: 0,
    offsetVertical: 0,
    throttle: 250,
    visible:false
  }
  componentDidMount=()=> {
    this._mounted = true;
    const eventNode = this.getEventNode();

    this.lazyLoadHandler();

    if (this.lazyLoadHandler.flush) {
      this.lazyLoadHandler.flush();
    }

    add(window, 'resize', this.lazyLoadHandler);
    add(eventNode, 'scroll', this.lazyLoadHandler);
  }

  componentWillReceiveProps=(nextProps)=> {
    if (!nextProps.visible) {
      this.lazyLoadHandler();
    }
  }

  shouldComponentUpdate=(_nextProps, nextState)=> {
    return _nextProps.visible;
  }

  componentWillUnmount=()=> {
    this._mounted = false;
    if (this.lazyLoadHandler.cancel) {
      this.lazyLoadHandler.cancel();
    }
    this.detachListeners();
  }

  getEventNode=()=> {
    return parentScroll(findDOMNode(this));
  }

  getOffset=()=> {
    const {
      offset, offsetVertical, offsetHorizontal,
      offsetTop, offsetBottom, offsetLeft, offsetRight, threshold,
    } = this.props;

    const _offsetAll = threshold || offset;
    const _offsetVertical = offsetVertical || _offsetAll;
    const _offsetHorizontal = offsetHorizontal || _offsetAll;

    return {
      top: offsetTop || _offsetVertical,
      bottom: offsetBottom || _offsetVertical,
      left: offsetLeft || _offsetHorizontal,
      right: offsetRight || _offsetHorizontal,
    };
  }

  lazyLoadHandler=()=> {
    if (!this._mounted) {
      return;
    }
    const offset = this.getOffset();
    const node = findDOMNode(this);
    const eventNode = this.getEventNode();

    if (inViewport(node, eventNode, offset)) {
      const { onContentVisible } = this.props;      
        if (onContentVisible) {
          onContentVisible(true);
        }
      // this.detachListeners();
    }
  }

  detachListeners = () => {
    const eventNode = this.getEventNode();

    remove(window, 'resize', this.lazyLoadHandler);
    remove(eventNode, 'scroll', this.lazyLoadHandler);
  }

  render = () =>  {
    const { children, className, height, width, visible } = this.props;


    const elStyles = { height, width };
    const elClasses = (
      'LazyLoad' +
      (visible ? ' is-visible' : '') +
      (className ? ` ${className}` : '')
    );

    return React.createElement(this.props.elementType, {
      className: elClasses,
      style: elStyles,
    }, visible && Children.only(children));
  }
}

export default LazyLoad;
