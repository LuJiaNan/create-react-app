import React from 'react';
import {Transfer, Checkbox} from 'antd';
import './McTransfer.css';

//重写方法所需依赖
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import classNames from 'classnames';
import Item from 'antd/es/transfer/item';
import Animate from 'rc-animate';
import Search from 'antd/es/transfer/search';
import _extends from 'babel-runtime/helpers/extends';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import Operation from 'antd/es/transfer/operation';

//默认list样式
const defaultListStyle = {
  width: 300,
  height: 300
};

class NewTransferList extends Transfer.List {
  getCheckStatus = filteredDataSource => {
    var checkedKeys = this.props.checkedKeys;

    if (checkedKeys.length === 0) {
      return 'none';
    } else if (
      filteredDataSource.every(function(item) {
        return checkedKeys.indexOf(item.key) >= 0;
      })
    ) {
      return 'all';
    }
    return 'part';
  };
  render = () => {
    var _this4 = this;
    var _props = this.props,
      prefixCls = _props.prefixCls,
      dataSource = _props.dataSource,
      titleText = _props.titleText,
      checkedKeys = _props.checkedKeys,
      lazy = _props.lazy,
      disabled = _props.disabled,
      body = _props.body,
      footer = _props.footer,
      showSearch = _props.showSearch,
      style = _props.style,
      leftTitleStyle = _props.leftTitleStyle,
      rightTitleStyle = _props.rightTitleStyle,
      filter = _props.filter,
      searchPlaceholder = _props.searchPlaceholder,
      notFoundContent = _props.notFoundContent,
      itemUnit = _props.itemUnit,
      itemsUnit = _props.itemsUnit,
      onScroll = _props.onScroll;
    // Custom Layout

    var footerDom = footer && footer(this.props);
    var bodyDom = body && body(this.props);
    var listCls = classNames(
      prefixCls,
      _defineProperty({}, prefixCls + '-with-footer', !!footerDom)
    );
    var filteredDataSource = [];
    var totalDataSource = [];
    var showItems = dataSource.map(function(item) {
      var _renderItem = _this4.renderItem(item),
        renderedText = _renderItem.renderedText,
        renderedEl = _renderItem.renderedEl;

      if (filter && filter.trim() && !_this4.matchFilter(renderedText, item)) {
        return null;
      }
      // all show items
      totalDataSource.push(item);
      if (!item.disabled) {
        // response to checkAll items
        filteredDataSource.push(item);
      }
      var checked = checkedKeys.indexOf(item.key) >= 0;
      return React.createElement(Item, {
        disabled: disabled,
        key: item.key,
        item: item,
        lazy: lazy,
        renderedText: renderedText,
        renderedEl: renderedEl,
        checked: checked,
        prefixCls: prefixCls,
        onClick: _this4.handleSelect
      });
    });
    var unit = dataSource.length > 1 ? itemsUnit : itemUnit;
    var search = showSearch
      ? React.createElement(
          'div',
          {className: prefixCls + '-body-search-wrapper'},
          React.createElement(Search, {
            prefixCls: prefixCls + '-search',
            onChange: this.handleFilter,
            handleClear: this.handleClear,
            placeholder: searchPlaceholder,
            value: filter,
            disabled: disabled
          })
        )
      : null;
    var listBody =
      bodyDom ||
      React.createElement(
        'div',
        {
          className: classNames(
            showSearch
              ? prefixCls + '-body ' + prefixCls + '-body-with-search'
              : prefixCls + '-body'
          )
        },
        search,
        React.createElement(
          Animate,
          {
            component: 'ul',
            componentProps: {onScroll: onScroll},
            className: prefixCls + '-content',
            transitionName: this.state.mounted
              ? prefixCls + '-content-item-highlight'
              : '',
            transitionLeave: false
          },
          showItems
        ),
        React.createElement(
          'div',
          {className: prefixCls + '-body-not-found', ref: this.saveNotFoundRef},
          notFoundContent
        )
      );
    var listFooter = footerDom
      ? React.createElement(
          'div',
          {className: prefixCls + '-footer'},
          footerDom
        )
      : null;
    var checkStatus = this.getCheckStatus(filteredDataSource);
    var checkedAll = checkStatus === 'all';
    var checkAllCheckbox = React.createElement(Checkbox, {
      ref: 'checkbox',
      disabled: disabled,
      checked: checkedAll,
      indeterminate: checkStatus === 'part',
      onChange: function onChange() {
        return _this4.props.handleSelectAll(filteredDataSource, checkedAll);
      }
    });

    // header 重写
    var headerBody = this.props.header.map((value, i) => {
      return <div key={`${value.text}${i}`}>{value.text}</div>;
    });

    var titleStyle = this.props.type === 'left' ? leftTitleStyle : rightTitleStyle
    return React.createElement(
      'div',
      {className: listCls, style: style},
      React.createElement(
        'div',
        {className: prefixCls + '-header-title', style: titleStyle},
        titleText
      ),
      React.createElement(
        'div',
        {className: prefixCls + '-header'},
        checkAllCheckbox,
        React.createElement(
          'div',
          {className: prefixCls + '-header-selected'},
          // React.createElement(
          //     'span',
          //     null,
          //     (checkedKeys.length > 0 ? checkedKeys.length + '/' : '') + totalDataSource.length,
          //     ' ',
          //     unit
          // ),

          React.createElement('div', {className: 'header-item'}, headerBody)
        )
      ),
      listBody,
      listFooter
    );
  };
}

