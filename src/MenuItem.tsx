import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * additional className for menuItem
   */
  className?: string

  /**
   * menuItem title
   */
  children: string

  /**
   * the sub-nav appears when the mouse moves over the menuItem title
   */
  subNav?: React.ReactElement<any>
}

export class MenuItem extends PureComponent<Props, {}> {
  state = {
    active: false
  }

  render() {
    const { className, children, subNav } = this.props
    const menuClass = clx(
      {
        'or-menu-item-active': this.state.active
      },
      className,
      'or-menu-item'
    )

    return (
      <div
        className={menuClass}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="or-menu-item-name">{children}</div>
        {this.state.active &&
          subNav && <div className="or-sub-nav">{subNav}</div>}
      </div>
    )
  }

  handleMouseEnter = () => {
    this.setState({
      active: true
    })
  }

  handleMouseLeave = () => {
    this.setState({
      active: false
    })
  }
}
