import React from 'react';

export default class Table extends React.Component {
  click(id) {
		console.error(id)
		this.props.history.push('detail')
	}
    render() {
        return (
            <div>
                <a>
                  <span onClick={() => this.click(1)}>31231231</span>
                </a>
            </div>
        )
    }
}