class NewTransfer extends Transfer {
  constructor(props) {
    super(props);
    this._this = _possibleConstructorReturn(
      this,
      (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, props)
    );
  }
  renderTransfer = transferLocale => {
    var _this = this._this;
    var _this$props3 = _this.props,
      _this$props3$prefixCl = _this$props3.prefixCls,
      prefixCls =
        _this$props3$prefixCl === undefined
          ? 'ant-transfer'
          : _this$props3$prefixCl,
      className = _this$props3.className,
      disabled = _this$props3.disabled,
      _this$props3$operatio = _this$props3.operations,
      operations =
        _this$props3$operatio === undefined ? [] : _this$props3$operatio,
      showSearch = _this$props3.showSearch,
      body = _this$props3.body,
      footer = _this$props3.footer,
      style = _this$props3.style,
      listStyle = _this$props3.listStyle,
      leftStyle = _this$props3.leftStyle,
      rightStyle = _this$props3.rightStyle,
      titleStyle = _this$props3.titleStyle,
      leftTitleStyle = _this$props3.leftTitleStyle,
      rightTitleStyle = _this$props3.rightTitleStyle,
      operationStyle = _this$props3.operationStyle,
      filterOption = _this$props3.filterOption,
      render = _this$props3.render,
      lazy = _this$props3.lazy,
      header = _this$props3.header;

    var _this$state3 = _this.state,
      leftFilter = _this$state3.leftFilter,
      rightFilter = _this$state3.rightFilter,
      sourceSelectedKeys = _this$state3.sourceSelectedKeys,
      targetSelectedKeys = _this$state3.targetSelectedKeys;

    var _this$separateDataSou = _this.separateDataSource(_this.props),
      leftDataSource = _this$separateDataSou.leftDataSource,
      rightDataSource = _this$separateDataSou.rightDataSource;

    var leftActive = targetSelectedKeys.length > 0;
    var rightActive = sourceSelectedKeys.length > 0;
    var cls = classNames(
      className,
      prefixCls,
      disabled && prefixCls + '-disabled'
    );
    var locale = _this.getLocale(transferLocale);
    var titles = _this.getTitles(locale);
    return React.createElement(
      'div',
      {className: cls, style: style},
      React.createElement(
        NewTransferList,
        _extends(
          {
            prefixCls: prefixCls + '-list',
            titleText: titles[0],
            dataSource: leftDataSource,
            filter: leftFilter,
            filterOption: filterOption,
            style: leftStyle || listStyle,
            leftTitleStyle: Object.assign({}, leftTitleStyle ,titleStyle),
            rightTitleStyle: Object.assign({}, rightTitleStyle ,titleStyle),
            checkedKeys: sourceSelectedKeys,
            handleFilter: _this.handleLeftFilter,
            handleClear: _this.handleLeftClear,
            handleSelect: _this.handleLeftSelect,
            handleSelectAll: _this.handleLeftSelectAll,
            render: render,
            showSearch: showSearch,
            body: body,
            footer: footer,
            lazy: lazy,
            onScroll: _this.handleLeftScroll,
            disabled: disabled,
            header: header,
            type: 'left'
          },
          locale
        )
      ),
      React.createElement(Operation, {
        className: prefixCls + '-operation',
        rightActive: rightActive,
        rightArrowText: operations[0],
        moveToRight: _this.moveToRight,
        leftActive: leftActive,
        leftArrowText: operations[1],
        moveToLeft: _this.moveToLeft,
        style: operationStyle,
        disabled: disabled
      }),
      React.createElement(
        NewTransferList,
        _extends(
          {
            prefixCls: prefixCls + '-list',
            titleText: titles[1],
            dataSource: rightDataSource,
            filter: rightFilter,
            filterOption: filterOption,
            style: rightStyle || listStyle,
            leftTitleStyle: Object.assign({}, leftTitleStyle ,titleStyle),
            rightTitleStyle: Object.assign({}, rightTitleStyle ,titleStyle),
            checkedKeys: targetSelectedKeys,
            handleFilter: _this.handleRightFilter,
            handleClear: _this.handleRightClear,
            handleSelect: _this.handleRightSelect,
            handleSelectAll: _this.handleRightSelectAll,
            render: render,
            showSearch: showSearch,
            body: body,
            footer: footer,
            lazy: lazy,
            onScroll: _this.handleRightScroll,
            disabled: disabled,
            header: header,
            type: 'right'
          },
          locale
        )
      )
    );
  };
}

class App extends React.Component {
  renderItem = item => {
    let node = this.props.header.map((value, i) => {
      // return <div style={{maxWidth: value.width + 'px'}} key={`${value.text}${i}`} title={typeof(item[value.text]) === 'string' ? item[value.text] : ''}>{item[value.text]}</div>
      return (
        <div
          key={`${value.text}${i}`}
          title={typeof item[value.text] === 'string' ? item[value.text] : ''}>
          {item[value.text]}
        </div>
      );
    });
    let width =
      (this.props.listStyle && this.props.listStyle.width) ||
      defaultListStyle.width;
    const customLabel = (
      <div className='custom-item' style={{width: width - 60 + 'px'}}>
        {node}
      </div>
    );

    return {
      label: customLabel, // for displayed item
      value: item[this.props.searchItem] // for filter matching
    };
  };

  footer = () => {
    let headerBody = this.props.header.map((value, i) => {
      return <div key={`${value.text}${i}`}>{value.text}</div>;
    });
    return headerBody;
  };
  render() {
    const {
      dataSource,
      listStyle,
      leftStyle,
      rightStyle,
      targetKeys,
      onChange,
      header,
      showSearch,
      onSearch,
      titles,
      footer,
      ...others
    } = this.props;
    return (
      <NewTransfer
        className='mc-transfer'
        dataSource={dataSource}
        listStyle={listStyle || defaultListStyle}
        leftStyle={leftStyle || listStyle || defaultListStyle}
        rightStyle={rightStyle || listStyle || defaultListStyle}
        targetKeys={targetKeys}
        onChange={onChange}
        render={this.renderItem}
        // footer={this.footer}
        header={header}
        showSearch={showSearch}
        onSearch={onSearch}
        titles={titles}
        footer={footer}
        {...others}
      />
    );
  }
}

export default App;
